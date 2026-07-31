# Business Management System (BMS)
# Authentication & Onboarding Module

**Module Version:** 1.0.0  
**Project:** Business Management System (BMS)  
**Module Owner:** Authentication & Identity Domain  
**Status:** Design Approved → Prototype Assembly  
**Prototype Target:** High-Fidelity Interactive Prototype  
**Implementation Tool:** Gemini CLI (Prototype Assembly)  
**Architecture Owner:** Solution Architecture

---

# 1. Overview

The Authentication & Onboarding module is responsible for establishing a secure, intuitive, and trustworthy entry point into the Business Management System (BMS).

This module manages the complete lifecycle of a user's first interaction with the system—from signing in, recovering an account, creating a new business, joining an existing business through an invitation, and selecting the appropriate workspace after authentication.

This module is the foundation of the entire application. Every authenticated workflow within BMS begins here.

The objective of this module is to transform the approved Stitch-generated high-fidelity HTML screens into a seamless, production-quality interactive prototype while preserving the original visual design.

---

# 2. Purpose

The purpose of this module is to:

- Authenticate users securely.
- Guide new business owners through onboarding.
- Allow invited staff members to activate their accounts.
- Provide secure password recovery.
- Allow authenticated users to choose the correct workspace.
- Demonstrate the complete authentication experience through an interactive prototype.

This module does **not** communicate with a backend service.

All interactions are simulated.

---

# 3. Scope

This prototype includes only the Authentication & Onboarding experience.

The following business modules are **out of scope**:

- Dashboard
- Products
- Inventory
- Purchases
- Suppliers
- Customers
- Sales
- POS
- Reports
- Users
- Branches
- Settings

Those modules will be implemented separately.

---

# 4. Module Objectives

The Authentication prototype must:

- Preserve the approved Stitch UI.
- Simulate realistic user interaction.
- Demonstrate complete navigation.
- Validate user input.
- Simulate loading states.
- Display success and error states.
- Provide smooth transitions between screens.

The prototype should feel like a finished SaaS application even though no backend exists.

---

# 5. Design Source of Truth

The exported Stitch HTML files are the **only approved UI design**.

These files represent the final approved interface.

They must be treated as immutable design assets.

The prototype assembly process must preserve:

- Layout
- Typography
- Colors
- Icons
- Illustrations
- Spacing
- Cards
- Buttons
- Forms
- Shadows
- Alignment

No redesign is permitted.

---

# 6. Prototype Philosophy

This project is **not** rebuilding the interface.

It is assembling interactions on top of an already approved interface.

Think of this module as creating a clickable demonstration rather than developing production software.

Priority order:

1. Preserve Design
2. Preserve User Experience
3. Add Interaction
4. Reuse Components
5. Improve Internal Code Organization

Visual consistency always takes precedence over code optimization.

---

# 7. Screens Included

## Authentication

- Login
- Login Validation
- Login Loading

---

## Forgot Password

- Request Reset
- Check Email
- Create New Password
- Password Updated Successfully

---

## Create Business

- Business Information
- Workspace Type
- Business Structure
- Confirmation

---

## Workspace Selection

- Workspace Selection

---

## Workspace Comparison

- Compare Available Workspaces

---

## Capability Explorer

- Explore Available Business Modules

---

## Accept Invitation

- Invitation Details
- Create Password
- Create Security PIN
- Account Activated
- Invitation Expired
- Invalid Invitation

---

# 8. User Journeys

The prototype must support the following user journeys.

## Existing User

```
Login

↓

Workspace Selection

↓

Application
```

---

## Forgot Password

```
Login

↓

Forgot Password

↓

Check Email

↓

Create New Password

↓

Password Updated

↓

Login
```

---

## Business Owner

```
Login

↓

Create Business

↓

Workspace Type

↓

Business Structure

↓

Confirmation

↓

Workspace Selection
```

---

## Invited Employee

```
Invitation

↓

Accept Invitation

↓

Create Password

↓

Create Security PIN

↓

Account Activated

↓

Login
```

---

# 9. Prototype Behaviour

Every interactive element must behave realistically.

Examples include:

- Buttons
- Links
- Checkboxes
- Password visibility toggles
- Form validation
- Navigation
- Success messages
- Error messages
- Loading indicators

No element should appear non-functional.

---

# 10. Simulated Data

This prototype does not require a backend.

All data should be simulated.

Examples:

- Login always succeeds using valid input.
- Password reset always proceeds after validation.
- Business creation completes successfully.
- Invitation activation completes successfully.

Delays should be simulated using loading animations.

---

# 11. Validation Rules

Forms should validate locally.

Examples include:

Email

- Required
- Valid format

Password

- Minimum length
- Uppercase
- Lowercase
- Number
- Special character

PIN

- Four digits
- Matching confirmation
- Reject obvious sequences where applicable

Validation messages should appear inline.

No modal-based validation.

---

# 12. Navigation Rules

Every screen must be reachable.

Every Back button must return correctly.

Every primary action must navigate to the next logical screen.

No dead ends are permitted.

All authentication flows must eventually return to either:

- Login
- Workspace Selection

---

# 13. Component Reuse

Repeated interface elements should be extracted internally into reusable components without changing their appearance.

Examples include:

- Authentication Card
- Primary Button
- Secondary Button
- Input Field
- Password Field
- PIN Input
- Toast
- Loading Spinner
- Success Card
- Footer
- Brand Header

Extraction should never alter visual presentation.

---

# 14. Animation Guidelines

Animations should be subtle.

Recommended transitions:

- Fade
- Slide
- Scale

Maximum duration:

250 milliseconds

Animations should support usability rather than distract from it.

---

# 15. Accessibility

The prototype should follow good accessibility practices.

Include:

- Visible focus states
- Keyboard navigation
- Semantic HTML
- Accessible labels
- Sufficient color contrast
- Screen-reader-friendly form labels

---

# 16. Technical Constraints

The implementation must:

- Preserve exported HTML.
- Preserve exported CSS.
- Reuse existing assets.
- Avoid unnecessary dependencies.
- Use local JavaScript only.
- Avoid backend integration.
- Avoid API calls.

The prototype must function entirely offline.

---

# 17. Explicit Restrictions

The implementation must **never**:

- Redesign layouts.
- Replace colors.
- Modify typography.
- Generate alternative interfaces.
- Remove approved components.
- Convert layouts into wireframes.
- Introduce placeholder UI.
- Replace illustrations.
- Simplify the user interface.
- Reinterpret the design language.

The exported Stitch HTML is the single source of truth.

---

# 18. Deliverables

The completed module should include:

- Interactive Authentication Prototype
- Connected Navigation
- Local Form Validation
- Simulated Loading States
- Success & Error Flows
- Shared Reusable Components
- Clean Project Structure

---

# 19. Success Criteria

The Authentication & Onboarding module is considered complete when:

- Every approved Stitch screen is represented.
- Visual appearance matches the exported HTML.
- All authentication flows are connected.
- Every interactive element behaves correctly.
- Navigation is complete and consistent.
- No screen becomes inaccessible.
- No redesign has occurred.
- The prototype demonstrates a realistic SaaS authentication experience.

---

# 20. Future Integration

This module will later integrate with:

- Application Shell
- Dashboard
- Workspace Routing
- User Identity
- Role Management
- Organization Management

At this stage, integration is simulated through navigation only.

---

# 21. Development Principle

The Authentication & Onboarding module establishes the quality standard for the entire Business Management System prototype.

Every future module—including Dashboard, Products, Inventory, Purchases, Suppliers, Customers, Sales, POS, Reports, Administration, and Support—must follow the same implementation philosophy:

- Preserve approved designs.
- Build interactions, not new interfaces.
- Maintain consistency.
- Reuse components.
- Simulate realistic workflows.
- Deliver a polished, production-quality prototype experience.