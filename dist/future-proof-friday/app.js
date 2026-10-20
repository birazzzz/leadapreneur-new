(() => {
  'use strict';
  const byId = (id) => document.getElementById(id);
  const now = new Date();
  byId('year').textContent = new Intl.DateTimeFormat('en', {year:'numeric',timeZone:'Asia/Kuala_Lumpur'}).format(now);
  const next = new Date(now);
  next.setUTCHours(3, 0, 0, 0);
  next.setUTCDate(next.getUTCDate() + (5 - next.getUTCDay() + 7) % 7);
  if (next <= now) next.setUTCDate(next.getUTCDate() + 7);
  byId('next-date').textContent = new Intl.DateTimeFormat('en-GB', {
    weekday:'short', day:'numeric', month:'long', timeZone:'Asia/Kuala_Lumpur'
  }).format(next);

  const form = byId('registration-form');
  const button = byId('submit-registration');
  let submitting = false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting || !form.reportValidity()) return;
    byId('full-name').value = byId('full-name').value.trim();
    byId('email').value = byId('email').value.trim();
    if (!form.reportValidity()) return;
    submitting = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    byId('submit-label').textContent = 'Saving your registration…';
    byId('form-error').hidden = true;
    try {
      const response = await fetch('/api/register-webinar', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name:byId('full-name').value,email:byId('email').value,
          consent:byId('consent').checked,website:byId('company-url').value}),
        signal:AbortSignal.timeout(20000)
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error(result.error || 'We couldn’t save your registration. Please try again.');
      const calendarUrl = new URL(result.calendarUrl);
      if (calendarUrl.protocol !== 'https:' || calendarUrl.hostname !== 'calendar.google.com' ||
          calendarUrl.pathname !== '/calendar/event') throw new Error('The calendar link is unavailable. Please try again.');
      byId('add-to-calendar').href = calendarUrl.href;
      form.reset();
      form.hidden = true;
      byId('registration-success').hidden = false;
      byId('registration-success').focus();
    } catch (error) {
      byId('form-error').textContent = error.name === 'TimeoutError' || error.name === 'AbortError'
        ? 'The request timed out. Please try again.'
        : error instanceof TypeError ? 'Please check your connection and try again.' : error.message;
      byId('form-error').hidden = false;
    } finally {
      submitting = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
      byId('submit-label').textContent = 'Register now';
    }
  });
})();
