# Tease Me — Homepage Redesign

Static HTML/CSS redesign of [teaseme.co](https://teaseme.co) homepage. Built for clean drop-in into Shopify Liquid.

## Stack
- HTML5 + CSS3, no framework
- Vanilla JS for interactions (sticky CTA, FAQ accordion, age-gate)
- Mobile-first responsive (breakpoints: 640 / 1024 / 1440)

## Structure
```
/
├── index.html              # main homepage
├── styles/
│   ├── base.css            # reset, tokens, typography
│   └── sections.css        # per-section styles
├── scripts/
│   ├── sticky-cta.js
│   ├── accordion.js
│   └── age-gate.js
├── assets/
│   ├── images/             # product, lifestyle, hero stills, logo
│   └── video/              # hero.mp4
└── README.md
```

## Design Direction
Elevated sensual / luxury chocolate boutique. Keeps the bold tone of the original site but lifts the visual quality to match the premium price point ($39.95).

**Reference feel:** Vosges Haut-Chocolat × Maude.

## Color Tokens
- `--c-bg`: `#0A0A0A` (black, primary BG)
- `--c-gold`: `#C9A961` (accent, packaging)
- `--c-red`: `#B91C1C` (sensual accent, CTA hover)
- `--c-cream`: `#F5F0E8` (light section BG)
- `--c-brown`: `#6B4423` (truffle)
- `--c-text`: `#F5F0E8`
- `--c-text-muted`: `#A09890`

## Typography
- Display: `Cormorant Garamond` (serif)
- Body: `Inter` (sans)

## Sections (homepage)
1. Age-gate modal (18+)
2. Sticky nav
3. Video hero
4. The Ritual (3-step)
5. Ingredient story (Fadogia / Tongkat Ali / Ginger)
6. Product gallery
7. Comparative table
8. Testimonial wall
9. Founder / brand story
10. FAQ accordion
11. Trust bar
12. Final CTA
13. Footer

## Shopify Liquid Mapping
Dynamic values are tokenized with `{{TOKEN}}` placeholders. Map to Liquid on integration:

| Token | Liquid |
|-------|--------|
| `{{PRICE_CURRENT}}` | `{{ product.price \| money }}` |
| `{{PRICE_COMPARE}}` | `{{ product.compare_at_price \| money }}` |
| `{{PRODUCT_TITLE}}` | `{{ product.title }}` |
| `{{CART_URL}}` | `{{ routes.cart_url }}` |
| `{{ADD_TO_CART_URL}}` | `/cart/add?id={{ product.variants.first.id }}` |

## Local Preview
Open `index.html` directly in a browser, or:
```
python -m http.server 8000
```
