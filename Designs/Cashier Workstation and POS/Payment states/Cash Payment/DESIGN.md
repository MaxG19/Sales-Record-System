---
name: Kinetic Retail
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
  on-surface-variant: '#434655'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#525556'
  on-tertiary: '#ffffff'
  tertiary-container: '#6b6d6e'
  on-tertiary-container: '#eff0f1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
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
  display-price:
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
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  numeral-xl:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  touch-target-min: 48px
  gutter: 16px
  margin-page: 24px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

This design system is engineered for the high-velocity Kenyan retail sector, where speed of transaction and unwavering reliability are paramount. The aesthetic follows a **Modern Corporate** direction with a lean toward **Minimalism**, stripping away visual noise to focus entirely on the movement of goods and currency.

The UI evokes a sense of "Invisible Utility"—it is professional, trustworthy, and precise. By utilizing a high-key light palette, we maximize clarity under various lighting conditions (from bright storefronts to indoor kiosks). The emotional response should be one of competence and calm efficiency, ensuring that the operator feels empowered rather than overwhelmed during peak hours.

## Colors

The palette is restricted to essential functional roles to maintain a low cognitive load.

- **Surface & Background:** We use `#F9FAFB` (Primary Surface) and `#F3F4F6` (Secondary Surface) to create subtle contrast between navigation and workspace.
- **Action Blue (#2563EB):** Reserved exclusively for primary intent—completing a sale, confirming a prompt, or adding an item. 
- **Success Green (#10B981):** Used for "Paid" statuses, change-due calculations, and successful inventory syncs.
- **Error Red (#EF4444):** (Implicit) Used sparingly for stock-outs or payment failures.
- **Neutrals:** Greys range from `#111827` (Text) to `#E5E7EB` (Borders), ensuring a soft but legible structure.

## Typography

Inter is chosen for its exceptional legibility and neutral tone. In a POS context, the hierarchy is inverted: numeric values (prices, quantities, totals) take visual precedence over descriptive text.

- **Price Visibility:** Use `display-price` for the final "Amount Due" to ensure it is readable from a distance by both cashier and customer.
- **Numeric Clarity:** For tabular data (line items), use `numeral-xl` with tabular lining to ensure columns of numbers align perfectly for quick scanning.
- **Instructional Text:** Labels and body text use standard weights (400-500) to keep the interface feeling light.

## Layout & Spacing

The layout utilizes a **Fixed Grid** on desktop/tablet to maintain muscle memory for cashier button placement, transitioning to a **Fluid Grid** on mobile handheld devices.

- **Rhythm:** A strict 8px base unit controls all spacing. 
- **Touch Areas:** Every interactive element (buttons, list items, checkboxes) must respect a minimum `touch-target-min` of 48px to prevent input errors during high-speed checkout.
- **Desktop/Tablet:** A 12-column grid. The "Current Cart" typically occupies a 4-column fixed sidebar on the right, while the "Product Grid" occupies the remaining 8 columns.
- **Mobile:** A single-column view with a persistent bottom-bar "View Cart" summary.

## Elevation & Depth

This design system uses **Low-contrast Outlines** and **Tonal Layers** to define depth, avoiding heavy shadows that can look muddy on lower-quality POS displays.

- **Level 0 (Background):** `#F9FAFB` - The base of the application.
- **Level 1 (Cards/Sidebar):** White (#FFFFFF) surface with a 1px border of `#E5E7EB`. This is used for product cards and the cart container.
- **Level 2 (Modals/Pop-overs):** White (#FFFFFF) surface with a 1px border and a very soft, diffused shadow (`0 4px 6px -1px rgb(0 0 0 / 0.05)`).
- **Active State:** When an item is selected, use a 2px stroke of Action Blue rather than a shadow to indicate focus.

## Shapes

The shape language is "Approachable Geometric." A consistent **12px (0.75rem)** corner radius is applied to all major components (Cards, Buttons, Inputs). 

This specific radius provides a modern, friendly appearance that feels premium without being overly "bubbly." Smaller elements like badges or tags use a 4px radius to maintain a distinction between structural containers and informational metadata.

## Components

- **Buttons:** 
    - *Primary:* Action Blue background, white text, 12px radius, height of 56px for maximum hit-area.
    - *Secondary:* White background, `#E5E7EB` border, Action Blue text.
- **Product Cards:** 1px border, white background. Content includes a top-aligned image, `label-md` for the title, and `numeral-xl` for the price.
- **Input Fields:** 1px `#E5E7EB` border, 12px radius. On focus, the border transitions to Action Blue with a 1px inner glow.
- **Cart List Items:** High-contrast list items with a "swipe-to-delete" gesture on mobile. 16px vertical padding.
- **Status Chips:** Small, 4px rounded capsules. Success Green background at 10% opacity with 100% opacity text for status indicators like "Stocked" or "Paid."
- **Keypad:** A custom-designed numeric entry component for manual price entry or quantity adjustments, using oversized targets (minimum 64px height).