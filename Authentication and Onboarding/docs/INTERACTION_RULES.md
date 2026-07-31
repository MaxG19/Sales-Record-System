# Business Management System (BMS)
# INTERACTION_RULES.md

**Project:** Business Management System (BMS)

**Module:** Authentication & Onboarding

**Version:** 1.0.0

**Status:** Approved Interaction Specification

---

# 1. Purpose

This document defines the behaviour of every interactive element within the Authentication & Onboarding module.

Its purpose is to ensure that every interaction is:

- Predictable
- Consistent
- Accessible
- Responsive
- Production quality

These rules apply to every screen within this module.

---

# 2. Interaction Philosophy

The Authentication experience should feel:

- Fast
- Professional
- Friendly
- Secure
- Predictable

The interface should never surprise the user.

Every interaction must communicate:

- What happened
- Why it happened
- What happens next

---

# 3. Global Interaction Principles

Every interactive component must provide visual feedback.

Every action must have:

- Hover State
- Focus State
- Active State
- Disabled State
- Loading State (when applicable)

No clickable element should ever appear unresponsive.

---

# 4. Mouse Behaviour

## Hover

Interactive elements should indicate that they can be clicked.

Examples:

- Button elevation
- Background colour transition
- Border highlight
- Cursor changes to pointer

Hover animations should be subtle.

Maximum duration:

200ms

---

## Click

When clicked:

- Immediate visual feedback
- Prevent double-click submission
- Execute action
- Show loading if necessary

---

# 5. Keyboard Behaviour

Users should be able to complete every authentication workflow using only the keyboard.

Supported keys:

Tab

Shift + Tab

Enter

Escape

Arrow Keys (where appropriate)

---

## Tab Order

Navigation order should be logical.

Example:

Logo

↓

Email

↓

Password

↓

Remember Me

↓

Forgot Password

↓

Sign In

↓

Create Business

---

## Enter Key

Enter submits the primary form.

Example:

Login

Forgot Password

Password Reset

Invitation

---

## Escape

Escape closes:

- Dialogs
- Popups
- Menus

Never close an active form unexpectedly.

---

# 6. Buttons

Buttons must support five interaction states.

---

## Default

Normal appearance.

---

## Hover

Slight elevation or colour transition.

---

## Focus

Visible focus ring.

Keyboard users must always know which button is focused.

---

## Active

Pressed appearance.

Approximately:

100ms

---

## Disabled

Lower opacity.

No hover effects.

No pointer cursor.

No interaction.

---

## Loading

Replace button label with:

Loading Spinner

or

Spinner + Text

Examples:

Signing In...

Sending...

Creating...

Activating...

Button remains disabled until completion.

---

# 7. Text Inputs

Every input should support:

Default

Hover

Focus

Filled

Error

Disabled

Read Only

---

## Focus Behaviour

On focus:

- Highlight border
- Display caret
- Scroll into view if necessary

---

## Validation

Validation should occur:

Immediately after leaving the field.

Not while actively typing.

---

## Error State

Show:

- Red border
- Inline message
- Error icon (optional)

Never use browser validation popups.

---

# 8. Password Fields

Support:

Show Password

Hide Password

Strength Indicator

Requirements Checklist

Confirmation

---

## Password Visibility

Eye icon.

Click toggles visibility.

Do not lose cursor position.

---

## Password Strength

Strength updates live.

Levels:

Weak

Fair

Good

Strong

Very Strong

---

## Requirements

Display live checklist.

Examples:

✓ Minimum length

✓ Uppercase

✓ Lowercase

✓ Number

✓ Special character

Checklist updates in real time.

---

# 9. Security PIN

Supports:

Four-digit input.

Auto advance.

Backspace navigation.

Paste support.

Validation.

Confirmation.

---

## Invalid PIN

Remain on page.

Highlight incorrect field.

Display inline message.

---

# 10. Checkboxes

Support:

Unchecked

Checked

Focus

Disabled

Hover

Examples:

Remember Me

Accept Terms

---

# 11. Links

Links should support:

Hover

Focus

Visited

Examples:

Forgot Password

Back to Login

Compare Workspaces

Capability Explorer

---

# 12. Cards

Cards should support:

Hover elevation (optional)

Focus

Selection

Examples:

Workspace Cards

Business Structure Cards

Workspace Type Cards

Selected cards should remain visually distinct.

---

# 13. Loading States

Loading should appear whenever a simulated operation occurs.

Examples:

Login

Password Reset

Business Creation

Invitation Activation

Workspace Loading

---

## Duration

Recommended:

800ms–1500ms

Avoid instant transitions.

---

## Spinner

Should not block the entire interface unless necessary.

---

# 14. Toast Notifications

Used for:

Success

Information

Warning

Error

---

## Behaviour

Appear:

Top-right

Auto-dismiss:

3–5 seconds

Manual close supported.

---

# 15. Validation Messages

Messages should appear directly beneath the related field.

Examples:

Email is required.

Enter a valid email address.

Passwords do not match.

PIN must contain four digits.

Avoid generic messages.

---

# 16. Success Messages

Examples:

Password updated successfully.

Invitation accepted.

Business created successfully.

Workspace ready.

Messages should reassure the user and clearly indicate the next action.

---

# 17. Error Messages

Error messages should:

Explain the problem.

Suggest how to fix it.

Remain visible until corrected.

Examples:

Incorrect password.

Invitation expired.

Reset link has expired.

Email address not recognised.

---

# 18. Page Transitions

Recommended transitions:

Fade

Slide

Scale

Maximum duration:

250ms

Transitions should maintain context and never delay the user unnecessarily.

---

# 19. Browser Behaviour

The prototype should:

Prevent accidental form resubmission.

Preserve entered values when navigating back where appropriate.

Handle browser refresh gracefully.

Maintain consistent behaviour across modern browsers.

---

# 20. Accessibility

Every interactive element must include:

Visible keyboard focus.

Accessible labels.

Semantic HTML.

Sufficient colour contrast.

Screen reader support.

Interactive elements must not rely solely on colour to communicate state.

---

# 21. Interaction Consistency

The same action should always produce the same result.

Examples:

Every primary button advances the workflow.

Every Back button returns to the previous logical step.

Every Cancel button exits safely.

Every loading spinner behaves consistently.

Every success screen follows the same visual pattern.

---

# 22. Micro-Interactions

Use subtle micro-interactions to reinforce user actions.

Examples:

Button press animation.

Card selection highlight.

Input focus transition.

Password strength animation.

Loading spinner.

Toast appearance.

Avoid excessive motion.

---

# 23. Animation Guidelines

Animations should be:

Fast

Purposeful

Subtle

Professional

Recommended duration:

150–250ms

Avoid bounce, exaggerated scaling, or decorative effects.

---

# 24. Error Recovery

Users should always be able to recover.

Recovery options include:

Retry

Edit Input

Back

Return to Login

Restart Workflow

No error should trap the user.

---

# 25. Definition of Correct Behaviour

An interaction is considered complete when:

The user receives immediate visual feedback.

The interface communicates the current state.

The intended action is performed.

The user understands what happens next.

The interaction remains visually consistent with every other screen in the Authentication module.

---

# 26. Guiding Principle

Every interaction should inspire confidence.

The Authentication & Onboarding experience represents the user's first impression of the Business Management System.

Every click, transition, validation message, animation, and response should reinforce the feeling that the application is polished, reliable, secure, and professionally engineered.

Interaction quality should always prioritize clarity, consistency, accessibility, and trust over unnecessary visual effects.