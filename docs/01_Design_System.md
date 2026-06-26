# 01_Design_System.md

# Swift Facility Cleaning

## Master Design System

Version: 1.0

---

# Design Philosophy

Swift Facility Cleaning's website should communicate professionalism through simplicity.

The design should feel clean, modern, trustworthy, and highly organized. Every element should reinforce confidence and reliability without appearing overly corporate or sterile.

The interface should prioritize clarity, whitespace, accessibility, and effortless navigation.

Design inspiration should come from premium SaaS products, modern B2B websites, and enterprise service companies rather than traditional cleaning company websites.

The website should feel like a professional software company offering commercial cleaning services.

---

# Design Principles

Every design decision should follow these principles:

* Clean before decorative
* Content before effects
* Simplicity before complexity
* Consistency over creativity
* Large whitespace
* Clear visual hierarchy
* Fast scanning
* Conversion-first layouts
* Mobile-first design
* Accessibility by default

---

# Brand Colors

## Primary Background

```text
#FFFBEE
```

Warm off-white used as the default page background.

---

## Primary Brand Color

```text
#F7D04F
```

Used for:

* Primary CTA buttons
* Highlights
* Active navigation
* Icons
* Badges
* Important UI accents

Should be used sparingly to maintain visual impact.

---

## Secondary Background

```text
#ECF4FE
```

Used for:

* Alternate page sections
* Feature blocks
* Cards
* Testimonials
* FAQs
* Forms

Creates subtle separation between sections.

---

## Accent Color

```text
#4A94F7
```

Used for:

* Links
* Hover states
* Interactive elements
* Progress indicators
* Icons
* Decorative accents

---

# Neutral Palette

```text
Heading
#111827

Body
#374151

Secondary Text
#6B7280

Borders
#E5E7EB

Light Border
#F3F4F6

White
#FFFFFF
```

---

# Color Usage Rules

Primary Yellow should never dominate the page.

Approximate usage:

Backgrounds: 70%

White: 15%

Blue Accent: 10%

Yellow Accent: 5%

This keeps the website feeling bright, clean, and professional.

---

# Typography

## Font Family

Primary

Open Sans Condensed

Fallback

Roboto

Open Sans

Arial

sans-serif

---

# Font Scale

Hero Title

64px

Desktop

Weight

700

Line Height

110%

---

Hero Subtitle

22px

Weight

400

Line Height

160%

---

H1

56px

Bold

---

H2

42px

Bold

---

H3

32px

Semi Bold

---

H4

24px

Semi Bold

---

Body Large

20px

---

Body

18px

---

Body Small

16px

---

Caption

14px

---

Button Text

16px

Weight 600

Uppercase disabled

---

# Typography Rules

Headings should be concise.

Maximum:

2 lines.

Paragraph width:

70 characters maximum.

Line height:

150–170%.

Never center long paragraphs.

---

# Container Widths

Extra Large

1440px

Default

1280px

Content

1140px

Reading Width

760px

---

# Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Use CSS Grid whenever possible.

Avoid deeply nested layouts.

---

# Spacing Scale

Use an 8-point spacing system.

```text
4
8
12
16
24
32
40
48
64
80
96
120
160
```

Section spacing:

120px Desktop

96px Tablet

72px Mobile

Never reduce below 64px between major sections.

---

# Border Radius

Buttons

12px

Cards

20px

Forms

14px

Images

20px

Testimonials

24px

Feature Cards

20px

Pills

999px

---

# Shadows

Small

Very soft

Medium

Subtle elevation

Large

Floating card

Avoid harsh shadows.

No black shadows.

Use low-opacity neutral shadows.

---

# Borders

Use 1px borders.

Neutral gray.

Never use heavy borders.

Cards should rely on spacing before borders.

---

# Buttons

## Primary Button

Background

Brand Yellow

Dark text

Rounded

12px radius

Medium shadow

Hover

Lift slightly

Darken background

Transition

200ms

---

## Secondary Button

White background

Blue border

Blue text

Hover

Blue background

White text

---

## Ghost Button

Transparent

Blue text

Underline on hover

---

Button Heights

Small

40px

Medium

48px

Large

56px

---

# Cards

Cards should feel elevated without being heavy.

Requirements

20px radius

32px padding

Soft shadow

Hover elevation

Subtle border

Consistent spacing

---

# Forms

Inputs

56px height

14px radius

Clear labels

Visible focus state

No floating labels

Large touch targets

Inline validation

Helpful error messages

---

# Icons

Use Lucide Icons throughout the project.

Icon Style

Outline

2px stroke

Rounded edges

Consistent sizing

Avoid filled icons.

---

Common Icons

Phone

Email

Location

Clock

Shield

Check Circle

Sparkles

Building

Clipboard

Users

Arrow Right

Chevron

Calendar

Message Square

Quote

Star

Cleaning-related icons should remain minimal and modern.

---

# Images

Photography should feel authentic.

Show:

Commercial offices

Professional cleaners

Medical facilities

Schools

Warehouse cleaning

Modern equipment

Friendly teams

Sparkling interiors

Bright natural lighting

Uniformed staff

Avoid:

Cheesy stock photos

Overly posed people

Artificial smiles

Low-resolution imagery

Overedited photos

Cartoon illustrations

---

# Image Treatment

Rounded corners

20px radius

Consistent aspect ratios

Soft shadows

Lazy loading

Optimized sizes

---

# Illustrations

Use illustrations sparingly.

Photography should dominate.

---

# Background Patterns

Keep backgrounds simple.

Optional:

Soft gradients

Subtle grid texture

Blur effects

Very light noise

No busy patterns.

---

# Animations

Animations should support usability.

Never distract users.

---

## Scroll Animation

Fade Up

30px movement

0.6s duration

Ease Out

---

## Cards

Fade

Scale

Hover Lift

---

## Buttons

Scale

1.03

Shadow increase

Background transition

---

## Images

Fade

Zoom

Parallax where appropriate

---

## Navigation

Smooth dropdown

Fade

Slide

Sticky transition

---

## Hero

Headline stagger animation

CTA fade

Background video fade-in

---

## Testimonials

Auto-slide

Pause on hover

Swipe on mobile

Smooth transitions

---

## Counters

Animated number counting

Only once

Intersection Observer

---

## FAQ

Accordion animation

Height auto

Smooth transition

---

## Loading States

Skeleton components

Image placeholders

Button loading spinner

Form submission state

---

# Micro Interactions

Navigation hover

Card hover

Icon movement

Button ripple

Link underline animation

Arrow slide

Input focus glow

Success checkmark

Toast notifications

---

# Navigation

Sticky after scrolling

Transparent over hero

Solid background on scroll

Mega menu support

Keyboard accessible

Mobile drawer

Active page indicator

---

# Footer

Four-column layout

Contact

Services

Locations

Resources

Social links

Copyright

Privacy Policy

Terms

---

# Reusable Components

The UI should be built from reusable components only.

Core components include:

* Navbar
* Mega Menu
* Hero
* Section Header
* CTA Banner
* Trust Block
* Counter
* Service Card
* Industry Card
* Testimonial Card
* FAQ Accordion
* Blog Card
* Location Card
* Case Study Card
* Contact Form
* Primary Button
* Secondary Button
* Badge
* Breadcrumb
* Pagination
* Footer
* Social Icons
* Quote Banner
* Process Timeline
* Feature List
* Statistics Grid

All components should be configurable through props rather than duplicated.

---

# Accessibility

Minimum contrast ratio:

WCAG AA compliant

Visible keyboard focus

Screen-reader friendly labels

Proper heading hierarchy

ARIA support where needed

Minimum touch target:

44×44px

No information conveyed by color alone

---

# Motion Guidelines

All animations should feel smooth, subtle, and purposeful.

Avoid:

* Flashing effects
* Excessive parallax
* Bounce animations
* Long delays
* Distracting motion

Animations should improve the experience without slowing it down.

---

# Consistency Rules

Every page should use the same:

* Grid system
* Section spacing
* Card styling
* Button variants
* Typography scale
* Color hierarchy
* Icon style
* Animation timing
* Border radius
* Shadows
* Form components
* CTA patterns

Visual consistency is more important than introducing unique designs for individual pages.

---

# Final Design Vision

The Swift Facility Cleaning website should feel like a premium, enterprise-ready service platform—clean, organized, trustworthy, and effortless to use.

Visitors should immediately perceive the company as professional, dependable, and detail-oriented. Every visual element should reinforce confidence, guide users toward requesting a quote, and provide a polished experience across all devices.
