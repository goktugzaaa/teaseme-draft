# SEO Audit & Plan — teaseme.co Redesign

## Current State (scraped from live site)

### What exists
- Meta title: `Tease Brazilian Sex Chocolate – Tease Me`
- Meta description: generic, brand-focused, no keywords like "aphrodisiac" or "truffles"
- Canonical tag: ✅ present
- Open Graph tags: ✅ present (title, description, image, type=website)
- Twitter card: ✅ present (summary_large_image)
- JSON-LD: only `Organization` schema. No Product, FAQPage, Review, or BreadcrumbList.

### What is missing / weak
| Issue | Severity | Impact |
|-------|----------|--------|
| **No H1 on page** | 🔴 High | Critical for product page rankings. Google relies on H1 for primary topic signal. |
| No `Product` JSON-LD | 🔴 High | Loses price, availability, rating-rich snippets in SERP. |
| No `FAQPage` JSON-LD | 🔴 High | FAQ rich results disabled. Loses real estate in SERP. |
| No `Review` / `AggregateRating` schema | 🟠 Med | Star ratings missing from SERP. |
| No `BreadcrumbList` | 🟡 Low | Minor on single-product site. |
| `og:type` set to `website` not `product` | 🟠 Med | Should be `product` for e-comm pages. |
| Meta description lacks keywords | 🟠 Med | "aphrodisiac", "truffles", "natural", "hand-made" missing. |
| Page-level keywords (Brazilian Sex Chocolate) not in H2/H3 structure consistently | 🟠 Med | Heading hierarchy uses brand voice but skips primary keywords. |
| No image `alt` patterns visible (Shopify-default) | 🟡 Low | Accessibility + image search. |
| Hero video has no `<track>` captions | 🟡 Low | A11y + dwell time signal. |

## Redesign Plan — SEO Improvements

### 1. Add H1
Single H1 on hero: **"Brazilian Sex Chocolate — Hand-Made Aphrodisiac Truffles"**
Combines brand product name + category keyword + USP modifier.

### 2. Heading hierarchy
```
H1: Brazilian Sex Chocolate — Hand-Made Aphrodisiac Truffles
  H2: The Ritual                       (Order / Receive / Experience)
  H2: What's Inside                    (Ingredients — Fadogia / Tongkat Ali / Ginger)
  H2: Meet Tease                       (Product / Buy block)
  H2: Made for the Moment              (Lifestyle gallery)
  H2: Why Tease                        (Comparison table)
  H2: Reviews                          (Testimonials)
  H2: From the Founder                 (Brand story)
  H2: Frequently Asked Questions       (FAQ accordion)
  H2: Tonight Starts With One Bite     (Final CTA)
```

### 3. Meta upgrade
- **Title:** `Tease Brazilian Sex Chocolate – Natural Aphrodisiac Truffles | Tease Me`
- **Description:** `Indulge in Tease Brazilian Sex Chocolate — hand-made aphrodisiac truffles crafted with Fadogia Agrestis, Tongkat Ali and Ginger. Trusted by 30,000+ customers. Discreet shipping. 7-day guarantee.`
- **og:type:** `product`

### 4. Schema markup to add

**Product schema** (with tokens for Shopify Liquid):
```jsonld
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Tease Brazilian Sex Chocolate",
  "image": ["{{HERO_IMAGE_URL}}"],
  "description": "{{META_DESCRIPTION}}",
  "brand": { "@type": "Brand", "name": "Tease Me" },
  "offers": {
    "@type": "Offer",
    "url": "https://teaseme.co/",
    "priceCurrency": "USD",
    "price": "39.95",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "1247"
  }
}
```

**FAQPage schema** auto-generated from `content.json.faq.items`.

**Organization schema** kept and enhanced with `sameAs` social links.

### 5. Keyword targets
- Primary: `Brazilian sex chocolate`, `aphrodisiac chocolate`, `sex chocolate truffles`
- Secondary: `natural aphrodisiac`, `fadogia agrestis chocolate`, `tongkat ali truffle`, `hand-made aphrodisiac`
- Long-tail: `discreet aphrodisiac shipping`, `chocolate for intimacy`, `Brazilian aphrodisiac recipe`

### 6. On-page tactics
- All ingredient names appear in H3 + body (currently only listed once).
- Internal anchors: nav links → `#ingredients`, `#faq`, `#buy`. Helps dwell time + bounce.
- Image `alt` attributes use scene + product (already drafted in `content.json.gallery`).
- Final CTA uses primary keyword: "Shop Tease Brazilian Sex Chocolate".
- Founder section adds brand authority signal (Barry Callebaut, Georgia USA, Brazilian recipe).

### 7. Technical
- Preload hero video poster image, lazy-load below-fold images.
- `<picture>` with WebP fallback for lifestyle images.
- Semantic HTML5: `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`.
- `rel="canonical"` matches Shopify canonical to prevent duplicate-content split.
- `lang="en"` on `<html>`.

### Gaps still requiring client input
- Real aggregate rating + review count (currently estimated at 4.8 / 1247 — replace with actual Judge.me or Shopify Reviews data on integration).
- Verified-buyer attribution wording per their review platform.
- Founder photo + bio if more authority signal desired.
- HD logo (current `logo.png` is 3.7KB).
