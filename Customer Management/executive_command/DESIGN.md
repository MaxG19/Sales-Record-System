---
name: Executive Command
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#404944'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#416656'
  on-secondary: '#ffffff'
  secondary-container: '#c3ecd7'
  on-secondary-container: '#476c5b'
  tertiary: '#4a2400'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a3700'
  on-tertiary-container: '#ff9939'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#c3ecd7'
  secondary-fixed-dim: '#a8cfbc'
  on-secondary-fixed: '#002115'
  on-secondary-fixed-variant: '#294e3f'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
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
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 18px
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
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
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
  lg: 32px
  xl: 48px
  sidebar-width: 280px
  grid-gutter: 24px
  container-padding: 40px
---

## Brand & Style

This design system is engineered for high-stakes business management, prioritizing clarity, authority, and calm focus. It adopts a **Corporate Modern** aesthetic with a sophisticated, organic twist, moving away from sterile grays in favor of a warm, prestigious palette.

The target audience consists of executives and senior managers who require a "control-room" environment that feels premium yet purely functional. The design evokes an emotional response of organized control and reliability through heavy whitespace, high-contrast typography, and a "Warm Minimalism" approach. Every element is intentional, reducing cognitive load while maintaining an air of professional luxury.

## Colors

The color strategy centers on a foundational contrast between deep, authoritative greens and warm, inviting neutrals.

- **Primary (Deep Green):** Reserved for the command center (sidebar) and primary calls to action. It represents stability and growth.
- **Secondary (Sage Green):** Used for highlighting data, active states, and non-critical accents. It provides a soft visual rest from the high-contrast primary color.
- **Neutral (Warm Cream):** The application backdrop. This replaces standard whites to reduce eye strain and provide a "premium paper" feel.
- **Functional Colors:** 
    - **Gold:** Represents "Pending" or "Warning" states, chosen for its visibility against both cream and white.
    - **Crimson:** Reserved strictly for critical errors or destructive actions.
- **Surface:** Pure white is used exclusively for content cards and modals to create a clear layer of separation from the cream background.

## Typography

The design system utilizes **Inter** exclusively to maintain a systematic, utilitarian appearance suitable for data-heavy enterprise environments. 

The hierarchy is "Enterprise-grade," meaning it prioritizes vertical scanning and clear data labeling. Headings use tighter letter spacing and heavier weights to command attention, while labels utilize uppercase styling and increased tracking for maximum legibility in dense UI sections. On mobile devices, headline sizes scale down aggressively to ensure dashboard metrics remain visible without excessive scrolling.

## Layout & Spacing

This design system employs a **Fluid Grid** model with a heavy emphasis on whitespace to prevent information density from becoming overwhelming. 

- **Desktop:** A 12-column grid with a fixed 280px sidebar. Page content is contained within a fluid area with 40px external margins.
- **Tablet:** The sidebar collapses into an icon-only rail or hidden drawer. Margins reduce to 24px.
- **Mobile:** A single-column flow with 16px horizontal margins.

Spacing follows a 4px/8px baseline rhythm. Generous internal padding (minimum 24px) is required for all white cards to maintain the "premium" breathable feel.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** and **Ambient Shadows**. 

The depth model is shallow:
1. **Level 0 (Background):** Warm Cream (#FDFBF7) - the lowest layer.
2. **Level 1 (Cards/Surface):** Pure White (#FFFFFF) - elevated via a soft, ambient shadow. Shadows must be tinted with the Primary Brand color (e.g., `rgba(6, 78, 59, 0.06)`) with a high blur radius (12px - 20px) to create a sophisticated, "glowing" lift rather than a harsh drop-shadow.
3. **Level 2 (Modals/Popovers):** Higher elevation with a slightly more defined shadow (`0.12` opacity tint) to indicate immediate interaction priority.

Outlines are avoided in favor of shadow-based depth, maintaining a clean and modern appearance.

## Shapes

The shape language is structured and "Soft-Rounded." 

The standard corner radius is **12px** for all main content containers (Cards, Modals). This specific radius strikes a balance between professional rigidity and modern softness. Secondary elements like buttons and input fields follow an 8px radius to feel precise. Small components like status pills use a fully rounded (pill-shaped) radius to distinguish them from interactive buttons.

## Components

### Sidebar
The primary navigation is a fixed Deep Green (#064E3B) pillar. Text is high-contrast (Off-white or Sage). Active states are indicated by a Sage Green background on the menu item with a 4px Primary Green "active bar" on the left edge.

### Buttons
- **Primary:** Deep Green background, White text. High-contrast.
- **Secondary:** Sage Green background with Deep Green text. Used for sub-actions.
- **Ghost:** Transparent background with Deep Green text. Used for utility or "Cancel" actions.

### Cards
All cards are Pure White with 12px rounded corners and an ambient green-tinted shadow. They should feature a Title-LG heading and 24px internal padding.

### Status Pills
Pills use a low-opacity version of their functional color as a background with a high-opacity version for the text (e.g., Healthy: 10% Deep Green BG / 100% Deep Green Text).

### Input Fields
Inputs should have an 8px radius, a 1px border in a lightened Sage or Neutral tone, and a subtle focus ring in Deep Green. Use Inter Body-MD for input text.

### Data Tables
Tables should avoid vertical borders. Use horizontal dividers in a very faint cream-gray. Headers should be Label-MD (Uppercase, 500 weight) for clear categorization.