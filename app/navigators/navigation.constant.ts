import { DrawerNavigationOptions } from "@react-navigation/drawer"
import { Platform } from "react-native"

export const enum DRAWER_MODE {
  LIST_VIEW = "0",
  TILES_VIEW = "1",
}

export const DRAWER_SCREEN_OPTIONS: DrawerNavigationOptions = {
  headerShown: true,
  swipeEnabled: false,
  drawerHideStatusBarOnOpen: Platform.OS === "ios",
}

// 15 min wait for inactivity
export const TIME_TO_WAIT_FOR_INACTIVITY_MS = 900000
