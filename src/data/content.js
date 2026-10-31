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
    kind: 'GPS fleet tracking SaaS',
    role: 'Software Engineer',
    company: 'trackNOW',
    period: 'Jul 2026 – Present',
    year: 'Now',
    // 12,000 devices and Kafka come from the brief only, not the résumé. TODO: confirm.
    summary:
      'Features for a fleet tracking platform serving logistics, school-bus and enterprise fleets: live tracking, trip history, geo-fencing and reports from high-frequency GPS data.',
    overview:
      'A GPS-based fleet tracking SaaS platform used by logistics, school-bus and enterprise fleets. I build features across the backend and the UI, and I own modules from the first requirement to production.',
    highlights: [
      'Built backend and UI for live vehicle tracking, trip history, geo-fencing and fleet reports.',
      'Process high-frequency GPS device data.',
      'Own modules from scratch: requirement analysis, database design, API and UI development, then deployment to production.',
      'Device data flows through Kafka queues, at a scale of 12,000 devices.',
    ],
    stack: ['ASP.NET Core', 'Angular', 'PostgreSQL', 'Kafka'],
  },
  {
    slug: 'oprs',
    title: 'OPRS',
    kind: 'Online Passenger Reservation System',
    role: 'Core developer',
    company: 'Amnex',
    period: 'Feb 2024 – Jul 2026',
    year: '2024–26',
    summary:
      'Scalable ticket booking for state transport operations. Core developer: built the APIs and UI, initiated four payment gateway integrations and wrote the crew scheduling algorithm.',
    overview:
      'The online ticket booking platform behind state transport operations. I was a core developer on it, owning APIs, the Angular UI and the third-party integrations that let passengers book and pay.',
    highlights: [
      'Initiated and integrated four payment gateways: PhonePe, Razorpay, Cashfree and SBI.',
      'Built RESTful APIs in ASP.NET Core and the Angular UI for route management, booking workflows, seat layouts and transaction handling.',
      'Integrated external platforms, including ONDC, for reliable data exchange and better interoperability.',
      'Implemented the planning and scheduling algorithm for crew.',
      'Developed and maintained a scalable system for state transport operations.',
    ],
    stack: ['ASP.NET Core', 'Angular', 'PhonePe', 'Razorpay', 'Cashfree', 'SBI', 'ONDC'],
  },
  {
    slug: 'ondc',
    title: 'ONDC mobility APIs',
    kind: 'TRV12 protocol integration',
    role: 'Developer',
    company: 'Amnex',
    period: 'Feb 2024 – Jul 2026',
    year: '2024–26',
    summary:
      'ONDC-compliant mobility APIs with runtime vendor contract changes, version resilience, payload validation and seat layout mapping.',
    overview:
      'Connected the booking platform to ONDC (Open Network for Digital Commerce) through its TRV12 mobility protocol.',
    highlights: [
      'Designed and integrated ONDC-compliant mobility APIs on the TRV12 protocol.',
      'Supported runtime vendor contract changes.',
      'Built in version resilience.',
      'Added payload validation and seat layout mapping.',
    ],
    stack: ['ONDC', 'TRV12', 'REST', 'ASP.NET Core'],
  },
  {
    slug: 'obu',
    title: 'OBU panel',
    kind: 'Live bus tracking control panel',
    role: 'Developer',
    company: 'Amnex',
    period: 'Feb 2024 – Jul 2026',
    year: '2024–26',
    summary:
      'Control panel that parses GPS device data to show live location, speed, ignition status and route adherence on maps.',
    overview:
      'A control panel for live bus tracking and diagnostics, driven by raw data strings from on-board GPS devices.',
    highlights: [
      'Parsed GPS device data strings into structured, usable telemetry.',
      'Visualized real-time location, speed, ignition status and route adherence on map interfaces.',
      'Added diagnostics for the devices.',
    ],
    stack: ['GPS', 'Maps', 'Diagnostics'],
  },
  {
    slug: 'whatsapp-bot',
    title: 'WhatsApp chatbot',
    kind: 'Complaint registration and support',
    role: 'Developer',
    company: 'Amnex',
    period: 'Feb 2024 – Jul 2026',
    year: '2024–26',
    summary:
      'Built in n8n with PostgreSQL, Rasa, Gemini, Rocket.Chat and the WhatsApp API for complaints, AI and human support and ticket tracking.',
    overview:
      'A fully working WhatsApp chatbot for complaint registration, AI and human chat support and real-time ticket tracking.',
    highlights: [
      'Built the workflow in n8n, tying together PostgreSQL, Rasa, Gemini, Rocket.Chat and the WhatsApp API.',
      'Complaint registration end to end through chat.',
      'AI answers with a handoff to human agents when needed.',
      'Real-time ticket tracking from the same conversation.',
    ],
    stack: ['n8n', 'Gemini', 'Rasa', 'Rocket.Chat', 'WhatsApp API', 'PostgreSQL'],
  },
  {
    slug: 'ems',
    title: 'EMS & SLA automation',
    kind: 'Monitoring and reporting',
    role: 'Developer',
    company: 'Amnex',
    period: 'Feb 2024 – Jul 2026',
    year: '2024–26',
    summary:
      'Centralized Grafana monitoring with alerts, plus SLA penalty reports generated automatically from uptime and incident data.',
    overview:
      'Monitoring that identifies issues proactively, and SLA reporting that generates itself.',
    highlights: [
      'Configured a centralized Grafana dashboard for server and container resource utilization.',
      'Set up alerts and automated logs to catch issues proactively.',
      'Automated SLA penalty report generation from API uptime and downtime, incident logs and scheduled downtime.',
      'Improved reporting speed and compliance accuracy.',
    ],
    stack: ['Grafana', 'Prometheus', 'SigNoz'],
  },
  {
    slug: 'notifications',
    title: 'Notification engine',
    kind: 'Automated messaging platform', // TODO: confirm employer and dates
    role: 'Designed and built alone',
    company: '',
    period: '',
    year: 'Solo',
    summary:
      'Designed and built alone. Fully automated, dynamic and template-based, with a scheduler.',
    overview:
      'A notification module I designed and built on my own.',
    highlights: [
      'Fully automated delivery.',
      'Dynamic, template-based content.',
      'Built-in scheduler for timed sends.',
    ],
    stack: ['Templates', 'Scheduler'],
  },
  {
    slug: 'waste-management',
    title: 'Waste management system',
    kind: 'Solo build', // TODO: confirm employer and dates
    role: 'Sole developer',
    company: '',
    period: '',
    year: 'Solo',
    summary: 'Built end to end as the only developer. Fully automated.',
    overview: 'A waste management system built end to end as the only developer.',
    highlights: ['Sole developer from start to finish.', 'Fully automated operation.'],
    stack: [],
  },
  {
    slug: 'planvers',
    title: 'Planvers',
    kind: 'My own startup',
    role: 'Founder',
    company: 'Planvers',
    period: 'In progress',
    year: 'Founder',
    // TODO: replace with one line on what Planvers does and who it is for.
    summary:
      'A product I am building myself, across a mobile app, vendor and admin web apps and an API.',
    overview:
      'My own startup, built alongside my job. It is split into separate codebases for the mobile app, the vendor app, the admin app and the API.',
    highlights: [
      'Mobile app built with Flutter and Dart.',
      'Vendor and admin web apps in TypeScript.',
      'A dedicated API on PostgreSQL.',
    ],
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
