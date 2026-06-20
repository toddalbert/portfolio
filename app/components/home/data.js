// Content + helpers for the 2026 homepage redesign.
// Ported from the Claude Design handoff (Todd Albert Homepage.dc.html).

export const proof = [
  'VP Engineering',
  'Former NASA Research Fellow',
  '30+ years building software',
  '15+ years leading teams',
  'Author, Out of the Fish Tank',
  'Educator & bootcamp founder',
]

export const outcomes = [
  {
    idx: '01',
    title: 'Modernizing a Global Learning Platform',
    context: 'VP ENGINEERING · CYPHER LEARNING',
    body: 'Led a distributed engineering organization through Agile transformation, cloud optimization, and AI-driven automation — keeping delivery steady and reporting impact at board level.',
    metrics: [
      { n: '$4.4M', l: 'budget owned' },
      { n: '$1.2M/yr', l: 'cost reduced' },
    ],
  },
  {
    idx: '02',
    title: 'Rebuilding Delivery & Infrastructure Under Pressure',
    context: 'ENGINEERING LEADERSHIP · SITE IMPACT',
    body: 'Turned around a cloud-native AdTech platform under deadline pressure — multi-region availability, SRE/DevOps discipline, CI/CD, and observability built into the team’s habits.',
    metrics: [
      { n: '$4.3M', l: 'turnaround' },
      { n: '$600K/yr', l: 'est. savings' },
    ],
  },
  {
    idx: '03',
    title: 'Building Builders Through Education',
    context: 'FOUNDER · BOCA CODE & ACADEMIA',
    body: 'Founded a coding bootcamp and led academic programs across two decades — designing curricula, growing enrollment, and mentoring thousands of students and hundreds of new engineers into the field.',
    metrics: [
      { n: '100s', l: 'engineers taught' },
      { n: '10×', l: 'program growth' },
    ],
  },
]

export const talks = [
  {
    kind: 'ESSAY',
    t: 'Your customers don\'t want your AI assistant',
    take: 'Product judgment for AI: where it earns trust, and where it quietly fails.',
    link: 'https://impactvelocity.studio/notes/your-customers-dont-want-your-ai-assistant',
  },
  {
    kind: 'ESSAY',
    t: 'The least-used but most-powerful debugging tool for engineers',
    take: 'A high-powered tool that uses binary search to pinpoint the exact commit that introduced the bug.',
    link: 'https://toddhalbert.medium.com/the-least-used-but-most-powerful-debugging-tool-for-engineers-77aec7cda226',
  },
  {
    kind: 'ESSAY',
    t: '7 Reasons Why Most Products Fail',
    take: 'Most products fail because companies overcomplicate their initial vision instead of launching a simple, customer-validated feature built by a well-managed team with clear scope.',
    link: 'https://toddhalbert.medium.com/7-reasons-why-most-products-fail-ef5ed8c17db8',
  },
]

// Topographic contour lines for the hero backdrop. Deterministic — generated once
// at module load so server and client render identical paths (no hydration drift).
// Mirrors the handoff's buildContours() at the "Moderate" intensity (13 rows).
export function buildContours(rows = 13) {
  const paths = []
  const W = 1440
  for (let i = 0; i < rows; i++) {
    const baseY = 24 + i * (740 / rows)
    const amp = 16 + (i % 4) * 9
    const phase = i * 0.55
    let d = 'M -60 ' + baseY.toFixed(1)
    for (let x = -60; x <= W + 60; x += 26) {
      const y = baseY + Math.sin(x / 175 + phase) * amp + Math.cos(x / 430 + i * 0.4) * 8
      d += ' L ' + x + ' ' + y.toFixed(1)
    }
    paths.push(d)
  }
  return paths
}

export const contourPaths = buildContours(13)
export const contourOpacity = 0.085
