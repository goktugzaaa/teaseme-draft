# Tease Me — Homepage Redesign (Draft 1)

A clean, modern HTML/CSS homepage redesign for [teaseme.co](https://teaseme.co), built ready for drop-in Shopify Liquid integration.

**Live preview:** https://teaseme-draft.vercel.app
**Repository:** https://github.com/goktugzaaa/teaseme-draft

---

## What's in this draft

- **Full single-page homepage** with the existing site's copy and assets restructured for stronger conversion and a more sensual, premium feel.
- **Mobile-first, fully responsive** — tested at 375 / 640 / 768 / 1024 / 1280 / 1440 widths.
- **Zero framework, vanilla everything** — no React, no Tailwind, no build step. Just HTML, CSS, and small JS files.
- **Shopify-ready markup** — section structure, data hooks, and token placeholders mapped to Liquid conventions.
- **SEO improvements** — proper H1, Product / Organization / FAQPage JSON-LD schema, semantic headings, alt text on every image.

---

## Page sections (top to bottom)

| # | Section | Purpose |
|---|---------|---------|
| — | Age gate | 18+ confirmation modal (localStorage, shows once) |
| — | Nav | Logo + About / Contact, account + cart icons, mobile drawer |
| I | Hero | Video background, primary headline, price, hero CTA |
| — | Marquee | Scrolling trust statements |
| II | The Ritual | 3-step Order → Receive → Experience |
| III | Order | Bundle pricing (1 / 2 / 3 box) with Most Popular and Best Value |
| IV | What's Inside | Fadogia / Tongkat Ali / Ginger — properties + descriptions |
| V | Made for the Moment | Date Night / First Time / Long-Term Spark scenes |
| VI | The Receipts | Real customer DMs + verified buyer quotes |
| VII | No Competition | Tease vs others comparison table |
| VIII | She Said. He Said. | Reviews with hero pull quote |
| IX | From the Founder | Brand story |
| X | FAQ | Accordion |
| — | Trust bar | FDA, discreet, money-back, free shipping |
| — | Final CTA | Closing |
| — | Footer | Policies, social, payment methods |

---

## Tech notes for Shopify integration

### File layout

```
/
├── index.html              # main homepage
├── content.json            # all copy as JSON (single source for edits)
├── SEO.md                  # SEO audit + recommendations
├── styles/
│   ├── base.css            # design tokens, reset, typography, buttons
│   ├── sections.css        # original per-section styles
│   └── editorial.css       # editorial layer (overrides + new sections)
├── scripts/
│   ├── age-gate.js
│   ├── accordion.js
│   ├── sticky-cta.js
│   └── reveal.js           # IntersectionObserver fade-up + parallax
└── assets/
    ├── images/             # all delivered assets
    └── video/hero.mp4
```

### Liquid token map

Static markup uses `{{TOKEN}}` style placeholders where dynamic Shopify data should land. Suggested swap on integration:

| Placeholder in HTML | Replace with Liquid |
|---------------------|---------------------|
| `$39.95` (single price) | `{{ product.price \| money }}` |
| `$59.95` (compare) | `{{ product.compare_at_price \| money }}` |
| `Tease Brazilian Sex Chocolate` (title) | `{{ product.title }}` |
| `/cart` (header link) | `{{ routes.cart_url }}` |
| `/cart/add?id=duo` | `/cart/add?id={{ variant.id }}` |
| `Cart, 0 items` (aria) | `Cart, {{ cart.item_count }} items` |
| `<span class="nav__cart-count">0</span>` | `<span class="nav__cart-count">{{ cart.item_count }}</span>` |

The header element already has `data-shopify-section="header"` so it can be wrapped as a section.

### Section pattern

Each `<section>` is independent — copy content out into a Liquid `section/*.liquid` file and the styles will follow. Nothing depends on a parent grid or container outside the section itself.

### Animations and performance

- Reveal animations use **IntersectionObserver** only — vanilla JS, no library, ~1 KB.
- Parallax respects `prefers-reduced-motion` and is disabled below 768 px.
- Hero video is `<video autoplay muted loop playsinline>` with a poster — autoplays inline on mobile, falls back to the still on slow connections.
- Lighthouse-friendly: no render-blocking JS, lazy-loaded images, system fonts as fallback while Google Fonts load.

---

## Design direction

**Tone:** elevated sensual — keeps the bold voice of the existing site while raising the visual quality to match the premium price point. Sits between sextz.com (playful) and tabs.co (performance-confident).

**Color palette (driven by the existing brand):**

- Black `#0A0807`, warm dark `#221416`
- Burgundy `#2D0A0E`, deep burgundy `#1A0608`
- Brand red `#A42325`, deep red `#780406`, rose `#C9697A`
- Cream `#FAF6F0`, peach `#E8D5C7`, deep peach `#D4B8A4`
- Accent gold `#C9A961` (for star ratings only)

**Type:**

- Display: Cormorant Garamond, italic for emphasis
- Body: Inter, regular and 500 weight

---

## What's intentionally still placeholder

These are the only items I'd like real content for before final integration. Everything else is yours, scraped or written.

- **HD vector logo** — current PNG is a 489×310 CDN export. SVG would render crisper at the larger header size.
- **Verified review rating + count** — currently set to 4.8 / 1,247 as a plausible default. Replace with whatever Judge.me / Shopify Reviews shows live.
- **Founder photo** — optional. Founder section currently is typography-only.
- **Specific TikTok video URLs** — receipts section currently uses real DM screenshots only. If you want a TikTok strip back in, send 3–4 specific video URLs and I'll embed them in the matching card style.

---

## SEO audit summary

See `SEO.md` for the full breakdown. Headlines:

| Issue on the current live site | Fix in this draft |
|--------------------------------|-------------------|
| No H1 anywhere on the page | Added: "Brazilian Sex Chocolate — Hand-Made Aphrodisiac Truffles" |
| Only Organization schema | Added: Product + FAQPage + AggregateRating JSON-LD |
| `og:type = website` on a product page | Changed to `product` |
| Meta description was brand-only ("sensual delight") | Rewritten with primary keywords (aphrodisiac truffles, Fadogia, Tongkat Ali) |
| Heading hierarchy skipped levels | Clean H1 → H2 → H3 throughout |

---

## Local preview

No build step. Just open `index.html` in a browser, or:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

---

## Feedback / iteration

This is Draft 1. Send notes per section and I'll spin a Draft 2 with any layout, copy, or color changes you want.

— Goktug
