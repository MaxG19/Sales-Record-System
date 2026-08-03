---
name: Atelier Operational System
colors:
  surface: '#fff8f3'
  surface-dim: '#e0d9d3'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ec'
  surface-container: '#f4ede6'
  surface-container-high: '#eee7e1'
  surface-container-highest: '#e8e1db'
  on-surface: '#1e1b17'
  on-surface-variant: '#424844'
  inverse-surface: '#33302c'
  inverse-on-surface: '#f7efe9'
  outline: '#727974'
  outline-variant: '#c2c8c2'
  surface-tint: '#4a6456'
  primary: '#1e372b'
  on-primary: '#ffffff'
  primary-container: '#344e41'
  on-primary-container: '#a1beae'
  inverse-primary: '#b0cdbc'
  secondary: '#566342'
  on-secondary: '#ffffff'
  secondary-container: '#d7e5bb'
  on-secondary-container: '#5a6745'
  tertiary: '#482a29'
  on-tertiary: '#ffffff'
  tertiary-container: '#61403f'
  on-tertiary-container: '#daadab'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ccead8'
  primary-fixed-dim: '#b0cdbc'
  on-primary-fixed: '#062015'
  on-primary-fixed-variant: '#324c3f'
  secondary-fixed: '#dae8be'
  secondary-fixed-dim: '#becca3'
  on-secondary-fixed: '#141f05'
  on-secondary-fixed-variant: '#3f4b2c'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#e9bbba'
  on-tertiary-fixed: '#2e1414'
  on-tertiary-fixed-variant: '#5f3e3d'
  background: '#fff8f3'
  on-background: '#1e1b17'
  surface-variant: '#e8e1db'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-max: 1440px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is centered on "Serene Productivity." It moves away from the sterile, high-contrast blue aesthetics of traditional enterprise software toward a more organic, grounded palette that reduces visual fatigue during long operational shifts.

The design style is **Modern Corporate** with a focus on **Minimalism**. It emphasizes structural clarity through generous whitespace (breathing room), a refined editorial-style typographic scale, and a tactile sense of depth achieved through soft shadows rather than harsh borders. The interface should feel like a well-organized physical workspace: calm, intentional, and high-performance.

## Colors
The palette is inspired by natural tones to provide a "premium tool" feel. 
- **Primary (#344E41):** Used for deep-action elements, primary buttons, and active navigation states. It provides a strong anchor for the eye.
- **Secondary (#A3B18A):** Used for subtle emphasis, non-critical badges, and soft decorative elements.
- **Accent (#DDA15E):** Reserved for highlighting key insights, notifications, or specific data points that require attention without the alarmist nature of red.
- **Surface & Mist:** Surfaces are strictly pure white (#FFFFFF) to separate content from the warm background (#F7F4EC). Mist (#E8ECE4) serves as a secondary surface color for grouping items within a white container or for disabled states.

## Typography
This design system utilizes **Hanken Grotesk** for headlines to provide a modern, sharp edge to the brand, while **Inter** is used for all body, data, and functional text to ensure maximum legibility and systematic precision.

For mobile devices, any `display` or `headline-lg` styles should be capped at `28px` to ensure text does not break excessively. Tracking (letter spacing) should be slightly tightened for large headlines and slightly loosened for labels at 12px or below to maintain readability.

## Layout & Spacing
The layout follows a **Fluid Grid** approach within a maximum container width of 1440px. It utilizes a 12-column grid for desktop and a 4-column grid for mobile.

- **Sidebar Navigation:** 240px wide on desktop, collapsible to 64px icon-only.
- **Content Padding:** Desktop views should utilize a 40px outer margin to emphasize the "spacious" premium feel.
- **Grouping:** Use the `md` (16px) unit for spacing between related elements within a card, and `lg` (24px) for spacing between distinct sections or cards.
- **Vertical Rhythm:** Maintain consistent 8px increments (4/8/16/24/32/48/64) for all vertical spacing to create a predictable flow.

## Elevation & Depth
Elevation is communicated through **Tonal Layering** and **Ambient Shadows**. Surfaces should feel like they are floating slightly above the background.

- **Level 0 (Background):** #F7F4EC (No shadow).
- **Level 1 (Cards/Main Surfaces):** #FFFFFF. Shadow: `0 2px 4px rgba(45, 42, 38, 0.02), 0 1px 2px rgba(45, 42, 38, 0.04)`.
- **Level 2 (Popovers/Dropdowns):** #FFFFFF. Shadow: `0 10px 15px -3px rgba(45, 42, 38, 0.08), 0 4px 6px -2px rgba(45, 42, 38, 0.03)`.
- **Level 3 (Modals):** #FFFFFF. Shadow: `0 20px 25px -5px rgba(45, 42, 38, 0.1), 0 10px 10px -5px rgba(45, 42, 38, 0.04)`.

Avoid heavy borders; use #E8ECE4 for thin (1px) borders only when necessary to separate elements of the same color.

## Shapes
The shape language is defined by **Rounded** corners that convey friendliness and modernity without feeling "childish." 

- **Primary Radius:** 8-10px for standard components (buttons, inputs).
- **Surface Radius:** 12-16px for larger containers (cards, modals).
- **Interactive States:** Hovering over a list item or menu item should use a 6px radius for the background highlight to ensure it fits comfortably within the parent container's padding.

## Components
- **Buttons:** Primary buttons use #344E41 with white text. Secondary buttons use #E8ECE4 (Mist) with #2D2A26 text. Height is fixed at 40px for standard and 32px for small.
- **Input Fields:** Use 1px border of #E8ECE4. On focus, the border changes to #A3B18A with a subtle 2px glow of the same color at 20% opacity. Label is always visible above the field in `label-sm`.
- **Cards:** The workhorse of the BMS. Must include a header with a bottom border of 1px Mist, 24px internal padding, and a 12px corner radius.
- **Chips/Badges:** Small, 24px height, using 100px (pill) radius. Backgrounds should be 15% opacity of the color (e.g., Accent #DDA15E at 15%) with 100% opacity text for high legibility.
- **Data Tables:** Row height of 52px. No vertical borders; use 1px horizontal Mist borders. Typography for cell data should be `body-md`. Header text should be `label-sm` in a medium-gray tint of the neutral color.
- **Navigation:** Vertical sidebar using #FFFFFF background with a 1px right border in Mist. Active states are indicated by a 4px vertical bar of #344E41 on the far left and a subtle #F7F4EC background highlight.