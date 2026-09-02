---
name: Sovereign Enterprise
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
  h1:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  h2:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
  h3:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  numeric:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 22px
  label:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
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
  container-margin: 24px
  gutter: 16px
---

## Brand & Style
The design system is engineered for the Kenyan SME landscape, prioritizing a **Corporate / Modern** aesthetic that balances high-utility enterprise software with a localized, approachable warmth. The visual narrative is inspired by the efficiency of global SaaS leaders like Shopify and Linear, adapted for the multi-tenant retail environment of BMS.

The brand personality is **Professional, Calm, and Direct**. It avoids unnecessary flourish to focus on data density and operational clarity. By using a grounded "Enterprise Green" as the primary anchor against a warm, paper-like canvas, the UI evokes a sense of stability and reliability—essential for business owners managing their livelihoods. 

The emotional response is one of **order and empowerment**. The interface should feel like a high-performance tool: sharp, responsive, and trustworthy.

## Colors
The palette is built on a foundation of organic, professional earth tones. 

- **Primary (#344E41):** Used for high-emphasis actions, global navigation anchors, and primary headings. It represents the "Enterprise" core of the system.
- **Secondary (#A3B18A):** Used for supporting UI elements, such as secondary button backgrounds and active states for toggleable icons.
- **Accent (#DDA15E):** Reserved for highlights and sparing emphasis, such as "New" badges or specific callouts that need to break the green/neutral rhythm.
- **Background & Surface:** The canvas uses #F7F4EC to reduce eye strain during long work sessions, while #FFFFFF provides clear elevation for cards and panels.
- **Semantic Colors:** Statuses follow standardized patterns for Success, Warning, Error, and Info to ensure immediate recognition in inventory and transaction logs.

## Typography
This design system utilizes **Inter** for its neutral, highly legible character, which is critical for data-heavy management interfaces. 

- **Hierarchy:** H1 and H2 are bolded to provide immediate structural context. Body text is optimized at 14px for a balance between density and readability.
- **Numeric Data:** All prices and totals must use **tabular figures** (`tnum`). This ensures that columns of numbers align perfectly in tables and invoices, facilitating easier mental arithmetic for users. 
- **Currency Formatting:** All financial values must be prefixed with "KES" (e.g., KES 1,500.00).
- **Mobile Scaling:** For mobile devices, H1 scales down to 24px/32px to ensure headings do not wrap aggressively.

## Layout & Spacing
The layout follows a **fluid grid** model with a base unit of **4px**. This granular rhythm allows for the precision required in complex ERP/SaaS layouts.

- **Desktop:** 12-column grid with 16px gutters and 24px outer margins. Content is typically housed in cards or "Surfaces" to separate functional areas.
- **Tablet:** 8-column grid with 16px gutters. Sidebars collapse into a hamburger menu or narrow icon-only rail.
- **Mobile:** 4-column grid with 16px margins. Tables should reflow into card-based lists to maintain legibility.
- **Density:** High-density views (like Inventory Lists) should utilize 'sm' (8px) padding between rows, while marketing or dashboard summaries should use 'md' (16px) or 'lg' (24px).

## Elevation & Depth
This design system adopts a **Flat-Plus** approach, emphasizing structural borders over heavy shadows to maintain a professional, "tool-like" feel.

- **Level 0 (Default):** Most elements (cards, inputs, sidebars) sit at Level 0. They are defined by a 1px solid border using a darkened version of the background or a light neutral hex (e.g., #E5E1D5).
- **Level 1 (Interaction):** On hover or focus, elements transition to a subtle ambient shadow. Use a low-opacity shadow (e.g., `0 4px 12px rgba(52, 78, 65, 0.08)`) to indicate interactivity without breaking the flat aesthetic.
- **Tonal Layers:** Depth is primarily conveyed through color contrast—white surfaces (#FFFFFF) placed on the warm canvas (#F7F4EC) naturally stand out without needing artificial shadows.

## Shapes
The shape language is structured to feel modern but stable. 

- **Containers & Cards:** Use a **12px (rounded-lg)** radius. This creates a soft, approachable frame for large blocks of information.
- **Actionable Elements:** Buttons, input fields, and select menus use an **8px (rounded-md)** radius. The slightly tighter radius on smaller elements provides a sense of precision and "clickability."
- **Badges/Chips:** Use a fully rounded pill shape (999px) to distinguish them from interactive buttons.

## Components
- **Buttons:** 
  - *Primary:* Solid #344E41 with White text. 8px radius.
  - *Secondary:* Solid #A3B18A with #344E41 text.
  - *Ghost:* No background, #344E41 border and text.
- **Input Fields:** 1px border (#D1CDC2), 8px radius, White background. On focus, the border changes to Primary (#344E41) with a 2px outer glow of #344E41 at 10% opacity.
- **Cards:** White background, 12px radius, 1px border. Used for grouping related data like "Total Sales" or "Recent Transactions."
- **Data Tables:** Row-based layout with #F7F4EC dividers. Header text uses the "Label" typography style (uppercase, 11px). Use tabular figures for all numeric columns.
- **Status Chips:** Small, pill-shaped indicators using light tints of semantic colors (e.g., Success background at 15% opacity with Success text at 100% opacity).
- **Search Bar:** Incorporate a leading magnifying glass icon and a KES currency switcher where applicable for multi-currency retail contexts.