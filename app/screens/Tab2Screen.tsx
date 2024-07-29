import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../components"
import { spacing } from "../theme"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { DemoTabParamList } from "app/navigators"

export const Tab2Screen: FC<BottomTabScreenProps<DemoTabParamList, "Tab2">> = function Tab2Screen(
  _props,
) {
  return (
    <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
      <Text>Welcome Tab2Screen</Text>
    </Screen>
  )
}

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}
