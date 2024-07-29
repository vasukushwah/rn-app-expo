import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "app/components"
import APP_ASSETS from "assets/images"
import { MainStackParamList } from "app/navigators/stack/stacks.types"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { PUBLIC_SCREENS } from "app/navigators/utils/routes.enum"
import { styles } from "./style"
import { spacing } from "app/theme"
import NavigationUtils from "app/navigators/utils/routes.helper"
import { navigate } from "app/navigators/navigationUtilities"

type WelcomeBoardScreenProps = NativeStackScreenProps<
  MainStackParamList,
  PUBLIC_SCREENS.WELCOME_BOARD
>

export const WelcomeScreen: FC<WelcomeBoardScreenProps> = ({ navigation }) => {
  const handleOnLogIn = () => navigation?.navigate(PUBLIC_SCREENS.SIGN_IN)

  return (
    <Screen contentContainerStyle={$screenContentContainer} safeAreaEdges={["top", "bottom"]}>
      <View style={styles.imageTextContainer}>
        <View style={styles.imageContainer}>
          <Image source={APP_ASSETS.welcomeImage} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.textContainer}>
          <Text preset="title_md" weight="medium" color="text" style={styles.titleText}>
            Welcome
          </Text>
          <Text preset="body_lg" color="textDim">
            Have a better sharing experience
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Create an account" preset="filled" onPress={()=>navigate(PUBLIC_SCREENS.SIGN_UP)}/>
        <Button text="Log In" preset="default" onPress={() => handleOnLogIn()} />
      </View>
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.md,
  flex: 1,
}
