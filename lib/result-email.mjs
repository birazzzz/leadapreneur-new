// Future-Proofing Assessment result email, one version per role.
// Shared by the Cloudflare Pages Function (functions/api/send-result.js), the
// Vercel handler (api/send-result.js) and scripts/test-result-email.mjs.
//
// The copy is assembled from the assessment's own interpretation (see
// LP-future-proofing-assessment/src/lib/resultNarrative.ts): each role is one
// orientation (Explore / Build / Lead) at one tier (own it / guide it / scale
// it). Only the role name comes from the browser; every sentence is written
// here, so the endpoint cannot be used to send arbitrary text.

const SITE_URL = 'https://www.leadapreneur.com';

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

const ORIENTATIONS = {
  explore: {
    label: 'Explore',
    accent: '#2446c7',
    tint: '#eef2fc',
    reminder: 'BE BRAVE',
    reminderWhy: 'asking the better question takes nerve when everyone else wants an answer.',
    pattern:
      'You create momentum through sense-making: noticing assumptions, asking what is missing, and improving the frame before committing heavily. This is not the same as needing perfect certainty. At its best it is disciplined curiosity, reducing the uncertainty that matters most so the next move is more deliberate.',
    uncertainty:
      'Uncertainty becomes manageable for you once it has shape: what is known, what is missing, and what matters enough to decide. A single surprise may be noise; recurrence is what turns it into a pattern worth acting on.',
    movement:
      'You create movement by reducing the uncertainty most likely to send effort in the wrong direction. The useful stretch is to let a small action answer the question once the decision is clear enough.',
    helps: [
      'You see assumptions and unanswered questions that others move past.',
      'You reframe a situation before effort gets locked into the wrong direction.',
    ],
    getsInTheWay: [
      'A question can stay open after there is already enough information for a useful first move.',
      'You may undervalue what a rough experiment could reveal faster than more analysis.',
    ],
    thrive: [
      'Room to ask honest questions without being pushed toward a premature answer.',
      'Access to varied perspectives, evidence, and the people closest to the problem.',
    ],
    keep: 'Keeping work pointed at a problem that still matters.',
    stretch: 'Define what “clear enough to test” looks like before investigating further.',
    expand: 'Pair every important question with the smallest action that could test it.',
  },
  build: {
    label: 'Build',
    accent: '#1d7048',
    tint: '#edf5f0',
    reminder: 'BE BRILLIANT',
    reminderWhy: 'your strength is turning ideas into something people can test; the reminder is to keep the learning question as sharp as the build.',
    pattern:
      'You create momentum by making possibilities tangible. You learn through prototypes, trials and visible feedback rather than waiting for a complete plan. At its best this is practical learning: each version is a way to discover what works, not proof that the first idea was right.',
    uncertainty:
      'Uncertainty becomes workable for you once something real exists to react to. A rough version answers questions that discussion alone keeps open.',
    movement:
      'You create movement by making the situation testable. The useful stretch is to keep the learning question visible, so progress is measured by what becomes clearer, not only by what gets made.',
    helps: [
      'You turn abstract possibilities into concrete next steps.',
      'You create fast feedback by testing something real, and improve through iteration.',
    ],
    getsInTheWay: [
      'You can start solving before the most important problem or outcome is clear enough.',
      'Visible progress can feel like success when adoption or wider consequences still need attention.',
    ],
    thrive: [
      'A meaningful outcome, with freedom to choose the route toward it.',
      'Short feedback loops and permission to refine rather than perfect the first version.',
    ],
    keep: 'Making ideas tangible enough for reality to teach you something.',
    stretch: 'Name the assumption each experiment is meant to test.',
    expand: 'Pause at key moments to check the work is still solving the right problem.',
  },
  lead: {
    label: 'Lead',
    accent: '#c62f36',
    tint: '#fbefef',
    reminder: 'BE BOLD',
    reminderWhy: 'outcomes need someone willing to carry them past launch, and to say what is and isn’t working.',
    pattern:
      'You create momentum by keeping attention on what happens in practice: whether people adopt an idea, whether resistance is understood, and whether effort becomes a useful result. At its best this is outcome focus with human awareness. Success is not only delivery, but sustained use and benefit.',
    uncertainty:
      'Uncertainty becomes workable for you once you can see how it lands with real people. Their reaction is evidence, not just an obstacle.',
    movement:
      'You create movement by connecting work to the people it is meant to serve. The useful stretch is to make ownership explicit, so follow-through does not quietly become yours alone.',
    helps: [
      'You keep real users, adoption and practical value in view.',
      'You notice the gap between something being delivered and it actually working.',
    ],
    getsInTheWay: [
      'You can absorb too much responsibility for making an outcome happen.',
      'Resistance can look like something to overcome when it is really information to examine.',
    ],
    thrive: [
      'A visible outcome and real contact with the people affected by the work.',
      'Clear authority, ownership and feedback about what is changing in practice.',
    ],
    keep: 'Keeping practical value and real adoption in view.',
    stretch: 'Separate healthy resistance, useful feedback and simple inertia before responding.',
    expand: 'Make ownership explicit so follow-through does not become personal over-responsibility.',
  },
};

const TIERS = {
  1: {
    label: 'Own it',
    scope: 'in your own work',
    context:
      'This signal is clearest when the work is directly yours and you have room to act on your own judgement. That brings out agency and accountability, while still leaving space to learn from other people.',
    help: 'You take real responsibility when there is a clear piece of work to move.',
    risk: 'You may carry a challenge alone longer than necessary when support would improve the work.',
    edge: 'Invite challenge and support without giving away ownership of the decision.',
  },
  2: {
    label: 'Guide it',
    scope: 'alongside another owner',
    context:
      'This signal is clearest when you are helping with work that belongs to someone else. Your opportunity is to add clarity, practical movement or follow-through while preserving the other person’s ownership and confidence.',
    help: 'You help another owner move forward while keeping their agency visible.',
    risk: 'Helpful expertise can slide into rescuing, directing, or becoming the person everyone depends on.',
    edge: 'Check whether each intervention leaves the owner more capable after you step away.',
  },
  3: {
    label: 'Scale it',
    scope: 'across many projects',
    context:
      'This signal points toward situations where several efforts, dependencies or outcomes must be considered together. Your opportunity is to create shared movement without losing contact with the people and practical realities inside the system.',
    help: 'You connect separate efforts to a wider purpose and notice the dependencies between them.',
    risk: 'You can drift toward abstraction or coordination when the next useful move is local and concrete.',
    edge: 'Keep strategy close to real evidence, and make the next point of ownership unmistakable.',
  },
};

// One entry per role. `contribution` finishes the sentence "With your
// <role> potential, a better world may begin when you …".
export const ROLE_EMAILS = {
  explorer: {
    name: 'Explorer', orientation: 'explore', tier: 1, image: [360, 496],
    core: 'Discover and develop a worthwhile possibility.',
    headline: 'You find what’s genuinely worth pursuing.',
    subject: 'you’re an AI Explorer: you find what’s worth pursuing',
    contribution: 'make one confusing situation clearer, so a better next step becomes possible',
  },
  builder: {
    name: 'Builder', orientation: 'build', tier: 1, image: [360, 511],
    core: 'Make a chosen idea work.',
    headline: 'You turn a promising direction into something real.',
    subject: 'you’re an AI Builder: you turn ideas into something real',
    contribution: 'make one worthwhile idea tangible enough for reality to teach you something useful',
  },
  leader: {
    name: 'Leader', orientation: 'lead', tier: 1, image: [360, 442],
    core: 'Bring something built into use, adoption and practical benefit.',
    headline: 'You carry good ideas into everyday use.',
    subject: 'you’re an AI Leader: you carry good ideas into everyday use',
    contribution: 'help one useful change become real in the way people act, decide or work together',
  },
  navigator: {
    name: 'Navigator', orientation: 'explore', tier: 2, image: [360, 461],
    core: 'Help another owner sharpen what is worth pursuing.',
    headline: 'You help others see a clearer way in.',
    subject: 'you’re an AI Navigator: you help others see a clearer way in',
    contribution: 'help one person find a clearer way into a challenge without taking the journey away from them',
  },
  pathfinder: {
    name: 'Pathfinder', orientation: 'build', tier: 2, image: [360, 471],
    core: 'Help another owner find practical routes to build, test and learn.',
    headline: 'You find the route when a problem feels stuck.',
    subject: 'you’re an AI Pathfinder: you find the route when work feels stuck',
    contribution: 'help one owner find a practical route through a problem that felt stuck',
  },
  tactician: {
    name: 'Tactician', orientation: 'lead', tier: 2, image: [360, 473],
    core: 'Help another owner create adoption, follow-through and performance.',
    headline: 'You turn good intentions into follow-through.',
    subject: 'you’re an AI Tactician: you turn intentions into follow-through',
    contribution: 'help one team turn coordinated action into a result people can actually use',
  },
  captain: {
    name: 'Captain', orientation: 'explore', tier: 3, image: [360, 436],
    core: 'Direction and alignment across projects.',
    headline: 'You set one course when many efforts need it.',
    subject: 'you’re an AI Captain: you set one course across many efforts',
    contribution: 'turn a shared direction into one enabling connection, system or capability others can build with',
  },
  pioneer: {
    name: 'Pioneer', orientation: 'build', tier: 3, image: [360, 475],
    core: 'Shared capabilities, connections and enabling systems.',
    headline: 'You build what lets everything else connect.',
    subject: 'you’re an AI Pioneer: you build what lets everything connect',
    contribution: 'connect what is being built to the adoption, performance and wider impact it is meant to create',
  },
  strategos: {
    name: 'Strategos', orientation: 'lead', tier: 3, image: [360, 490],
    core: 'Combined adoption, performance and strategic impact.',
    headline: 'You turn coordinated effort into lasting impact.',
    subject: 'you’re an AI Strategos: you turn effort into lasting impact',
    contribution: 'refresh the direction as conditions change, so scale does not harden yesterday’s assumptions',
  },
};

// Grid rows as shown on the site: widest scope on top.
const GRID = [
  ['captain', 'pioneer', 'strategos'],
  ['navigator', 'pathfinder', 'tactician'],
  ['explorer', 'builder', 'leader'],
];

/** "Explorer", "AI Explorer", "explorer" → "explorer"; anything else → null. */
export function roleIdFrom(value) {
  const key = String(value ?? '').trim().toLowerCase().replace(/^ai\s+/, '');
  return Object.hasOwn(ROLE_EMAILS, key) ? key : null;
}

const font = "font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;";
const kicker = (text, color) =>
  `<p style="margin:0 0 8px;${font}font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${color};">${text}</p>`;
const heading = (text) =>
  `<h2 style="margin:0 0 10px;${font}font-size:20px;line-height:1.3;font-weight:700;color:#102521;">${text}</h2>`;
const para = (text, extra = '') =>
  `<p style="margin:0 0 14px;${font}font-size:15px;line-height:1.65;color:#45565a;${extra}">${text}</p>`;
const list = (items, marker) =>
  items
    .map(
      (item) =>
        `<tr><td valign="top" style="padding:0 10px 10px 0;${font}font-size:15px;line-height:1.55;color:${marker};font-weight:700;">•</td><td style="padding:0 0 10px;${font}font-size:15px;line-height:1.55;color:#45565a;">${item}</td></tr>`,
    )
    .join('');
const section = (inner, top = 28) =>
  `<tr><td class="px" style="background:#ffffff;padding:${top}px 40px 4px;">${inner}</td></tr>`;
const rule = '<tr><td class="px" style="background:#ffffff;padding:16px 40px 0;"><div style="border-top:1px solid #ece4d6;font-size:0;line-height:0;">&nbsp;</div></td></tr>';

function grid(current) {
  const rows = GRID.map(
    (row) =>
      `<tr>${row
        .map((id) => {
          const role = ROLE_EMAILS[id];
          const o = ORIENTATIONS[role.orientation];
          const on = id === current;
          return `<td align="center" width="33%" style="padding:4px;"><div style="padding:10px 4px;border-radius:10px;${font}font-size:13px;font-weight:700;${
            on ? `background:${o.accent};color:#ffffff;` : `background:${o.tint};color:#45565a;`
          }">${role.name}${on ? '<br><span style="font-size:10px;font-weight:600;letter-spacing:1px;">YOU ARE HERE</span>' : ''}</div></td>`;
        })
        .join('')}</tr>`,
  ).join('');
  const labels = Object.values(ORIENTATIONS)
    .map((o) => `<td align="center" style="padding:6px 4px 0;${font}font-size:10px;font-weight:700;letter-spacing:1.5px;color:${o.accent};">${o.label.toUpperCase()}</td>`)
    .join('');
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}<tr>${labels}</tr></table>`;
}

// Images are referenced as cid: when the sender attaches them inline (see
// inlineImages below), so they show even where remote images are blocked.
const LOGO = { path: '/images/email/logo-on-teal.png', cid: 'leadapreneur-logo', type: 'image/png' };
const imgSrc = (asset, inline) => (inline ? `cid:${asset.cid}` : `${SITE_URL}${asset.path}`);

function roleEmail(id, displayName, inline) {
  const role = ROLE_EMAILS[id];
  const o = ORIENTATIONS[role.orientation];
  const t = TIERS[role.tier];
  const safeName = escapeHtml(displayName);
  const title = `AI ${role.name}`;
  const subject = displayName === 'there'
    ? role.subject.charAt(0).toUpperCase() + role.subject.slice(1)
    : `${displayName}, ${role.subject}`;
  const preheader = `${role.headline} Here is what your Future-Proofing result means, and the one thing to practise next.`;
  const portrait = { path: `/images/email/${id}.jpg`, cid: `role-${id}`, type: 'image/jpeg' };
  const image = imgSrc(portrait, inline);
  const logo = imgSrc(LOGO, inline);
  const [w, h] = role.image;

  const html = `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light only">
<title>${escapeHtml(subject)}</title>
<style>
  @media only screen and (max-width: 600px) {
    .px { padding-left: 20px !important; padding-right: 20px !important; }
    .stack { display: block !important; width: 100% !important; padding: 0 0 8px 0 !important; }
    .hero-art, .hero-art-cell { width: 110px !important; }
    .hero-title { font-size: 28px !important; }
  }
</style>
<!--[if mso]><style>table{border-collapse:collapse}td,p,h1,h2{font-family:Arial,sans-serif}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background:#f7f3ec;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f3ec;">
<tr><td align="center" style="padding:28px 12px;">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" align="center"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">

  <tr><td class="px" style="background:#016175;border-radius:20px 20px 0 0;padding:22px 40px;">
    <a href="${SITE_URL}/" style="text-decoration:none;"><img src="${logo}" width="168" alt="LEADAPRENEUR" style="display:block;border:0;width:168px;height:auto;${font}font-size:16px;font-weight:700;letter-spacing:3px;color:#ffffff;"></a>
  </td></tr>

  <tr><td class="px" style="background:${o.tint};padding:32px 40px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td valign="top" style="padding:0 16px 28px 0;">
        ${kicker('Your Future-Proofing Potential', o.accent)}
        <p style="margin:0 0 6px;${font}font-size:15px;color:#45565a;">Hi ${safeName}, your result is</p>
        <h1 class="hero-title" style="margin:0 0 12px;${font}font-size:34px;line-height:1.1;font-weight:800;letter-spacing:-0.5px;color:#102521;">${title}</h1>
        <p style="margin:0 0 14px;${font}font-size:17px;line-height:1.45;font-weight:700;color:${o.accent};">${role.headline}</p>
        <p style="margin:0;${font}font-size:13px;line-height:1.5;color:#45565a;"><span style="display:inline-block;padding:3px 9px;border-radius:999px;background:${o.accent};color:#ffffff;font-weight:700;letter-spacing:1px;font-size:11px;">${o.label.toUpperCase()}</span>&nbsp; ${t.scope}</p>
      </td>
      <td class="hero-art-cell" valign="bottom" width="180" style="width:180px;">
        <img class="hero-art" src="${image}" width="180" height="${Math.round((h / w) * 180)}" alt="${title}" style="display:block;border:0;width:180px;height:auto;">
      </td>
    </tr></table>
  </td></tr>

  ${section(`${kicker('Your core pattern', o.accent)}${heading(role.core)}${para(o.pattern)}${para(t.context)}`, 32)}
  ${rule}
  ${section(`
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td class="stack" valign="top" width="50%" style="padding:0 12px 0 0;">${kicker('How you face uncertainty', o.accent)}${para(o.uncertainty, 'font-size:14px;')}</td>
      <td class="stack" valign="top" width="50%" style="padding:0 0 0 12px;">${kicker('How you create movement', o.accent)}${para(o.movement, 'font-size:14px;')}</td>
    </tr></table>`)}
  ${rule}
  ${section(`${kicker('Where this pattern helps', o.accent)}<table role="presentation" cellpadding="0" cellspacing="0">${list([...o.helps, t.help], o.accent)}</table>
    <div style="height:12px;line-height:12px;font-size:0;">&nbsp;</div>${kicker('Where it can get in the way', '#8a6d3b')}<table role="presentation" cellpadding="0" cellspacing="0">${list([...o.getsInTheWay, t.risk], '#8a6d3b')}</table>
    <div style="height:12px;line-height:12px;font-size:0;">&nbsp;</div>${kicker('Conditions that bring out your best', o.accent)}<table role="presentation" cellpadding="0" cellspacing="0">${list(o.thrive, o.accent)}</table>`)}

  <tr><td class="px" style="background:#ffffff;padding:20px 40px 4px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="background:#102521;border-radius:14px;padding:22px 24px;">
      ${kicker('Your next edge', '#7fd6e2')}
      <p style="margin:0;${font}font-size:16px;line-height:1.6;color:#ffffff;">${t.edge}</p>
    </td></tr></table>
  </td></tr>

  ${section(`${kicker('How to future-proof this potential', o.accent)}${heading('Keep the value. Stretch the limit. Expand the range.')}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      ${[
        ['Keep', o.keep],
        ['Stretch', o.stretch],
        ['Expand', o.expand],
      ]
        .map(
          ([label, text]) =>
            `<td class="stack" valign="top" width="33%" style="padding:4px;"><div style="background:${o.tint};border-radius:12px;padding:14px 12px;"><p style="margin:0 0 6px;${font}font-size:11px;font-weight:800;letter-spacing:1.5px;color:${o.accent};">${label.toUpperCase()}</p><p style="margin:0;${font}font-size:13px;line-height:1.5;color:#45565a;">${text}</p></div></td>`,
        )
        .join('')}
    </tr></table>`)}

  ${section(`${kicker('Your personal reminder', o.accent)}
    <p style="margin:0 0 6px;${font}font-size:26px;font-weight:800;letter-spacing:1px;color:${o.accent};">${o.reminder}</p>
    ${para(`Because ${o.reminderWhy}`)}
    ${para(`“Build a better world” can sound enormous. But no one starts by changing the whole world. With your ${role.name} potential, it may begin when you ${role.contribution}.`)}`)}

  ${section(`${kicker('Where you sit among the nine roles', o.accent)}${grid(id)}
    ${para('Explore → Build → Lead is a practice loop, not a label that fixes your future: clarify what matters, make learning tangible, then carry it into useful change with others.', 'margin-top:16px;font-size:14px;')}`)}

  <tr><td class="px" align="center" style="background:#ffffff;padding:16px 40px 32px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr><td align="center" style="border-radius:999px;background:#007d91;">
      <a href="${SITE_URL}/ai-x-talent-accelerator/" style="display:inline-block;padding:14px 30px;${font}font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:999px;">See how leadapreneurs build on this →</a>
    </td></tr></table>
    <p style="margin:14px 0 0;${font}font-size:13px;"><a href="${SITE_URL}/#roles" style="color:#007387;font-weight:700;">Explore all nine roles</a></p>
  </td></tr>

  <tr><td class="px" style="background:#f3eee5;border-radius:0 0 20px 20px;padding:20px 40px 24px;">
    <p style="margin:0 0 4px;${font}font-size:11px;font-weight:800;letter-spacing:1.5px;color:#102521;">POTENTIAL ≠ PROOF</p>
    <p style="margin:0;${font}font-size:13px;line-height:1.6;color:#5e6965;">This result reflects a limited set of work situations. It does not certify mastery, measure your worth, or limit what you can learn. Potential is discovered. Capability is built. Proof is demonstrated. Roles are earned.</p>
  </td></tr>

  <tr><td class="px" style="padding:22px 40px 8px;">
    <p style="margin:0 0 6px;${font}font-size:12px;line-height:1.6;color:#8a8378;">Leadapreneur Sdn. Bhd. · Level 7, Tower 7, Avenue 7, Bangsar South, Kuala Lumpur</p>
    <p style="margin:0;${font}font-size:12px;line-height:1.6;color:#8a8378;">You received this because you asked for a copy of your result at <a href="${SITE_URL}/assessment/" style="color:#007387;">leadapreneur.com</a>. It is a one-off email, not a mailing list.</p>
  </td></tr>

</table>
<!--[if mso]></td></tr></table><![endif]-->
</td></tr>
</table>
</body>
</html>`;

  const bullets = (items) => items.map((item) => `- ${item}`).join('\n');
  const text = [
    `Hi ${displayName},`,
    '',
    `Your Future-Proofing Potential: ${title}`,
    role.headline,
    `${o.label} · ${t.scope}`,
    '',
    'YOUR CORE PATTERN',
    role.core,
    o.pattern,
    t.context,
    '',
    'HOW YOU FACE UNCERTAINTY',
    o.uncertainty,
    '',
    'HOW YOU CREATE MOVEMENT',
    o.movement,
    '',
    'WHERE THIS PATTERN HELPS',
    bullets([...o.helps, t.help]),
    '',
    'WHERE IT CAN GET IN THE WAY',
    bullets([...o.getsInTheWay, t.risk]),
    '',
    'CONDITIONS THAT BRING OUT YOUR BEST',
    bullets(o.thrive),
    '',
    `YOUR NEXT EDGE: ${t.edge}`,
    '',
    'KEEP THE VALUE. STRETCH THE LIMIT. EXPAND THE RANGE.',
    `Keep: ${o.keep}`,
    `Stretch: ${o.stretch}`,
    `Expand: ${o.expand}`,
    '',
    `YOUR PERSONAL REMINDER: ${o.reminder}. Because ${o.reminderWhy}`,
    `With your ${role.name} potential, a better world may begin when you ${role.contribution}.`,
    '',
    'POTENTIAL ≠ PROOF. Potential is discovered. Capability is built. Proof is demonstrated. Roles are earned.',
    '',
    `See how leadapreneurs build on this: ${SITE_URL}/ai-x-talent-accelerator/`,
    `Explore all nine roles: ${SITE_URL}/#roles`,
    '',
    'Leadapreneur Sdn. Bhd., Level 7, Tower 7, Avenue 7, Bangsar South, Kuala Lumpur',
    'You received this because you asked for a copy of your Future-Proofing Assessment result. This is a one-off email, not a mailing list.',
  ].join('\n');

  return { subject, html, text, images: [LOGO, portrait] };
}

function fallbackEmail(displayName, inline) {
  const logo = imgSrc(LOGO, inline);
  const safeName = escapeHtml(displayName);
  const subject = displayName === 'there' ? 'Your Future-Proofing Assessment result' : `${displayName}, your Future-Proofing Assessment result`;
  const body =
    'Your answers did not converge strongly enough to name a single role yet. That is a more honest result than forcing a label: it usually means your pattern changes with the situation. Your full result page shows what we noticed.';
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background:#f7f3ec;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f3ec;"><tr><td align="center" style="padding:28px 12px;">
<!--[if mso]><table role="presentation" width="600" cellpadding="0" cellspacing="0" align="center"><tr><td><![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;">
<tr><td class="px" style="background:#016175;border-radius:20px 20px 0 0;padding:22px 40px;"><img src="${logo}" width="168" alt="LEADAPRENEUR" style="display:block;border:0;width:168px;height:auto;"></td></tr>
<tr><td class="px" style="background:#ffffff;padding:32px 40px;">${kicker('Your Future-Proofing result', '#007387')}<h1 style="margin:0 0 14px;${font}font-size:26px;line-height:1.25;color:#102521;">Hi ${safeName}, your pattern is still taking shape.</h1>${para(body)}
<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="border-radius:999px;background:#007d91;"><a href="${SITE_URL}/#roles" style="display:inline-block;padding:14px 30px;${font}font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">Explore the nine roles →</a></td></tr></table></td></tr>
<tr><td class="px" style="background:#f3eee5;border-radius:0 0 20px 20px;padding:20px 40px;"><p style="margin:0;${font}font-size:12px;line-height:1.6;color:#8a8378;">Leadapreneur Sdn. Bhd. · Kuala Lumpur. You received this because you asked for a copy of your result. It is a one-off email.</p></td></tr>
</table><!--[if mso]></td></tr></table><![endif]--></td></tr></table></body></html>`;
  const text = `Hi ${displayName},\n\n${body}\n\nExplore the nine roles: ${SITE_URL}/#roles\n\nLeadapreneur Sdn. Bhd., Kuala Lumpur. You received this because you asked for a copy of your result.`;
  return { subject, html, text, images: [LOGO] };
}

/**
 * @param {{ name?: string | null, role?: string | null, inlineImages?: boolean }} input
 *   inlineImages: reference images as cid: and list them in `images` for the
 *   sender to attach inline; otherwise images load from the website.
 * @returns {{ subject: string, html: string, text: string, images: { path: string, cid: string, type: string }[] }}
 */
export function buildResultEmail({ name, role, inlineImages = false } = {}) {
  const displayName = (name ?? '').trim().slice(0, 80) || 'there';
  const id = roleIdFrom(role);
  return id ? roleEmail(id, displayName, inlineImages) : fallbackEmail(displayName, inlineImages);
}
