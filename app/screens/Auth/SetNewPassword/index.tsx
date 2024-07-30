// SetNewPasswordScreen.tsx
import React from "react"
import { View, StyleSheet, ViewStyle } from "react-native"
import { Formik } from "formik"
import * as Yup from "yup"
import { Button, Header, Screen, Text, TextField } from "app/components"
import { colors, spacing } from "app/theme"
import { goBack } from "app/navigators"

const passwordValidationSchema = Yup.object().shape({
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required("Confirm Password is required"),
})

const SetNewPasswordScreen = ({ onSubmit }) => {
  return (
    <Screen
    contentContainerStyle={$screenContentContainer}
    safeAreaEdges={["top", "bottom"]}
    preset="scroll"
  >
    <Header leftIcon="back" leftText="Back" onLeftPress={() => goBack()} />
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={passwordValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text preset="title_md" weight="medium" color="text" text="Set New Password" />
          <TextField
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            style={styles.textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="New Password"
            helper={touched.password && errors.password ? errors.password : ""}
            status={touched.password && errors.password ? "error" : undefined}
          />
          <TextField
            value={values.confirmPassword}
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            style={styles.textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Confirm New Password"
            helper={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ""}
            status={touched.confirmPassword && errors.confirmPassword ? "error" : undefined}
          />
          <Button text="Set Password" preset="filled" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.md,
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    gap: 20,
  },
  textField: {
    height: 30,
  },
})

export default SetNewPasswordScreen
