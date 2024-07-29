import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { BottomTabNavigator } from "./BottomTabNavigator"
import { DRAWER_SCREEN_OPTIONS } from "./navigation.constant"
import { colors } from "app/theme"
import { AboutScreen } from "app/screens/AboutScreen"

export type DrawerParamList = {
  BottomTabNavigator: undefined
  AboutScreen: undefined
}
const Drawer = createDrawerNavigator<DrawerParamList>()

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        ...DRAWER_SCREEN_OPTIONS,
        drawerStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator
