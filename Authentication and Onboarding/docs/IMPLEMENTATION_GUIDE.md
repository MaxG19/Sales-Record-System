# IMPLEMENTATION.md

> **Business Management System (BMS)**
>
> **Module:** Authentication & Onboarding
>
> **Version:** 1.0
>
> **Status:** Ready for Implementation
>
> **Audience:** Gemini CLI (Implementation Agent)

---

# Purpose

This document provides the execution instructions for implementing the Authentication & Onboarding module of the Business Management System (BMS).

The objective is to transform the approved Stitch-generated UI into a high-fidelity interactive prototype while preserving the visual design exactly as created.

The Authentication module serves as the reference implementation for all future BMS modules. The implementation must therefore prioritize maintainability, modularity, consistency, and adherence to the established project standards.

---

# Mission

Convert the approved Stitch HTML export into a fully interactive prototype.

The implementation must:

- Preserve the Stitch design exactly.
- Build reusable components where appropriate.
- Simulate realistic application behaviour.
- Implement all navigation flows.
- Validate user inputs.
- Produce clean, maintainable, modular code.
- Prepare the module for future integration with the backend.

---

# Source of Truth

Read and follow the project documentation in the following order before making any modifications:

1. README.md
2. PROJECT_RULES.md
3. EXECUTION_PLAN.md
4. NAVIGATION_MAP.md
5. USER_FLOWS.md
6. INTERACTION_RULES.md
7. PROTOTYPE_ARCHITECTURE.md

If any document appears to conflict with another, follow them in the order listed above.

Do not make assumptions.

---

# Primary Objective

Build an interactive prototype—not a production backend.

The prototype should feel like a real application while using simulated data and client-side logic.

---

# Design Preservation Rules

The Stitch-generated interface is the approved design.

Do NOT:

- redesign pages
- move components
- resize layouts
- change spacing
- change colours
- replace icons
- alter typography
- remove visual elements
- simplify layouts

You may only make visual changes if required to fix:

- broken HTML
- responsiveness
- accessibility
- browser rendering issues

---

# Implementation Scope

Implement only the Authentication & Onboarding module.

Included screens:

- Login
- Forgot Password
- Check Email
- Create New Password
- Password Reset Success
- Create Business
- Workspace Type
- Business Structure
- Workspace Selection
- Workspace Comparison
- Capability Explorer
- Invitation Acceptance
- Create Password
- Create PIN
- Account Activated

Do not implement screens outside this module.

---

# Responsibilities

## 1. Analyse

Inspect every exported HTML page.

Identify:

- reusable layouts
- repeated components
- shared styles
- shared JavaScript
- duplicated code
- opportunities for modularisation

Do not modify behaviour during analysis.

---

## 2. Refactor

Refactor only the implementation.

Never refactor the visual design.

Allowed:

- reusable CSS
- reusable JavaScript
- reusable HTML components
- shared utilities

---

## 3. Navigation

Implement every navigation path defined inside NAVIGATION_MAP.md.

Navigation should feel seamless.

Use realistic page transitions.

Do not leave dead links.

---

## 4. User Flows

Implement every workflow described inside USER_FLOWS.md.

Examples:

- Login
- Password Reset
- Business Creation
- Invitation Acceptance

Support:

- success flows
- validation flows
- cancellation
- error handling

---

## 5. Interactions

Implement all interaction rules.

Examples:

- hover
- focus
- loading
- validation
- disabled states
- success messages
- error messages
- keyboard support

---

## 6. Validation

Validate every form.

Include:

- required fields
- email validation
- password rules
- password confirmation
- PIN validation

Display clear inline validation messages.

---

## 7. Simulation

Use simulated application logic.

Examples:

- successful login
- invalid credentials
- password reset
- invitation accepted
- business created

Do not integrate a backend.

Use local mock data only.

---

## 8. Accessibility

Support:

- keyboard navigation
- visible focus states
- semantic HTML
- ARIA labels where necessary
- accessible forms

---

## 9. Performance

Optimise:

- CSS reuse
- JavaScript reuse
- asset loading
- DOM structure

Avoid unnecessary duplication.

---

# Coding Standards

Write code that is:

- readable
- modular
- reusable
- documented
- maintainable

Avoid:

- duplicated logic
- deeply nested code
- magic values
- unused styles
- dead code

---

# Deliverables

Produce:

- organised project structure
- reusable CSS
- reusable JavaScript
- interactive prototype
- working navigation
- simulated workflows
- clean code
- implementation notes (if required)

---

# Success Criteria

The implementation is considered complete when:

- Every page renders correctly.
- Every navigation path works.
- Every documented workflow functions.
- Every form validates correctly.
- The UI matches the Stitch design.
- No placeholder interactions remain.
- No broken links exist.
- No console errors are present.
- Code is organised and reusable.

---

# Definition of Done

The module should feel like a real application despite having no backend.

A user should be able to complete the entire Authentication & Onboarding experience without encountering incomplete interactions or broken functionality.

---

# Guiding Principles

Always remember:

- Preserve the design.
- Respect the documentation.
- Prefer reuse over duplication.
- Build for maintainability.
- Keep the prototype realistic.
- Never redesign approved interfaces.

When uncertain, preserve the existing design and ask for clarification rather than making assumptions.

---

# Final Instruction

Treat this implementation as the reference standard for every future module in the Business Management System.

The quality of this module will define the implementation approach for Products, Inventory, POS, Customers, Suppliers, Reports, Administration, and all subsequent modules.
