import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { createWebinarHandler } from '../functions/api/register-webinar.js';
import { buildWebinarCalendarUrl, buildWebinarIcs } from '../lib/webinar-calendar.mjs';
import { onRequestGet as downloadWebinarCalendar } from '../functions/api/webinar-calendar.js';
import { csvCell, registrationCsv, registrationsToCsv, saveWebinarRegistration } from '../lib/webinar-registrations.mjs';

function request(body={name:'Example Person',email:'EXAMPLE@example.com',consent:true},origin='https://www.leadapreneur.com') {
  return new Request('https://www.leadapreneur.com/api/register-webinar',{
    method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(body)
  });
}

const TEST_NOW = new Date('2026-10-20T00:00:00Z');
const CALENDAR_URL = buildWebinarCalendarUrl(TEST_NOW);

test('Cloudflare returns the recurring calendar entry only after saving registration',async()=>{
  const records=[];
  const handler=createWebinarHandler({save:async(env,record)=>records.push(record),now:()=>TEST_NOW});
  const result=await handler({request:request(),env:{}});
  assert.equal(result.status,201);
  assert.equal(records.length,1);
  assert.equal(records[0].email,'example@example.com');
  const body=await result.json();
  assert.equal(body.calendarUrl,CALENDAR_URL);
  const event=new URL(body.calendarUrl);
  assert.equal(event.pathname,'/calendar/render');
  assert.equal(event.searchParams.get('text'),'Future-Proof Friday Weekly Briefing');
  assert.equal(event.searchParams.get('dates'),'20261023T030000Z/20261023T040000Z');
  assert.equal(event.searchParams.get('ctz'),'Asia/Kuala_Lumpur');
  assert.equal(event.searchParams.get('recur'),'RRULE:FREQ=WEEKLY;BYDAY=FR');
  assert.equal(event.searchParams.get('location'),'https://meet.google.com/zek-romn-csi');
  assert.equal(event.searchParams.has('tmeid'),false);
  assert.equal(body.icsUrl,'/api/webinar-calendar');
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
  const state=clientState({ok:true,json:async()=>({ok:true,calendarUrl:CALENDAR_URL,icsUrl:'/api/webinar-calendar'})});
  await state.submit();
  assert.equal(state.get('registration-form').hidden,true);
  assert.equal(state.get('registration-success').hidden,false);
  assert.equal(state.get('add-to-calendar').href,CALENDAR_URL);
  assert.equal(state.get('download-calendar').href,'https://www.leadapreneur.com/api/webinar-calendar');
  assert.equal(state.get('registration-success').focused,true);
});

test('webinar HTML has Register now, explains weekly recurrence and contains no QR',()=>{
  const html=readFileSync(new URL('../src/pages/future-proof-friday.html',import.meta.url),'utf8');
  assert.match(html,/id="submit-label">Register now/);
  assert.doesNotMatch(html,/qr-code|registration-qr|QR code/);
  assert.match(html,/Save once to add the weekly Friday series/);
  assert.match(html,/Apple \/ Outlook \/ Other/);
  assert.match(html,/Using Notion Calendar/);
  assert.doesNotMatch(html,/Nepal/);
});

test('calendar series starts at the next Friday session with a one-hour duration',()=>{
  const dates=now=>new URL(buildWebinarCalendarUrl(new Date(now))).searchParams.get('dates');
  assert.equal(dates('2026-10-23T02:59:59Z'),'20261023T030000Z/20261023T040000Z');
  assert.equal(dates('2026-10-23T03:00:01Z'),'20261030T030000Z/20261030T040000Z');
  assert.equal(dates('2026-12-31T23:30:00Z'),'20270101T030000Z/20270101T040000Z');
});

test('ICS download is a weekly, one-hour Friday series with Malaysia details and the confirmed Meet URL',async()=>{
  const ics=buildWebinarIcs(TEST_NOW);
  const unfolded=ics.replace(/\r\n /g,'');
  assert.match(unfolded,/DTSTART:20261023T030000Z\r\nDTEND:20261023T040000Z/);
  assert.match(unfolded,/RRULE:FREQ=WEEKLY;BYDAY=FR/);
  assert.match(unfolded,/SUMMARY:Future-Proof Friday Weekly Briefing/);
  assert.match(unfolded,/Malaysia Time \(MYT/);
  assert.match(unfolded,/Great Acceleration into the Singularity/);
  assert.match(unfolded,/URL:https:\/\/meet.google.com\/zek-romn-csi/);
  assert.doesNotMatch(unfolded,/ATTENDEE:|ORGANIZER:|Nepal|tmeid/);
  for(const line of ics.split('\r\n')) assert.ok(Buffer.byteLength(line,'utf8')<=75);
  const result=downloadWebinarCalendar();
  assert.match(result.headers.get('content-type'),/^text\/calendar/);
  assert.match(result.headers.get('content-disposition'),/attachment; filename="future-proof-fridays.ics"/);
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

test('registration sends a calendar invitation with RSVP after saving, and still succeeds if email fails',async()=>{
  const { sendWebinarInvite } = await import('../lib/webinar-invite.mjs');
  const sent=[];
  const fetchImpl=async(url,options)=>{sent.push(JSON.parse(options.body));return new Response('{"id":"x"}',{status:200});};
  const waited=[];
  const handler=createWebinarHandler({save:async()=>{},now:()=>TEST_NOW,
    invite:(env,record,options)=>sendWebinarInvite(env,record,{...options,fetchImpl})});
  const result=await handler({request:request(),env:{RESEND_API_KEY:'k'},waitUntil:(promise)=>waited.push(promise)});
  assert.equal(result.status,201);
  assert.equal(await waited[0],true);
  assert.equal(sent.length,1);
  const email=sent[0];
  assert.deepEqual(email.to,['example@example.com']);
  assert.equal(email.from,'Leadapreneur <hello@leadapreneur.com>');
  assert.equal(email.attachments[0].content_type,'text/calendar; method=REQUEST; charset=UTF-8');
  const ics=Buffer.from(email.attachments[0].content,'base64').toString('utf8').replace(/\r\n /g,'');
  assert.match(ics,/METHOD:REQUEST/);
  assert.match(ics,/DTSTART:20261023T030000Z/);
  assert.match(ics,/RRULE:FREQ=WEEKLY;BYDAY=FR/);
  assert.match(ics,/ORGANIZER;CN="Leadapreneur":mailto:hello@leadapreneur.com/);
  assert.match(ics,/ATTENDEE;CN="Example Person";ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:example@example.com/);
  assert.match(ics,/LOCATION:https:\/\/meet.google.com\/zek-romn-csi/);

  const failing=createWebinarHandler({save:async()=>{},now:()=>TEST_NOW,invite:async()=>{throw new Error('down');}});
  assert.equal((await failing({request:request(),env:{}})).status,201);
});

test('the same email always gets the same invitation UID, so re-registering updates one event',async()=>{
  const { buildWebinarInviteIcs } = await import('../lib/webinar-invite.mjs');
  const organizer={name:'Leadapreneur',address:'events@leadapreneur.com'};
  const uid=(email)=>buildWebinarInviteIcs({name:'A',email,organizer,now:TEST_NOW}).match(/UID:(\S+)/)[1];
  assert.equal(uid('a@example.com'),uid('a@example.com'));
  assert.notEqual(uid('a@example.com'),uid('b@example.com'));
});

test('invitation email offers "Add event to calendar" (the Google Calendar link) before the Meet button',async()=>{
  const { buildWebinarInviteEmail } = await import('../lib/webinar-invite.mjs');
  const { html, text } = buildWebinarInviteEmail({name:'Example Person',email:'example@example.com',now:TEST_NOW});
  const calendarHref = CALENDAR_URL.replaceAll('&','&amp;');
  const addAt = html.indexOf(`href="${calendarHref}"`);
  assert.ok(addAt > -1, 'calendar link present');
  assert.ok(addAt < html.indexOf('Join with Google Meet'), 'calendar button comes first');
  assert.match(html, /Add event to calendar<\/a>/);
  assert.ok(text.includes(`Add event to calendar: ${CALENDAR_URL}`));
});
