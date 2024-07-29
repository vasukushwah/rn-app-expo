import { colors } from "app/theme"
import React from "react"
import { View, StyleSheet, ViewStyle } from "react-native"

interface DividerProps {
  width?: ViewStyle["width"]
}

const Divider: React.FC<DividerProps> = ({ width = "100%" }) => {
  return <View style={[styles.divider, { width }]} />
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.disable,
  },
})

export default Divider
