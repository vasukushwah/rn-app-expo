export enum GENERAL_SCREENS {
  INITIAL = "InitialScreen",
  MAIN = "MainStack",
  DRAWER = "Drawer",
  FORCE_UPDATE = "ForceUpdate",
  NO_INTERNET = "NoInternet",
  ACKNOWLEDGE = "Acknowledge",
  ONBOARDING = "OnBoarding",
}

// Application Without Authentication Screens
export enum PUBLIC_SCREENS {
  WELCOME_BOARD = "WelcomeBoardScreen",
  SIGN_IN = "SignInScreen",
  SIGN_UP = "SignUpScreen",
  FORGOT_PASSWORD = "ForgotPasswordScreen",
}

// Application With Authentication Screens
export enum PRIVATE_SCREENS {
  DRAWER_APP_HOME = "DrawerHomeScreen",
  BOTTOM_TAB_APP_HOME = "BottomTabHomeScreen",
  PROFILE = "ProfileScreen",
  ACCOUNT = "AccountScreen",
}
