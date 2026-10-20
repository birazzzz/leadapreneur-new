import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { createRegistrationHandler } from '../api/register-webinar.js';
import { csvCell, registrationCsv, exportWebinarRegistrations } from '../lib/webinar-registrations.mjs';

function request(body = {name:'Example Person',email:'EXAMPLE@example.com',consent:true}, overrides = {}) {
  return {method:'POST',headers:{origin:'https://www.leadapreneur.com',host:'www.leadapreneur.com','content-type':'application/json'},body,...overrides};
}
function response() {
  return {code:200,headers:{},setHeader(key,value){this.headers[key]=value;},status(code){this.code=code;return this;},json(body){this.body=body;return this;}};
}

test('webinar joining details are returned only after the registration is saved', async () => {
  const records = [];
  const handler = createRegistrationHandler({save:async record => {records.push(record);return 'test-registration';}});
  const res = response();
  await handler(request(),res);
  assert.equal(res.code,201);
  assert.equal(records.length,1);
  assert.equal(records[0].email,'example@example.com');
  assert.equal(records[0].name,'Example Person');
  assert.equal(res.body.joinUrl,'https://meet.google.com/zek-romn-csi');
  assert.match(res.body.qrImage,/registration-qr\.svg$/);
  assert.equal(res.headers['Cache-Control'],'no-store');
});

test('storage failure never unlocks the QR or joining link', async () => {
  const handler = createRegistrationHandler({save:async () => {throw new Error('storage unavailable');}});
  const res = response();
  await handler(request(),res);
  assert.equal(res.code,503);
  assert.equal(res.body.ok,undefined);
  assert.equal(res.body.qrImage,undefined);
  assert.equal(res.body.joinUrl,undefined);
});

test('missing/invalid details, missing consent, bot fields and large bodies do not save', async () => {
  let saves = 0;
  const handler = createRegistrationHandler({save:async () => {saves++;}});
  for (const body of [null,[],{name:'',email:'a@b.com',consent:true},{name:'A',email:'bad',consent:true},
    {name:'A',email:'a@b.com',consent:false},{name:'A',email:'a@b.com',consent:true,website:'spam'},
    {name:'A'.repeat(101),email:'a@b.com',consent:true}]) {
    const res = response(); await handler(request(body),res); assert.equal(res.code,400);
  }
  assert.equal(saves,0);
});

test('cross-origin and non-POST requests cannot save registrations', async () => {
  let saves=0;
  const handler=createRegistrationHandler({save:async()=>{saves++;}});
  const get=response(); await handler(request(undefined,{method:'GET'}),get); assert.equal(get.code,405);
  const cross=response(); await handler(request(undefined,{headers:{origin:'https://other.example',host:'www.leadapreneur.com'}}),cross); assert.equal(cross.code,403);
  assert.equal(saves,0);
});

test('CSV quotes names and neutralizes spreadsheet formulas', () => {
  assert.equal(csvCell('A, "B"'),'"A, ""B"""');
  assert.equal(csvCell('=1+1'),'"\'=1+1"');
  assert.equal(csvCell('  @SUM(A1)'),'"\'  @SUM(A1)"');
  const csv=registrationCsv({registeredAt:'2026-10-20T00:00:00Z',name:'A, B',email:'a@b.com'});
  assert.match(csv,/"A, B","a@b.com"/);
});

test('CSV export includes every storage page and fails rather than omitting unreadable records', async () => {
  const cursors=[];
  const csv=await exportWebinarRegistrations({listBlobs:async ({cursor})=>{cursors.push(cursor);return {blobs:[{pathname:cursor?'b.csv':'a.csv'}],hasMore:!cursor,cursor:'page2'};},getBlob:async path=>({statusCode:200,stream:new Response(path+'\r\n').body})});
  assert.deepEqual(cursors,[undefined,'page2']);
  assert.match(csv,/a\.csv\r\nb\.csv/);
  await assert.rejects(exportWebinarRegistrations({listBlobs:async()=>({blobs:[{pathname:'a.csv'}],hasMore:false}),getBlob:async()=>null}),/could not be read/);
});

const client=readFileSync(new URL('../public/future-proof-friday/app.js',import.meta.url),'utf8');
function clientState(fetchResult, valid = true) {
  const nodes = new Map();
  const get=id=>{
    if(!nodes.has(id)) nodes.set(id,{hidden:['registration-success','form-error','qr-error'].includes(id),value:id==='full-name'?'Example Person':id==='email'?'example@example.com':'',checked:true,listeners:{},addEventListener(type,fn){this.listeners[type]=fn;},reportValidity(){return valid;},setAttribute(){},removeAttribute(){},reset(){},focus(){this.focused=true;}});
    return nodes.get(id);
  };
  let fetches=0;
  runInNewContext(client,{document:{getElementById:get},Date,Intl,URL,AbortSignal,TypeError,location:{origin:'https://www.leadapreneur.com'},fetch:async()=>{fetches++;return fetchResult;}});
  return {get,submit:()=>get('registration-form').listeners.submit({preventDefault(){}}),fetches:()=>fetches};
}

test('browser keeps joining details hidden on initial load, invalid inputs and failed submission', async () => {
  const state=clientState({ok:false,json:async()=>({error:'Could not save'})});
  assert.equal(state.get('registration-success').hidden,true);
  assert.equal(state.get('qr-code').src,undefined);
  await state.submit();
  assert.equal(state.get('registration-success').hidden,true);
  assert.equal(state.get('qr-code').src,undefined);
  assert.equal(state.get('form-error').hidden,false);
  assert.equal(state.get('submit-registration').disabled,false);
  const invalid=clientState(null,false); await invalid.submit(); assert.equal(invalid.fetches(),0);
});

test('browser reveals supplied QR only after successful server response', async () => {
  const state=clientState({ok:true,json:async()=>({ok:true,qrImage:'/future-proof-friday/assets/registration-qr.svg',joinUrl:'https://meet.google.com/zek-romn-csi'})});
  await state.submit();
  assert.equal(state.get('registration-form').hidden,true);
  assert.equal(state.get('registration-success').hidden,false);
  assert.match(state.get('qr-code').src,/registration-qr\.svg$/);
  assert.equal(state.get('registration-success').focused,true);
});
