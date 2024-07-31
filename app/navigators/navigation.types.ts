export enum GENERAL_SCREENS {
  INITIAL = "InitialScreen",
  NO_INTERNET = "NoInternet",
  ACKNOWLEDGE = "Acknowledge", // TODO:: Create simple ack screen
  ONBOARDING = "OnBoarding",
  WELCOME = "Welcome",
}

// Application Without Authentication Screens
export enum PUBLIC_SCREENS {
  SIGN_IN = "SignInScreen",
  SIGN_UP = "SignUpScreen",
  FORGOT_PASSWORD = "ForgotPasswordScreen",
  SET_NEW_PASSWORD = "SetNewPasswordScreen"
}

// Application With Authentication Screens
export enum PRIVATE_SCREENS {
  ChangePassword = "ChangePasswordScreen"
}

