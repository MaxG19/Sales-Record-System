---
name: Executive Minimalist
colors:
  surface: '#fcf9f4'
  surface-dim: '#dcdad5'
  surface-bright: '#fcf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ee'
  surface-container: '#f0ede9'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e5e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#434749'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f3f0eb'
  outline: '#747879'
  outline-variant: '#c3c7c8'
  surface-tint: '#586062'
  primary: '#181f21'
  on-primary: '#ffffff'
  primary-container: '#2d3436'
  on-primary-container: '#959c9f'
  inverse-primary: '#c1c8ca'
  secondary: '#006b55'
  on-secondary: '#ffffff'
  secondary-container: '#6dfad2'
  on-secondary-container: '#00725b'
  tertiary: '#391108'
  on-tertiary: '#ffffff'
  tertiary-container: '#54251a'
  on-tertiary-container: '#ce8a7b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde4e6'
  primary-fixed-dim: '#c1c8ca'
  on-primary-fixed: '#161d1f'
  on-primary-fixed-variant: '#41484a'
  secondary-fixed: '#6dfad2'
  secondary-fixed-dim: '#4bddb7'
  on-secondary-fixed: '#002018'
  on-secondary-fixed-variant: '#005140'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#feb5a4'
  on-tertiary-fixed: '#360f06'
  on-tertiary-fixed-variant: '#6c392c'
  background: '#fcf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e5e2dd'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  stat-lg:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 20px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 40px
---

## Brand & Style
The design system embodies a **Modern Corporate** aesthetic with a heavy lean toward **Minimalism**. It is designed for high-stakes professional environments where clarity and focus are paramount. By utilizing a warm, off-white foundation rather than clinical pure white, the UI feels sophisticated and approachable.

The target audience consists of business leaders and operational managers who require data-dense information presented with extreme legibility. The emotional response is one of calm authority, achieved through generous whitespace, structured card layouts, and a restrained use of accent colors. This is a "quiet luxury" approach to enterprise software—functional, precise, and premium.

## Colors
The palette is rooted in a natural, organic "Paper" background that reduces eye strain compared to standard digital whites. 

- **Primary (#2D3436):** A deep charcoal used for high-contrast typography, primary buttons, and iconography.
- **Secondary (#00B894):** A refined teal-green used sparingly for success states, positive trends, and active status indicators.
- **Tertiary (#FAB1A0):** A soft coral used for gentle warnings or secondary highlight badges (e.g., "New" or notification counts).
- **Surface & Background (#FAF7F2):** The global canvas color. 
- **Card Surface (#FFFFFF):** Pure white is reserved for cards and input fields to create a distinct "elevation" against the cream background without needing heavy shadows.

## Typography
This design system utilizes **Geist** for its technical precision and modern Swiss-inspired kerning. The typographic hierarchy relies on significant weight shifts rather than just size changes.

On mobile devices, the `display-lg` is capped at 32px to ensure titles do not wrap awkwardly. `label-md` is used for table headers and metadata, employing a slight tracking (letter spacing) increase to maintain readability at small scales. All text uses the Primary Charcoal color, with secondary information dropped to 60% opacity rather than shifting to a new hue.

## Layout & Spacing
The layout follows a **Fluid Grid** model optimized for mobile-first consumption. 

- **Margins:** A standard 20px margin is applied to the left and right of the screen.
- **Card Spacing:** Vertical stacking uses a 16px gutter.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Mobile Reflow:** For the dashboard view, the 3-column desktop metric cards reflow into a single-column vertical stack. Tables are converted into "Summary Cards" where each row becomes a standalone card with labeled data points.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.

1.  **Level 0 (Background):** The `#FAF7F2` cream base.
2.  **Level 1 (Cards/Inputs):** Pure `#FFFFFF` surfaces with a 1px solid border in `#E5E2DD`. This creates a crisp, "paper-on-table" effect.
3.  **Level 2 (Active/Modals):** Elements that require focus use a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)) to suggest they are hovering above the interface.

Avoid heavy blurs or multi-colored glows. The goal is a flat, architectural feel.

## Shapes
The shape language is consistently **Rounded**, providing a friendly counterpoint to the rigid grid. 

- **Standard Elements:** Buttons, input fields, and small cards use a 12px (`0.75rem`) radius.
- **Large Containers:** Main content cards and bottom sheets use a 24px (`1.5rem`) radius to feel more substantial.
- **Status Chips:** Use a full "Pill" radius (999px) to distinguish them from interactive buttons.

## Components

- **Buttons:** Primary buttons are solid Primary Charcoal with white text. Secondary buttons use a ghost style with a 1px border.
- **Cards:** High-contrast white containers. Content within cards should have 20px of internal padding.
- **Input Fields:** Search bars and text inputs feature a light-grey fill (#F1EDE8) that transitions to white on focus, with a subtle 1px border.
- **Status Chips:** Small, pill-shaped indicators. For "Active" status, use a Secondary Green background at 15% opacity with 100% opacity text.
- **Navigation:** A bottom navigation bar for mobile, using simple line icons. The active state is indicated by a Primary Charcoal icon, while inactive states are at 40% opacity.
- **Data Lists:** Use thin separators (#E5E2DD) between list items. Every item should have a chevron icon to indicate drill-down capability.