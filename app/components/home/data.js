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
    body: 'Founded a coding bootcamp and led academic programs across two decades — designing curricula, growing enrollment, and mentoring thousands of new engineers into the field.',
    metrics: [
      { n: '1,000s', l: 'engineers taught' },
      { n: '20×', l: 'program growth' },
    ],
  },
]

export const talks = [
  {
    kind: 'KEYNOTE',
    t: 'Rebuilding engineering organizations without breaking delivery',
    take: 'Modernize architecture, process, and team — without stalling the roadmap.',
  },
  {
    kind: 'TALK',
    t: 'Building AI tools customers actually want',
    take: 'Product judgment for AI: where it earns trust, and where it quietly fails.',
  },
  {
    kind: 'ESSAY',
    t: 'What software leaders can learn from scientific reasoning',
    take: 'Hypotheses, evidence, and models as an operating system for engineering decisions.',
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
