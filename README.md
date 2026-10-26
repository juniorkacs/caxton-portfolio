# Caxton Ojiambo: engineering portfolio

Personal portfolio site for Caxton Ojiambo, Senior Systems Engineer (MBSE). It's a static Next.js site, styled as a set of SysML diagram frames, that presents four working demonstration projects.

> **Before publishing:** work through [VERIFY.md](VERIFY.md). It lists the CV details to confirm, and the settings (GitHub username, site URL, demo links) to fill in.

## Design

- **Concept:** each section is drawn as a SysML diagram frame with the standard name tab, `kind [element] name`. The hero is a block definition diagram: the engineer is the system block, and four capability blocks each link to the project that demonstrates them.
- **Palette:** blueprint navy `#0a1628` with a cyan accent `#45c8e6` and an amber signal colour used sparingly. A light "drafting paper" theme is available from the header and remembered per browser.
- **Type:** Archivo variable, using its width axis. Expanded for headlines, normal for body text, condensed for labels.
- **Motion:** one load-in sequence for the hero diagram only, switched off for visitors who ask for reduced motion.
- **Method section:** an interactive systems-engineering V-model. Each stage explains what happens there, what it produces, which stage checks it, and which project shows it in practice.

## Stack

| Choice | Reason |
|---|---|
| Next.js 16 (App Router) with `output: "export"` | Plain static files, so hosting is free, there's no server to maintain, and pages load fast |
| TypeScript | Content and components are type-checked |
| Tailwind CSS 4 | Design tokens as CSS variables, with light and dark themes from one set of classes |
| lucide-react | Consistent icons. GitHub and LinkedIn marks are small inline SVGs, because Lucide no longer ships brand icons |
| No animation library | CSS handles the single load sequence. Framer Motion would add weight for nothing |

## Content

All copy lives in `src/content/`:

| File | Contains |
|---|---|
| `site.ts` | Name, title, contact links, GitHub username, site URL |
| `experience.ts` | Roles, education and certifications (from the CV) |
| `skills.ts` | Competency groups (from the CV) |
| `projects.ts` | The four projects, their screenshots and their checked facts |

Project screenshots in `public/projects/` were captured from the running applications.

## Develop

```bash
npm ci
npm run dev        # http://localhost:3000
npm run lint
npm run build      # static site in out/
```

## Deploy (free)

**GitHub Pages** (workflow included):

1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages > Source** and choose **GitHub Actions**.
3. Every push to `main` builds the site and publishes it. The workflow sets the base path automatically for project sites (`https://<user>.github.io/<repo>/`).

**Vercel** (an alternative): import the repository, keep the default Next.js settings and deploy. The static export works as is.

## Quality checks done

- Production build, ESLint and TypeScript all pass.
- Automated accessibility checks (axe-core, WCAG 2.1 AA rules) found no violations on the home page in both themes or on the 404 page.
- Layout checked at 1440 px and 390 px wide.
- A base-path build was served from a subfolder to confirm that assets, images and the CV download all resolve for GitHub Pages.
