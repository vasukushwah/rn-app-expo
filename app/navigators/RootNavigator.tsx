/**
 * The app navigator (formerly "RootNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { useColorScheme } from "react-native"
import Config from "../config"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { GENERAL_SCREENS } from "./utils/routes.enum"
import { MainStackScreen } from "./stack/MainStack"
import { RootStackParamList } from "./navigators.types"
import ForceUpdateScreen from "app/screens/ForceUpdateScreen"
import NoInternetScreen from "app/screens/NoInternetScreen"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const RootNavigator = observer(function RootNavigator(props: NavigationProps) {
  const RootStack = createNativeStackNavigator<RootStackParamList>()

  const colorScheme = useColorScheme()
  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))
  const shouldAppForceUpdate = false
  const [_isInternetConnected, _setIsInternetConnected] = useState<boolean | null>(true)

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <RootStack.Navigator>
        {shouldAppForceUpdate && <ForceUpdateScreen />}

        {!_isInternetConnected && <NoInternetScreen />}

        <RootStack.Screen
          name={GENERAL_SCREENS.MAIN}
          component={MainStackScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
})
