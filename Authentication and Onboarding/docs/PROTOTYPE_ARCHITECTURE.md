# Business Management System (BMS)
# PROTOTYPE_ARCHITECTURE.md

**Project:** Business Management System (BMS)

**Module:** Authentication & Onboarding

**Version:** 1.0.0

**Status:** Approved Architecture Specification

---

# 1. Purpose

This document defines the internal architecture of the Authentication & Onboarding prototype.

Its purpose is to ensure that the implementation is:

- Modular
- Maintainable
- Reusable
- Scalable
- Consistent

while preserving the approved Stitch-generated user interface.

This document governs **how the prototype is organized internally**, not how it appears visually.

---

# 2. Architecture Philosophy

The prototype follows five architectural principles.

## Preserve Visual Fidelity

The exported Stitch HTML is the source of truth.

Visual appearance must never change.

---

## Modular Construction

Every feature should exist as an independent module.

Modules communicate through navigation rather than direct coupling.

---

## Reusable Components

Repeated interface elements should exist only once internally.

Examples include:

- Buttons
- Inputs
- Cards
- Headers
- Footers
- Loading Indicators
- Toast Notifications

---

## Separation of Concerns

Separate:

- Structure
- Styling
- Behaviour
- Assets
- Configuration

No file should be responsible for multiple unrelated concerns.

---

## Future Expandability

The Authentication module should integrate seamlessly into the complete Business Management System without requiring architectural changes.

---

# 3. High-Level Architecture

```
Authentication & Onboarding

│

├── Presentation Layer

├── Interaction Layer

├── Navigation Layer

├── State Layer

├── Shared Components

└── Assets
```

Each layer has a single responsibility.

---

# 4. Folder Structure

```
Authentication-Onboarding/

│

├── README.md

├── PROJECT_RULES.md

├── EXECUTION_PLAN.md

├── NAVIGATION_MAP.md

├── USER_FLOWS.md

├── INTERACTION_RULES.md

├── PROTOTYPE_ARCHITECTURE.md

├── COMPONENT_MANIFEST.md

├── PROTOTYPE_CHECKLIST.md

│

├── html/

├── css/

├── js/

├── assets/

├── prototype/

└── docs/
```

Documentation should remain separate from implementation files.

---

# 5. HTML Organization

Each screen should remain independent.

Example

```
html/

login.html

forgot-password.html

check-email.html

new-password.html

password-success.html

business-information.html

workspace-type.html

business-structure.html

confirmation.html

workspace-selection.html

workspace-comparison.html

capability-explorer.html

invitation-details.html

create-password.html

create-pin.html

account-activated.html
```

No screen should contain unrelated functionality.

---

# 6. CSS Architecture

Separate styling into reusable layers.

```
css/

base.css

layout.css

components.css

utilities.css

animations.css

authentication.css
```

Avoid duplicating styles.

Prefer reusable utility classes where appropriate.

---

# 7. JavaScript Architecture

Organize JavaScript by responsibility.

```
js/

navigation.js

validation.js

forms.js

loading.js

animations.js

toast.js

workspace.js

authentication.js
```

Each file should have a single responsibility.

---

# 8. Assets

Assets should be grouped by type.

```
assets/

logos/

icons/

illustrations/

avatars/

images/

fonts/
```

Do not duplicate assets.

Reuse existing resources.

---

# 9. Component Architecture

Reusable components should remain presentation-focused.

Examples include:

Authentication Card

Primary Button

Secondary Button

Input Field

Password Field

PIN Input

Toast

Modal

Loading Spinner

Success Card

Footer

Brand Header

Components should remain visually identical across every screen.

---

# 10. Navigation Layer

Navigation should be centralized.

Responsibilities include:

- Screen transitions
- Browser history
- Back navigation
- Workflow progression
- Deep-link support (future)

Navigation logic should never be duplicated across screens.

---

# 11. State Management

This prototype uses lightweight local state only.

State includes:

- Form values
- Validation status
- Loading states
- Selected workspace
- Password visibility
- Toast visibility

No persistent storage is required.

No backend synchronization is required.

---

# 12. Validation Layer

Validation logic should be reusable.

Examples include:

Email validation

Password validation

PIN validation

Required field validation

Confirmation matching

Validation rules should never be duplicated across forms.

---

# 13. Loading Layer

Loading behaviour should be centralized.

Examples:

Signing In

Sending Reset Link

Creating Business

Activating Invitation

Loading Workspace

Use a consistent loading duration across similar actions.

---

# 14. Animation Layer

Animations should be shared.

Examples include:

Fade

Slide

Scale

Toast

Spinner

Button Press

Avoid defining animations inside individual screens.

---

# 15. Configuration

Configuration values should remain centralized.

Examples:

Animation durations

Validation limits

Password rules

PIN length

Toast duration

Loading duration

This improves consistency and simplifies future changes.

---

# 16. Naming Conventions

Use descriptive, consistent naming.

Examples:

login.html

workspace-selection.html

primary-button

password-strength

loading-spinner

Avoid abbreviations unless universally understood.

---

# 17. Component Reuse Strategy

When duplicate UI is identified:

1. Extract the component.
2. Preserve appearance.
3. Replace duplicates.
4. Verify visual consistency.

Never redesign during extraction.

---

# 18. Error Handling

Errors should be handled consistently.

Display:

- Inline validation
- Error cards
- Toast notifications

Avoid browser alerts.

Avoid console errors in production.

---

# 19. Performance Strategy

Prefer:

- Existing HTML
- Existing CSS
- Existing assets
- Lightweight JavaScript

Avoid:

- Heavy frameworks
- Large dependencies
- Duplicate images
- Duplicate CSS

Prototype responsiveness should remain high.

---

# 20. Accessibility Strategy

Maintain:

- Semantic HTML
- Keyboard navigation
- Visible focus indicators
- Screen reader labels
- Accessible form controls

Accessibility should remain consistent across every screen.

---

# 21. Future Integration

The Authentication module will later integrate with:

Application Shell

↓

Identity Service

↓

Role Management

↓

Organization Management

↓

Dashboard

↓

Business Modules

No structural changes should be required during integration.

---

# 22. Scalability

This architecture should support future modules using the same structure.

Future modules include:

- Dashboard
- Products
- Inventory
- Suppliers
- Purchases
- Customers
- Sales
- POS
- Reports
- Administration
- Settings
- Support

Every module should follow the same architectural principles.

---

# 23. Definition of Good Architecture

The prototype architecture is considered successful when:

- Visual appearance matches Stitch.
- Components are reusable.
- Code responsibilities are clearly separated.
- Navigation is centralized.
- Validation is reusable.
- Animations are shared.
- Assets are organized.
- Future modules can adopt the same structure without modification.

---

# 24. Guiding Principle

The internal architecture should remain invisible to the user.

Users should only experience a smooth, professional, and consistent interface.

Developers should experience a clean, modular, and maintainable codebase.

The architecture should support long-term growth without compromising the approved design or the quality of the prototype.