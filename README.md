# TIS Homepage Redesign

An animated, high-converting, fully responsive redesign of the [Tulas International School](https://tis.edu.in/) homepage. The original brand colours (navy + yellow) and copy are retained.

**Live demo:** https://YOUR-PROJECT.vercel.app
**Repository:** https://github.com/YOUR-USERNAME/tis-homepage 

## Tech stack
| Requirement | Used |
|---|---|
| Framework | React 18 (Vite) |
| Styling | Tailwind CSS v4 (theme tokens as CSS variables) |
| Animation | Framer Motion + CSS keyframes (sports marquee) |
| Deployment | Vercel (Netlify / GitHub Pages also work) |

## Standout features
The brief asks for at least two; all four are implemented.

| Feature | File |
|---|---|
| Custom cursor: ring + dot that grows over links and buttons, mouse devices only | `src/components/animation/CustomCursor.jsx` |
| Scroll-triggered staggered reveals | `src/components/ui/Reveal.jsx` |
| Animated dark/light theme switcher, saved and applied before first paint | `src/components/animation/ThemeToggle.jsx`, `src/hooks/useTheme.js` |
| Spring-smoothed scroll progress bar | `src/components/animation/ScrollProgress.jsx` |

**Also included**
- 3D tilt and glow cards, animated stat counters, a pausable sports marquee and auto-rotating reviews
- Conversion layer: sticky call + enquire bar, hero trust strip, 3-step admissions, FAQ accordion, closing CTA banner
- Animated mobile menu, semantic HTML, and `prefers-reduced-motion` support

## Run locally
Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build:

```bash
npm run build      # outputs to dist/
npm run preview    # serves the build locally
```

## Deploy
**Vercel (recommended)**
1. Push the repo to GitHub.
2. On vercel.com choose *Add New → Project* and import the repo.
3. Vercel detects Vite automatically: build command `npm run build`, output directory `dist`.
4. Click *Deploy*, then paste the live URL at the top of this README.

**Netlify:** same settings (build `npm run build`, publish `dist`).

**GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.js`, run `npm run build` and publish `dist/`.

## Project structure
```
src/
├── components/
│   ├── ui/          Button, Card, Reveal, SectionHeading
│   ├── layout/      Navbar (mobile menu), Footer, StickyCta
│   ├── sections/    Hero, About, Programs, Stats, Campus, Sports, Rankings,
│   │                Testimonials, Steps, Enquiry, Faq, CtaBanner
│   └── animation/   ScrollProgress, CustomCursor, ThemeToggle
├── hooks/           useTheme, useFinePointer
├── data/            content.js (all copy, navigation, stats)
└── styles/          index.css (Tailwind + theme tokens)
```

## Design decisions
- All copy lives in `data/content.js`, so components stay presentational.
- Animations use transform and opacity only, to keep frame rates smooth.
- Reveals play once. Touch devices skip the cursor and tilt effects.
- The theme is stored in `localStorage` and set by an inline script in `index.html`, so there is no flash on load.

## Notes
- The enquiry form is front-end only. Connect it to an admissions API or CRM for production.
- Program names and FAQ answers are built from facts on tis.edu.in; edit them in `content.js`.
