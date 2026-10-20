(() => {
  'use strict';

  const $ = id => document.getElementById(id);
  const form = $('certificate-form');
  const fields = {
    type: $('certificate-type'), recipient: $('recipient'), programme: $('programme'),
    achievement: $('achievement'), date: $('issue-date'), location: $('location'), id: $('certificate-id')
  };
  const types = {
    attendance: ['of Attendance', 'In recognition of participation in'],
    completion: ['of Completion', 'In recognition of completing'],
    recognition: ['of Recognition', 'In recognition of an outstanding contribution to']
  };
  const todayInMalaysia = () => new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const makeId = () => {
    const alphabet = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    const values = crypto.getRandomValues(new Uint8Array(10));
    return `LP-${todayInMalaysia().slice(0, 4)}-${Array.from(values, value => alphabet[value % alphabet.length]).join('')}`;
  };
  const tidy = value => value.trim().replace(/\s+/g, ' ');
  const localDate = value => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return '—';
    const [year, month, day] = value.split('-').map(Number);
    const date = new Date(year, month - 1, day, 12);
    return new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'long', year: 'numeric'}).format(date);
  };
  function render() {
    const type = types[fields.type.value] || types.attendance;
    const recipient = tidy(fields.recipient.value);
    const programme = tidy(fields.programme.value);
    const achievement = tidy(fields.achievement.value);
    $('preview-type').innerHTML = `Certificate<br><i>${type[0]}</i>`;
    $('preview-intro').textContent = type[1];
    $('preview-recipient').textContent = recipient || 'Recipient name';
    $('preview-recipient').classList.toggle('placeholder', !recipient);
    $('preview-recipient').classList.toggle('long', recipient.length > 25 && recipient.length <= 43);
    $('preview-recipient').classList.toggle('very-long', recipient.length > 43);
    $('preview-programme').textContent = programme || 'Programme or event';
    $('preview-programme').classList.toggle('placeholder', !programme);
    $('preview-programme').classList.toggle('long', programme.length > 44);
    $('preview-achievement').textContent = achievement || 'A step forward in building the future, together.';
    $('preview-date').textContent = localDate(fields.date.value);
    $('preview-location').textContent = tidy(fields.location.value) || 'Leadapreneur';
    $('preview-id').textContent = `ID: ${tidy(fields.id.value) || '—'}`;
  }
  Object.values(fields).forEach(field => field.addEventListener('input', render));
  fields.type.addEventListener('change', render);
  $('regenerate-id').addEventListener('click', () => {fields.id.value = makeId(); render();});
  $('reset-certificate').addEventListener('click', () => {
    form.reset();
    fields.date.value = todayInMalaysia();
    fields.id.value = makeId();
    $('form-error').hidden = true;
    render();
    fields.recipient.focus();
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    for (const field of Object.values(fields)) field.value = tidy(field.value);
    render();
    if (!form.reportValidity()) {
      $('form-error').textContent = 'Add a recipient, programme, issue date and valid certificate ID before issuing.';
      $('form-error').hidden = false;
      return;
    }
    $('form-error').hidden = true;
    document.title = `${fields.id.value} - ${fields.recipient.value} | Leadapreneur`;
    window.print();
  });

  fields.date.value = todayInMalaysia();
  fields.id.value = makeId();
  render();
})();
