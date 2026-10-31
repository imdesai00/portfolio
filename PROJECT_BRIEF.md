# Portfolio Project Brief (handoff from planning session)

Read this fully before doing anything. It captures every decision made so far.
**Status: site is built and merged. Content now follows the owner's résumé (see "Resolved by résumé"). Remaining open items are listed below.**

## Working rules
- Owner: Harsh Desai (GitHub: imdesai00), Ahmedabad, India. Designation: **Software Engineer** (full-stack).
- Owner wants a ruthless mentor: no sugarcoating, challenge weak ideas.
- **Never invent metrics, dates or facts.** Use only numbers the owner gave. Ask for the rest or phrase without numbers.
- Flow agreed: (1) finalize content -> (2) finalize design -> (3) build.
- Build stack: **React + Vite + Tailwind CSS**, plus GSAP ScrollTrigger, Lenis smooth scroll, Motion (Framer Motion).
- Owner wants **awesome animation and a light / white design** (not dark, not generic template look).

## Owner facts (from owner, authoritative)
- 3 years experience. Companies:
  1. **Amnex** (https://amnex.com/), first company, Mobility department.
  2. **TrackNow** (https://www.tracknow.in/), second company, **currently working here**.
- Email: harsh.hd.desai00@gmail.com
- LinkedIn: https://linkedin.com/in/harsh-desai-b84281178 | GitHub: https://github.com/imdesai00 | X: @imdesai00
- Instagram handle in the GitHub README is inconsistent (`imdesa00` vs `imdesai00`); email is public there. Owner should fix.

### Work (as told by owner)
**Amnex (Mobility):**
- **OPRS**: online ticket booking platform; owner was a **core developer**. Third-party integrations, including **ONDC** (mobility domain) and **4 payment gateways: PhonePe, Razorpay, Cashfree, SBI**.
- Implemented **planning and scheduling algorithm for crew**.

**TrackNow (current):**
- **AVLS** domain: GPS devices, multiple device protocols and device panels, integrated via **Kafka** queues; **12,000 devices**.
- **Notification module**: designed alone; fully automated, dynamic, template-based, with scheduler.
- **EMS**: system telemetry and traces for SLA review; integrated **SigNoz, Grafana, Prometheus** alone.
- **WhatsApp chatbot** built in **n8n** for grievance ticket booking and queries (fully working).
- **Waste management system**: solo developer, fully automated. (Owner said "second company"; confirm it is TrackNow.)
- Strong knowledge of AI tools; follows AI news and evaluates integration into current projects. (Only concrete proof so far: the n8n bot. Ask for more.)

**Personal / learning:**
- **Jenkins CI/CD pipeline**: merge to main triggers build + tests; on success publishes and emails a report.
- **Planvers**: owner's own startup (repos: planveres-app, -vendor, -admin, -mobile, -api; Flutter/Dart mobile, TypeScript web, PostgreSQL). Owner asked for a **short description**; real product description still needed. Confirm spelling (repos say "planveres").
- Public GitHub is mostly tutorial-level repos (JWT login, CRUD, Hangfire, Kafka demo, Docker guide, early Ethereum/web3 demos). De-emphasize these; show in a small "Automation / Learning lab" section only.

## Resolved by résumé (source of truth where it disagrees with the notes above)
Résumé lives at `public/resume.pdf` (source: `resume/resume.html`). It supersedes earlier assumptions:
- **Dates:** trackNOW Pvt. Ltd., Software Engineer, Jul 2026 – Present. Amnex Infotechnologies Pvt. Ltd., Associate Software Developer, Feb 2024 – Jul 2026. Gigapher, Blockchain Developer Intern, Jul 2022 – Jul 2023.
- **Experience length:** 2.5+ years (résumé), not "3 years".
- **Attribution:** OPRS, ONDC (TRV12), OBU panel, WhatsApp chatbot (n8n + PostgreSQL, Rasa, Gemini, Rocket.Chat), Grafana EMS and SLA automation are **Amnex** work. TrackNow is the fleet/telematics SaaS (ASP.NET Core, Angular, PostgreSQL). The earlier assumption that the chatbot and EMS were TrackNow was wrong.
- **Education:** B.E., LJ Institute of Engineering & Technology (CGPA 8.04); Diploma in Computer Engineering, Government Polytechnic, Jamnagar (CGPA 8.82).
- **Location/contact:** Ahmedabad, Gujarat. Résumé also lists a phone number; it is in the PDF only, not on the web pages.
- Closes open items 1, 2 (partly) and 6.

### Claims in the brief that the résumé does NOT confirm (kept on site, unattributed or flagged `TODO` in `src/data/content.js`)
- 12,000 devices and Kafka (placed on the TrackNow fleet card).
- Four payment gateways: PhonePe, Razorpay, Cashfree, SBI; crew planning and scheduling algorithm (on the OPRS card).
- Notification engine and waste management system (no employer or dates shown).
- SigNoz and Prometheus alongside Grafana (EMS card), Jenkins pipeline, Planvers.
- Résumé names EMS "Environmental Monitoring System"; the brief describes it as telemetry and traces for SLA review. The site avoids expanding the acronym until the owner confirms.

## Still open (ask owner)
1. Start/end dates for Amnex and TrackNow.
2. Whether TrackNow owns AVLS, notification, EMS, waste management, chatbot (assumed yes).
3. One line on what Planvers does and who it is for.
4. Confidentiality: name Amnex/TrackNow products or keep generic.
5. Any honest rough estimates for metrics (daily bookings, notifications/day, chatbot share) or leave out.
6. Resume file (never provided; Claude chat history was not accessible).
7. Whether contact form sends real email (EmailJS/Formspree) or just shows links.
8. Accent color: electric blue / orange / green / violet.

## Draft site content (not yet approved)
**Hero:** Harsh Desai, Software Engineer. "I build the backend systems behind things that move: ticketing, payments, fleet tracking and notifications." 3 years | .NET | React | Kafka | Observability | Founder, Planvers | Ahmedabad. CTAs: View Work / Resume / Contact.

**About:** Full-stack software engineer, three years in transport and mobility. Core developer of OPRS (ONDC + multi-gateway payments) at Amnex; runs a real-time tracking platform ingesting 12,000+ GPS devices over Kafka at TrackNow. Owns problems end to end (architecture, integrations, deployment, monitoring). Follows AI tooling and applies it where it helps. Building Planvers on the side.

**Sections:** Hero, About, Skills, Experience timeline (TrackNow, Amnex), Featured projects (AVLS, OPRS, Notification engine, EMS observability, Waste management, WhatsApp grievance bot, Planvers), Automation lab (Jenkins pipeline, backend patterns, short web3 note), AI note, Contact.

**Skills groups:** Backend (C#, ASP.NET Core, Web API, Kafka, Hangfire, JWT); Frontend/mobile (React, TypeScript, Tailwind, Angular, Flutter [confirm]); Data (PostgreSQL, SQL Server, MySQL, MongoDB); DevOps/observability (Docker, Jenkins, Nginx, Prometheus, Grafana, SigNoz); Integrations (payment gateways, ONDC, GPS/IoT protocols, WhatsApp); Automation/AI (n8n).
Dropped: Java, PHP, C and other old languages (weakens headline).

**Cut:** testimonials, services, blog, percentage skill bars.

## Design direction (not yet approved)
- Recommended: **"Editorial light"**: off-white background (not pure white), near-black text, one bold accent, huge editorial type, pinned-scroll project case studies, **animated architecture diagrams** (e.g., 12,000 devices -> Kafka -> dashboard) as the differentiator.
- Motion list: preloader name reveal, word-by-word headline reveal, pinned project sections, horizontal project strip, magnetic hover + custom cursor, marquee bands, staggered reveals.
- Avoid: 3D car-style hero (hurts load time on mobile; wrong signal for a backend engineer). Respect `prefers-reduced-motion`.
- Owner's concern: unable to pick one reference; wants a recommendation. Reference sites are inspiration only; the site is built from scratch, so mixing is fine.

## Reference sites (owner supplied; NOT yet analyzed, network was blocked)
- https://dribbble.com/shots/22265329-Developer-portfolio-website-design (static concept)
- https://www.olhalazarieva.com/ (appeared in Awwwards portfolio results)
- https://wearestokt.com/ (looks like a studio/agency site)
- https://www.eduardbodak.com/
- https://www.gm-meme.com/ (looks like a studio site)
Other leads: Takuya Oshima portfolio (https://www.awwwards.com/sites/takuya-oshima-portfolio, light/dark, Next.js + Tailwind + GSAP); Awwwards cream filter (https://www.awwwards.com/websites/%23FFFCF6/?page=2); Muzli list (https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/); GitHub: elijah-farrell/Awwwards-Portfolio, naphiertech/PortfolioInspired, topic `awwwards-inspired`.
Earlier (rejected as too basic/dark): Brittany Chiang, Lee Robinson, Bruno Simon.

## Next steps for the new session
1. Open each reference site above (the owner has allowed the domains), analyze design, motion, structure, and **recommend one** for a software engineer's portfolio, noting what to borrow from the others.
2. Get the open answers listed above; produce the final content for approval.
3. After content and design are approved, scaffold React + Vite + Tailwind and build.
