import { NavigatorScreenParams } from "@react-navigation/native"
import { MainStackParamList } from "./stack/stacks.types"
import { GENERAL_SCREENS, PUBLIC_SCREENS } from "./utils/routes.enum"

export type RootStackParamList = {
  [GENERAL_SCREENS.MAIN]: NavigatorScreenParams<MainStackParamList>
  [GENERAL_SCREENS.FORCE_UPDATE]: undefined
  [GENERAL_SCREENS.NO_INTERNET]: undefined
}

export type StackParamListType = {
  Home: undefined
}
