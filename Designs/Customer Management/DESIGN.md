---
name: Pro-Ledger Enterprise
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#424844'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#727974'
  outline-variant: '#c2c8c3'
  surface-tint: '#4c6458'
  primary: '#1e342a'
  on-primary: '#ffffff'
  primary-container: '#344b40'
  on-primary-container: '#a1baac'
  inverse-primary: '#b3cdbe'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#dee0e2'
  on-secondary-container: '#606365'
  tertiary: '#2d3033'
  on-tertiary: '#ffffff'
  tertiary-container: '#434649'
  on-tertiary-container: '#b1b4b8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee9da'
  primary-fixed-dim: '#b3cdbe'
  on-primary-fixed: '#082016'
  on-primary-fixed-variant: '#354c41'
  secondary-fixed: '#e1e2e4'
  secondary-fixed-dim: '#c5c6c8'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#e0e2e6'
  tertiary-fixed-dim: '#c4c7ca'
  on-tertiary-fixed: '#191c1f'
  on-tertiary-fixed-variant: '#44474a'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
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
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  sidebar-width: 260px
  container-padding: 32px
  gutter: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is rooted in a **Corporate / Modern** aesthetic, specifically tailored for high-utility operational dashboards. It prioritizes clarity, efficiency, and a sense of calm control. The brand personality is professional, reliable, and precise, aimed at managers who require a centralized view of complex business data.

The visual language employs a high-contrast sidebar to ground the navigation, while the main workspace utilizes a "Light-on-Light" strategy—white cards on a subtly off-white background—to minimize visual noise and maximize readability. This creates an environment that feels organized and trustworthy.

## Colors

The palette is anchored by a deep **Evergreen Primary (#344B40)**, used sparingly for active states and critical brand touchpoints to signify stability. The interface relies heavily on a grayscale spectrum to manage hierarchy.

- **Primary:** Used for the active sidebar navigation and primary action indicators.
- **Background:** A very soft, cool gray (#F9FAFB) serves as the canvas.
- **Surface:** Pure white (#FFFFFF) is reserved for interactive cards and input elements.
- **Accents:** Muted status colors (pale greens, reds, and ambers) provide semantic signaling without overwhelming the user's focus.

## Typography

This design system uses **Hanken Grotesk** across all roles to maintain a contemporary, sharp, and highly legible interface. 

- **Headlines:** Use Semi-Bold (600) weights to establish clear content sections. 
- **Navigation:** The sidebar uses 14px Medium weight for items, providing a balanced visual density.
- **Utility:** Use uppercase labels with increased letter spacing for category headers (e.g., "MAIN", "OPERATIONS") to distinguish organizational metadata from actionable content.
- **Data Points:** Currency and metrics in cards utilize a larger font size (32px) to ensure immediate data recognition.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. The sidebar remains at a fixed width of 260px, while the main content area expands to fill the viewport, constrained by a maximum width for readability on ultra-wide displays.

- **The Shell:** A vertical navigation bar on the left, a global header at the top with a search and utility area, and a main content stage.
- **Grid:** A 12-column system is used within the main stage. Cards typically span 3 columns (for stats) or 6-8 columns (for lists and activity).
- **Rhythm:** An 8px base unit drives all spacing. Dashboard cards use 24px internal padding to maintain an airy, premium feel.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Ambient Shadows** rather than heavy lines. 

- **Level 0 (Background):** Sub-neutral light gray (#F9FAFB).
- **Level 1 (Cards/Inputs):** Pure white surface with a very soft, diffused shadow (Blur: 10px, Y: 2px, Opacity: 4% Black).
- **Level 2 (Hover/Active):** Slightly increased shadow depth or a subtle 1px border (#E5E7EB) to indicate interactivity.
- **Sidebar:** Elevated by color contrast rather than shadow, creating a distinct "control zone" separate from the "data zone."

## Shapes

The design system utilizes a "Rounded" language to soften the industrial nature of enterprise data.

- **Standard Cards:** 12px corner radius (rounded-lg).
- **Interactive Elements:** Buttons and input fields use 8px (rounded-md).
- **Status Badges:** Use a 4px radius or fully pill-shaped (16px+) depending on the width of the content.
- **Sidebar Active State:** A 6px radius on the background highlight, ensuring it doesn't touch the edge of the sidebar container.

## Components

### Sidebar Navigation
- **Active State:** Primary color (#344B40) background with white text and icons.
- **Inactive State:** Transparent background with dark gray (#4B5563) text.
- **Icons:** 20px stroke-based icons, consistent weight.

### Header Elements
- **Branch Selector:** A subtle borderless or light-bordered dropdown positioned at the top left of the content area.
- **Search Bar:** Centrally located, light gray background (#F3F4F6), 8px radius, with an inset search icon.
- **Profile:** Minimalist avatar with name and role vertically stacked.

### Cards
- **Stat Cards:** Feature a title, a large metric, a trend indicator (pill-shaped badge), and a secondary "vs last period" caption.
- **Action Cards:** Horizontal layout with an icon on the left, chevron on the right, and a subtle hover lift.
- **Quick Action Tiles:** Vertical orientation with centered icons and labels, designed for high-frequency tasks.

### Inputs & Buttons
- **Buttons:** Primary buttons use the primary evergreen; secondary buttons use white with a light gray border.
- **Checkboxes:** Square with a 4px radius, using the primary color for the checked state.