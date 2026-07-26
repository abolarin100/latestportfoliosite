# Jeremiah Atoyebi — portfolio

Next.js 14 (App Router) + Tailwind. No external UI libraries — everything is
hand-built to the "ledger" concept: every role and project carries a
mono-font status chip (`LIVE` / `SHIPPED` / `CLOSED`), echoing the
payment-status-transition work described on the site itself.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Structure

- `data/content.ts` — all real content (profile, experience, projects, stack).
  Edit this file to update the site; no other file needs to change for
  content edits.
- `components/` — one component per section (`Hero`, `Stats`, `Projects`,
  `Experience`, `Stack`, `Footer`) plus `LedgerChip`, the shared status-chip
  used across projects and experience.
- `app/globals.css` — design tokens live in `tailwind.config.ts`; this file
  just wires up Tailwind and a couple of global resets (reduced-motion,
  selection color, focus rings).

## Before deploying

1. Add a real `public/resume.pdf` — the "Download resume" button in `Hero.tsx`
   links to `/resume.pdf`.
2. Add a real `public/profile.jpg` for the About section photo — shows your
   initials on an army-green background until then.
3. Add real project screenshots to `public/projects/`:
   - `flowaid.png` (16:9, this is the flagship card — larger image)
   - `verveworld.png` (9:17 portrait — rendered in a phone frame)
   - `gywde.png` (16:10)
   - `multibag.png` (16:10)
   Until each file exists, that card shows a labeled placeholder telling you
   exactly which path to drop the image into — nothing looks broken.
4. Double-check `data/content.ts` — links, dates, and the LinkedIn URL are
   placeholders where the resume didn't give an exact URL.
5. `npm run build` to confirm a clean production build before deploying.

## Deploy

Vercel is the path of least resistance given the stack:

```bash
npx vercel
```

Or connect the GitHub repo directly in the Vercel dashboard for automatic
deploys on push.
