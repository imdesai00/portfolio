// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Source: PROJECT_BRIEF.md ("Owner facts"). No metrics beyond
//  what the owner stated. Items marked TODO are still unconfirmed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Harsh Desai',
  initials: 'HD',
  role: 'Software Engineer',
  location: 'Ahmedabad, India',
  timeZone: 'Asia/Kolkata',
  email: 'harsh.hd.desai00@gmail.com',
  headline: ['Backend systems', 'for things that move.'],
  intro:
    'Full-stack software engineer with three years in transport and mobility: ticketing, payments, fleet tracking and notifications.',
  availability: 'Software Engineer at TrackNow · Ahmedabad, India',
  statement: 'I own problems end to end: architecture, integrations, deployment and monitoring.',
  resumeUrl: '#', // TODO: add /resume.pdf to public/ and set '/resume.pdf'. Button is hidden while '#'.
}

export const channels = [
  { label: 'GitHub', href: 'https://github.com/imdesai00' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harsh-desai-b84281178' },
  { label: 'X.com', href: 'https://x.com/imdesai00' },
]

export const projects = [
  {
    slug: 'avls',
    title: 'AVLS',
    kind: 'Vehicle tracking · TrackNow',
    year: 'Now',
    summary:
      'GPS tracking platform ingesting data from multiple device protocols and device panels through Kafka queues. Runs 12,000 devices.',
    stack: ['Kafka', 'GPS / IoT protocols'],
  },
  {
    slug: 'oprs',
    title: 'OPRS',
    kind: 'Online ticket booking · Amnex',
    year: 'Mobility',
    summary:
      'Core developer on an online ticket booking platform. Integrated ONDC and four payment gateways. Also built the crew planning and scheduling algorithm.',
    stack: ['ONDC', 'PhonePe', 'Razorpay', 'Cashfree', 'SBI'],
  },
  {
    slug: 'notifications',
    title: 'Notification engine',
    kind: 'Messaging platform · TrackNow',
    year: 'Now',
    summary:
      'Designed and built alone. Fully automated, dynamic and template-based, with a scheduler.',
    stack: ['Templates', 'Scheduler'],
  },
  {
    slug: 'ems',
    title: 'EMS observability',
    kind: 'Telemetry & traces · TrackNow',
    year: 'Now',
    summary:
      'System telemetry and traces used for SLA review. Integrated the whole stack alone.',
    stack: ['SigNoz', 'Grafana', 'Prometheus'],
  },
  {
    slug: 'whatsapp-bot',
    title: 'WhatsApp grievance bot',
    kind: 'Automation · TrackNow',
    year: 'Now',
    summary:
      'Chatbot for booking grievance tickets and answering queries over WhatsApp. Built in n8n and fully working.',
    stack: ['n8n', 'WhatsApp'],
  },
  {
    slug: 'waste-management',
    title: 'Waste management system',
    kind: 'Solo build', // TODO: confirm this is TrackNow
    year: 'Solo',
    summary: 'Built end to end as the only developer. Fully automated.',
    stack: [],
  },
  {
    slug: 'planvers',
    title: 'Planvers',
    kind: 'My own startup',
    year: 'Founder',
    // TODO: replace with a one-line description of what Planvers does and who it is for.
    summary:
      'A product I am building myself, across a mobile app, vendor and admin web apps and an API.',
    stack: ['Flutter', 'TypeScript', 'PostgreSQL'],
  },
]

export const lab = [
  {
    title: 'Jenkins CI/CD pipeline',
    text: 'Merge to main triggers build and tests. On success it publishes and emails a report.',
  },
]

export const services = [
  {
    n: '01',
    title: 'Backend & integrations',
    text: 'C#, ASP.NET Core, payment gateways, ONDC, Kafka, GPS/IoT protocols and WhatsApp.',
  },
  {
    n: '02',
    title: 'Frontend & mobile',
    text: 'React, TypeScript, Tailwind and Angular for the interfaces on top.',
  },
  {
    n: '03',
    title: 'Delivery & observability',
    text: 'Docker, Jenkins, Nginx, Prometheus, Grafana and SigNoz so systems ship and stay visible.',
  },
]

export const stack = [
  'C#', 'ASP.NET Core', 'Web API', 'Kafka', 'Hangfire', 'JWT',
  'React', 'TypeScript', 'Tailwind CSS', 'Angular',
  'PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB',
  'Docker', 'Jenkins', 'Nginx', 'Prometheus', 'Grafana', 'SigNoz', 'n8n',
]

// Dates not provided yet, so none are shown.
export const experience = [
  {
    period: 'Current',
    role: 'Software Engineer',
    org: 'TrackNow',
    url: 'https://www.tracknow.in/',
    text: 'Owns AVLS across 12,000 devices on Kafka, the notification engine, EMS observability and the WhatsApp grievance bot.',
  },
  {
    period: 'Previous',
    role: 'Software Developer, Mobility',
    org: 'Amnex',
    url: 'https://amnex.com/',
    text: 'Core developer on OPRS: ONDC, four payment gateways and the crew planning and scheduling algorithm.',
  },
]

export const faqs = [
  {
    q: 'What do you work with day to day?',
    a: 'Mostly C# and ASP.NET Core on the backend, Kafka for streaming, React and TypeScript on the front, with Docker, Jenkins and Prometheus/Grafana around it.',
  },
  {
    q: 'What kind of problems do you like?',
    a: 'Real-time and integration-heavy systems: payments, device data, notifications and the monitoring that keeps them honest.',
  },
  {
    q: 'Do you use AI tools?',
    a: 'Yes. I follow AI tooling closely and apply it where it helps, for example the n8n WhatsApp grievance bot.',
  },
]
