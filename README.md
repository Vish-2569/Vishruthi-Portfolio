<div align="center">

# Vishruthi K V — Portfolio

**Aspiring Full Stack Developer · Oracle Certified Java SE 21 Developer · ECE @ Saveetha Engineering College**

[GitHub](https://github.com/KVVISHRUTHI) · [LinkedIn](https://www.linkedin.com/in/vishruthikv/)

</div>

---

A Next.js 15 (App Router) portfolio with React 19, Tailwind CSS v4, shadcn/ui and Motion.
Everything from the original design is kept: the 3D tilting avatar, flip sentences, scrolling tech-stack marquee,
live GitHub contribution graph, hover-to-expand journey cards with auto-sliding photo carousels, project gallery,
certificates, contact form, dark/light theme, resume viewer, vCard, Open Graph images and `/llms.txt`.

## Run it locally

Requires Node.js 18+ and pnpm 9+.

```bash
pnpm install
pnpm dev          # http://localhost:1408
```

Production build: `pnpm build && pnpm start`. Tests: `pnpm test`.

## Where your content lives

All personal content is plain TypeScript data — edit these files, nothing else needed:

| What | File |
| --- | --- |
| Name, bio, flip sentences, about, email, location | `src/features/profile/data/user.ts` |
| Hero paragraph & tech pills | `src/features/profile/components/profile-hero.tsx` |
| LinkedIn / GitHub / Email links | `src/features/profile/data/social-links.ts` |
| Experience (ESG Sentinel) | `src/features/profile/data/experiences.ts` |
| Projects (one file each) | `src/features/profile/data/projects/*.ts` |
| Education | `src/features/profile/data/education.ts` |
| Journey (hackathons) | `src/features/profile/data/timeline.ts` |
| Certifications | `src/features/profile/data/certifications.ts` |
| Awards (used in `/llms.txt`) | `src/features/profile/data/awards.ts` |
| Tech stack (marquee + `/tech-stack` page) | `src/features/profile/data/tech-stack.ts` |
| GitHub username for the contribution graph | `src/config/site.ts` |

Search the code for `TODO` to find details still waiting on you (dates, credential links, repo URLs).

## Replacing the placeholder pictures

Just overwrite these files with your own images (keep the same file names — `.webp`, `.jpg` or `.png` all work
if you also update the path in the data file):

| Picture | File(s) | Best size |
| --- | --- | --- |
| Your photo | `public/images/avatar.webp` | square, 800×800 |
| Hackathon photos | `public/images/timeline/<hackathon>/1.webp`, `2.webp`, `3.webp` | 16:9, e.g. 1280×720 |
| Certificates | `public/images/certifications/*.webp` | 4:3, e.g. 1200×900 |
| Project covers | `public/images/projects/*.webp` | 16:9 |
| Resume | `public/Vishruthi_KV_Resume.pdf` | — |

To show more or fewer photos for a hackathon, add or remove paths in that event's `images` list in `timeline.ts`.

## Deploy on Vercel

1. Push this folder to a GitHub repo (e.g. `KVVISHRUTHI/portfolio`).
2. Import it at [vercel.com/new](https://vercel.com/new) — the defaults (pnpm, Next.js) just work.
3. Set environment variables (Project → Settings → Environment Variables):
   - `APP_URL` — your live URL, e.g. `https://vishruthikv.vercel.app` (used for SEO, sitemap, OG tags).
   - `NEXT_PUBLIC_CONTACT_FORM_URL` — optional, enables the contact form (see below).
4. If your URL differs from `https://vishruthikv.vercel.app`, also update `website` in `user.ts`.

### Contact form

The "Send Message" form posts to a free Google Apps Script that saves messages to a Google Sheet and emails you.
Follow the steps at the top of `scripts/google-apps-script.js`, then set `NEXT_PUBLIC_CONTACT_FORM_URL`.

## Credits

Design and code based on the open-source portfolio by [Gautham Krishna](https://github.com/heyitsgautham/portfolio)
(itself built on [chanhdai.com](https://github.com/ncdai/chanhdai.com)), MIT licensed.
The `/components` showcase and the `/r` component registry are part of that original template.
