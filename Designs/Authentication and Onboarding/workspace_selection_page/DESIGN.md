---
name: Aureate System
colors:
  surface: '#fdf8f6'
  surface-dim: '#ddd9d7'
  surface-bright: '#fdf8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f0'
  surface-container: '#f2edeb'
  surface-container-high: '#ece7e5'
  surface-container-highest: '#e6e2df'
  on-surface: '#1c1b1a'
  on-surface-variant: '#4f453c'
  inverse-surface: '#31302f'
  inverse-on-surface: '#f4f0ee'
  outline: '#81756b'
  outline-variant: '#d2c4b8'
  surface-tint: '#775939'
  primary: '#705334'
  on-primary: '#ffffff'
  primary-container: '#8b6b4a'
  on-primary-container: '#fff5ee'
  inverse-primary: '#e7bf99'
  secondary: '#3b6934'
  on-secondary: '#ffffff'
  secondary-container: '#b9eeab'
  on-secondary-container: '#3f6d38'
  tertiary: '#3e5d68'
  on-tertiary: '#ffffff'
  tertiary-container: '#567681'
  on-tertiary-container: '#ebf9ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcbc'
  primary-fixed-dim: '#e7bf99'
  on-primary-fixed: '#2b1701'
  on-primary-fixed-variant: '#5c4124'
  secondary-fixed: '#bcf0ae'
  secondary-fixed-dim: '#a1d494'
  on-secondary-fixed: '#002201'
  on-secondary-fixed-variant: '#23501e'
  tertiary-fixed: '#c6e8f5'
  tertiary-fixed-dim: '#aaccd8'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#2b4b55'
  background: '#fdf8f6'
  on-background: '#1c1b1a'
  surface-variant: '#e6e2df'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 32px
  gutter: 24px
  section-gap: 64px
---

## Brand & Style

The design system is engineered for high-stakes business management, prioritizing clarity, calm, and professional warmth. It rejects the cold, sterile blue palettes of traditional enterprise software in favor of a sophisticated "Warm Minimalist" aesthetic. 

The target audience consists of executives and operational leaders who require a focused environment to manage complex workflows. The UI should evoke a sense of quiet confidence and hospitality—like a well-appointed executive office. By utilizing a tactile, cream-based foundation rather than pure white, we reduce eye strain and establish a premium, editorial feel that distinguishes the product from generic SaaS competitors.

## Colors

The palette is centered on a high-contrast, accessible hierarchy. 

- **Background & Surface:** The base application background uses a warm cream (#F7F4EC). Interactive surfaces and content containers transition to pure white (#FFFFFF) to create a clear "layering" effect that guides the eye toward data-rich areas.
- **Accents:** The "Elegant Brown" (#8B6B4A) serves as the primary action color for buttons, active states, and focus indicators.
- **Semantic:** "Deep Green" (#2D5A27) is reserved exclusively for success states, confirmations, and positive financial indicators. 
- **Typography:** Deep Charcoal/Ebony (#1A1918) ensures maximum readability against both cream and white surfaces, meeting WCAG AA standards for all text elements.

## Typography

This design system utilizes **Inter** for its systematic precision and modern neutrality. To achieve an elegant, editorial feel, the type scale relies on generous leading (line height) and tight tracking for larger headlines.

Body copy is set with a relaxed 1.6 line-height to ensure long-form reports and data entries remain legible and inviting. Small labels utilize a slightly heavier weight (Medium or SemiBold) and subtle letter-spacing to maintain clarity even at reduced sizes.

## Layout & Spacing

The layout follows a 12-column fluid grid for desktop, transitioning to a single-column stack for mobile. 

- **Generous Whitespace:** Components are never crowded. Large `section-gap` units of 64px separate major functional areas.
- **Margins:** Desktop views use a 32px outer margin to provide a "breathable" frame. 
- **Content Max-Width:** Data tables and dashboards are contained within a maximum width of 1440px to prevent information stretching on ultra-wide monitors.

## Elevation & Depth

This design system employs a "Flat-Plus" depth model. Visual hierarchy is primarily communicated through color-blocking (White cards on Cream backgrounds) rather than heavy shadows.

- **Soft Shadows:** When elevation is required (e.g., dropdowns, modals), use a multi-layered, low-opacity shadow (Color: #1A1918 at 4-6% opacity) with a large blur radius (24px-40px). 
- **Subtle Borders:** All white surface cards should feature a 1px solid border in `#E5E1D5`. This provides a crisp definition that ensures the white surface doesn't "bleed" into the cream background.
- **Transitions:** Hover states for cards should involve a subtle vertical lift (2px) and a slight deepening of the soft shadow.

## Shapes

The shape language is purposefully soft to maintain the "welcoming" brand personality. 

- **Standard Radius:** 16px (rounded-lg) is the default for all cards, modals, and primary containers.
- **Component Radius:** Buttons and input fields utilize an 8px (rounded-md) radius to feel precise yet harmonious with the larger containers.
- **Consistency:** Avoid sharp corners entirely. Even search bars and tags should adhere to the 8px or 16px logic to maintain a cohesive visual rhythm.

## Components

- **Buttons:** Primary actions are filled with Elegant Brown (#8B6B4A) with white text. Secondary actions use the cream background with a 1px brown border. Use a minimum height of 44px for touch-friendliness and a premium feel.
- **Cards:** White (#FFFFFF) background, 16px border radius, and a 1px subtle border (#E5E1D5). Internal padding should be a minimum of 24px.
- **Inputs:** Soft cream background (a shade darker than the page background) or pure white with a subtle border. Focus states must use a 2px Elegant Brown ring.
- **Lists:** Clean, border-less rows separated by a 1px line (#E5E1D5). Use generous vertical padding (16px) for list items.
- **Chips/Status:** For "Success" states, use Deep Green text on a very pale green tint. For general tags, use Deep Charcoal text on a light grey-cream tint.
- **Dashboards:** Use "Value Large" typography for KPIs, utilizing the Inter SemiBold weight to make metrics prominent.