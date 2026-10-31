# Portfolio

Personal software-engineer portfolio. React + Vite + Tailwind CSS v4.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Editing content

Everything lives in `src/data/content.js`. Entries marked `TODO` are placeholders.
Replace them with your real details; no component changes needed.

## Résumé

`public/resume.pdf` is served at `/resume.pdf`. Its source is `resume/resume.html`;
regenerate the PDF by printing that file to A4 PDF (for example with Playwright's `page.pdf`).
