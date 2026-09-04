export const site = {
  name: 'Leadapreneur',
  legalName: 'LEADAPRENEUR SDN. BHD.',
  url: 'https://www.leadapreneur.com',
  description:
    'Leadapreneur transforms managers into AI-powered innovators who build real solutions with verified business value.',
  email: null,
  whatsapp: 'https://wa.me/60139429127',
  cosmos: 'https://cosmos.leadapreneur.com/login',
  assessment: 'https://future-proof-lp.lovable.app/',
  address: [
    'Level 7, Tower 7, Avenue 7',
    'Menara Pernas, The Horizon',
    '59200 Bangsar South, Kuala Lumpur',
  ],
  social: {
    linkedin: 'https://www.linkedin.com/company/leadapreneur/',
    facebook: 'https://www.facebook.com/Leadapreneurs/',
    instagram: 'https://www.instagram.com/leadapreneur/',
    youtube: 'https://www.youtube.com/@Leadapreneur',
  },
};

export const roles = [
  {
    id: 'explorer',
    number: '01',
    name: 'AI Explorer',
    image: '/images/role-explorer.jpeg',
    accent: '#3b82f6',
    symbol: '◇',
    tagline: 'You find the opening before anyone else.',
    description:
      'You work at the edge of the map. You chase ideas, understand uncharted ground and return with an opportunity worth backing.',
    traits: ['Curious', 'Independent', 'Resourceful'],
    bestAt: 'Discovering possibilities',
    teamContribution:
      'You widen the field of view and surface opportunities the team might otherwise miss.',
    developmentTip:
      'Turn your strongest opportunity into a crisp, manager-ready proposition.',
  },
  {
    id: 'innovator',
    number: '02',
    name: 'AI Innovator',
    image: '/images/role-innovator.jpeg',
    accent: '#14886f',
    symbol: '△',
    tagline: 'You turn good ideas into shipped results.',
    description:
      'You make things real. Point you at a hard target and you will grind the idea into something useful, testable and ready to scale.',
    traits: ['Pragmatic', 'Driven', 'Team-first'],
    bestAt: 'Building what works',
    teamContribution:
      'You convert momentum into prototypes, tests and working systems that people can use.',
    developmentTip:
      'Build the smallest credible proof, then let evidence earn the next level of support.',
  },
  {
    id: 'vanguard',
    number: '03',
    name: 'AI Vanguard',
    image: '/images/role-vanguard.jpeg',
    accent: '#d9574f',
    symbol: '●',
    tagline: 'You take the front and set the direction.',
    description:
      'You operate ahead of the line. You think in systems, commit while the picture is incomplete and pull everyone else forward.',
    traits: ['Decisive', 'Strategic', 'Bold'],
    bestAt: 'Leading meaningful change',
    teamContribution:
      'You align people around a direction and create the confidence to move through ambiguity.',
    developmentTip:
      'Make adoption measurable so the change can outlive the first burst of energy.',
  },
];

export const quizQuestions = [
  {
    id: 'q1',
    prompt: 'What do you dare to do with AI today?',
    answers: [
      { id: 'a', label: 'I dare to discover new ideas.', role: 'explorer' },
      { id: 'b', label: 'I dare to build new innovations.', role: 'innovator' },
      { id: 'c', label: 'I dare to transform how we work.', role: 'vanguard' },
    ],
  },
  {
    id: 'q2',
    prompt: 'What would you like to learn to do with AI?',
    answers: [
      {
        id: 'a',
        label: 'Propose an exciting solution my manager will approve.',
        role: 'explorer',
      },
      {
        id: 'b',
        label: 'Build and test AI prototypes that inspire my Head of Department.',
        role: 'innovator',
      },
      {
        id: 'c',
        label: 'Lead adoption and create measurable impact that WOWs senior leaders.',
        role: 'vanguard',
      },
    ],
  },
  {
    id: 'q3',
    prompt: 'What spirit of inspiration are you feeling most right now?',
    answers: [
      {
        id: 'a',
        label: 'Curiosity — I want to explore what could be possible.',
        role: 'explorer',
      },
      {
        id: 'b',
        label: 'Creativity — I want to build something better.',
        role: 'innovator',
      },
      {
        id: 'c',
        label: 'Courage — I want to lead meaningful change.',
        role: 'vanguard',
      },
    ],
  },
];

export const companies = [
  ['DBS Bank', '/images/client-dbs.png'],
  ['CIMB Bank', '/images/client-cimb.png'],
  ['OCBC Bank', '/images/client-ocbc.png'],
  ['United Overseas Bank', '/images/client-uob.png'],
  ['Citibank', '/images/client-citi.png'],
  ['Public Bank', '/images/client-publicbank.png'],
  ['Hong Leong Bank', '/images/client-hongleong.png'],
  ['AXA Insurance', '/images/client-axa.png'],
  ['Axiata', '/images/client-axiata.png'],
  ['Toshiba', '/images/client-toshiba.png'],
  ['Top Glove', '/images/client-topglove.png'],
  ['EcoWorld', '/images/client-ecoworld.png'],
  ['DRB-HICOM', '/images/client-drbhicom.png'],
  ['Elken', '/images/client-elken.png'],
  ['AMK', '/images/client-amk.png'],
];

export const futureProofingPillars = [
  ['People first', 'Upgrade managers into leadapreneurs: creative, adaptable and resilient leaders who can build with AI.'],
  ['Build', 'Move beyond theory. Every participant develops a real project around a real problem.'],
  ['Focused', 'Work on the painful problems that matter most to the organisation and its customers.'],
  ['Emerging tech', 'Use AI and other technologies to amplify human judgement, creativity and speed.'],
  ['Impact', 'Calculate the value, validate the outcome and make business impact visible.'],
];

export const acceleratorSteps = [
  {
    number: '01',
    label: 'Upgrade people',
    title: 'CARES',
    copy: 'Develop creative, adaptable and resilient experts in AI who care about building a better organisation.',
  },
  {
    number: '02',
    label: 'Execute',
    title: 'Stratecution',
    copy: 'Propose with AI × Design Thinking, prototype with AI × Lean Startup, then deploy through AI × Agile Execution.',
  },
  {
    number: '03',
    label: 'Build',
    title: 'Real AI project',
    copy: 'Every leadapreneur builds an individual project—not a case study or a group exercise.',
  },
  {
    number: '04',
    label: 'Measure',
    title: 'Business value',
    copy: 'Valuations are reviewed by managers and digitally verified in COSMOS.',
  },
  {
    number: '05',
    label: 'Level up',
    title: 'Innovator → Coach → Leader',
    copy: 'Titles are earned through delivered value, creating a measurable succession pathway.',
  },
];

export const projects = [
  {
    slug: 'ai-marketplace-wealth-trade-ideas',
    theme: 'Sales',
    status: 'Deployed',
    industry: 'Banking & Wealth Management',
    programme: 'Warriors of WOW',
    title: 'AI Marketplace for Wealth Trade Ideas',
    value: 'SGD 4,336,200',
    valueLabel: 'Innovation value',
    secondary: '36,500 hours saved yearly',
    result: '~50% expected reduction in RM ideation time',
    problem:
      'Trade ideas were scattered across email, spreadsheets and SharePoint, forcing relationship managers to spend hours sourcing and comparing.',
    solution:
      'A central AI-powered marketplace aggregates trade ideas, ranks them intelligently and supports side-by-side comparison.',
    builtWith: ['AI ranking engine', 'Product API integration', 'RM workflow layer'],
  },
  {
    slug: 'three-week-process-two-days',
    theme: 'Operations',
    status: 'Deployed',
    industry: 'Banking',
    programme: 'Rebel Accelerator',
    title: 'Three-Week Process, Compressed to Two Days',
    value: 'RM 372,000',
    valueLabel: 'Annual cost savings',
    secondary: '93% reduction in process time',
    result: '3 weeks → 2 days',
    problem:
      'A high-volume back-office process took three weeks end-to-end, bottlenecking downstream teams.',
    solution:
      'An automation layer orchestrates the workflow across legacy systems and removes manual reconciliation steps.',
    builtWith: ['Workflow automation', 'Cross-system orchestration', 'Manager approval'],
  },
  {
    slug: 'ai-vision-quality-defects',
    theme: 'Risk & Compliance',
    status: 'Pilot planned',
    industry: 'Manufacturing',
    programme: 'Accelerated Innovative Leadership Programme',
    title: 'AI Vision + QR Traceability for Quality Defects',
    value: 'RM 24 million',
    valueLabel: 'Operational value',
    secondary: 'RM 10,000 saved per line per month',
    result: 'One-month pilot proposed before scale',
    problem:
      'Manual inspection caught defects too late, allowing faulty tooling to keep producing scrap.',
    solution:
      'AI vision flags defects on the line while QR traceability connects each defect to the tool that produced it.',
    builtWith: ['AI vision', 'QR traceability', 'QA workflow'],
  },
  {
    slug: 'partner-self-service-portal',
    theme: 'People',
    status: 'Deployed',
    industry: 'Insurance',
    programme: 'Axapreneur',
    title: 'Partner Self-Service Portal',
    value: 'RM 88,000+',
    valueLabel: 'Estimated annual value',
    secondary: '700+ partner staff across 164 branches',
    result: 'Marketing shifted from reactive service to coaching and business development',
    problem:
      'Partner staff called head office daily for policy, commission, product and campaign information.',
    solution:
      'A web and mobile portal gives partners direct access to the information they need.',
    builtWith: ['Web portal', 'Mobile-first interface', 'Partner data integration'],
  },
];

export const caseStudies = [
  {
    id: 'dbs',
    name: 'DBS',
    eyebrow: '5 seasons · 2019–2024',
    title: 'SGD 79 million in innovation value',
    metrics: ['368 high-potential employees', '180 deployed projects', '46% average promotion rate'],
    story:
      'Across five seasons of Warriors of WOW, DBS deployed high-potential employees into real innovation challenges across six Asian markets.',
  },
  {
    id: 'uob',
    name: 'UOB',
    eyebrow: 'Second cycle · 12 weeks',
    title: 'RM 8.28 million in innovation value',
    metrics: ['29 leadapreneurs', '10+ named projects', '307% growth from cycle one'],
    story:
      'A cross-functional cohort built innovation capability across retail banking, treasury, compliance, sales and HR.',
  },
  {
    id: 'ocbc',
    name: 'OCBC',
    eyebrow: 'Rebel Accelerator · 16 weeks',
    title: 'RM 5.17 million in innovation value',
    metrics: ['27 leadapreneurs', 'RM 191,503 average project value', '3 weeks compressed to 2 days'],
    story:
      'Employees from Treasury, Compliance, Operations and Marketing built and validated MVPs around live business problems.',
  },
];

export const stats = [
  ['80,000+', 'Professionals transformed'],
  ['250+', 'Organisations empowered'],
  ['5,000+', 'Solutions built to painful problems'],
  ['USD 120M+', 'Business impact generated'],
];

export const events = [
  {
    slug: 'greatness-games-kl-season-1',
    title: 'Greatness Games KL · Season 1',
    summary:
      'A three-week leadership quest that closed with three days in Kuala Lumpur and an AI-powered innovation proposal ready to pitch.',
    type: 'Greatness Games',
    format: 'in-person',
    startAt: '2026-06-22T09:00:00+08:00',
    endAt: '2026-07-03T17:00:00+08:00',
    timezone: 'Asia/Kuala_Lumpur',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    venue: 'Common Ground Bukit Bintang',
    status: 'registration-closed',
    featured: true,
    capacity: 25,
    price: 'RM 2,000 per person',
    registrationUrl: null,
    agenda: [
      ['22 June', 'Kickoff webinar', 'A live one-hour session that sets the leadership standard and opens COSMOS access.'],
      ['22–30 June', 'Innovate or Die', 'A self-paced course with 17 lessons, quizzes and a working workbook.'],
      ['1 July', 'Discover problem', 'Find the problem in your work worth solving.'],
      ['2 July', 'Design solution', 'Build a strong idea using AI.'],
      ['3 July', 'Pitch proposal', 'Present an innovation proposal ready for management approval.'],
    ],
  },
];

export { educationalVideos, insights, inspiringPodcasts } from './insights.mjs';

export const team = [
  ['Hanaa Maysoon', 'COO', '/images/team-hanaa.png'],
  ['Shen Feng', 'CTO', '/images/team-shenfeng.png'],
  ['Nor Kamaliah', 'HR Specialist', '/images/team-norkamaliah.png'],
  ['Biraj Paudel', 'Lead Designer', '/images/team-biraj.png'],
  ['Kezia Fani', 'Marketing Specialist', '/images/team-kezia.png'],
  ['Yeop Faezuddin', 'Business Development', '/images/team-yeop.png'],
  ['Chya Chyi Teh', 'Artist', '/images/team-chyachyi.png'],
  ['Mary Lopez', 'Business Development & Coach', '/images/team-mary.png'],
  ['Sim Choo Khoo', 'Stratecution Coach', '/images/team-simchoo.png'],
  ['Kwee Ming Gan', 'Stratecution Coach', '/images/team-kweeming.png'],
  ['Toffer Briones', 'Stratecution Coach', '/images/team-toffer.png'],
  ['Michael McKay', 'Stratecution Coach', '/images/team-michael.png'],
];
