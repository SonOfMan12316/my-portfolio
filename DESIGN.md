# Design System — Emanyo Charles Portfolio

This document is the source of truth for the visual design of this portfolio.
When making changes, consult this file first. If a change contradicts something here, update the doc.

---

## Typography

### Display / Headings — Playfair Display
- Font family: `Playfair Display` (via `next/font/google`, variable `--font-playfair`)
- Applied via Tailwind utility: `.font-serif`
- Available weights: 400 (regular), 500, 600, 700
- **Note:** Weight 300 (light) does not exist in Playfair Display. Use `font-normal` (400) for display text. Using `font-light` will silently fall back to 400.
- Used for: hero name, section headings (`h2`), project titles in the editorial list, contact CTA

### Body / UI — Inter
- Font family: `Inter` (via `next/font/google`, variable `--font-inter`)
- Applied as the default body font via `body { font-family: var(--font-inter), ... }`
- Available weights: 300, 400, 500, 600, 700
- Used for: navigation, descriptions, labels, metadata, tech tags, buttons, all small UI text

### Scale reference
| Role | Tailwind / CSS |
|---|---|
| Hero display name | `clamp(3.8rem, 12.5vw, 9.5rem)` · Playfair · weight 400 |
| Section heading `h2` | `clamp(2rem, 5vw, 3.25rem)` · Playfair · weight 400 |
| Contact CTA | `clamp(1.75rem, 4vw, 3rem)` · Playfair · weight 400 |
| Project title (editorial list) | `clamp(1.25rem, 3vw, 1.75rem)` · Playfair · weight 500 |
| Body paragraph | `text-sm sm:text-base` · Inter · weight 400 |
| Section label | `text-[11px]` · Inter · tracking `0.25em` · uppercase · weight 400 |
| Tech stack tags | `text-[10px]–text-[11px]` · Inter · weight 400 |
| Index numbers | `text-[11px]` · monospace (`font-mono`) |
| Nav links | `text-sm` · Inter · weight 400 |

---

## Color System

| Token | Value | Usage |
|---|---|---|
| `--background` / cream | `#F7F4EE` | Primary page background |
| `--foreground` / ink | `#0C0A08` | Primary text, borders |
| `--action` / orange | `#E8542A` | Accent: labels, hover states, CTA arrows, index number hover |
| `--surface` | `#ECEAE3` | Card/surface background (Capabilities grid) |
| `--surface-muted` | `#E2DED6` | Muted surface |
| `--ink-muted` | `#6B6560` | Secondary text, descriptions, tech tags |
| `--dark` | `#0C0A08` | Dark section background (Hero, Contact) |
| `#9B9490` | — | Muted text on dark backgrounds |
| `#B5B0AB` | — | Very muted (index numbers, meta) |
| `#4A4540` | — | Footer text on dark bg |

### Accent orange usage rules
- Section labels (uppercase eyebrow above headings)
- Index numbers on hover
- Arrow → on hover
- "Featured" badges
- Video indicator hover states
- Contact CTA word highlight
- Navigation active underline
- Do **not** overuse — it should feel intentional, not decorative

---

## Spacing

- Section vertical padding (light sections): `py-24 sm:py-32`
- Section vertical padding (Contact/dark footer): `py-14 sm:py-20`
- Section scroll offset: `scroll-mt-20`
- Page container max-width: `max-w-[1160px] mx-auto`
- Page horizontal gutter: `px-4 sm:px-6 lg:px-8` (via `PAGE_GUTTER`)
- Section heading margin below: `mb-12 sm:mb-16`
- Editorial list row padding: `py-6 sm:py-8`

---

## Borders

- Light border (section dividers, row separators): `border-[#0C0A08]/10`
- Subtle border (tags, badges): `border-[#0C0A08]/12`
- Dark section border: `border-[#F7F4EE]/6`
- No border-radius on editorial elements (project rows, tags use sharp edges)
- The `/projects` card page uses a subtle border radius via `.overflow-hidden` on article elements

---

## Sections

### Hero (`CoverSection`)
- Background: `#0C0A08` (full-bleed dark)
- Subtle grid texture: `opacity-[0.025]`, `72px` grid, cream lines
- Floating glyph: `◈` at `opacity-[0.04]`, animated `float-gentle`
- Staggered entrance: role label (0.15s) → name lines (0.3s, 0.45s) → description (0.85s)
- **No CTA button in hero.** Navigation contains Contact.
- Scroll pulse: animated `scaleY` line, appears at 1.4s delay

### Selected Works (`SelectedWorksSection`)
- Background: `#F7F4EE`
- Layout: full-width list on mobile/tablet; list + sticky right panel (320–380px) on `lg+`
- Sticky preview panel: `h-[420px] xl:h-[480px]`, `top-28`, AnimatePresence fade
- Row hover: bg `#F0EDE7`, index turns orange, title shifts `translate-x-1`, arrow turns orange
- **Video projects**: show inline `▶ Video` badge in tag row; show square play button overlay on sticky preview
- **Image projects**: no play indicator
- The preview panel shows the first project by default; switches to hovered project

### Experience (`ExperiencesSection`)
- Background: `#F7F4EE`
- Table layout: date + company meta left (fixed width `sm:w-56 lg:w-64`), achievements right
- Achievement bullets: orange `h-px w-4` dash markers
- Shows top 3 achievements per role

### Capabilities (`CapabilitiesSection`)
- Background: `#ECEAE3` (slightly darker cream — distinguishes it from adjacent sections)
- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, `gap-px bg-[#0C0A08]/8` (hairline grid)
- 6 groups: Frontend, Backend, Mobile, Product, Performance, DX

### About (`AboutSection`)
- Background: `#F7F4EE`
- Two columns: decorative `EC` monogram left (large, very low opacity), prose right
- Copy is direct, first-person, not generic
- Links: email + CV download

### Writing (`BlogSection`)
- Background: `#F7F4EE`
- Compact editorial rows, horizontal rule dividers
- Posts without links show "Coming soon" badge

### Contact (`ContactSection`)
- Background: `#0C0A08` (dark — matches Hero for visual bookend)
- Heading: `clamp(1.75rem, 4vw, 3rem)` — **not** a full-hero-scale display
- Section padding: `py-14 sm:py-20` — compact footer proportions
- Social icons: text-[#6B6560] → text-[#F7F4EE] on hover

---

## Navigation

- Fixed header, full width, `z-50`
- Transparent when at top of page, `bg-[#0C0A08]/90 backdrop-blur-xl` after 60px scroll
- Logo: `CE` monogram in Playfair, with small orange dot accent
- Desktop nav: `NavigationTabs` — 5 tabs (Home, Work, Experience, About, Contact)
- Active tab underline: orange `#E8542A`, animated via Motion spring
- Mobile: hamburger → slide-in dark modal (`#0C0A08` bg)
- **`framer-motion` is NOT installed** — all imports must use `motion/react` from the `motion` package

---

## Buttons / CTAs

- No CTA button in hero
- Contact links use the email anchor with arrow: `emanyocharles40@gmail.com →`
- Arrow animates `translate-x-1` on hover
- No rounded buttons anywhere in the main portfolio — sharp edges only
- The `/projects` page uses bordered pill-style links (legacy from old design)

---

## Media / Project Assets

### Images
- Next.js `<Image>` with `fill` and `object-cover object-top` for previews
- `unoptimized: true` in `next.config.ts` (static export)

### Videos (Cloudinary)
- Projects with `video` field use `ProjectMedia` component on the `/projects` page
- `ProjectMedia` shows a poster thumbnail with a play overlay; clicking plays inline
- On the home page `SelectedWorksSection`: video projects show:
  1. A `▶ Video` badge in the tech tag row
  2. A minimal square play button overlay on the sticky right preview panel
- **Always differentiate video projects visually from image-only projects**

---

## Animations

All animations use `motion/react` (the `motion` v12 package, not `framer-motion`).

| Animation | Implementation |
|---|---|
| Hero name reveal | `y: '105%' → '0%'`, staggered by line |
| Page entrance | `AnimatedComponent` wraps sections — `opacity 0→1`, `y 28→0`, once per viewport |
| Header entrance | `y: -16 → 0`, `opacity 0→1` |
| Nav underline | Spring transition, `stiffness: 300, damping: 30` |
| Project preview swap | `AnimatePresence` mode="wait", `y: 12 → 0 → -12` |
| Project row hover | CSS `transition-all duration-200/300` (not Motion) |
| Loading screen | CE monogram fade + orange line `scaleX` |
| Floating glyph | `float-gentle` keyframe, 8s loop |
| Scroll pulse | `scaleY: [0, 1, 0]`, 1.8s loop |
| Back to top | Opacity + `translate-y` CSS transition |

### Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Responsive Rules

| Breakpoint | Behavior |
|---|---|
| Mobile (`< sm`) | Single column, reduced padding, smaller type |
| Tablet (`sm–lg`) | Mostly single column, some two-column sections |
| Desktop (`lg+`) | Full two-column layouts (SelectedWorks list + sticky panel, About two-col) |
| Capabilities grid | 1→2→3 columns across breakpoints |

The SelectedWorks sticky preview panel is **desktop-only** (`hidden lg:block`).

---

## File Map

| File | Role |
|---|---|
| `src/app/layout.tsx` | Fonts (Playfair + Inter), metadata, JSON-LD |
| `src/app/globals.css` | CSS variables, keyframes, `.font-serif` utility |
| `src/utils/classNames.tsx` | `PAGE_GUTTER`, `PAGE_CONTAINER`, `mergeClassNames` |
| `src/data/project.ts` | All project data including video URLs |
| `src/data/experience.ts` | Work history |
| `src/data/blog.ts` | Blog post entries |
| `src/data/social-media.ts` | Social links (secondary; main links are in ContactSection) |
| `src/app/components/organisms/CoverSection.tsx` | Hero |
| `src/app/components/organisms/SelectedWorksSection.tsx` | Editorial projects list |
| `src/app/components/organisms/ExperiencesSection.tsx` | Work experience table |
| `src/app/components/organisms/CapabilitiesSection.tsx` | Grouped skills |
| `src/app/components/organisms/AboutSection.tsx` | About prose |
| `src/app/components/organisms/BlogSection.tsx` | Writing/blog rows |
| `src/app/components/organisms/ContactSection.tsx` | Dark footer/CTA |
| `src/app/components/organisms/Header.tsx` | Fixed sticky nav |
| `src/app/components/organisms/NavigationTabs.tsx` | Nav tabs + scroll spy logic |
| `src/app/components/molecules/ProjectMedia.tsx` | Video/image media on /projects page |
| `src/templates/HomeTemplate.tsx` | Section order for home page |
