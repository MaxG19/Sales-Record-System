// navigation.js — Centralised navigation for BMS Authentication Prototype

const Routes = {
  LOGIN: '../bms_login_desktop/code.html',
  FORGOT_PASSWORD: '../Forgot and Reset password/Request reset link/code.html',
  CHECK_EMAIL: '../Forgot and Reset password/check_email/code.html',
  CREATE_PASSWORD: '../Forgot and Reset password/Create new password/code.html',
  PASSWORD_SUCCESS: '../Forgot and Reset password/Reset_password_success/code.html',
  WORKSPACE_SELECTION: '../workspace_selection_page/code.html',
  COMPARE_WORKSPACES: '../compare_workspaces_bms/code.html',
  CAPABILITY_EXPLORER: '../business_capability_library/code.html',
  INVITATION_DETAILS: '../Accept Invitation/accept_invitation_details/code.html',
  INVITATION_SETUP: '../Accept Invitation/accept_invitation_security_setup/code.html',
  INVITATION_SUCCESS: '../Accept Invitation/accept_invitation_success/code.html',
  INVITATION_ERROR: '../Accept Invitation/accept_invitation_error_states/code.html',
};

function navigateTo(route, delay = 0) {
  if (delay > 0) {
    setTimeout(() => { window.location.href = route; }, delay);
  } else {
    window.location.href = route;
  }
}

function navigateBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    navigateTo(Routes.LOGIN);
  }
}
