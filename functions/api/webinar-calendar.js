import { buildWebinarIcs } from '../../lib/webinar-calendar.mjs';

export function onRequestGet() {
  return new Response(buildWebinarIcs(),{headers:{
    'Content-Type':'text/calendar; charset=utf-8',
    'Content-Disposition':'attachment; filename="future-proof-fridays.ics"',
    'Cache-Control':'no-store',
    'X-Content-Type-Options':'nosniff'
  }});
}

export function onRequest() {
  return new Response('Method not allowed',{status:405,headers:{Allow:'GET'}});
}
