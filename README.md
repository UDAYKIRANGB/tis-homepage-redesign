# Tulas International School (TIS) - Homepage Redesign

An animated, high-converting, fully responsive redesign of the [Tulas International School](https://tis.edu.in/) homepage. The original brand colours (navy + yellow) and copy are retained.

- **Live demo:** https://tis-homepage-pi.vercel.app
- **Repository:** https://github.com/UDAYKIRANGB/tis-homepage-redesign

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

## 📦 Getting Started Locally

**Clone the repository:**

```bash
   git clone [https://github.com/UDAYKIRANGB/tis-homepage-redesign](https://github.com/UDAYKIRANGB/tis-homepage-redesign)
   cd tis-homepage-redesign

## Run locally
Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build      # outputs to dist/
npm run preview    # serves the build locally
```

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

