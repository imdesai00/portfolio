// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Primary source: the owner's résumé (dates, employers, bullets).
//  Secondary: PROJECT_BRIEF.md "Owner facts". Where the two
//  disagreed, the résumé won. Items marked TODO are unconfirmed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Harsh Desai',
  initials: 'HD',
  role: 'Software Engineer',
  location: 'Ahmedabad, Gujarat',
  timeZone: 'Asia/Kolkata',
  email: 'harsh.hd.desai00@gmail.com',
  headline: ['Backend systems', 'for things that move.'],
  intro:
    'Full-stack engineer with 2.5+ years shipping production systems on ASP.NET Core, Angular and PostgreSQL: ticket booking, real-time GPS tracking, ONDC mobility APIs, monitoring and SLA automation.',
  availability: 'Software Engineer at trackNOW · Ahmedabad, Gujarat',
  statement:
    'I own problems end to end: requirements, database, API, UI and deployment.',
  resumeUrl: '/resume.pdf',
}

export const channels = [
  { label: 'GitHub', href: 'https://github.com/imdesai00' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harsh-desai-b84281178/' },
  { label: 'X.com', href: 'https://x.com/imdesai00' },
]

export const projects = [
  {
    slug: 'fleet',
    title: 'Fleet & telematics platform',
    kind: 'GPS fleet tracking SaaS · trackNOW',
    year: 'Now',
    // 12,000 devices and Kafka come from the brief only, not the résumé. TODO: confirm.
    summary:
      'Features for a fleet tracking platform serving logistics, school-bus and enterprise fleets: live tracking, trip history, geo-fencing and reports from high-frequency GPS data. Modules owned from requirements to production.',
    stack: ['ASP.NET Core', 'Angular', 'PostgreSQL', 'Kafka'],
  },
  {
    slug: 'oprs',
    title: 'OPRS',
    kind: 'Online Passenger Reservation System · Amnex',
    year: '2024–26',
    summary:
      'Scalable ticket booking for state transport operations. REST APIs and Angular UI for route management, booking workflows, seat layouts and transactions. Integrated four payment gateways and built the crew planning and scheduling algorithm.',
    stack: ['ASP.NET Core', 'Angular', 'PhonePe', 'Razorpay', 'Cashfree', 'SBI'],
  },
  {
    slug: 'ondc',
    title: 'ONDC mobility APIs',
    kind: 'TRV12 protocol · Amnex',
    year: '2024–26',
    summary:
      'Designed and integrated ONDC-compliant mobility APIs. Supports runtime vendor contract changes, version resilience, payload validation and seat layout mapping.',
    stack: ['ONDC', 'TRV12', 'REST'],
  },
  {
    slug: 'obu',
    title: 'OBU panel',
    kind: 'Live bus tracking · Amnex',
    year: '2024–26',
    summary:
      'Control panel that parses GPS device data strings to show real-time location, speed, ignition status and route adherence on maps, with diagnostics.',
    stack: ['GPS', 'Maps', 'Diagnostics'],
  },
  {
    slug: 'whatsapp-bot',
    title: 'WhatsApp chatbot',
    kind: 'Complaint automation · Amnex',
    year: '2024–26',
    summary:
      'Built in n8n with PostgreSQL, Rasa, Gemini, Rocket.Chat and the WhatsApp API. Registers complaints, offers AI and human chat support and tracks tickets in real time.',
    stack: ['n8n', 'Gemini', 'Rasa', 'WhatsApp API'],
  },
  {
    slug: 'ems',
    title: 'EMS & SLA automation',
    kind: 'Monitoring and reporting · Amnex',
    year: '2024–26',
    summary:
      'Centralized Grafana dashboard for server and container utilization, with alerts and automated logs. SLA penalty reports generated automatically from API uptime, incident logs and scheduled downtime.',
    stack: ['Grafana', 'Prometheus', 'SigNoz'],
  },
  {
    slug: 'notifications',
    title: 'Notification engine',
    kind: 'Messaging platform', // TODO: confirm employer and dates
    year: 'Solo',
    summary:
      'Designed and built alone. Fully automated, dynamic and template-based, with a scheduler.',
    stack: ['Templates', 'Scheduler'],
  },
  {
    slug: 'waste-management',
    title: 'Waste management system',
    kind: 'Solo build', // TODO: confirm employer and dates
    year: 'Solo',
    summary: 'Built end to end as the only developer. Fully automated.',
    stack: [],
  },
  {
    slug: 'planvers',
    title: 'Planvers',
    kind: 'My own startup',
    year: 'Founder',
    // TODO: replace with one line on what Planvers does and who it is for.
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
  {
    title: 'Smart contracts',
    text: 'Solidity contracts on Ethereum testnets with Hardhat and Truffle, wired to React dApps with ethers.js and Web3.js.',
  },
]

export const skills = [
  { group: 'Languages', items: 'C#, JavaScript, TypeScript, SQL, Solidity, Python (basic)' },
  {
    group: 'Frameworks',
    items: 'ASP.NET Core, ASP.NET MVC, Web API, Angular, AngularJS, React, Entity Framework, LINQ, ADO.NET',
  },
  { group: 'Databases', items: 'PostgreSQL, Microsoft SQL Server, MongoDB' },
  { group: 'APIs & integration', items: 'REST, ONDC, WhatsApp API, JWT, Kafka, WCF (basic)' },
  {
    group: 'DevOps & tools',
    items: 'Git, GitHub, GitLab, Docker, CI/CD, Jenkins, Grafana, Prometheus, SigNoz, n8n',
  },
  { group: 'Blockchain', items: 'Solidity, Hardhat, Truffle, ethers.js, Web3.js, ERC standards' },
  { group: 'Concepts', items: 'OOP, design patterns, dependency injection, Agile' },
]

export const stack = [
  'C#', 'ASP.NET Core', 'Web API', 'Angular', 'React', 'TypeScript',
  'PostgreSQL', 'SQL Server', 'MongoDB', 'Kafka', 'ONDC', 'WhatsApp API',
  'Docker', 'Jenkins', 'Grafana', 'n8n', 'Solidity',
]

export const experience = [
  {
    period: 'Jul 2026 – Present',
    role: 'Software Engineer',
    org: 'trackNOW Pvt. Ltd.',
    url: 'https://www.tracknow.in/',
    text: 'Building features for a GPS fleet tracking SaaS platform with ASP.NET Core, Angular and PostgreSQL. Own modules end to end, from requirements and database design to deployment.',
  },
  {
    period: 'Feb 2024 – Jul 2026',
    role: 'Associate Software Developer',
    org: 'Amnex Infotechnologies Pvt. Ltd.',
    url: 'https://amnex.com/',
    text: 'Developed OPRS, ONDC mobility APIs, the OBU tracking panel, a WhatsApp complaint chatbot, Grafana monitoring and SLA report automation for transport clients.',
  },
  {
    period: 'Jul 2022 – Jul 2023',
    role: 'Blockchain Developer Intern',
    org: 'Gigapher',
    text: 'Built and deployed Solidity smart contracts on Ethereum testnets and connected them to React front ends.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering',
    school: 'LJ Institute of Engineering & Technology',
    score: 'CGPA 8.04',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'Government Polytechnic, Jamnagar',
    score: 'CGPA 8.82',
  },
]

export const faqs = [
  {
    q: 'What do you work with day to day?',
    a: 'ASP.NET Core and Web APIs on the backend, Angular on the front, PostgreSQL underneath, with Docker, CI/CD and Grafana around it.',
  },
  {
    q: 'What kind of problems do you like?',
    a: 'Transport and mobility systems: booking, payments, real-time GPS data, integrations and the monitoring that keeps them honest.',
  },
  {
    q: 'Do you use AI tools?',
    a: 'Yes. I follow AI tooling and apply it where it helps, for example the WhatsApp complaint chatbot that mixes Gemini and Rasa with human handoff.',
  },
]
