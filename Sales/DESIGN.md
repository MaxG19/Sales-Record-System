---
name: Professional Operations Management
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#424844'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#4c6456'
  primary: '#1e3428'
  on-primary: '#ffffff'
  primary-container: '#344b3e'
  on-primary-container: '#a0baaa'
  inverse-primary: '#b3cdbc'
  secondary: '#5b5f5d'
  on-secondary: '#ffffff'
  secondary-container: '#dadedb'
  on-secondary-container: '#5d6260'
  tertiary: '#442829'
  on-tertiary: '#ffffff'
  tertiary-container: '#5d3e3f'
  on-tertiary-container: '#d4aaab'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee9d7'
  primary-fixed-dim: '#b3cdbc'
  on-primary-fixed: '#092015'
  on-primary-fixed-variant: '#354c3f'
  secondary-fixed: '#dfe3e1'
  secondary-fixed-dim: '#c3c7c5'
  on-secondary-fixed: '#181d1b'
  on-secondary-fixed-variant: '#434846'
  tertiary-fixed: '#ffdada'
  tertiary-fixed-dim: '#e7bcbd'
  on-tertiary-fixed: '#2d1416'
  on-tertiary-fixed-variant: '#5e3f40'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
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
    fontWeight: '500'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  headline-md-mobile:
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
  header-height: 72px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system embodies a **Corporate / Modern** aesthetic, prioritizing clarity, efficiency, and operational focus. It is designed for managers who require a high-density, yet organized workspace to oversee complex workflows like inventory, sales, and logistics.

The visual language is rooted in "Functional Sophistication." It utilizes a structured hierarchy, ample white space to reduce cognitive load, and subtle tactile cues (soft shadows and gentle rounding) to make the interface feel approachable yet rigorous. The goal is to evoke a sense of reliability and calm control within a fast-paced business environment.

## Colors
The palette is dominated by high-utility neutrals and a distinctive deep forest green.

- **Primary:** A dark, muted green (#344B3E) used for active states in navigation and key brand moments. It conveys stability and growth.
- **Secondary/Surface:** Soft, cool grays and off-whites are used to differentiate content areas and card backgrounds.
- **Accents:** High-contrast status colors (Red for high priority, Amber for attention, Green for success) are used sparingly to signal urgency without overwhelming the user.
- **Neutral:** Slate grays are employed for secondary text and icons to ensure optimal legibility against white backgrounds.

## Typography
This design system uses **Hanken Grotesk** for its sharp, contemporary feel and excellent legibility in data-heavy environments. 

Hierarchy is established through weight and color rather than extreme size shifts. Section headers use semi-bold weights, while "Labels" (used for sidebar categories and tags) use all-caps with increased letter spacing to provide clear structural anchoring. Body text is optimized at 14px for density, allowing for significant information display without clutter.

## Layout & Spacing
The layout follows a **Fixed Grid** model for the sidebar and a **Fluid Grid** for the main content area.

- **Sidebar:** A fixed 260px vertical navigation bar persists on the left.
- **Main Canvas:** Content is housed within a fluid container with a maximum width of 1440px to prevent excessive line lengths. 
- **Gutter & Margins:** A standard 24px gutter is used between cards and layout sections. 
- **Responsiveness:** On tablet, the sidebar collapses into an icon-only rail or a drawer. On mobile, margins reduce to 16px and the layout stacks into a single column.

## Elevation & Depth
Depth is conveyed through a combination of **Tonal Layers** and **Ambient Shadows**.

- **Level 0 (Background):** Pure white (#FFFFFF) for the main application background.
- **Level 1 (Cards/Containers):** Elements use a subtle 1px border (#E2E8F0) and a very soft, diffused shadow (0px 4px 12px rgba(0,0,0,0.03)) to lift them slightly from the canvas.
- **Level 2 (Popovers/Dropdowns):** Use a more pronounced shadow (0px 10px 25px rgba(0,0,0,0.08)) to indicate they are temporary overlays.
- **Interactive States:** Hovering over a card or list item results in a subtle background shift to #F8FAFC rather than an increase in shadow depth.

## Shapes
The design system utilizes a **Rounded** (8px to 12px) shape language.

- **Standard Elements:** Buttons, input fields, and small cards use an 8px radius.
- **Large Containers:** Dashboard widgets and primary content blocks use a 12px (`rounded-lg`) radius to soften the professional aesthetic.
- **Status Tags:** Chips and badges use a fully rounded "pill" shape to distinguish them from interactive buttons.

## Components

- **Sidebar Navigation:** Active items use the primary dark green background with white text and icons. Inactive items use a transparent background with neutral slate text.
- **Buttons:**
    - *Primary:* Solid dark green background, white text.
    - *Secondary:* Light gray background, dark green or slate text.
    - *Ghost:* No background, 1px border, used for secondary actions like "Export" or "Filter".
- **Header Components:**
    - *Branch Selector:* A subtle dropdown with a light gray fill and chevron-down icon.
    - *Search Bar:* A wide, light-gray field with a centered or left-aligned magnifying glass icon.
    - *Profile/Notification:* Icons are kept clean and minimalist, with the profile using a 32px circular avatar.
- **Cards:** White background, 1px light gray border, 12px corner radius. Used for "Quick Actions," "Needs Attention" alerts, and data summaries.
- **Input Fields:** 8px rounded corners, light gray background (#F1F5F2) for a "filled" appearance that provides better contrast on pure white backgrounds.
- **Status Badges:** Small, uppercase text inside a pill-shaped container. Background colors are highly desaturated (e.g., light pastel red for "High" alert) to keep the UI professional.