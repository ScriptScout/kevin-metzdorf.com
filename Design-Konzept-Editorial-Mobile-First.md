# Editorial Minimal – Mobile‑First Design Konzept

Version: 1.0  
Autor: Junie (Assistenz für Kevin Metzdorf)  
Datum: 2026‑04‑22

## Zielsetzung
- Mehr qualifizierte Anfragen/Bookings für Shopify‑Projekte (Theme‑Dev, Performance, Migration, Technical Rescue).
- Klare Positionierung als Senior Shopify Developer mit messbaren Outcomes.
- Mobile first (Telefon als Primärgerät), Desktop als progressive Erweiterung.
- DE als Default‑Sprache mit EN‑Toggle.

## Markenrichtung
- Stil: Editorial Minimal (hell, viel Weißraum, präzise Typografie, ruhige Akzente).
- Logo/Farbwelt: Bestehendes Blau nicht beibehalten; keine fixen CI‑Vorgaben.
- Sticky Bottom‑CTA auf Mobile: Ja (48–56px Höhe, kontrastreich, unaufdringlich).

## Informationsarchitektur (IA)
- Startseite `/` (Hero, Trust, Leistungen‑Teaser, Outcomes, Case Studies‑Teaser, Prozess, Tech‑Stack, Testimonials, Blog‑Teaser, FAQ, Abschluss‑CTA)
- Leistungen `/services` (Nutzenorientierte Beschreibungen, Pakete/Engagement‑Modelle – zunächst Platzhalter)
- Arbeiten `/work` (Case‑Study‑Übersicht mit Filtern)
- Case Study Detail `/work/:slug` (Story, vorher/nachher‑Metriken, Zitate, Learnings – zunächst Platzhalter)
- Über mich `/about` (Kurzvita, Prinzipien, Zertifizierungen)
- Blog `/blog`, `/blog/:slug` (bestehend)
- Optional: Kontakt `/contact` (alternativ weiter auf externen Booking‑Link verweisen; für SEO empfehlenswert)
- Rechtliches: Impressum, Datenschutz, AGB, KI‑Richtlinie (bestehend)

## Design System (Tokens)
Farben (helles Editorial‑Setup, bewusst ohne „Marken‑Blau“):
- Text/Primär: #111111 (Schwarz, 92–100% Opazität je nach Ebene)
- Hintergrund: #FFFFFF (Altbereiche: #F7F7F7)
- Primär‑UI (Buttons/Links): #111111 (Hover: #000000) – minimalistisch, stark
- Sekundär‑UI (Outline/Muted): #E5E7EB (Linien), #6B7280 (sekundärer Text)
- Positiv/Ergebnis‑Badge: #16A34A (grün), Neutral‑Badge: #6B7280
- Fokus/Interaktiv (dezent): #111111 2px Outline bei Tastaturfokus

Typografie
- Headings: Manrope 600/700
- Body/UI: Inter 400/500
- Skala (Mobile): h1 30–32, h2 22–24, h3 18–20, Body 16, Small 14 (LH 1.45–1.55)
- Editorial‑Touch: Großzügiger Zeilenabstand, konsistente Typo‑Rhythmik

Spacing & Radii
- Spacing: 4, 8, 12, 16, 24, 32, 48, 64
- Radius: 8 (Buttons), 12 (Cards), 0 (Hero‑Bilder für kantiges Editorial)
- Shadow: sparsam, 2dp/6dp nur für überlagerte Elemente

Buttons & Links
- Primary: Gefüllt, schwarzer Button mit weißer Schrift (AA‑Kontrast)
- Secondary: Textlink mit feiner Unterstreichung; Hover: Unterstreichung verstärkt
- Tertiary: Unstyled Link in Copy, nur bei Bedarf

Badges/Chips
- KPI‑Badge grün für positive Deltas; neutral für kontextuelle Kennzeichnung

Beispiel‑Tokens als CSS‑Variablen
```css
:root {
  --c-bg: #ffffff;
  --c-surface: #f7f7f7;
  --c-text: #111111;
  --c-text-muted: #6b7280;
  --c-border: #e5e7eb;
  --c-primary: #111111; /* Buttons/Interaktion */
  --c-primary-hover: #000000;
  --c-positive: #16a34a;
  --r-sm: 8px; --r-md: 12px;
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px; --s-6: 24px; --s-8: 32px; --s-12: 48px;
}
```

## Mobile‑First Seitenaufbau (Inhalt & Layout)
1) Header (sticky)
- Links: Logo (Tap = Home)
- Rechts: DE/EN Toggle, Burger
- Desktop zusätzlich: „Jetzt Termin buchen“ als Primary‑Button in der Nav

2) Hero (Above the Fold)
- Headline: „Shopify Stores, die schneller verkaufen.“
- Subline: „Ich entwickle performante Themes und löse komplexe Shopify‑Probleme – messbar, zuverlässig, skalierbar.“
- CTA Primary: „Kostenloses Erstgespräch“; Secondary: „Case Studies ansehen“
- Micro‑Stats (horizontal scroll‑snap): „–38% LCP“, „+18% Conversion“, „+12% AOV“ (Platzhalter)

3) Trust/Social Proof
- Shopify‑Partner‑Badge (falls vorhanden), 2–4 Kundenlogos (Platzhalter), Kurzverweis Branchen

4) Leistungen (Teaser)
- 4–6 Karten, Copy nutzen‑orientiert (je 1–2 Sätze):
  - Theme Development (OS 2.0)
  - Performance/SEO (CWV, Bildoptimierung, Liquid/JS‑Cleanup)
  - Migration (Shopify 2.0, WooCommerce → Shopify)
  - Technical Rescue (Notfall‑Sprints, Checkout‑Issues)
  - Shopify Functions/Apps (Cart/Discount Logic, Checkout UI)
  - Headless/Hydrogen (für passende Use Cases)

5) Outcomes (Nutzen)
- 3 Cards: Geschwindigkeit, Conversion, Skalierbarkeit — je 1–2 messbare Vorteile (Platzhalter‑Metriken)

6) Case Studies (Teaser)
- 3 Karten, je Logo, 1 Mockup, 2–3 Badges mit Ergebnissen → Link zu `/work/:slug`

7) Prozess
- 4 Schritte (Discover → Plan → Build → Grow), Timeline mit Icons, klare Erwartungssicherheit

8) Tech‑Stack
- Logo‑Cloud: Liquid, Theme App Extensions, Shopify Functions, Hydrogen, Remix, GraphQL, GA4/GTM

9) Testimonials
- 1–3 Zitate (Platzhalter), horizontales Scroll‑Snap

10) Blog‑Teaser
- 2–3 Karten, Link zum Blog

11) FAQ (Akkordeon)
- Preise (Platzhalter), Timeline, Code Ownership, Support/Retainer, Plus/Markets/Internationalisierung

12) Abschluss‑CTA (Banner)
- „Brauchen Sie einen schnellen Shopify‑Sprint? Lassen Sie uns sprechen.“ + Button

13) Footer
- Navigation, Social, Sprache, Rechtliches, Standort/Unternehmen

## Sticky Bottom‑CTA (Mobile)
- Immer sichtbar ab Scroll‑Offset > 200px
- Label: „Kostenloses Erstgespräch“ + Icon (Telefon oder Kalender)
- Tap Area ≥ 48px; keine Überdeckung essentieller UI

## Komponenten (Angular)
- ServiceCard, CaseStudyCard, KPIStat, TestimonialCard/Carousel (CSS Scroll Snap), Accordion (FAQ), Badge, LanguageToggle, StickyCTA
- Header mit Auto‑hide beim Runterscrollen, Show beim Hochscrollen (optional)

## Templates (HTML‑Skelette)
CaseStudyCard
```html
<article class="case-card">
  <header>
    <img alt="Brand-Logo" src="/assets/brand-placeholder.svg" width="96" height="32" loading="lazy">
    <h3>Migration auf Shopify 2.0 – +18% Conversion</h3>
  </header>
  <p>Von WooCommerce zu Shopify: Performance, UX und Checkout optimiert. (Platzhalter)</p>
  <ul class="kpis">
    <li><span class="badge positive">-38% LCP</span></li>
    <li><span class="badge positive">+18% CR</span></li>
    <li><span class="badge neutral">+12% AOV</span></li>
  </ul>
  <a class="btn btn--link" href="/work/case-slug">Fallstudie lesen</a>
</article>
```

FAQ‑Akkordeon (Schema.org fähig)
```html
<section class="faq" itemscope itemtype="https://schema.org/FAQPage">
  <article itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">Wie schnell können wir starten?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">In der Regel innerhalb von 1–2 Wochen. (Platzhalter)</p>
    </div>
  </article>
</section>
```

## Copy‑Beispiele (DE, Platzhalter)
- Hero Headline: „Shopify Stores, die schneller verkaufen.“
- Hero Subline: „Ich entwickle performante Themes und löse komplexe Shopify‑Probleme – messbar, zuverlässig, skalierbar.“
- CTA: „Kostenloses Erstgespräch“
- Leistungen (Beispiel): „Performance & SEO – Bessere Core Web Vitals, sauberer Code und schnellere Ladezeiten für mehr Conversion.“

## „Harte KPIs“ – Was ist gemeint?
Konkrete, messbare Kennzahlen, die den Erfolg belegen. Beispiele:
- Performance: LCP, CLS, TTFB, Speed Index (z. B. LCP −38%)
- Commerce: Conversion Rate (CR), Average Order Value (AOV), Revenue/Session
- SEO: Organischer Traffic, Sichtbarkeit/Impressions, Klickrate (CTR)
- Betrieb: Fehlerquote, Time‑to‑Recovery
Wenn aktuell keine freigabefähigen KPIs vorliegen, nutzen wir Platzhalter‑Badges und füllen später echte Zahlen nach.

## Accessibility (A11y)
- Semantik: Nur ein `h1` pro Seite, sinnvolle Landmark‑Regionen
- Kontrast: ≥ 4.5:1 für Text
- Tastatur: Fokus sichtbar, Menu mit `aria-*` Attributen, Escape schließt
- Motion: `prefers-reduced-motion` respektieren

## SEO & Strukturierte Daten
- Pro Route eigene `title`, `meta description`, `canonical`
- Schema.org: Person/Organization (Start/About), Service (Leistungen), BreadcrumbList (alle Routen), BlogPosting (Blog), FAQPage (FAQ)
- Interne Verlinkung: Hero → Services/Work, Karten → Detail, Footer Deep‑Links
- Sitemap nach neuen Routen aktualisieren

## Performance (Core Web Vitals)
- Bilder: AVIF/WebP, `srcset/sizes`, `loading="lazy"`, wichtiges Bild preloaded
- Fonts: Variable Fonts bevorzugt, `font-display: swap`, Subsetting
- CSS: Kritische Stile klein halten, Rest asynchron; AOS vermeiden → leichte IO‑Animationen
- JS: Code‑Splitting via Routing, Third‑Parties minimal, Analytics per Consent Mode

## Implementierungsfahrplan (Angular)
1) Routing: `/services`, `/work`, `/work/:slug`, `/about`, optional `/contact`
2) Tokens: `styles.scss` erweitern (Variablen), Utilities (`stack/cluster/grid`)
3) Komponenten: `ServiceCard`, `CaseStudyCard`, `KPIStat`, `Accordion`, `TestimonialCarousel`, `StickyCTA`
4) Inhalte: Case Studies & Services zunächst als JSON/Markdown (Platzhalter), i18n‑Keys DE/EN
5) Performance/A11y Pass: Lighthouse‑Ziele LCP < 2.5s, CLS < 0.05, SEO ≥ 95
6) QA & Rollout: Geräte/Browser testen, Canonicals & Sitemap prüfen

## Platzhalter‑Module
- Case Studies: 3 Einträge mit Dummy‑Logos, Mockups, KPI‑Badges
- Preise/Retainer: Sektion mit 3 Karten (Basic/Pro/Custom), alles Platzhaltertexte
- Testimonials: 2–3 Zitate (Lorem), austauschbar

## Nächste Schritte
- Freigabe dieses Konzepts
- Erstellung von 3–4 Key‑Screens (Figma): Home (Mobile+Desktop), Work‑Listing, Case‑Detail, Services
- Umsetzung der neuen Routen & Komponenten im Code
- Inhalte einpflegen (Sie liefern, wo verfügbar; sonst Platzhalter)
