---
name: Executive Precision
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#424844'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f1f1ee'
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
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
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
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system is engineered for high-level management and decision-making environments. It prioritizes clarity, focus, and a sense of calm authority. The brand personality is professional, dependable, and quietly premium, avoiding loud visual trends in favor of timeless utility.

The aesthetic follows a **Modern Corporate** direction, blending the functional rigor of enterprise SaaS (like Stripe and Linear) with a warmer, more sophisticated color palette. The interface relies on generous white space, rigorous grid alignment, and subtle depth to organize complex data without overwhelming the user. Visual noise is minimized to elevate critical information.

## Colors
The palette is rooted in earth tones to provide a stable, executive atmosphere. 

- **Primary (#344E41):** A deep forest green used for key actions, navigation sidebars, and high-level branding. It conveys stability and growth.
- **Secondary (#A3B18A):** A muted sage used for supportive elements, secondary actions, and progress indicators.
- **Accent (#DDA15E):** An ochre/gold used sparingly for alerts, warnings, or highlighting specific data points that require attention.
- **Background (#F7F4EC):** A warm off-white that reduces eye strain compared to pure white, providing a "paper-like" editorial quality.
- **Surface (#FFFFFF):** Reserved for cards, modals, and input fields to create a clear layer of separation from the background.

## Typography
Inter is used exclusively for its exceptional legibility and systematic feel. 

- **Weight Usage:** Use SemiBold (600) for headlines and Medium (500) for interactive labels. Regular (400) is reserved for long-form reading and body descriptions.
- **Scaling:** On mobile devices, `headline-lg` should scale down to 24px to maintain readability. 
- **Letter Spacing:** Apply slight negative tracking to large display headers to keep them tight and professional. Use slight positive tracking for small labels (12px) to improve clarity.

## Layout & Spacing
The layout uses a **Fluid Grid** system based on a 12-column structure for desktop. 

- **Rhythm:** A 4px baseline grid governs all spacing. Vertical rhythm should primarily use `md` (24px) for spacing between logical sections.
- **Desktop:** Sidebar is fixed at 280px. The main content area expands with a max-width of 1440px to ensure line lengths for text don't become unreadable.
- **Tablet:** Sidebar collapses to an icon-only rail or a hidden drawer. Margins reduce to 24px.
- **Mobile:** Single column layout. Margins reduce to 16px. Cards become full-width with 0px horizontal margin if necessary to maximize screen real estate.

## Elevation & Depth
This design system avoids heavy shadows, opting for **Tonal Layers** and subtle "Ambient Shadows" to define hierarchy.

- **Level 0 (Background):** #F7F4EC. The lowest point.
- **Level 1 (Surface):** #FFFFFF. Used for main content cards. Features a 1px border (#E5E1D5) and a very soft shadow: `0 2px 4px rgba(45, 42, 38, 0.05)`.
- **Level 2 (Navigation/Overlays):** Dropdowns and popovers. Features a more pronounced shadow: `0 12px 24px rgba(45, 42, 38, 0.08)`.
- **Interactions:** Hover states on cards should not lift the element; instead, slightly darken the border color or apply a 2px Primary color accent on the left edge.

## Shapes
The shape language is sophisticated and approachable. 

- **Containers:** Main cards and content containers use a 12px (`rounded-lg`) corner radius.
- **Components:** Buttons and input fields use an 8px (`base`) corner radius.
- **Data Points:** Status tags and chips use a fully rounded (pill) style to distinguish them from interactive buttons.
- **Consistency:** Avoid mixing sharp corners with rounded ones. Everything from image containers to focus states must adhere to the 8px or 12px rules.

## Components
- **Buttons:** Primary buttons use the Primary color (#344E41) with white text. Secondary buttons use a transparent background with a 1px border of the Primary color. Tertiary buttons are text-only with Medium weight.
- **Input Fields:** Use Surface white background with an #E5E1D5 border. On focus, the border changes to Primary with a 2px soft outer glow.
- **Cards:** Used as the primary layout unit. Always white background, 12px border radius, and a subtle border. Headers within cards should have a thin bottom-border.
- **Chips/Badges:** Used for status (e.g., "In Progress", "Completed"). Use the Secondary color (#A3B18A) with 10% opacity for the background and 100% opacity for the text to create a high-end "tinted" look.
- **Data Tables:** High-density with 1px horizontal dividers only. Header row should have a subtle #F7F4EC background and use `label-sm` typography.
- **Sidebar:** Dark themed using the Primary color (#344E41). Active states should be indicated by a Secondary (#A3B18A) left-aligned vertical bar.