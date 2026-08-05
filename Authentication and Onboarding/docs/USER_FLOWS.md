# Business Management System (BMS)
# USER_FLOWS.md

**Project:** Business Management System (BMS)

**Module:** Authentication & Onboarding

**Version:** 1.0.0

**Status:** Approved User Workflow Specification

---

# 1. Purpose

This document defines every user workflow within the Authentication & Onboarding module.

Unlike the Navigation Map, which describes **where users navigate**, this document describes **how users accomplish business tasks**, including:

- User goals
- Preconditions
- Workflow steps
- System responses
- Alternative paths
- Validation rules
- Error handling
- Completion criteria

This document serves as the functional specification for implementing realistic user interactions.

---

# 2. Workflow Design Principles

Every workflow in this module follows these principles:

- One clear user goal per workflow.
- Minimal number of steps.
- Immediate validation feedback.
- No unnecessary decisions.
- Predictable navigation.
- Recovery from errors.
- Consistent interaction patterns.
- Professional SaaS user experience.

---

# 3. Workflow Summary

The Authentication & Onboarding module contains the following workflows:

| ID | Workflow | Primary User |
|----|----------|--------------|
| WF-01 | User Login | Existing User |
| WF-02 | Forgot Password | Existing User |
| WF-03 | Create Business | Business Owner |
| WF-04 | Workspace Selection | Authenticated User |
| WF-05 | Workspace Comparison | Authenticated User |
| WF-06 | Capability Explorer | Authenticated User |
| WF-07 | Accept Invitation | Invited Employee |

---

# WF-01 — User Login

## Goal

Allow an existing user to access the system.

## Actor

Existing User

## Preconditions

- User already has an account.
- User has valid credentials.

## Trigger

User opens the application.

## Main Flow

1. Display Login screen.
2. User enters email.
3. User enters password.
4. User selects **Sign In**.
5. System validates required fields.
6. System displays loading state.
7. Authentication succeeds.
8. User is redirected to Workspace Selection.

## Alternative Flow

Forgot Password selected.

↓

Navigate to Forgot Password workflow.

## Exception Flow

Invalid credentials.

↓

Remain on Login.

↓

Display inline error message.

## Postconditions

User reaches Workspace Selection.

---

# WF-02 — Forgot Password

## Goal

Allow a user to reset a forgotten password.

## Actor

Existing User

## Preconditions

- User has a registered email address.

## Trigger

User selects **Forgot Password**.

## Main Flow

1. Display Forgot Password screen.
2. User enters email.
3. User selects **Send Reset Link**.
4. Validate email format.
5. Display loading state.
6. Display Check Email screen.
7. User continues to Create New Password.
8. User enters new password.
9. User confirms password.
10. Validate password requirements.
11. Display Password Updated Successfully.
12. Return user to Login.

## Alternative Flow

Back selected.

↓

Return to Login.

## Exception Flow

Expired reset link.

↓

Display Reset Link Expired.

↓

Allow user to request another reset link.

## Postconditions

Password successfully updated.

---

# WF-03 — Create Business

## Goal

Allow a new business owner to create a BMS workspace.

## Actor

Business Owner

## Preconditions

- User has authenticated.
- User does not yet own a business.

## Trigger

User selects **Create Business**.

## Main Flow

1. Display Business Information.
2. User enters business details.
3. Continue.
4. Display Workspace Type.
5. User selects preferred workspace.
6. Continue.
7. Display Business Structure.
8. User selects business structure.
9. Continue.
10. Display confirmation.
11. Create workspace.
12. Redirect to Workspace Selection.

## Alternative Flow

Back selected.

↓

Return to previous onboarding step.

## Exception Flow

Missing required fields.

↓

Remain on current page.

↓

Display inline validation.

## Postconditions

Business workspace created.

---

# WF-04 — Workspace Selection

## Goal

Allow users to choose which workspace to enter.

## Actor

Authenticated User

## Preconditions

- Authentication successful.

## Trigger

Authentication completed.

## Main Flow

1. Display Workspace Selection.
2. Show available workspaces.
3. User selects one workspace.
4. Continue.
5. Redirect to Application Shell.

## Alternative Flow

Select Compare Workspaces.

↓

Navigate to Workspace Comparison.

OR

Select Capability Explorer.

↓

Navigate to Capability Explorer.

## Postconditions

Application Shell loaded.

---

# WF-05 — Workspace Comparison

## Goal

Allow users to compare available workspace configurations.

## Actor

Authenticated User

## Preconditions

Workspace Selection displayed.

## Trigger

User selects Compare Workspaces.

## Main Flow

1. Display comparison table.
2. User reviews workspace differences.
3. User returns to Workspace Selection.
4. User chooses preferred workspace.

## Postconditions

Workspace selected.

---

# WF-06 — Capability Explorer

## Goal

Allow users to understand available business capabilities before selecting a workspace.

## Actor

Authenticated User

## Preconditions

Workspace Selection displayed.

## Trigger

User selects Capability Explorer.

## Main Flow

1. Display available modules.
2. User browses module descriptions.
3. User returns to Workspace Selection.
4. User selects workspace.
5. Continue.

## Postconditions

Workspace selected.

---

# WF-07 — Accept Invitation

## Goal

Allow an invited employee to activate their account.

## Actor

Invited Employee

## Preconditions

- Invitation is valid.
- Invitation has not expired.

## Trigger

User opens invitation link.

## Main Flow

1. Display Invitation Details.
2. User reviews invitation.
3. User selects Accept Invitation.
4. Display Create Password.
5. User creates password.
6. Continue.
7. Display Create Security PIN.
8. User creates four-digit PIN.
9. Continue.
10. Display loading state.
11. Display Account Activated.
12. Continue to Login.

## Alternative Flow

Decline Invitation.

↓

Return to Login.

## Exception Flow

Invitation expired.

↓

Display Invitation Expired.

OR

Invitation invalid.

↓

Display Invalid Invitation.

## Postconditions

Employee account activated.

---

# 4. Shared Validation Rules

The following validation rules apply to every workflow.

## Email

- Required.
- Valid email format.

## Password

- Required.
- Minimum length.
- Uppercase letter.
- Lowercase letter.
- Number.
- Special character.

## Confirm Password

- Must match Password.

## Security PIN

- Four digits.
- Confirmation required.
- Reject invalid format.

---

# 5. Shared System Responses

Every workflow should provide immediate feedback.

Possible responses include:

- Loading
- Success
- Validation Error
- Warning
- Information

Browser alerts must never be used.

All feedback should be displayed within the interface.

---

# 6. Error Recovery

Users should always be able to recover from errors.

Recovery options include:

- Correct invalid input.
- Retry action.
- Return to previous screen.
- Restart workflow.
- Return to Login.

No workflow should terminate unexpectedly.

---

# 7. Workflow Completion Criteria

A workflow is complete when:

- User goal has been achieved.
- Success state displayed.
- Navigation continues correctly.
- No validation errors remain.
- User reaches the expected destination.

---

# 8. Future Integration

These workflows currently simulate backend behaviour.

Future integration will connect these workflows to:

- Identity Service
- Authentication Service
- Organization Service
- Workspace Service
- Notification Service
- Email Service
- Role Management Service

The workflow logic should remain unchanged after backend integration.

---

# 9. Guiding Principle

Every workflow should feel effortless.

Users should always understand:

- Where they are.
- What they are doing.
- Why they are doing it.
- What happens next.

The Authentication & Onboarding module establishes the interaction standard for every future workflow in the Business Management System.