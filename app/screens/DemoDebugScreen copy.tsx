import React, { FC } from "react"
import { Linking, Platform, TextStyle, View, ViewStyle } from "react-native"
import DeviceInfo from "react-native-device-info"
import { Button, ListItem, Screen, Text } from "../components"
import { colors, spacing } from "../theme"
import { isRTL } from "../i18n"
import { useStores } from "../models"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { DemoTabParamList } from "app/navigators"

/**
 * @param {string} url - The URL to open in the browser.
 * @returns {void} - No return value.
 */
function openLinkInBrowser(url: string) {
  Linking.canOpenURL(url).then((canOpen) => canOpen && Linking.openURL(url))
}

export const DemoDebugScreen: FC<BottomTabScreenProps<DemoTabParamList, "DemoDebug">> =
  function DemoDebugScreen(_props) {
    const {
      authenticationStore: { logout },
    } = useStores()

    const usingHermes = typeof HermesInternal === "object" && HermesInternal !== null
    const usingFabric = global.nativeFabricUIManager != null

    const demoReactotron = React.useMemo(
      () => async () => {
        if (__DEV__) {
          console.tron.display({
            name: "DISPLAY",
            value: {
              appId: DeviceInfo.getBundleId(),
              appName: await DeviceInfo.getApplicationName(),
              appVersion: await DeviceInfo.getVersion(),
              appBuildVersion: await DeviceInfo.getBuildNumber(),
              hermesEnabled: usingHermes,
            },
            important: true,
          })
        }
      },
      [],
    )

    return (
      <Screen preset="scroll" safeAreaEdges={["top"]} contentContainerStyle={$container}>
        <Text
          style={$reportBugsLink}
          tx="demoDebugScreen.reportBugs"
          onPress={() => openLinkInBrowser("https://github.com/infinitered/ignite/issues")}
        />
        <Text style={$title} preset="heading" tx="demoDebugScreen.title" />
        <View style={$itemsContainer}>
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">App Id</Text>
                <Text>{DeviceInfo.getBundleId()}</Text>
              </View>
            }
          />
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">App Name</Text>
                <Text>{DeviceInfo.getApplicationName()}</Text>
              </View>
            }
          />
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">App Version</Text>
                <Text>{DeviceInfo.getVersion()}</Text>
              </View>
            }
          />
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">App Build Version</Text>
                <Text>{DeviceInfo.getBuildNumber()}</Text>
              </View>
            }
          />
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">Hermes Enabled</Text>
                <Text>{String(usingHermes)}</Text>
              </View>
            }
          />
          <ListItem
            LeftComponent={
              <View style={$item}>
                <Text preset="bold">Fabric Enabled</Text>
                <Text>{String(usingFabric)}</Text>
              </View>
            }
          />
        </View>
        <View style={$buttonContainer}>
          <Button style={$button} tx="demoDebugScreen.reactotron" onPress={demoReactotron} />
          <Text style={$hint} tx={`demoDebugScreen.${Platform.OS}ReactotronHint` as const} />
        </View>
        <View style={$buttonContainer}>
          <Button style={$button} tx="common.logOut" onPress={logout} />
        </View>
      </Screen>
    )
  }

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingBottom: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.xxl,
}

const $reportBugsLink: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.lg,
  alignSelf: isRTL ? "flex-start" : "flex-end",
}

const $item: ViewStyle = {
  marginBottom: spacing.md,
}

const $itemsContainer: ViewStyle = {
  marginBottom: spacing.xl,
}

const $button: ViewStyle = {
  marginBottom: spacing.xs,
}

const $buttonContainer: ViewStyle = {
  marginBottom: spacing.md,
}

const $hint: TextStyle = {
  color: colors.palette.neutral600,
  fontSize: 12,
  lineHeight: 15,
  paddingBottom: spacing.lg,
}
