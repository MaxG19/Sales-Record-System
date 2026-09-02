---
name: Pro-Ops Interface System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#424844'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#737874'
  outline-variant: '#c2c8c3'
  surface-tint: '#506259'
  primary: '#06160f'
  on-primary: '#ffffff'
  primary-container: '#1a2b23'
  on-primary-container: '#809388'
  inverse-primary: '#b7cbbf'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#111314'
  on-tertiary: '#ffffff'
  tertiary-container: '#252829'
  on-tertiary-container: '#8d8f90'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e7db'
  primary-fixed-dim: '#b7cbbf'
  on-primary-fixed: '#0e1f17'
  on-primary-fixed-variant: '#394b42'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  sidebar-width: 260px
  container-max-width: 1200px
  gutter: 24px
  margin-page: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for high-utility operational environments, specifically SaaS and Fintech platforms where data density must coexist with visual clarity. It follows a **Modern Corporate** aesthetic characterized by a sophisticated interplay between a deep, authoritative sidebar and a bright, airy workspace.

The brand personality is reliable, precise, and efficient. It aims to evoke a sense of professional control and systemic order. By utilizing a "Main Branch" selector and structured categorization, the UI communicates scale and multi-tenant capability while remaining approachable for daily administrative tasks.

## Colors

This design system uses a high-contrast foundation to separate navigation from content:
- **Primary:** A deep charcoal-green (#1A2B23) used for the sidebar and primary buttons, grounding the interface in a sense of security.
- **Secondary:** A vibrant Emerald/Mint accent (#10B981) reserved for active states, success indicators, and subtle highlights.
- **Neutral:** A systematic range of grays from Slate-900 for headings to Gray-50 for background surfaces.

The default color mode is `light`, featuring a stark white workspace container over a light-gray page background to create a tiered visual hierarchy.

## Typography

The design system utilizes **Hanken Grotesk** across all roles to maintain a sharp, contemporary, and highly legible environment. 

- **Hierarchy:** Bold, larger headings are used for page titles and section headers. 
- **Navigation:** Labels in the sidebar use a slightly smaller, medium-weight font for better information density.
- **Micro-copy:** Section headers in the sidebar (e.g., "OPERATIONS") utilize the `label-sm` style with increased letter spacing and uppercase casing to provide clear structural breaks without visual clutter.

## Layout & Spacing

The layout follows a **Fixed Sidebar + Fluid Content** model. 
- **Sidebar:** A persistent 260px vertical column on the left.
- **Workspace:** Content is housed in a centered container with a maximum width for readability, but can scale fluidly on smaller desktop screens.
- **Grid:** Form layouts within the workspace use a structured 2-column grid for desktop, reflowing to a single column on mobile devices.
- **Rhythm:** An 8px base unit drives all spacing. Elements are grouped using `stack-sm` (8px) for related labels/inputs and `stack-lg` (32px) for major section breaks.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Low-Contrast Outlines** rather than aggressive shadows.

1.  **Level 0 (Base):** The page background (Gray-50).
2.  **Level 1 (Surface):** The workspace card and sidebar (White / Dark Charcoal). These use subtle, light-gray borders (#E5E7EB) to define boundaries.
3.  **Level 2 (Interactive):** Selectors and dropdowns use a very soft ambient shadow (4px blur, 0.05 opacity) only when active or hovered to indicate "lift" from the surface.

## Shapes

The design system employs a **Rounded** (0.5rem) shape language. This provides a modern, friendly touch to an otherwise rigorous professional layout. 

- **Small elements:** Checkboxes and small buttons use the base 8px (0.5rem) radius.
- **Large elements:** Main content cards and large containers use 16px (1rem) radius (`rounded-lg`) to soften the overall appearance of the workspace.
- **Inputs:** Text fields and dropdowns maintain the standard 8px radius for a consistent form-entry experience.

## Components

- **Sidebar Items:** Active states feature a solid primary-colored background with white text and an emerald accent bar or icon highlight.
- **Buttons:** 
  - *Primary:* Solid dark charcoal background with white text.
  - *Secondary/Ghost:* Clear background with a subtle gray border.
- **Input Fields:** Minimum height of 44px for touch-friendliness, featuring a 1px light gray border that transitions to emerald on focus. Labels are placed directly above the field using `label-md`.
- **Horizontal Tabs:** Located at the top of the workspace, using a simple underline indicator in Emerald for the active state, ensuring the focus remains on the content.
- **Cards:** White backgrounds with a subtle border and generous internal padding (24px) to house form groups and data tables.
- **Search Bar:** A rounded pill shape in the header, utilizing a subtle light-gray background to distinguish it from the main white surface.