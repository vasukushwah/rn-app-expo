import { Button, Screen, Text } from "app/components"
import { observer } from "mobx-react-lite"
import React, { FC, memo, useState } from "react"
import { Image, View, ViewStyle } from "react-native"
import APP_ASSETS from "../../../assets/images/index"
import styles from "./styles"
import { ONBOARDING_SCREEN_MSG } from "./util/Onboardings.constant"
import { spacing } from "app/theme"

import { AppStackScreenProps, navigate } from "app/navigators"
import { GENERAL_SCREENS } from "app/navigators/navigation.types"

interface OnBoardingScreenProps extends AppStackScreenProps<GENERAL_SCREENS.ONBOARDING> {}

const OnBoarding: FC<OnBoardingScreenProps> = observer(() => {
  const [onBoardingStep, setOnBoardingStep] = useState<number>(1)

  const handleNext = () => {
    if (onBoardingStep < 3) {
      setOnBoardingStep((prevStep) => prevStep + 1)
    } else {
      navigate(GENERAL_SCREENS.WELCOME)
    }
  }
  let screenContent: JSX.Element | null = null
  switch (onBoardingStep) {
    case 1:
      screenContent = (
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={APP_ASSETS.onboardingImg1} resizeMode="contain" />
          </View>
          <View style={styles.textContainer}>
            <Text
              preset="title_md"
              weight="medium"
              text={ONBOARDING_SCREEN_MSG.STEP1.title}
              style={styles.titleText}
            />
            <Text
              preset="subhead_sm"
              weight="medium"
              color="textDim"
              text={ONBOARDING_SCREEN_MSG.STEP1.description}
            />
          </View>
        </View>
      )
      break
    case 2:
      screenContent = (
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={APP_ASSETS.onboardingImg2} resizeMode="contain" />
          </View>
          <View style={styles.textContainer}>
            <Text
              preset="title_md"
              weight="medium"
              text={ONBOARDING_SCREEN_MSG.STEP2.title}
              style={styles.titleText}
            />
            <Text
              preset="subhead_sm"
              weight="medium"
              color="textDim"
              text={ONBOARDING_SCREEN_MSG.STEP2.description}
            />
          </View>
        </View>
      )
      break
    case 3:
      screenContent = (
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} resizeMode="contain" source={APP_ASSETS.onboardingImg3} />
          </View>
          <View style={styles.textContainer}>
            <Text
              preset="title_md"
              weight="medium"
              text={ONBOARDING_SCREEN_MSG.STEP3.title}
              style={styles.titleText}
            />
            <Text
              preset="subhead_sm"
              weight="medium"
              color="textDim"
              text={ONBOARDING_SCREEN_MSG.STEP3.description}
            />
          </View>
        </View>
      )
      break
    default:
      break
  }

  return (
    <Screen contentContainerStyle={$screenContentContainer} safeAreaEdges={["top", "bottom"]}>
      <Text testID="skip" text="Skip" preset="subhead_lg" style={{ textAlign: "right" }} />
      {screenContent}

      <Button onPress={handleNext} text={onBoardingStep < 3 ? "Next" : "Finish"} preset="default" />
    </Screen>
  )
})
const OnBoardingScreen = memo(OnBoarding)
export { OnBoardingScreen }

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  flex: 1,
}
