---
name: Executive Operations System
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
  outline: '#727974'
  outline-variant: '#c2c8c2'
  surface-tint: '#4b6457'
  primary: '#20372c'
  on-primary: '#ffffff'
  primary-container: '#364e42'
  on-primary-container: '#a4beaf'
  inverse-primary: '#b2cdbd'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e4'
  on-secondary-container: '#626566'
  tertiary: '#313333'
  on-tertiary: '#ffffff'
  tertiary-container: '#474949'
  on-tertiary-container: '#b7b8b8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cde9d9'
  primary-fixed-dim: '#b2cdbd'
  on-primary-fixed: '#082016'
  on-primary-fixed-variant: '#344c40'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  stat-value:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.3'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-margin: 24px
  gutter-md: 20px
  sidebar-width: 240px
  card-padding: 24px
  stack-gap-sm: 8px
  stack-gap-md: 16px
---

## Brand & Style

This design system is built for high-efficiency enterprise environments, specifically tailored for managers who require immediate clarity and data-driven insights. The brand personality is **Professional, Systematic, and Calm**. It prioritizes utility and legibility over decorative flair, ensuring that the interface remains unobtrusive during intensive operational tasks.

The visual style is **Corporate Modern**, characterized by:
- **High Information Density:** Utilizing balanced whitespace to pack critical data without causing cognitive overload.
- **Subtle Layering:** Employing light gray backgrounds to make primary white "work surfaces" (cards) pop.
- **Purposeful Color:** Using color only to denote status or primary action, maintaining a focused work environment.
- **Precision:** Tight alignment, consistent corner radii, and a rigid grid structure that conveys reliability and order.

## Colors

The palette is anchored by a deep **Forest Green (#364E42)**, which serves as the primary brand identifier and active state indicator. This choice suggests stability and growth while remaining more sophisticated than standard corporate blues.

- **Background Strategy:** The system uses a tiered background approach. The main application background is a cool light gray (#F4F5F6), while interactive elements and data containers are pure white (#FFFFFF).
- **Semantic Logic:** Status indicators use a "Soft Background + Deep Text" formula to ensure accessibility while maintaining the professional aesthetic. 
- **Accents:** A soft border color (#E2E8F0) is used to define container boundaries without creating visual noise.

## Typography

The design system utilizes **Inter** exclusively to leverage its exceptional legibility in data-heavy interfaces. The typographic hierarchy is strictly enforced to guide the eye from high-level summaries to granular details.

- **Numerics:** Large, bold weights are used for financial figures and counts to ensure they are the first thing a user sees.
- **Labels:** Small caps or bolded 12px labels are used for category headers (e.g., "Operations," "Insights") to provide structure without competing with content.
- **Contrast:** High contrast (near-black #111827) is used for headings, while a softer slate (#64748B) is used for secondary body text and metadata.

## Layout & Spacing

The system follows a **Fixed-Fluid Hybrid** model. The sidebar remains a fixed width of 240px, while the main content area utilizes a fluid 12-column grid that scales with the viewport.

- **Grid Logic:** Content is organized into modular cards. On desktop, summary cards typically span 3 columns (4 per row). List items and activity feeds span the remaining 8-4 or 6-6 splits depending on importance.
- **Rhythm:** An 8px base unit is used for all spacing. Standard card padding is 24px (3 units) to provide a premium, airy feel that prevents the data from feeling cramped.
- **Mobile Adaptivity:** At the 768px breakpoint, the grid collapses to a single column, and card padding reduces to 16px to maximize screen real estate.

## Elevation & Depth

Hierarchy is established primarily through **Tonal Layering** supplemented by extremely soft, ambient shadows. 

- **Level 0 (Background):** Light gray surface (#F4F5F6). Used for the base canvas.
- **Level 1 (Cards/Work Surfaces):** Pure white surface (#FFFFFF) with a 1px border (#E2E8F0).
- **Shadows:** A single, consistent shadow style is used for all cards: `0px 1px 3px rgba(0,0,0,0.05), 0px 10px 15px -3px rgba(0,0,0,0.02)`. This creates a "lifted" effect that feels physical yet clean.
- **Interactivity:** On hover, interactive cards may increase in shadow depth slightly or show a primary-colored border stroke.

## Shapes

The shape language is defined by **Medium Roundedness**. 

- **Primary Cards:** Use a 12px radius to soften the enterprise feel and make the workspace more inviting.
- **Inner Elements:** Buttons and input fields use an 8px radius (Level 2 base) to maintain a nested visual harmony.
- **Status Pills:** Use a fully rounded (pill) shape to distinguish them from interactive buttons.
- **Icons:** Placed within rounded-square containers (8px) with light background tints to create clear visual anchors.

## Components

### Buttons & Inputs
- **Primary Action:** Solid Forest Green background with white text.
- **Secondary Action:** White background with a 1px gray border and dark text.
- **Inputs:** 40px height, white background, subtle border, and 14px text.

### Cards
- **Stat Cards:** Feature a title, a large bold value, and a small "trend" badge in the top right corner.
- **Action Cards:** Horizontal layout with an icon on the left, title/description in the center, and a chevron or "arrow-right" on the far right to indicate navigability.

### Navigation
- **Sidebar:** Dark text on a transparent background for inactive states; active states use the primary Forest Green background with white text and a high-contrast icon.
- **Top Bar:** Fixed height (64px), pure white, containing a breadcrumb-style "Context Switcher" and user profile.

### Feedback
- **Badges:** Small, high-radius components used for "Action Items" or "Status." Use semantic colors (e.g., Red for "Needs Attention").
- **Activity Timeline:** Vertical line (2px, gray) connecting circular icon nodes, signifying a chronological sequence of events.