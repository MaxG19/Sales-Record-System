# Business Management System (BMS)
# NAVIGATION_MAP.md

**Project:** Business Management System (BMS)

**Module:** Authentication & Onboarding

**Version:** 1.0.0

**Status:** Approved Navigation Specification

---

# 1. Purpose

This document defines the navigation architecture for the Authentication & Onboarding module.

Its purpose is to ensure that every screen transition is predictable, consistent, and fully connected before implementation begins.

The navigation defined here is the authoritative reference for all prototype assembly.

---

# 2. Navigation Principles

The navigation system follows these principles:

- Every screen must be reachable.
- Every workflow must have a logical beginning and end.
- Every primary action must move the user forward.
- Every Back action must return to the previous logical screen.
- Users should never become trapped on a page.
- No dead-end navigation is permitted.
- Navigation should always preserve user context where applicable.

---

# 3. Entry Points

Users can enter the Authentication module through one of four entry points.

```
Application Launch

        │

        ▼

      Login
```

---

```
Forgot Password Link

        │

        ▼

Forgot Password
```

---

```
Invitation Email

        │

        ▼

Invitation Details
```

---

```
Create Business

        │

        ▼

Business Onboarding
```

---

# 4. Global Navigation Rules

The following navigation controls should be available wherever applicable.

Primary Button

Moves the user to the next logical step.

---

Back Button

Returns to the previous screen.

---

Cancel

Returns to Login.

---

Close

Returns to the previous workflow.

---

Logo

Returns to Login when safe to do so.

---

Browser Back

Should mirror the application's Back button.

---

# 5. Login Flow

```
Application

↓

Login

↓

Enter Credentials

↓

Sign In

↓

Loading

↓

Workspace Selection
```

Alternative paths

```
Login

↓

Forgot Password
```

```
Login

↓

Create Business
```

---

# 6. Forgot Password Flow

```
Login

↓

Forgot Password

↓

Enter Email

↓

Send Reset Link

↓

Loading

↓

Check Email

↓

Create New Password

↓

Password Updated

↓

Return to Login
```

Alternative Navigation

```
Forgot Password

↓

Back

↓

Login
```

Expired Reset Link

```
Create New Password

↓

Reset Link Expired

↓

Request New Link

↓

Forgot Password
```

---

# 7. Business Creation Flow

```
Login

↓

Create Business

↓

Business Information

↓

Continue

↓

Workspace Type

↓

Continue

↓

Business Structure

↓

Continue

↓

Confirmation

↓

Workspace Selection
```

Alternative Navigation

```
Business Information

↓

Back

↓

Login
```

---

# 8. Workspace Selection Flow

```
Workspace Selection

↓

Choose Workspace

↓

Continue

↓

Application Shell
```

Optional Navigation

```
Workspace Selection

↓

Compare Workspaces
```

```
Workspace Selection

↓

Capability Explorer
```

```
Capability Explorer

↓

Back

↓

Workspace Selection
```

---

# 9. Workspace Comparison Flow

```
Workspace Selection

↓

Compare Workspaces

↓

View Differences

↓

Back

↓

Workspace Selection
```

---

# 10. Capability Explorer Flow

```
Workspace Selection

↓

Capability Explorer

↓

Browse Modules

↓

Select Workspace

↓

Workspace Selection
```

---

# 11. Invitation Flow

```
Invitation Email

↓

Invitation Details

↓

Accept Invitation

↓

Create Password

↓

Create Security PIN

↓

Activate Account

↓

Loading

↓

Account Activated

↓

Continue

↓

Login
```

Alternative

```
Invitation Details

↓

Decline Invitation

↓

Confirmation

↓

Login
```

---

Expired Invitation

```
Invitation Details

↓

Invitation Expired

↓

Contact Administrator

↓

End
```

---

Invalid Invitation

```
Invitation Details

↓

Invalid Invitation

↓

Return to Login
```

---

# 12. Success Navigation

Successful Login

```
Workspace Selection
```

---

Password Reset

```
Login
```

---

Business Creation

```
Workspace Selection
```

---

Invitation Accepted

```
Login
```

---

# 13. Error Navigation

Login Failure

Remain on Login

Display inline validation.

---

Validation Errors

Remain on current screen.

Highlight invalid fields.

---

Password Mismatch

Remain on Create Password.

---

Invalid PIN

Remain on Create PIN.

---

Expired Invitation

Navigate to Invitation Expired.

---

Expired Reset Link

Navigate to Reset Link Expired.

---

# 14. Exit Points

Users may leave the Authentication module through only two routes.

Route 1

```
Workspace Selection

↓

Application Shell
```

Route 2

```
Login

↓

Browser Closed
```

No other exits are permitted.

---

# 15. Screen Relationship Diagram

```
                       +----------------+
                       |     Login      |
                       +----------------+
                          |    |     |
             Forgot Pw ---+    |     +--- Create Business
                          |    |
                          |    |
                          ▼    ▼
                 Forgot Password
                          |
                          ▼
                    Check Email
                          |
                          ▼
                  Create Password
                          |
                          ▼
                    Password Updated
                          |
                          ▼
                        Login

--------------------------------------------------

Login
  |
  ▼
Create Business
  |
  ▼
Business Information
  |
  ▼
Workspace Type
  |
  ▼
Business Structure
  |
  ▼
Confirmation
  |
  ▼
Workspace Selection
      |            |
      |            |
      ▼            ▼
Compare      Capability Explorer
      |            |
      +------------+
            |
            ▼
     Application Shell

--------------------------------------------------

Invitation
    |
    ▼
Invitation Details
    |
    ▼
Create Password
    |
    ▼
Create PIN
    |
    ▼
Account Activated
    |
    ▼
Login
```

---

# 16. Navigation Validation Checklist

Before implementation begins, verify:

- Every screen has at least one entry point.
- Every screen has at least one exit point.
- Every Back button has a defined destination.
- Every Continue button has a defined destination.
- No navigation loops exist without user intent.
- No orphan screens exist.
- No dead-end pages exist.
- Every workflow ends in either Login or the Application Shell.

---

# 17. Navigation Completion Criteria

The Authentication & Onboarding navigation is complete when:

- All user journeys are fully connected.
- Every navigation path is deterministic.
- Every action has a defined destination.
- Error and success states are integrated into the navigation.
- The module is ready for interaction implementation without requiring further navigation decisions.