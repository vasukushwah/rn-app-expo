import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"

import { Screen, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { PRIVATE_SCREENS } from "app/navigators/navigation.types"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ChangePasswordScreenProps extends AppStackScreenProps<PRIVATE_SCREENS.ChangePassword> {}

export const ChangePasswordScreen: FC<ChangePasswordScreenProps> = observer(
  function ChangePasswordScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll">
        <Text text="changePassword" />
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
