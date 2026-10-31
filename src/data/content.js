// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Everything marked TODO is PLACEHOLDER text. Replace it with
//  your real details — no component code needs to change.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Harsh Desai', // TODO confirm spelling
  initials: 'HD',
  role: 'Software Engineer', // TODO e.g. "Backend Engineer", "Full-Stack Engineer"
  location: 'India', // TODO city / country
  timeZone: 'Asia/Kolkata', // TODO IANA zone, drives the live clock
  email: 'hello@example.com', // TODO your public email
  headline: ['Building software', 'that holds up.'], // TODO
  intro:
    'I design and ship reliable web products, from the database to the pixel. Replace this with a 1–2 sentence pitch.', // TODO
  availability: 'Open to full-time roles · Remote worldwide', // TODO
  statement: 'Anyone can make it work once. The craft is making it keep working.', // TODO
  resumeUrl: '#', // TODO link to your CV (PDF)
}

export const channels = [
  { label: 'GitHub', href: 'https://github.com/imdesai00' },
  { label: 'LinkedIn', href: '#' }, // TODO
  { label: 'X.com', href: '#' }, // TODO
]

export const projects = [
  {
    slug: 'project-one',
    title: 'Project One', // TODO
    kind: 'Full-stack web app', // TODO
    year: '2025',
    summary:
      'One sentence on the problem it solves and the result. Add a real metric, e.g. "cut report time from 4h to 6min".', // TODO
    stack: ['React', 'Node.js', 'PostgreSQL'], // TODO
    live: '#', // TODO
    repo: '#', // TODO
    tone: 'bg-accent text-ink',
  },
  {
    slug: 'project-two',
    title: 'Project Two', // TODO
    kind: 'API & infrastructure', // TODO
    year: '2024',
    summary: 'What it is, what you owned, what changed because of it.', // TODO
    stack: ['TypeScript', 'Docker', 'AWS'], // TODO
    live: '#',
    repo: '#',
    tone: 'bg-lime text-ink',
  },
  {
    slug: 'project-three',
    title: 'Project Three', // TODO
    kind: 'Open source tool', // TODO
    year: '2024',
    summary: 'What it is, what you owned, what changed because of it.', // TODO
    stack: ['Python', 'FastAPI', 'Redis'], // TODO
    live: '#',
    repo: '#',
    tone: 'bg-ink text-paper',
  },
]

export const services = [
  {
    n: '01',
    title: 'Backend & APIs',
    text: 'Clean, tested services and data models that scale past the demo.', // TODO
  },
  {
    n: '02',
    title: 'Frontend Engineering',
    text: 'Fast, accessible interfaces with the details sweated.', // TODO
  },
  {
    n: '03',
    title: 'Systems & Delivery',
    text: 'CI/CD, cloud and observability so shipping is boring, in a good way.', // TODO
  },
]

export const stack = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL',
  'Docker', 'AWS', 'Git', 'REST', 'GraphQL', 'Tailwind CSS',
] // TODO

export const experience = [
  {
    period: '2024 – Now', // TODO
    role: 'Software Engineer', // TODO
    org: 'Company Name', // TODO
    text: 'Two lines on what you built and the impact.', // TODO
  },
  {
    period: '2022 – 2024', // TODO
    role: 'Junior Developer', // TODO
    org: 'Company Name', // TODO
    text: 'Two lines on what you built and the impact.', // TODO
  },
  {
    period: '2018 – 2022', // TODO
    role: 'B.Tech, Computer Engineering', // TODO
    org: 'University Name', // TODO
    text: 'Anything worth a line: thesis, awards, clubs.', // TODO
  },
]

export const faqs = [
  {
    q: 'Are you available for new roles?',
    a: 'Yes. See the availability line above, then drop me an email.', // TODO
  },
  {
    q: 'What do you work with day to day?',
    a: 'Mostly TypeScript, React, Node and Postgres, deployed on AWS. I pick the tool that fits the problem.', // TODO
  },
  {
    q: 'Can you work across time zones?',
    a: 'Yes. I work remotely and keep overlap hours with the team.', // TODO
  },
]
