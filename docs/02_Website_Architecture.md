# 02_Website_Architecture.md

# Swift Facility Cleaning

## Website Architecture

Version: 1.0

---

# Purpose

This document defines the complete website architecture for Swift Facility Cleaning.

Its goals are to:

* Create an intuitive navigation experience
* Maximize lead generation
* Improve SEO through logical site hierarchy
* Support future expansion
* Minimize user friction
* Ensure every page contributes to conversions

Every page should be reachable within three clicks from the homepage.

---

# Information Architecture

```
Home
│
├── Commercial Cleaning
│   ├── Janitorial Services
│   ├── Office Cleaning
│   ├── Medical Cleaning
│   ├── Floor Care
│   └── Disinfection Services
│
├── Industries
│   ├── Offices
│   ├── Schools
│   ├── Daycare Facilities
│   ├── Medical Facilities
│   ├── Gym & Recreational Facilities
│   ├── Warehouses & Industrial
│   ├── Commercial Facilities
│   ├── Car Dealerships
│   ├── Showrooms
│   ├── Religious Facilities
│   └── Government Buildings
│
├── Locations
│   ├── Missouri
│   │   ├── Wentzville
│   │   ├── Edwardsville
│   │   ├── University City
│   │   ├── Madison
│   │   ├── Clayton
│   │   ├── St. Charles
│   │   ├── Oakville
│   │   ├── Granite City
│   │   ├── Richmond Heights
│   │   ├── Dutchtown
│   │   ├── Bevo Mill
│   │   ├── Florissant
│   │   ├── Arnold
│   │   ├── Grand Center
│   │   ├── Old North
│   │   ├── Creve Coeur
│   │   ├── Benton Park
│   │   └── Chesterfield
│
├── Resources
│   ├── About
│   ├── Case Studies
│   ├── Reviews
│   ├── Blog
│   ├── FAQs
│   └── Contact
│
└── Legal
    ├── Privacy Policy
    ├── Terms & Conditions
    └── Sitemap
```

---

# Primary Navigation

The navigation should remain simple, uncluttered, and conversion-focused.

Desktop navigation:

* Commercial Cleaning
* Industries
* Locations
* Resources
* Contact

Persistent CTA:

**Request a Free Quote**

Phone number displayed prominently in the navigation.

---

# Navigation Behavior

Desktop

* Sticky navigation after scrolling
* Transparent over hero
* Solid background after scroll
* Smooth dropdown animations
* Active page indicator
* Keyboard accessible
* Hover delay kept under 150ms

Mobile

* Slide-out drawer
* Accordion submenus
* Sticky CTA button
* Large touch targets
* Phone number visible
* "Request Quote" button pinned near the top

---

# Mega Menu Structure

## Commercial Cleaning

Overview page first.

Services:

* All Cleaning Services
* Janitorial Services
* Office Cleaning
* Medical Cleaning
* Floor Care
* Disinfection Services

Include:

* Short descriptions
* Relevant icon
* "View All Services" CTA

---

## Industries

Industries served:

* Offices
* Schools
* Daycare Facilities
* Medical Facilities
* Gyms
* Warehouses
* Commercial Facilities
* Car Dealerships
* Showrooms
* Religious Facilities
* Government Buildings

Each item links to a dedicated industry page (future-ready), even if initially implemented as placeholders.

---

## Locations

Organize by state.

Initially:

Missouri

Cities:

* Wentzville
* Edwardsville
* University City
* Madison
* Clayton
* St. Charles
* Oakville
* Granite City
* Richmond Heights
* Dutchtown
* Bevo Mill
* Florissant
* Arnold
* Grand Center
* Old North
* Creve Coeur
* Benton Park
* Chesterfield

Future architecture should support additional states without restructuring URLs.

---

## Resources

* About
* Case Studies
* Reviews
* FAQs
* Blog
* Contact

---

# URL Structure

Keep URLs clean, descriptive, and lowercase.

Examples:

```
/

 /commercial-cleaning

 /commercial-cleaning/office-cleaning

 /commercial-cleaning/medical-cleaning

 /commercial-cleaning/janitorial-services

 /commercial-cleaning/floor-care

 /commercial-cleaning/disinfection-services

 /industries/offices

 /industries/schools

 /industries/medical-facilities

 /locations/missouri

 /locations/missouri/st-charles

 /locations/missouri/wentzville

 /locations/missouri/clayton

 /about

 /case-studies

 /reviews

 /blog

 /blog/post-slug

 /faqs

 /contact
```

Never use uppercase letters or unnecessary URL parameters.

---

# Breadcrumb Structure

Every page except the homepage should display breadcrumbs.

Example:

Home

↓

Commercial Cleaning

↓

Office Cleaning

Example:

Home

↓

Locations

↓

Missouri

↓

St. Charles

Use schema-enabled breadcrumbs for SEO.

---

# Footer Architecture

Footer should contain four columns.

---

## Column One

Company

* About
* Contact
* Reviews
* Case Studies

---

## Column Two

Services

* Commercial Cleaning
* Office Cleaning
* Medical Cleaning
* Janitorial Services
* Floor Care
* Disinfection Services

---

## Column Three

Locations

Top service areas.

Include:

* St. Charles
* Wentzville
* Chesterfield
* Clayton
* Florissant
* Arnold

Button:

View All Locations

---

## Column Four

Contact

Phone

Email (placeholder until confirmed)

Address

110 S Pam Ave

St Charles, MO 63301

Business Hours

Social Media

* Facebook
* Instagram
* LinkedIn
* YouTube
* X

---

Bottom Footer

Copyright

Privacy Policy

Terms & Conditions

Sitemap

---

# Homepage Internal Linking

The homepage should naturally distribute authority across the site.

Hero

↓

Commercial Cleaning

↓

Service Cards

↓

Industry Pages

↓

Location Pages

↓

Case Studies

↓

Reviews

↓

Blog

↓

Contact

Each section should include contextual links rather than generic "Learn More" buttons.

---

# Service Page Linking Strategy

Every service page should link to:

* Home
* Commercial Cleaning
* Related Services
* Industry Pages
* Relevant Location Pages
* FAQs
* Contact
* Blog articles
* Case Studies

Example:

Office Cleaning

Links to:

* Janitorial Services
* Floor Care
* Medical Cleaning
* Offices Industry
* St. Charles Location
* Contact

This strengthens topical relevance and SEO.

---

# Industry Page Linking Strategy

Each industry page should link to:

* Relevant cleaning services
* Case studies
* Reviews
* Blog articles
* Contact
* Nearby locations

Example:

Medical Facilities

Links to:

* Medical Cleaning
* Disinfection Services
* Floor Care
* Medical Case Studies
* Contact

---

# Location Page Linking Strategy

Each location page should include:

* Commercial Cleaning
* Office Cleaning
* Medical Cleaning
* Janitorial Services
* Floor Care
* Reviews
* FAQs
* Contact
* Nearby locations

Cross-link nearby service areas naturally.

---

# Blog Internal Linking Strategy

Every blog article should include:

* Related service page
* Related industry page
* Related location page
* CTA banner
* Contact page
* Additional blog posts

Target:

3–5 internal links per article.

---

# Case Study Linking

Each case study should connect to:

* Related service
* Industry served
* Location served
* Contact page

Example:

Medical Office Cleaning Case Study

↓

Medical Cleaning

↓

Medical Facilities

↓

St. Charles

↓

Request a Quote

---

# CTA Placement Strategy

Every major page should contain:

Hero CTA

Mid-page CTA

Bottom CTA

Sticky mobile CTA

Footer CTA

Users should never need to search for a way to contact the company.

---

# Search Strategy

Reserve architecture for future site search.

Search should eventually index:

* Services
* Industries
* Locations
* Blog
* FAQs
* Case Studies

---

# Future Expansion

Architecture should support future additions without changing existing URLs.

Potential additions:

```
/careers

/request-quote

/our-team

/our-process

/resources

/guides

/checklists

/videos

/webinars

/customer-portal

/service-areas

/industries/manufacturing

/industries/hospitality

/locations/illinois

/locations/kansas

/locations/iowa
```

No existing URLs should need to change when these sections are introduced.

---

# Navigation Rules

Navigation should prioritize clarity over quantity.

Rules:

* Maximum five primary navigation items
* Consistent labels across desktop and mobile
* No duplicate navigation paths
* No orphan pages
* Every page linked from at least one parent page
* Important pages reachable within three clicks
* Primary CTA visible on every page

---

# Information Hierarchy

The overall hierarchy should guide users from discovery to conversion.

1. Build trust immediately
2. Explain services
3. Demonstrate expertise
4. Show industries served
5. Reinforce local presence
6. Provide proof through testimonials and case studies
7. Answer common questions
8. Present a clear call to action

This hierarchy should remain consistent throughout the website.

---

# Final Architecture Vision

The Swift Facility Cleaning website should be organized, intuitive, and scalable. Visitors should always know where they are, what to do next, and how to contact the company. The architecture should support excellent user experience, strong local SEO, and future business growth without requiring structural redesigns.
