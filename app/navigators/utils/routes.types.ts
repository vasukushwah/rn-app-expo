import { NavigatorScreenParams } from "@react-navigation/native"
import { MainStackParamList } from "../stack/stacks.types"

export type RootStackParamList = {
  MainStack: NavigatorScreenParams<MainStackParamList>
  ForceUpdateScreen: NavigatorScreenParams<MainStackParamList>
  NoInternetScreen: NavigatorScreenParams<MainStackParamList>
}

export type StackParamListType = {
  Home: undefined
}
