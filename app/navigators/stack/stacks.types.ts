import { GENERAL_SCREENS, PUBLIC_SCREENS } from "../utils/routes.enum"

export type MainStackParamList = {
  [GENERAL_SCREENS.INITIAL]: undefined
  [GENERAL_SCREENS.ONBOARDING]: undefined
  [PUBLIC_SCREENS.WELCOME_BOARD]: undefined
  [PUBLIC_SCREENS.SIGN_IN]: undefined
  [PUBLIC_SCREENS.SIGN_UP]: undefined
  [PUBLIC_SCREENS.FORGOT_PASSWORD]: undefined
}
