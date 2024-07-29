import { Icon, Text } from "app/components"
import React, { Fragment } from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { colors } from "app/theme"
import { SCREEN_HEIGHT } from "app/theme"
import Divider from "app/components/Divider"

const SocialAccounts = () => {
  return (
    <Fragment>
      <View style={styles.orContainer}>
        <Divider width={160} />
        <Text text="or" preset="body_lg" weight="medium" />
        <Divider width={175} />
      </View>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon icon="gmail" size={SCREEN_HEIGHT * 0.04} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon icon="faceBook" size={SCREEN_HEIGHT * 0.04} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon icon="apple" size={SCREEN_HEIGHT * 0.04} />
        </TouchableOpacity>
      </View>
    </Fragment>
  )
}

export default SocialAccounts;

const styles = StyleSheet.create({
  orContainer: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
    gap: 5,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 50,
    gap: 20,
  },
  socialButton: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.palette.gray200,
    borderWidth: 1,
  },
  socialIcon: {
    width: 24,
    height: 24,
  }
})

