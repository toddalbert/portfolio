// Content for the 2026 warm-editorial homepage.
// Ported verbatim from the design handoff (Todd Albert.dc.html). Prose with
// inline emphasis lives in the section components; the repeated, structured
// content (stats, cards, list rows) lives here.

// Newest résumé actually present in /public (spec linked a stale May file).
export const RESUME_URL = '/Albert-Todd-resume-June-2026.pdf'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/toddalbert/'

export const navLinks = [
  { href: '#scale', label: 'Scale' },
  { href: '#outcomes', label: 'Outcomes' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#range', label: 'Range' },
  { href: '#book', label: 'Book' },
]

// Hero stat band (animated counters).
export const stats = [
  { count: 2, suffix: 'M', label: 'Monthly active users' },
  { count: 700, suffix: '+', label: 'Enterprise customers' },
  { count: 30, suffix: '', label: 'Engineers led' },
  { count: 6, suffix: '', label: 'Countries' },
]

// 01 — Operating at scale: definition-list rows.
export const scaleRows = [
  { label: 'Scale', text: '~2M monthly active users on a single multi-tenant platform', faint: '— traffic that doesn\'t pause for deploys.' },
  { label: 'Customers', text: '700+ enterprises on shared infrastructure — one platform, many tenants.' },
  { label: 'Reliability', text: 'Uptime and performance held steady as both load and the customer base grow.' },
  { label: 'Team', text: '30 engineers across 6 countries and 9 time zones, organized to ship as one.' },
  { label: 'Delivery', text: 'Velocity and stability run as one goal — enforced through review and quality gates, not traded against each other.' },
]

// 02 — Selected outcomes: dark cards.
export const outcomes = [
  {
    num: '01',
    context: 'VP ENGINEERING · CYPHER LEARNING',
    title: 'Modernizing a Global Learning Platform',
    body: 'Led a distributed engineering organization through Agile transformation, cloud optimization, and AI-driven automation — keeping delivery steady and reporting impact at board level.',
    metrics: [
      { n: '$4.4M', l: 'budget owned' },
      { n: '$1.2M/yr', l: 'cost reduced' },
    ],
  },
  {
    num: '02',
    context: 'ENG LEADERSHIP · SITE IMPACT',
    title: 'Rebuilding Delivery & Infrastructure Under Pressure',
    body: 'Turned around a cloud-native AdTech platform under deadline pressure — multi-region availability, SRE/DevOps discipline, CI/CD, and observability built into the team\'s habits.',
    metrics: [
      { n: '$6.8M', l: 'turnaround' },
      { n: '$600K/yr', l: 'est. savings' },
    ],
  },
  {
    num: '03',
    context: 'FOUNDER · BOCA CODE & ACADEMIA',
    title: 'Building Builders Through Education',
    body: 'Founded a coding bootcamp and led academic programs across two decades — designing curricula, growing enrollment, and mentoring thousands of students and hundreds of new engineers into the field.',
    metrics: [
      { n: '100s', l: 'engineers taught' },
      { n: '10×', l: 'program growth' },
    ],
  },
]

// 03 — How I lead: principle cards.
export const leadCards = [
  {
    tag: '→ set',
    title: 'Set the standard',
    body: 'The teams I lead understand a system\'s production behavior before they touch it. I build that discipline into how the org works — ownership, review, and the expectation that you explain a system before you change it.',
  },
  {
    tag: '→ aim',
    title: 'Aim the team at the signal',
    body: 'I point engineers at what actually moves the business — reliability, latency under load, the growth curve — so effort lands on root causes instead of symptoms.',
  },
  {
    tag: '→ own',
    title: 'Own the outcome',
    body: 'The result is a platform that scales without drama, run by a team that knows why it behaves the way it does. I\'m accountable for that result, and I build the people who sustain it.',
  },
]

// 04 — Track record: definition-list rows.
export const trackRows = [
  { label: 'Scope now', text: 'VP of Engineering leading 30 across 6 countries — engineering, DevOps, product, integrations.' },
  { label: 'Distributed', text: 'One org spread over multiple time zones, run to ship as a single team.' },
  { label: 'Experience', text: '15+ years leading engineering across startups and established companies.' },
  { label: 'Mentorship', text: 'Founded a coding bootcamp and mentored hundreds of engineers into the field.' },
  { label: 'Operating model', text: 'Leveling, review rigor, and process that clears the HR and audit bar.' },
]

// 05 — Range: the three-phase arc.
export const rangeCards = [
  {
    meta: 'Ph.D. · NASA / NOAA',
    title: 'Research scientist',
    body: 'NASA- and NOAA-funded glaciology, chasing data from Greenland to the Peruvian Andes — building models of systems too big to see all at once.',
    takeaway: '→ forensic rigor for incident analysis',
  },
  {
    meta: '30 years',
    title: 'Software & engineering leadership',
    body: 'AI, mobile, games, AR/VR, e-commerce, blockchain — Principal, VP, CTO. If it ships, I\'ve led the team that built and scaled it.',
    takeaway: '→ the core of the work',
  },
  {
    meta: 'Author · 2026',
    title: 'Storyteller',
    body: 'Wrote a book that turns dense historical research into something a general reader finishes in a weekend.',
    takeaway: '→ explaining complex systems to non-experts',
  },
]

// 06 — Writing & building: link cards.
export const writingCards = [
  {
    kind: 'Essay',
    title: 'Your Customers Don\'t Want Your AI Assistant',
    body: 'Why proximity to customer data — not the model — is the moat for software companies competing with the labs.',
    cta: 'Read on Impact Velocity ↗',
    href: 'https://impactvelocity.studio/notes/your-customers-dont-want-your-ai-assistant',
  },
  {
    kind: 'Keynote',
    title: 'Building Defensible AI Your Customers Will Love',
    body: 'I presented a talk to the South Florida CTO Club I am a member of on the traps to avoid, rules to follow, and roadmap and architecture to add defensible and lovable AI to your product.',
    cta: 'Join the Club ↗',
    href: 'https://southflcto.org/',
  },
]

// Footer contact links.
export const footerLinks = [
  { href: LINKEDIN_URL, label: 'LinkedIn' },
  { href: 'https://github.com/toddalbert', label: 'GitHub' },
  { href: 'https://toddhalbert.medium.com/', label: 'Medium' },
  { href: 'https://scholar.google.dk/citations?user=lYZY0SYAAAAJ&hl=en', label: 'Scholar' },
  { href: RESUME_URL, label: 'Résumé' },
]
