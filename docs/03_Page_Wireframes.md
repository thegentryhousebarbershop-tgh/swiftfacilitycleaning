# 03_Page_Wireframes.md

# Swift Facility Cleaning

## Master Page Wireframes & Implementation Blueprint

Version: 1.0
Priority order if conflicts arise: [00_Project_Brief.md](00_Project_Brief.md) → [01_Design_System.md](01_Design_System.md) → [02_Website_Architecture.md](02_Website_Architecture.md) → this document.

---

# How To Use This Document

This document is the page-by-page implementation blueprint for the Next.js build. Every section maps to a reusable component listed in `01_Design_System.md` → "Reusable Components." No new visual pattern should be introduced without being added here first.

Global rules that apply to **every page** unless explicitly overridden:

- Background alternates `#FFFBEE` (primary) and `#ECF4FE` (secondary) section by section to create rhythm without hard borders.
- Section vertical padding: 120px desktop / 96px tablet / 72px mobile (per Design System spacing scale).
- Container: 1280px default, 1140px for text-heavy content, 760px for reading-width content (FAQs, blog body).
- Grid: 12 columns desktop, 8 tablet, 4 mobile.
- Every page (except Home) renders `Breadcrumb` directly under the Navbar with schema-enabled `BreadcrumbList` JSON-LD.
- Every page includes: Hero CTA, one mid-page CTA, a bottom CTA banner, sticky mobile CTA bar, and the global footer CTA — per the CTA Placement Strategy in `02_Website_Architecture.md`.
- Primary CTA copy: "Request a Free Quote". Secondary: "Call Now", "Schedule a Consultation".
- All headings follow strict hierarchy: one `H1` per page, `H2` for section titles, `H3` for sub-blocks. Never skip a level.
- All animations use Framer Motion variants matching Design System motion specs: fade-up 30px / 0.6s / ease-out for scroll reveals; counters animate once via Intersection Observer; accordions animate height auto.
- All CTAs and nav items must have visible focus rings (2px, Accent Blue `#4A94F7`), 44×44px minimum touch targets, and descriptive `aria-label`s where icon-only.

---

# Component Reference Key

Used throughout this document to avoid re-describing components:

| Component | Notes |
|---|---|
| `Navbar` | Sticky, transparent over hero, solid on scroll, mega menu, mobile drawer |
| `Breadcrumb` | Schema-enabled, under navbar |
| `Hero` | Headline, subhead, dual CTA, supporting media |
| `SectionHeader` | Eyebrow label + H2 + supporting paragraph, centered or left-aligned |
| `TrustBlock` | Logo strip / certifications / stat row |
| `Counter` | Animated number, intersection-triggered |
| `ServiceCard` | Icon, title, 2-line description, link |
| `IndustryCard` | Image, title, link |
| `TestimonialCard` / `TestimonialSlider` | Quote, name, company, rating |
| `FAQAccordion` | Question/answer pairs, schema FAQPage |
| `BlogCard` | Image, category, title, excerpt, date |
| `LocationCard` | City name, short blurb, link |
| `CaseStudyCard` | Industry tag, image, title, result stat |
| `ContactForm` | Multi-field lead form |
| `CTABanner` | Full-width band, headline + button(s) |
| `ProcessTimeline` | Numbered steps, horizontal desktop / vertical mobile |
| `FeatureList` | Checkmark list, 2-column desktop |
| `StatisticsGrid` | 3–4 animated stat cards |
| `StickyMobileCTA` | Fixed bottom bar: Call + Quote buttons, mobile only |
| `Footer` | 4-column + bottom bar |

---

# 1. HOMEPAGE (`/`)

## Purpose
Serve as the company's highest-performing digital sales rep. Establish trust within seconds, explain the full service breadth, and funnel every visitor type (office manager, medical admin, school administrator, etc.) toward a quote request.

## Target Audience
All decision-maker personas defined in the Project Brief — facility managers, office managers, property managers, medical/school administrators — landing via organic search, Google Business Profile, paid ads, or referral.

## Primary Conversion Goal
Request a Free Quote (hero + sticky CTA + bottom CTA banner).

## Secondary Goals
Phone calls, trust-building, service education, internal link distribution to every major site branch (services, industries, locations, case studies, blog), SEO authority capture for "commercial cleaning Missouri" and branded terms.

## Wireframe Layout

```
Navbar (transparent → solid on scroll)
↓
Hero (muted background video)
↓
Trust Bar (logos + quick stats)
↓
Why Choose Swift Facility Cleaning
↓
Services Overview
↓
Industries Served
↓
How It Works (Process Timeline)
↓
Featured Case Study
↓
Testimonials Slider
↓
Cleaning Process / Quality Assurance
↓
Service Areas (Locations)
↓
FAQ
↓
Latest Blog Articles
↓
Contact CTA Banner
↓
Footer
```

## Section Breakdown

### Hero
- **Purpose:** Answer "who are you / what do you do / why trust you" within 3 seconds and capture the lead immediately.
- **Content:** Eyebrow ("Trusted Commercial Cleaning Partner — Missouri"), H1 ("Reliable Commercial Cleaning That Keeps Your Business Spotless"), subhead (2 lines max, reinforces consistency/professionalism), Primary CTA "Request a Free Quote", Secondary CTA "Call Now" with phone icon + number.
- **Layout:** Two-zone: left text column (6/12 desktop), right/background muted looping video of a bright, real commercial space being professionally cleaned (no audio, `autoPlay muted loop playsInline`, poster image fallback, `prefers-reduced-motion` disables autoplay in favor of poster).
- **Alignment:** Left-aligned text, vertically centered.
- **Spacing:** Full viewport minus navbar height on desktop (min 640px), auto-height mobile with video swapped for static hero image to save bandwidth.
- **Desktop Layout:** 12-col grid, text in cols 1–6, video fills cols 7–12 with rounded-20px mask and soft gradient overlay for text contrast.
- **Tablet Layout:** Text stacks above video, both full width.
- **Mobile Layout:** Static hero image (not video) for performance; headline 36–40px; stacked CTAs full-width.
- **Suggested Components:** `Hero`, `PrimaryButton`, `SecondaryButton`.
- **Image Direction:** Real Missouri commercial interior (open-plan office or medical lobby), bright natural light, a uniformed cleaner actively working — communicates "in progress, professional, real," not staged.
- **Background Style:** Video with 20–30% dark gradient overlay bottom-left for text legibility; primary background color bleeds at hero edges.
- **Animation:** Headline stagger-in by word (Framer Motion `staggerChildren`), CTA fades in 200ms after headline, video fades in over 600ms.
- **CTA Placement:** Dual CTA directly under subhead, primary first.
- **Internal Links:** None in hero itself (keeps focus on conversion); first link opportunity is Trust Bar below.
- **SEO Notes:** H1 must contain primary keyword "commercial cleaning" + geo modifier "Missouri." Video should have `next/image` poster optimized; lazy-load is not appropriate here (above the fold) — preload poster.
- **Accessibility Notes:** Video must be muted and have no essential information conveyed only through it; add `aria-hidden="true"` to decorative video; ensure CTA buttons reachable via Tab before video controls (video has no visible controls).

### Trust Bar
- **Purpose:** Immediate credibility reinforcement directly under the emotional hero.
- **Content:** 3–4 animated stats (e.g., "10+ Years in Business," "500+ Facilities Cleaned," "98% Client Retention," "24/7 Responsive Support") plus optional client/partner logo strip (grayscale, color on hover).
- **Layout:** `StatisticsGrid`, 4 columns desktop, 2x2 tablet, stacked mobile.
- **Background Style:** Secondary background `#ECF4FE` band for visual separation from hero.
- **Animation:** `Counter` animates 0 → value once on scroll into view.
- **SEO Notes:** Wrap stats in `dl`/`dt`/`dd` or visually-hidden text equivalents so numbers aren't purely decorative for SEO/crawlers; stats reinforce E-E-A-T trust signals Google associates with local service pages.
- **Accessibility Notes:** Respect `prefers-reduced-motion` — show end value immediately, skip counting animation.

### Why Choose Swift Facility Cleaning
- **Purpose:** Address the customer pain points from the Brief (inconsistent quality, missed appointments, poor communication) by directly naming them and presenting the company as the antidote.
- **Content:** `SectionHeader` ("Why Businesses Choose Swift Facility Cleaning") + 4–6 `FeatureList` items with icon (Shield, Clock, CheckCircle, Users, Sparkles, MessageSquare) — Reliability, Consistent Quality, Responsive Communication, Customized Plans, Experienced Staff, Flexible Scheduling.
- **Layout:** 2-column feature grid desktop, 1-column mobile, paired with a supporting image of a friendly uniformed cleaning team.
- **Background Style:** Primary background.
- **Animation:** Fade-up stagger per feature item, icon micro-bounce on hover.
- **Internal Links:** "Learn about our process" → Process Timeline section anchor.
- **SEO Notes:** Naturally embed secondary keywords ("janitorial services," "facility maintenance," "office cleaning company").
- **Accessibility Notes:** Icons are decorative — text label carries meaning, not color/icon alone.

### Services Overview
- **Purpose:** Educate on full service breadth and route traffic into the service silo (primary internal-linking hub).
- **Content:** `SectionHeader` ("Comprehensive Commercial Cleaning Services") + 5 `ServiceCard`s: Commercial Cleaning (hub), Office Cleaning, Medical Cleaning, Janitorial Services, Floor Care. Each card: icon, title, 2-line benefit-driven description, "Learn More" link.
- **Layout:** 5-card grid → 3+2 desktop (12-col: 4 cards at 3 cols + 1 featured at 4 cols), 2-column tablet, 1-column mobile stacked.
- **Suggested Components:** `ServiceCard` (hover: lift + border accent in Brand Yellow).
- **Image Direction:** Each card uses a small representative icon (Lucide: `Building2`, `Stethoscope`, `ClipboardCheck`, `Layers`) rather than photography to keep the grid fast-scanning; photography reserved for hero/feature sections.
- **Animation:** Stagger fade-up on scroll, hover lift 4px + shadow increase.
- **CTA Placement:** "View All Services" ghost button below grid linking to `/commercial-cleaning`.
- **Internal Links:** Each card → its dedicated service page.
- **SEO Notes:** This is the most important internal-linking block on the site; anchor text should be descriptive (e.g., "Office Cleaning Services" not "Learn More") for at least the visible card titles.
- **Accessibility Notes:** Entire card clickable via a single wrapping link with one accessible name; icon `aria-hidden`.

### Industries Served
- **Purpose:** Help niche visitors (school admin, medical office manager) self-identify quickly, increasing relevance and dwell time.
- **Content:** `SectionHeader` ("Industries We Serve") + horizontally scrollable / grid of `IndustryCard`s for Offices, Schools, Daycare, Medical, Gyms, Warehouses, Commercial, Dealerships, Showrooms, Religious, Government.
- **Layout:** Desktop: 4-column grid, 3 rows; auto-scroll carousel on tablet/mobile to avoid excessive vertical scroll.
- **Image Direction:** Real photography per industry where available now (offices, medical, schools, warehouses); placeholder consistent stock-alternative imagery for the rest, swappable later without layout change.
- **Background Style:** Secondary background band.
- **Animation:** Card hover zoom on image (scale 1.05, 300ms), fade-up entrance.
- **Internal Links:** Each card links to its industry page; until those pages exist, cards link to `/commercial-cleaning` with a UTM-free query-less fallback — but architecture (routes) should be reserved now (see Section 14, Industry Pages).
- **SEO Notes:** Each card's alt text and link text should include the industry name for future industry-page SEO equity.

### How It Works (Process Timeline)
- **Purpose:** Reduce friction/uncertainty by showing how simple it is to get started — directly counters "difficult scheduling" pain point.
- **Content:** `ProcessTimeline` 4 steps: 1) Request a Free Quote, 2) Walkthrough & Custom Plan, 3) Scheduled Cleaning Begins, 4) Ongoing Quality Checks.
- **Layout:** Horizontal 4-step timeline desktop with connecting line, vertical stacked timeline mobile.
- **Animation:** Steps reveal sequentially, connecting line draws left-to-right on scroll.
- **CTA Placement:** "Get Started Today" button at end of timeline.

### Featured Case Study
- **Purpose:** Provide concrete proof of results (vs. just claims) — single strongest case study surfaced on the homepage.
- **Content:** Industry tag, before/after framing, one headline result stat (e.g., "40% Fewer Complaints in 90 Days"), short summary, client quote snippet, "Read Full Case Study" CTA.
- **Layout:** Split layout — image/gallery left (or right alternating with Why Choose Us section above for visual rhythm), content right.
- **Image Direction:** Real facility photo, bright and clean, ideally a recognizable space type (office lobby).
- **Internal Links:** → `/case-studies/[slug]`, → `/case-studies` (all).

### Testimonials Slider
- **Purpose:** Social proof, third-party validation.
- **Content:** `TestimonialSlider` of 5–8 `TestimonialCard`s: quote, name, title, company, star rating, optional logo.
- **Layout:** Carousel, 1 visible mobile, 2 tablet, 3 desktop.
- **Animation:** Auto-slide every 6s, pause on hover/focus, swipe gesture mobile, smooth crossfade/slide transition.
- **Accessibility Notes:** Carousel must be pausable, have visible prev/next controls with `aria-label`s, and not auto-advance for screen reader users (`aria-live="off"` on the region, controls always operable via keyboard).

### Cleaning Process / Quality Assurance
- **Purpose:** Differentiate on "attention to detail" and "accountability" — directly answers the OSHA/accountability concerns from the Brief.
- **Content:** Short copy block + checklist-style `FeatureList` (Quality Inspections, Trained & Vetted Staff, Eco-Friendly Products Available, Insured & Accountable Teams) paired with supporting image of cleaning equipment/checklist in use.
- **Internal Links:** → FAQs section anchor, → Case Studies.

### Service Areas
- **Purpose:** Reinforce local relevance and seed location-page SEO equity from the homepage.
- **Content:** `SectionHeader` ("Proudly Serving Missouri Businesses") + 6 featured `LocationCard`s (St. Charles, Wentzville, Chesterfield, Clayton, Florissant, Arnold — matching footer's top areas) + "View All Service Areas" button.
- **Layout:** 3-column grid desktop, 2-column tablet, 1-column mobile.
- **Internal Links:** Each card → `/locations/missouri/[city]`; button → `/locations/missouri`.
- **SEO Notes:** This block is a key local-SEO signal; include the state + city naturally in link text.

### FAQ
- **Purpose:** Pre-empt objections, capture "People Also Ask" SEO snippets, reduce sales friction before contact.
- **Content:** 6–8 general questions (pricing approach, scheduling flexibility, service area, insurance/bonding, supplies-provided, contract terms).
- **Layout:** `FAQAccordion`, single column, max-width 760px (reading width), centered.
- **Animation:** Accordion height-auto expand/collapse, chevron rotates 180°.
- **SEO Notes:** Wrap in `FAQPage` schema (JSON-LD) — high snippet potential for "how much does commercial cleaning cost," "do you bring your own supplies," etc.
- **Accessibility Notes:** Each trigger is a real `button` with `aria-expanded`, panel has matching `id`/`aria-controls`.

### Latest Blog Articles
- **Purpose:** Demonstrate ongoing expertise, support content-marketing/SEO growth goal, increase pages-per-session.
- **Content:** 3 most recent `BlogCard`s (image, category tag, title, 1-line excerpt, read time).
- **Internal Links:** → individual posts, → `/blog`.

### Contact CTA Banner
- **Purpose:** Final, unmissable conversion point before the footer.
- **Content:** Bold headline ("Ready for a Cleaner, Healthier Facility?"), short reassurance line, Primary CTA + phone secondary CTA.
- **Layout:** Full-width `CTABanner`, Brand Yellow or Accent Blue gradient background (used sparingly elsewhere, appropriate as the singular "big yellow moment" per page).
- **Animation:** Fade-up, button hover lift+scale 1.03.

### Footer
- Per `02_Website_Architecture.md` exactly: 4 columns (Company, Services, Locations, Contact) + bottom bar (Copyright, Privacy, Terms, Sitemap).

## Image Direction (Page-Level Summary)
Real, bright, Missouri-relevant commercial photography throughout; one hero video; everything else static optimized `next/image` with 20px rounded corners and soft shadow per Design System. No cartoon illustrations; icons via Lucide only.

## Copywriting Direction
Headlines: short, confident, benefit-first ("Reliable Commercial Cleaning That Keeps Your Business Spotless" not "Welcome to Swift Facility Cleaning"). Body: plain, scannable, max 70-char line width. CTAs: action + benefit where space allows ("Request a Free Quote" not "Submit"). Emotional objective per Brief: visitor should think "this company looks trustworthy... I'd like to request a quote."

## CRO Recommendations
- Sticky mobile CTA bar (Call + Quote) on every page including homepage.
- Trust stats directly under hero (proven pattern: reduces bounce by anchoring credibility before any ask).
- Phone number clickable (`tel:`) in navbar, hero, footer, and sticky bar — every instance.
- Keep the quote form short on the homepage CTA (link to full `/contact` page rather than embedding the full form) — reduces homepage cognitive load while the dedicated Contact page handles full qualification.
- Add a subtle exit-intent-free "value reminder" in the sticky CTA bar copy (e.g., "Free, No-Obligation Quote") to reduce perceived risk.

## SEO Recommendations
- **Primary keyword:** commercial cleaning Missouri / commercial cleaning company
- **Secondary keywords:** office cleaning services, janitorial services Missouri, medical facility cleaning, floor care services
- **Suggested H1:** "Reliable Commercial Cleaning That Keeps Your Business Spotless"
- **H2 hierarchy:** Why Choose Us → Our Services → Industries We Serve → How It Works → Case Studies → Testimonials → Service Areas → FAQs
- **Schema:** `LocalBusiness`/`HomeAndConstructionBusiness` (or `Organization` + `LocalBusiness`), `FAQPage`, `AggregateRating` if review data available.
- **Internal links:** to every service, top 6 locations, case studies, blog, contact.
- **Local SEO:** NAP (name/address/phone) consistency matching Google Business Profile exactly; embed service-area list in footer for geo-relevance signals.

---

# 2. SERVICE PAGES

Shared structure for all five service pages, then page-specific notes. Each page is a unique build — **not** a duplicate of the homepage or of each other; only the skeleton order is shared, content/imagery/copy differ per service.

## Shared Wireframe Layout

```
Navbar
↓
Breadcrumb
↓
Service Hero
↓
Benefits
↓
What's Included
↓
Industries Served (by this service)
↓
Before/After Value
↓
Process
↓
FAQs
↓
Related Services
↓
Related Locations
↓
Testimonials
↓
CTA Banner
↓
Footer
```

## Shared Section Breakdown

### Service Hero
- **Purpose:** Immediately confirm the visitor landed on the right service, state the core value prop for *this* service specifically.
- **Content:** Breadcrumb above, H1 ("[Service Name] Services in Missouri"), 2-line subhead naming 2–3 concrete benefits, dual CTA.
- **Layout:** Split 6/6 — text left, static image right (no video on service pages — reserve video for homepage only, keeps build lean).
- **Desktop/Tablet/Mobile:** Same responsive pattern as homepage hero, minus video.
- **Image Direction:** A photo specific to the service (e.g., floor buffer in use for Floor Care; disinfectant fogging for Medical Cleaning).
- **Animation:** Fade-up text, image fade+slight zoom-in.
- **SEO Notes:** H1 must contain exact service keyword; meta title pattern: "[Service] Services in Missouri | Swift Facility Cleaning".

### Benefits
- **Purpose:** Translate features into business outcomes (fewer sick days, better first impressions, compliance, etc.) tailored to this service.
- **Content:** `FeatureList`, 4–6 items, 2-column desktop.
- **Internal Links:** none required here.

### What's Included
- **Purpose:** Set clear expectations, reduce pre-sale questions (transparency builds trust per Brief).
- **Content:** Checklist-style grid or table of specific tasks included (varies per service — detailed per-page below).
- **Layout:** 2–3 column checklist grid desktop, 1-column mobile.
- **CRO Note:** Add a small note "Custom plans available — every facility is different" to invite the quote conversation rather than appear rigid.

### Industries Served (by this service)
- **Purpose:** Cross-sell into industry pages relevant to this specific service.
- **Content:** 4–6 `IndustryCard`s most relevant to the service (e.g., Office Cleaning → Offices, Government Buildings, Showrooms; Medical Cleaning → Medical Facilities, Daycare).
- **Internal Links:** → relevant `/industries/[slug]` pages.

### Before/After Value
- **Purpose:** Make the abstract value of "clean" tangible and emotionally resonant (currently a stated requirement distinct from a literal before/after photo gallery, since posed before/after cleaning photos tend to look gimmicky per Design System "avoid cheesy" guidance).
- **Content:** A short value-contrast block: "Without Swift Facility Cleaning" (pain points: inconsistent quality, complaints, turnover of vendors) vs. "With Swift Facility Cleaning" (consistency, accountability, peace of mind) — two-column comparison, not photo-based.
- **Layout:** 2-column comparison cards, X-mark/check-mark iconography (`Shield`/`CheckCircle` vs muted neutral icon — never red/green only, paired with labels for accessibility).
- **Recommendation:** This reframing avoids low-quality "before/after" stock-photo tropes while still satisfying the brief's intent (demonstrate value contrast) and stays on-brand as premium/B2B rather than gimmicky.

### Process
- **Purpose:** Reuse the trust-building "how it works" pattern at the service level, tailored slightly (e.g., "Initial Facility Walkthrough" first step references this specific service).
- **Content:** `ProcessTimeline`, 4 steps.

### FAQs
- **Purpose:** Service-specific objection handling (distinct questions from homepage FAQ — no duplicate content).
- **Content:** 5–6 service-specific Q&As.
- **SEO Notes:** `FAQPage` schema; target "People Also Ask" queries specific to the service (e.g., "how often should office carpets be cleaned").

### Related Services
- **Purpose:** Topical authority + reduce bounce by offering adjacent services.
- **Content:** 3 `ServiceCard`s for the other services (e.g., Office Cleaning page shows Janitorial, Floor Care, Disinfection).
- **Internal Links:** per Service Page Linking Strategy in Architecture doc.

### Related Locations
- **Purpose:** Local SEO + geo-relevance signal at the service level.
- **Content:** 4–6 `LocationCard`s, ideally the cities with the highest commercial density (St. Charles, Chesterfield, Clayton, Wentzville).
- **Internal Links:** → `/locations/missouri/[city]`.

### Testimonials
- **Content:** 2–3 testimonials filtered/written to be relevant to this service type where possible.

### CTA Banner
- Same pattern as homepage bottom CTA, copy adjusted to reference the specific service ("Ready for Spotless Office Floors Every Day?").

## Per-Service Specifics

### Commercial Cleaning (`/commercial-cleaning`) — Hub Page
- **Purpose:** Acts as the category hub/pillar page for the entire cleaning-services silo; must rank for the broadest, highest-volume keyword.
- **Unique content:** Instead of "What's Included" as a flat checklist, this page uses a **Services Grid** (all 5 sub-services as cards, Janitorial/Office/Medical/Floor Care/Disinfection) in place of that section — since the hub's job is routing, not itemizing tasks.
- **Primary keyword:** commercial cleaning services Missouri.
- **Suggested H1:** "Commercial Cleaning Services for Missouri Businesses".

### Office Cleaning (`/commercial-cleaning/office-cleaning`)
- **What's Included:** Desk/workstation sanitizing, restroom cleaning & restocking, breakroom/kitchen cleaning, trash removal, vacuuming/hard floor care, glass/window spot cleaning, common-area dusting.
- **Primary keyword:** office cleaning services Missouri. **Suggested H1:** "Professional Office Cleaning Services in Missouri".
- **Industries cross-link:** Offices, Government Buildings, Showrooms, Car Dealerships.

### Medical Cleaning (`/commercial-cleaning/medical-cleaning`)
- **What's Included:** OSHA/biohazard-aware cleaning protocols, exam room disinfection, waiting area sanitation, high-touch point disinfection, compliant waste handling, EPA-registered disinfectants.
- **Primary keyword:** medical facility cleaning Missouri. **Suggested H1:** "Medical Facility Cleaning & Disinfection Services".
- **Compliance Note (Recommendation):** Add a small trust strip referencing compliance-aware practices (OSHA-aware, not a false certification claim) — builds confidence for the highest-trust-bar industry without overstating credentials; mark certifications as "available upon request" if not yet formalized, consistent with the About page certifications placeholder rule.
- **Industries cross-link:** Medical Facilities, Daycare Facilities, Gyms.

### Janitorial Services (`/commercial-cleaning/janitorial-services`)
- **What's Included:** Recurring scheduled cleaning (daily/weekly/custom), restroom & breakroom upkeep, trash/recycling management, floor maintenance, supply restocking, day-porter options.
- **Primary keyword:** janitorial services Missouri. **Suggested H1:** "Reliable Janitorial Services for Missouri Facilities".
- **Industries cross-link:** Warehouses & Industrial, Commercial Facilities, Government Buildings.

### Floor Care (`/commercial-cleaning/floor-care`)
- **What's Included:** Strip & wax (VCT), carpet extraction, buffing/burnishing, tile & grout cleaning, hardwood maintenance, scheduled deep-cleaning programs.
- **Primary keyword:** commercial floor care Missouri. **Suggested H1:** "Commercial Floor Care & Maintenance Services".
- **Unique section swap:** Replace generic "Before/After Value" framing with a **floor-type selector** (tabs: VCT / Carpet / Tile / Hardwood) showing service notes per surface — more useful than a generic comparison for this specific service. (Documented exception to the shared template, justified by the visibly different decision process for floor care buyers.)
- **Industries cross-link:** Gyms & Recreational Facilities, Showrooms, Warehouses & Industrial.

### Disinfection Services
- Per the mega menu, Disinfection Services is listed as a service but not in the original "create unique structures for these 5" list (which covers Commercial, Office, Medical, Janitorial, Floor Care). **Recommendation:** Build Disinfection Services using the exact shared service-page template above at `/commercial-cleaning/disinfection-services` in the same implementation pass as the other five, since it's already in the IA/navigation — leaving it unbuilt would create a broken mega-menu link and an orphan-page violation per the Architecture doc's navigation rules.
  - **What's Included:** Electrostatic spraying, high-touch point disinfection, EPA-registered product application, scheduled/on-demand disinfection visits, post-illness deep disinfection.
  - **Primary keyword:** commercial disinfection services Missouri.

---

# 3. INDUSTRY PAGES (`/industries/[slug]`) — Future-Ready Architecture

## Purpose
Not in the initial build list explicitly as "create now," but referenced everywhere (mega menu, homepage, service pages) per the Brief's instruction: *"design the architecture so dedicated pages can be added later without redesigning navigation or routing."*

## Recommendation
Implement the **route and template now** (`app/industries/[slug]/page.tsx`), populate the highest-intent 3–4 industries first (Offices, Medical Facilities, Schools, Warehouses & Industrial) with full content, and ship the remaining 7 as lightly-populated placeholder pages using the same template (hero + generic service grid + CTA) rather than 404s or external mega-menu links with no destination. This satisfies "reachable within 3 clicks" and "no orphan pages" without requiring a content backlog before launch.

## Template Structure (applies to every industry page)
```
Navbar → Breadcrumb → Industry Hero → Why This Industry Needs Specialized Cleaning
→ Recommended Services → Common Challenges We Solve → Related Case Study
→ FAQs → Related Locations → CTA Banner → Footer
```
- **Industry Hero:** H1 "[Industry] Cleaning Services in Missouri", subhead naming the #1 pain point for that industry (e.g., Schools → health/safety for children; Medical → compliance; Warehouses → large-scale scheduling).
- **Recommended Services:** 2–3 `ServiceCard`s most relevant to this industry (pulls from the 6 service pages — reinforces the cross-linking strategy already defined in the Architecture doc).
- **SEO:** Primary keyword pattern "[industry] cleaning services Missouri"; this is a strong long-tail SEO play with low competition — recommend prioritizing this build in Phase 2 immediately after core service pages ship.

---

# 4. LOCATION PAGES (`/locations/missouri/[city]`) — Future-Ready Architecture

## Purpose
Local SEO capture for each of the 18 named cities; supports "reachable in 3 clicks" and the Locations mega-menu.

## Recommendation
Same phased approach as Industries: build the **state hub page** (`/locations/missouri`) fully now (lists all 18 cities as `LocationCard`s, intro copy about Missouri-wide coverage, CTA), and the **city template** now, populated fully for the 6 footer-featured cities (St. Charles, Wentzville, Chesterfield, Clayton, Florissant, Arnold) at launch, with the remaining 12 shipped as lighter template-only pages (still unique H1/meta, still real content, just shorter) rather than left unbuilt — avoids thin/duplicate-content SEO risk while meeting the "no orphan pages" rule.

## Locations Hub (`/locations/missouri`)
```
Navbar → Breadcrumb → Hub Hero ("Commercial Cleaning Services Across Missouri")
→ Service Area Map (placeholder embed) → All Cities Grid (18 LocationCards, searchable/filterable by first letter for scalability)
→ Why Local Matters → CTA Banner → Footer
```
- **Recommendation:** Build the city grid as a generic, data-driven component fed by a single `locations.ts` config file (city name, slug, short blurb, nearby city slugs). This means adding a 19th city or a 2nd state later is a data change, not a code change — directly satisfies the Brief's "multi-state expansion" future-growth requirement.

## City Page Template (`/locations/missouri/[city]`)
```
Navbar → Breadcrumb → City Hero → Services Available in [City]
→ Why Businesses in [City] Choose Swift Facility Cleaning → Testimonials (local if available, else general)
→ FAQs → Nearby Service Areas → CTA Banner → Footer
```
- **City Hero:** H1 "Commercial Cleaning Services in [City], MO", subhead referencing proximity/responsiveness.
- **Services Available:** All 5 core services as compact cards, each linking to the service page (every city page should link to every core service — Architecture doc requirement).
- **Nearby Service Areas:** 3–4 `LocationCard`s for geographically adjacent cities (cross-linking, per Architecture doc's "cross-link nearby service areas naturally").
- **SEO:** Suggested H1 pattern fixed above; meta title "Commercial Cleaning in [City], MO | Swift Facility Cleaning"; `LocalBusiness` schema with `areaServed` per city; avoid duplicate body copy between cities — vary the "why businesses choose us" paragraph with city-specific framing (e.g., proximity to St. Charles vs. Wentzville commercial corridors) to avoid thin/duplicate content penalties.

---

# 5. ABOUT PAGE (`/about`)

## Purpose
Build emotional trust and long-term credibility; answer "who are you" in depth for visitors who want to vet the company before committing (common for B2B/facility-manager buyers).

## Target Audience
Higher-intent visitors doing vendor due diligence; also a key page for hiring/partnership credibility.

## Primary Conversion Goal
Request a Free Quote / Schedule a Consultation.

## Secondary Goals
Trust, brand storytelling, internal linking to Reviews and Case Studies.

## Wireframe Layout
```
Navbar → Breadcrumb → About Hero → Company Story → Mission & Values
→ Team Philosophy → Why Clients Trust Us (stats + testimonial pull-quote)
→ Timeline → Certifications (placeholder-ready) → Community Commitment
→ CTA Banner → Footer
```

## Section Notes
- **About Hero:** H1 "About Swift Facility Cleaning", subhead summarizing the brand positioning statement from the Brief ("enterprise-level professionalism with the responsiveness of a trusted local business").
- **Company Story:** 760px reading-width narrative block, founder/origin framing if available, paired with a real team or facility photo.
- **Mission & Values:** Grid of the Core Brand Values (Reliability, Integrity, Consistency, Accountability, Health & Safety, Attention to Detail) as icon + short statement cards.
- **Team Philosophy:** Short statement on hiring/training standards (addresses "high staff turnover from previous cleaning companies" pain point directly — reassures visitors this company invests in its people).
- **Why Clients Trust Us:** `StatisticsGrid` reused from homepage + one strong pull-quote testimonial, large type, centered.
- **Timeline:** Horizontal `ProcessTimeline`-style component repurposed for company milestones (founding, key growth markers); if real milestones aren't yet defined, recommend a simple 3-point "Our Journey" version (Founded → Growth → Today) rather than fabricating dates.
- **Certifications:** Card grid with placeholder badge slots (Bonded & Insured, OSHA-Aware Practices, Green Cleaning Options) — labeled clearly as placeholders in code comments/CMS so they're swapped, never fabricated, before launch.
- **Community Commitment:** Optional short block on local Missouri community involvement if applicable; if no content exists yet, recommend omitting this section entirely rather than padding with generic filler — an empty trust section is worse than no section.
- **SEO:** Primary keyword "about Swift Facility Cleaning" / brand queries; `Organization` schema with `foundingDate`, `address`, `sameAs` (social profiles).

---

# 6. CASE STUDIES

## Case Studies Index (`/case-studies`)
- **Purpose:** Aggregate proof of results across industries; key consideration-stage page for skeptical B2B buyers.
- **Layout:** Filterable grid (by industry) of `CaseStudyCard`s, 3-column desktop, 1-column mobile.
- **CRO:** Filter by industry chips above the grid — lets a school administrator immediately see only school-relevant proof, increasing relevance and reducing bounce.
- **SEO:** `ItemList` schema; each card links with descriptive anchor text including industry + result.

## Case Study Detail (`/case-studies/[slug]`) — Scalable Template
```
Navbar → Breadcrumb → Case Study Hero (industry tag, title, hero image)
→ Challenge → Solution → Results (stat-forward) → Gallery → Client Testimonial
→ Related Service/Industry/Location → CTA Banner → Footer
```
- **Challenge:** Short framing of the client's pain point pre-engagement (ties back to Brief's pain-point list — reinforces relatability).
- **Solution:** What Swift Facility Cleaning specifically did — services deployed, schedule, team size if relevant.
- **Results:** `StatisticsGrid`-style result stats (e.g., "40% Fewer Complaints," "100% On-Time Service Rate") — the highest-leverage CRO element on this page.
- **Gallery:** 3–6 image grid, lightbox on click, real facility photography only.
- **Client Testimonial:** Full `TestimonialCard`, larger format than the homepage slider version.
- **Related links:** Per Case Study Linking Strategy in the Architecture doc (service → industry → location → quote), rendered as a horizontal breadcrumb-style "Related" trail above the CTA banner.
- **SEO:** `Article`/`CaseStudy`-adjacent schema (no official `CaseStudy` schema type exists — use `Article` with industry as `about` property); unique meta description per case study referencing the specific result stat (strong CTR driver in search results).

---

# 7. REVIEWS (`/reviews`)

## Purpose
Centralize all social proof in one high-trust, high-dwell-time page; supports the secondary goal "showcase service quality / display customer satisfaction."

## Wireframe Layout
```
Navbar → Breadcrumb → Reviews Hero (aggregate rating + Google Reviews badge)
→ Rating Summary → Featured Testimonials → Full Review Grid (filterable)
→ Video Testimonials (future placeholder) → CTA Banner → Footer
```

## Section Notes
- **Reviews Hero:** Large aggregate star rating pulled live from Google Business Profile (e.g., via Google Places API or embedded widget) + "X reviews" count; this is the single strongest trust signal on the page — must be above the fold.
- **Rating Summary:** Breakdown bar chart (5-star → 1-star distribution) if data supports it; omit if review volume is too low to look credible.
- **Featured Testimonials:** 3–4 hand-picked longer-form `TestimonialCard`s with full context (industry, city).
- **Full Review Grid:** Paginated or "load more" grid of all available reviews; filter chips by industry or star rating.
- **Video Testimonials:** Documented as future-ready — reserve a section with a clear "Coming Soon" or simply omit the DOM block entirely until content exists (recommend omit, per the same "don't pad with filler" principle as the About page Community Commitment section) but keep the route/section slot reserved in the component so it can be added without restructuring the page.
- **CRO:** Place a "Leave Us a Review" secondary CTA linking out to the Google review form — review-volume growth is a compounding SEO/trust asset.
- **SEO:** `Review`/`AggregateRating` schema attached to the `LocalBusiness` entity; this page is a strong candidate for rich-snippet star ratings in search results.
- **Accessibility:** Star ratings must have a text equivalent ("4.9 out of 5 stars"), never rely on filled-star icons alone.

---

# 8. CONTACT (`/contact`)

## Purpose
The final-step conversion page for visitors ready to act; must minimize friction to the absolute floor while still qualifying the lead.

## Target Audience
High-intent visitors, often arriving directly via a CTA click from any other page.

## Primary Conversion Goal
Submit Contact/Quote Form.

## Secondary Goals
Phone calls, address/hours transparency, FAQ objection-handling at the moment of decision.

## Wireframe Layout
```
Navbar → Breadcrumb → Contact Hero (short) → Contact Form + Contact Info (split layout)
→ Embedded Map (placeholder) → Business Hours → Emergency Contact (future-ready)
→ FAQ → CTA reinforcement → Footer
```

## Section Notes
- **Contact Hero:** Short — H1 "Request Your Free Quote", 1-line subhead ("Tell us about your facility and we'll respond within one business day"), no large media needed here — the form is the hero.
- **Contact Form + Info (split layout):** Form left (7/12 desktop), sticky info card right (5/12): phone (`tel:` link), email (placeholder until confirmed, per Architecture doc), address, hours. On mobile, info card stacks above the form (so a visitor who just wants to call doesn't have to scroll past a full form).
- **Embedded Map:** Placeholder `iframe`/static map image of the St. Charles, MO area, swappable for a live Google Maps embed once an API key is provisioned; keep it below the fold and below the form so it doesn't compete with conversion.
- **Business Hours:** Simple table/list, clearly state if currently closed with next-open time (small trust/transparency touch).
- **Emergency Contact (future-ready):** Reserve a labeled slot ("24/7 Emergency Cleaning? Call [number]") — per the Brief's responsiveness positioning, this is worth shipping at launch if an emergency line exists, otherwise keep the component built but hidden via a single config flag rather than removed, so it can be enabled without a redeploy of new code.
- **FAQ:** 4–5 contact/process-specific questions (response time, service area limits, quote turnaround, contract length).
- **CRO:** This is the page where form friction matters most — see Contact Form Fields below; also recommend a one-line reassurance under the submit button ("No obligation. No spam. We respond within 1 business day.") to reduce submission anxiety.

## Contact Form Fields
Per the brief's required fields, plus reasonable lead-qualification additions that don't add friction:

| Field | Type | Required | Notes |
|---|---|---|---|
| First Name | text | Yes | |
| Last Name | text | Yes | |
| Business Name | text | **Recommended addition** | Low-friction, high-value — lets sales pre-qualify before the first call; B2B forms expect this field. |
| Business Address | text (with city/state/zip) | Yes | Also doubles as a local-relevance signal. |
| Phone | tel | Yes | Pattern-validated, formatted as typed. |
| Email | email | **Recommended addition** | Needed for written quote follow-up; omitting it forces phone-only contact, which adds friction for many B2B buyers who prefer email. |
| Service Interested In | select | **Recommended addition** | Dropdown of the 6 services + "Not Sure / General Inquiry" — directly improves lead routing/qualification with a single low-friction field. |
| Facility Size (approx. sq ft) | select (ranges) | Optional | Helps quote accuracy without requiring exact figures. |
| Message | textarea | Yes | "Tell us about your facility and cleaning needs." |

- **Recommendation rationale:** Email and Service-Interested fields are the two highest-value, lowest-friction additions — they directly improve lead quality and routing speed without adding meaningful abandonment risk (both are standard, expected fields in any B2B quote form). Facility size is optional/skippable to keep it friction-free while still useful when provided.
- **Validation:** Inline validation per Design System form rules (clear labels, no floating labels, visible focus state, helpful inline error messages, 56px input height, 14px radius).
- **Submission state:** Button shows loading spinner, then inline success message with next-step expectation ("Thanks! We'll respond within 1 business day.") — avoid a jarring full-page redirect for a simple lead form.

---

# 9. FAQs PAGE (`/faqs`)

## Purpose
Centralize all FAQ content site-wide for SEO breadth and to give visitors who specifically seek answers (vs. browsing services) a direct destination, distinct from the page-level FAQ sections embedded elsewhere.

## Wireframe Layout
```
Navbar → Breadcrumb → FAQs Hero → Category Filter Tabs (General / Pricing / Scheduling / Services / Industries)
→ FAQ Accordion (grouped by category) → Still Have Questions CTA → Footer
```

- **Category Filter Tabs:** Lets visitors jump to relevant questions instantly; reduces the need to scroll through irrelevant categories.
- **Content strategy:** This page should aggregate the *general* + *cross-cutting* questions; service-specific FAQs stay on their respective service pages (avoids duplicate content across the site while still giving this page unique, comprehensive value).
- **SEO:** Full `FAQPage` schema; this page is a strong candidate to rank for long-tail "how much does commercial cleaning cost in Missouri" style queries.
- **Internal Links:** Each FAQ answer that references a service/location should link to it inline (not just generic "learn more").

---

# 10. BLOG

## Blog Index (`/blog`)
```
Navbar → Breadcrumb → Blog Hero → Category Filter → Featured Post (large card)
→ Post Grid (paginated) → Newsletter/Lead Capture (optional) → CTA Banner → Footer
```
- **Purpose:** Support long-term content marketing and organic growth goal; capture top-of-funnel informational search traffic and convert a portion into leads via inline CTAs.
- **Featured Post:** Most recent or most strategically important post, larger card treatment above the grid.
- **Recommendation — Lead Capture:** Add a lightweight email capture block ("Get cleaning tips & facility maintenance guides") between the featured post and the grid — blog traffic is typically lower-intent, so capturing email for nurture is higher-value than expecting an immediate quote request.

## Blog Post (`/blog/[slug]`)
```
Navbar → Breadcrumb → Post Header (title, date, category, read time, hero image)
→ Post Body (760px reading width) → Inline CTA Banner (mid-article) → Author/Reviewed-by block
→ Related Posts → Related Service/Industry/Location links → Comments (future, optional) → CTA Banner → Footer
```
- **Per Architecture doc:** every post needs a related service link, related industry link, related location link, a CTA banner, and the contact page link — target 3–5 internal links total.
- **SEO:** `Article`/`BlogPosting` schema with `datePublished`, `dateModified`, `author`; H1 = post title only (never duplicate as an H2 anywhere on the page); table of contents recommended for posts over ~1200 words (improves dwell time and snippet eligibility).
- **Accessibility:** Reading-width body (760px) with 150–170% line height per Design System; ensure sufficient contrast on any pull-quotes/callout boxes.

---

# 11. LEGAL PAGES (`/privacy-policy`, `/terms-conditions`, `/sitemap`)

- **Purpose:** Compliance and trust; low-design-priority but must exist (linked from footer bottom bar per Architecture doc).
- **Layout:** Single-column, 760px reading width, simple H2-structured legal text, no marketing chrome beyond the standard Navbar/Footer.
- **Sitemap page (`/sitemap`):** Human-readable HTML sitemap (distinct from `sitemap.xml`) listing every major section — services, industries, locations (grouped, not all 18 flat), resources — genuinely useful for both users and crawlers, and a good orphan-page safety net.
- **Recommendation:** Auto-generate the XML sitemap (`sitemap.xml`) via Next.js's built-in `app/sitemap.ts` driven by the same data sources (services config, locations config, industries config, blog CMS) used to render the human sitemap — single source of truth, no manual sync required as pages scale.

---

# 12. 404 / NOT FOUND PAGE

Not explicitly requested but required for a production-grade build.
- **Content:** Friendly, on-brand message ("This page took a wrong turn"), search/quick-links to Home, Services, Contact, and the phone number — never a dead end.
- **Layout:** Centered, minimal, same Navbar/Footer as the rest of the site so navigation is never lost.
- **Recommendation:** This is a small addition but directly supports the "never need to search for a way to contact the company" rule — a generic blank 404 would violate that principle.

---

# 13. GLOBAL COMPONENTS — Cross-Page Specification

## Navbar
- **Desktop:** Logo left, primary nav center/right (Commercial Cleaning, Industries, Locations, Resources, Contact), phone number + "Request a Free Quote" button far right.
- **Behavior:** Transparent over hero (white/light text + outlined CTA), solid `#FFFFFF` background with soft shadow after ~80px scroll, 200ms transition.
- **Mega Menu:** Opens on hover (150ms delay) or click (touch/keyboard); two-to-three column layout per the Architecture doc's mega menu structure, each item with icon + short description, "View All" CTA at the bottom of Commercial Cleaning and Locations menus.
- **Mobile:** Hamburger → full-height slide-out drawer from the right; accordion submenus for Commercial Cleaning/Industries/Locations/Resources; sticky "Request a Free Quote" button pinned near the top of the drawer; phone number visible directly under it.
- **Accessibility:** Full keyboard support (Tab/Shift+Tab through items, Enter/Space to open submenus, Escape to close), `aria-expanded` on menu triggers, focus trapped within open mobile drawer, focus returns to the trigger button on close.

## Footer
Exactly as specified in `02_Website_Architecture.md` — 4 columns (Company, Services, Locations, Contact) + bottom bar (Copyright, Privacy Policy, Terms & Conditions, Sitemap). Implement Locations column data from the same shared `locations.ts` config as the Locations hub page (single source of truth).

## Sticky Mobile CTA
- Fixed bottom bar, mobile only (hidden ≥768px), two buttons: "Call Now" (tel: link, secondary style) + "Request a Free Quote" (primary style), 56px height, safe-area-inset-bottom padding for modern phones, appears after scrolling past the hero (avoids double-CTA crowding directly under the hero's own CTAs).

## CTA Banner
Reusable, props-driven: `headline`, `subtext`, `primaryLabel`, `primaryHref`, `secondaryLabel`, `secondaryHref`, `variant` (`yellow` | `blue` | `light`). Used identically in structure across every page so the pattern is instantly recognizable to a returning visitor.

---

# 14. SITE-WIDE CRO RECOMMENDATIONS

- **Sticky phone number everywhere:** navbar, sticky mobile bar, footer, contact page — every instance a real `tel:` link, never an image of a phone number.
- **Trust badges:** Bonded & Insured / OSHA-Aware / Locally Owned badges in the footer and near every form, not just the About page — repetition of trust signals near every conversion point measurably reduces hesitation.
- **Form friction reduction:** Never more than 7 fields on the main contact form (current spec lands at 8 fields, 6 required, 2 optional — within acceptable B2B norms; do not add more without removing one).
- **Urgency without gimmicks:** Avoid countdown timers or fake scarcity (off-brand per "never feel salesy/gimmicky"); instead use *responsiveness* urgency — "We respond within 1 business day" — which is honest and still reduces perceived risk of going dark after submitting.
- **Quote form shortcuts:** Persistent "Request a Free Quote" as a real button (not just a text link) in every nav state, every CTA banner, every sticky bar — consistent visual weight trains the eye to recognize the one action that matters.

# 15. SITE-WIDE SEO RECOMMENDATIONS

- **Schema stack:** `Organization` + `LocalBusiness` on every page (via root layout JSON-LD), `BreadcrumbList` on every non-home page, `FAQPage` wherever an FAQ accordion renders, `Article`/`BlogPosting` on blog posts, `AggregateRating`/`Review` on Reviews and case studies where data exists.
- **Metadata:** Use Next.js 15 `generateMetadata` per route, driven by the same config files as content (services.ts, industries.ts, locations.ts) so titles/descriptions never drift from displayed content.
- **Canonical URLs:** Every page sets an explicit canonical (prevents duplicate-content issues across the 18 near-template location pages).
- **Image SEO:** Descriptive, keyword-natural `alt` text on every photo (never "image1.jpg" or empty alt on meaningful images); decorative images get `alt=""`.
- **Core Web Vitals:** Hero video must not block LCP — use a poster image as the actual LCP element with the video layered on top via `next/image` priority loading; all below-fold images lazy-loaded by default (`next/image` handles this automatically).

# 16. ACCESSIBILITY — SITE-WIDE BASELINE

- Color contrast: all text/background combinations checked against WCAG AA (4.5:1 body, 3:1 large text); Brand Yellow `#F7D04F` on white fails AA for text — **rule:** yellow is for backgrounds/accents/icons only, never for text color, per its sparing-use intent in the Design System.
- Keyboard: every interactive element reachable and operable via keyboard alone, visible 2px focus ring in Accent Blue.
- Screen readers: landmark regions (`header`, `nav`, `main`, `footer`), one `h1` per page, skip-to-content link.
- Touch targets: 44×44px minimum on every button/link, enforced as a Tailwind utility class shared across all interactive components.
- Motion: every scroll/auto-advancing animation respects `prefers-reduced-motion: reduce`.

# 17. MOTION — SITE-WIDE BASELINE

Directly inherited from `01_Design_System.md`, applied consistently: fade-up 30px/0.6s/ease-out for scroll reveals; card hover lift + shadow increase; button scale 1.03 + shadow on hover; counters animate once via Intersection Observer; FAQ accordions animate height via Framer Motion `AnimatePresence`; testimonial sliders auto-advance with pause-on-hover/focus and swipe support; navigation mega-menus fade+slide open; loading states use skeleton placeholders matching final content dimensions (prevents layout shift).

---

# 18. IMPLEMENTATION PRIORITY (Recommended Build Order)

Given the scope (40+ eventual routes), recommend phasing rather than building everything simultaneously:

**Phase 1 — Foundation & Core Conversion Path**
Design tokens/Tailwind config, global layout (Navbar, Footer, Sticky CTA), Homepage, Contact page, all 6 Service pages, FAQs page, 404.

**Phase 2 — Trust & Proof**
About, Reviews, Case Studies (index + 2–3 real case studies), Locations hub + 6 featured cities.

**Phase 3 — Long-Tail SEO Expansion**
Remaining 12 location pages, Industries (4 full + 7 placeholder), Blog index + initial posts.

**Phase 4 — Future Growth (per Brief)**
Careers, Online Booking, Customer Portal, additional states/industries — architecture already supports these without restructuring per Sections 3–4 above.

This document, together with `00_Project_Brief.md`, `01_Design_System.md`, and `02_Website_Architecture.md`, is the permanent source of truth for implementation. Every component and page built should trace back to this blueprint.
