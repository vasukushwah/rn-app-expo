import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as React from "react"
import { MainStackParamList } from "./stacks.types"
import { GENERAL_SCREENS, PUBLIC_SCREENS } from "../utils/routes.enum"
import { InitialScreen } from "app/screens/InitialScreen"
import OnBoardingScreen from "app/screens/Onboardings/index"
import SignInScreen from "app/screens/Auth/SignIn"
import SignUpScreen from "app/screens/Auth/SignUp"
import ForgotPasswordScreen from "app/screens/Auth/ForgotPassword"
import { WelcomeScreen } from "app/screens/Welcome"

const MainStack = createNativeStackNavigator<MainStackParamList>()

export const MainStackScreen: React.FC = () => {
  return (
    <MainStack.Navigator
      initialRouteName={GENERAL_SCREENS.ONBOARDING}
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <MainStack.Group
        screenOptions={{
          headerShown: false,
          title: "OnBoardingScreens",
        }}
      >
        <MainStack.Screen name={GENERAL_SCREENS.ONBOARDING} component={OnBoardingScreen} />
      </MainStack.Group>

      <MainStack.Group
        screenOptions={{
          headerShown: false,
          title: "AuthenticationScreen",
        }}
      >
        <MainStack.Screen name={PUBLIC_SCREENS.WELCOME_BOARD} component={WelcomeScreen} />
        <MainStack.Screen name={PUBLIC_SCREENS.SIGN_UP} component={SignUpScreen} />
        <MainStack.Screen name={PUBLIC_SCREENS.SIGN_IN} component={SignInScreen} />
        <MainStack.Screen name={PUBLIC_SCREENS.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
      </MainStack.Group>

      <MainStack.Screen
        name={GENERAL_SCREENS.INITIAL}
        component={InitialScreen}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          gestureEnabled: false,
        }}
      />
    </MainStack.Navigator>
  )
}
