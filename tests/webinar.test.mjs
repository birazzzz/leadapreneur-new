import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { createWebinarHandler, CALENDAR_URL } from '../functions/api/register-webinar.js';
import { csvCell, registrationCsv, registrationsToCsv, saveWebinarRegistration } from '../lib/webinar-registrations.mjs';

function request(body={name:'Example Person',email:'EXAMPLE@example.com',consent:true},origin='https://www.leadapreneur.com') {
  return new Request('https://www.leadapreneur.com/api/register-webinar',{
    method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(body)
  });
}

test('Cloudflare returns the exact supplied calendar event only after saving registration',async()=>{
  const records=[];
  const handler=createWebinarHandler({save:async(env,record)=>records.push(record)});
  const result=await handler({request:request(),env:{}});
  assert.equal(result.status,201);
  assert.equal(records.length,1);
  assert.equal(records[0].email,'example@example.com');
  const body=await result.json();
  assert.equal(body.calendarUrl,CALENDAR_URL);
  assert.equal(new URL(body.calendarUrl).searchParams.get('tmsrc'),'biraj@leadapreneur.com');
  assert.equal(body.qrImage,undefined);
  assert.equal(result.headers.get('cache-control'),'no-store');
});

test('invalid details, consent or cross-origin requests never save or reveal calendar details',async()=>{
  let saves=0;
  const handler=createWebinarHandler({save:async()=>{saves++;}});
  for(const body of [null,[],{name:'',email:'a@b.com',consent:true},{name:'A',email:'bad',consent:true},
    {name:'A',email:'a@b.com',consent:false},{name:'A',email:'a@b.com',consent:true,website:'spam'}]) {
    const result=await handler({request:request(body),env:{}});
    assert.equal(result.status,400);
    assert.equal((await result.json()).calendarUrl,undefined);
  }
  assert.equal((await handler({request:request(undefined,'https://other.example'),env:{}})).status,403);
  assert.equal(saves,0);
});

test('storage failure does not report success or return a calendar link',async()=>{
  const handler=createWebinarHandler({save:async()=>{throw new Error('storage unavailable');}});
  const result=await handler({request:request(),env:{}});
  assert.equal(result.status,503);
  const body=await result.json();
  assert.equal(body.ok,undefined);
  assert.equal(body.calendarUrl,undefined);
});

test('D1 uses bound values and refuses missing or failed storage',async()=>{
  const captured={};
  const db={prepare(sql){captured.sql=sql;return {bind(...values){captured.values=values;return {run:async()=>({success:true})};}};}};
  await saveWebinarRegistration({WEBINAR_DB:db},{name:"O'Neil",email:'a@b.com',registeredAt:'2026-10-20T00:00:00Z'});
  assert.match(captured.sql,/VALUES \(\?, \?, \?, \?, \?, \?\)/);
  assert.equal(captured.values[2],"O'Neil");
  await assert.rejects(saveWebinarRegistration({},{}),/not configured/);
});

test('CSV export preserves commas and quotes and neutralizes spreadsheet formulas',()=>{
  assert.equal(csvCell('A, "B"'),'"A, ""B"""');
  assert.equal(csvCell('=1+1'),'"\'=1+1"');
  const row={registered_at:'2026-10-20T00:00:00Z',name:'A, B',email:'a@b.com'};
  assert.match(registrationCsv(row),/"A, B","a@b.com"/);
  assert.match(registrationsToCsv([row]),/^\uFEFFregistered_at,name,email,consent_version,source\r\n/);
});

const client=readFileSync(new URL('../public/future-proof-friday/app.js',import.meta.url),'utf8');
function clientState(fetchResult,valid=true) {
  const nodes=new Map();
  const get=id=>{
    if(!nodes.has(id))nodes.set(id,{hidden:['registration-success','form-error'].includes(id),value:id==='full-name'?'Example Person':id==='email'?'example@example.com':'',checked:true,listeners:{},addEventListener(type,fn){this.listeners[type]=fn;},reportValidity(){return valid;},setAttribute(){},removeAttribute(){},reset(){},focus(){this.focused=true;}});
    return nodes.get(id);
  };
  let fetches=0;
  runInNewContext(client,{document:{getElementById:get},Date,Intl,URL,AbortSignal,TypeError,location:{origin:'https://www.leadapreneur.com'},fetch:async()=>{fetches++;return fetchResult;}});
  return {get,submit:()=>get('registration-form').listeners.submit({preventDefault(){}}),fetches:()=>fetches};
}

test('browser keeps calendar hidden until a successful registration and permits retry on failure',async()=>{
  const state=clientState({ok:false,json:async()=>({error:'Could not save'})});
  assert.equal(state.get('registration-success').hidden,true);
  await state.submit();
  assert.equal(state.get('registration-success').hidden,true);
  assert.equal(state.get('add-to-calendar').href,undefined);
  assert.equal(state.get('form-error').hidden,false);
  assert.equal(state.get('submit-registration').disabled,false);
  const invalid=clientState(null,false);await invalid.submit();assert.equal(invalid.fetches(),0);
});

test('successful registration exposes the exact Google Calendar event link',async()=>{
  const state=clientState({ok:true,json:async()=>({ok:true,calendarUrl:CALENDAR_URL})});
  await state.submit();
  assert.equal(state.get('registration-form').hidden,true);
  assert.equal(state.get('registration-success').hidden,false);
  assert.equal(state.get('add-to-calendar').href,CALENDAR_URL);
  assert.equal(state.get('registration-success').focused,true);
});

test('webinar HTML has Register now and contains no QR or Meet joining content',()=>{
  const html=readFileSync(new URL('../src/pages/future-proof-friday.html',import.meta.url),'utf8');
  assert.match(html,/id="submit-label">Register now/);
  assert.doesNotMatch(html,/qr-code|Google Meet|registration-qr|QR code/);
});

test('published webinar assets are content-versioned and require cache revalidation',()=>{
  const html=readFileSync(new URL('../dist/future-proof-friday/index.html',import.meta.url),'utf8');
  assert.match(html,/src="\/future-proof-friday\/app\.js\?v=[a-f0-9]{10}"/);
  assert.match(html,/href="\/future-proof-friday\/styles\.css\?v=[a-f0-9]{10}"/);
  const headers=readFileSync(new URL('../dist/_headers',import.meta.url),'utf8');
  for(const path of ['/future-proof-friday/','/future-proof-friday/app.js','/future-proof-friday/styles.css']) {
    assert.ok(headers.replaceAll('\r\n','\n').includes(path+'\n  Cache-Control: no-cache, no-store, must-revalidate'));
  }
});
