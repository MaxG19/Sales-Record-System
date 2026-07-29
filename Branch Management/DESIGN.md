---
name: Ethos Workspace
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
  tertiary: '#4b2b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a3f01'
  on-tertiary-container: '#eaac68'
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
  tertiary-fixed: '#ffdcbb'
  tertiary-fixed-dim: '#faba75'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#fff8f3'
  on-background: '#1e1b17'
  surface-variant: '#e8e1db'
typography:
  display:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
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
    lineHeight: 14px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style

The design system is engineered for high-output professional environments where cognitive load must be minimized. The brand personality is **composed, methodical, and architectural**, drawing inspiration from modern productivity tools like Linear and Notion. It prioritizes clarity over decoration, using generous whitespace and a restrained palette to facilitate deep work.

The aesthetic follows a **Modern Corporate Minimalism** approach:
- **Structural Integrity:** Heavy reliance on grid alignment and clear visual hierarchies.
- **Functional Calm:** A warm, neutral foundation that reduces eye strain during long working sessions.
- **Intentionality:** Every element exists for a functional purpose; decorative flourishes are replaced by precise spacing and refined typography.

## Colors

This design system utilizes a sophisticated, nature-inspired professional palette. The core is built on the interaction between the **Background (#F7F4EC)** and **Surface (#FFFFFF)** to create natural depth.

- **Primary (#344E41):** Used for high-emphasis actions, active navigation states, and primary branding.
- **Secondary (#A3B18A):** Used for subtle accents, progress indicators, and secondary supportive elements.
- **Accent (#DDA15E):** Reserved for specific "call-to-attention" moments, such as warnings, notifications, or specific data highlights.
- **Soft Surface (#E8ECE4):** Used for layout grouping, sidebar backgrounds, and input field backgrounds to provide contrast against the primary surface.

## Typography

The typography system relies exclusively on **Inter** to maintain a systematic, utilitarian feel. 

- **Hierarchy:** Use weight over size to distinguish information. Headlines use SemiBold (600) for presence without the aggression of heavy bolding.
- **Readability:** Body text is optimized at 14px for density-heavy business applications. 
- **Labels:** Use `label-sm` with slight letter spacing and uppercase styling for metadata, table headers, and category tags to differentiate them from actionable body text.

## Layout & Spacing

The layout philosophy is based on a **Fluid-Fixed Hybrid Grid**. Sidebars and utility panels occupy fixed widths (e.g., 240px), while the main content area spans the remaining space with a maximum readable width of 1280px.

- **8px Rhythm:** All padding, margins, and component heights must be multiples of 8px.
- **Density:** While the aesthetic is "spacious," data-heavy views (tables, lists) may use the 4px (xs) and 8px (sm) units to ensure information density remains efficient.
- **Breakpoints:**
  - **Mobile (<768px):** Single column, 16px margins, hidden sidebars behind a hamburger menu.
  - **Tablet (768px - 1200px):** 12-column fluid grid, 24px margins, collapsed sidebars.
  - **Desktop (>1200px):** 12-column grid, 32px margins, persistent sidebars.

## Elevation & Depth

This design system uses **Tonal Layering** supplemented by **Ambient Shadows** to define hierarchy.

- **Level 0 (Background):** #F7F4EC. The canvas.
- **Level 1 (Soft Surface):** #E8ECE4. Used for recessed areas like sidebars or empty states.
- **Level 2 (Surface):** #FFFFFF. The primary level for cards and content containers. Uses a very soft 1px border (#DDE2D9) instead of a shadow to maintain a flat, clean look.
- **Level 3 (Popovers/Modals):** #FFFFFF. These elements utilize an ambient shadow: `0px 4px 12px rgba(45, 42, 38, 0.08)`. The shadow is slightly tinted with the Text color (#2D2A26) to feel integrated.

## Shapes

The shape language is consistently **Rounded**, providing a modern and approachable feel to the professional workspace.

- **Base Radius:** 12px (`rounded-md`). This applies to standard cards, input fields, and primary buttons.
- **Small Radius:** 6px (`rounded-sm`). Used for nested elements like internal chips, checkboxes, and small icons.
- **Large Radius:** 24px (`rounded-xl`). Used for large modal containers or featured promotional cards.

## Components

- **Buttons:** Primary buttons use the Primary color (#344E41) with white text. Secondary buttons are ghost-style with a Primary border. Tertiary buttons are text-only. All use 12px rounding and 10px vertical padding.
- **Input Fields:** Filled style using Soft Surface (#E8ECE4) as the background. On focus, the background turns White and gains a 2px Primary border.
- **Cards:** White surfaces with a 1px #DDE2D9 border. No shadow unless the card is "hovered" or "active."
- **Chips/Tags:** Semi-transparent versions of Primary or Secondary colors (e.g., Primary at 10% opacity) with the solid color for text.
- **Lists:** High-density with 8px vertical padding between items. Use subtle dividers (#E8ECE4) only when necessary for horizontal scanning.
- **Icons:** Use thin-stroke (1.5px) functional icons. Icons should always be monochromatic (Neutral #2D2A26) unless they denote a status (e.g., error red or success green).
- **Navigation:** Vertical sidebar on the left using Soft Surface background. Active states are indicated by a 4px Primary vertical "pill" on the left edge of the menu item.