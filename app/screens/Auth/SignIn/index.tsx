import React, { ComponentType, useMemo, useRef, useState } from "react"
import { View, TextInput, TouchableOpacity, ViewStyle, StyleSheet } from "react-native"
import { Button, Header, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "app/components"
import { colors, spacing } from "app/theme"
import { Formik } from "formik"
import * as Yup from "yup"
import SocialAccounts from "../Components/SocialAccounts"
import { goBack, navigate } from "app/navigators"
import { PUBLIC_SCREENS } from "app/navigators/navigation.types"

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().required("Password is required"),
})

const SignInScreen = () => {
  const passwordInput = useRef<TextInput>(null)
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)

  const PasswordRightAccessory: ComponentType<TextFieldAccessoryProps> = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.gray400}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
      preset="scroll"
    >
      <Header leftIcon="back" leftText="Back" onLeftPress={() => goBack()} />
      <Formik
        initialValues={{ password: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ marginTop: 30, gap: 20 }}>
            <Text preset="title_md" weight="medium" color="text" text="Sign In" />
            <TextField
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              style={{ height: 30 }}
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Email"
              helper={touched.email && errors.email ? errors.email : ""}
              status={touched.email && errors.email ? "error" : undefined}
              onSubmitEditing={() => passwordInput.current?.focus()}
            />

            <TextField
              ref={passwordInput}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              style={{ height: 30 }}
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect={false}
              placeholder="Password"
              secureTextEntry={isAuthPasswordHidden}
              helper={touched.password && errors.password ? errors.password : ""}
              status={touched.password && errors.password ? "error" : undefined}
              RightAccessory={PasswordRightAccessory}
            />
            <View style={styles.forgotPwdContainer}>
              <TouchableOpacity onPress={() => navigate(PUBLIC_SCREENS.FORGOT_PASSWORD)}>
                <Text preset="body_md" weight="medium" color="primary" text="Forget Password?" />
              </TouchableOpacity>
            </View>

            <Button text="Sign In" preset="filled" onPress={handleSubmit} />
          </View>
        )}
      </Formik>

      <SocialAccounts />

      <View style={styles.signUpContainer}>
        <Text text="Don't have an account? " preset="body_lg" weight="medium" color="textDim" />
        <TouchableOpacity onPress={() => navigate(PUBLIC_SCREENS.SIGN_UP)}>
          <Text preset="body_md" weight="medium" color="primary" text="Sign Up" />
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.md,
  // flex: 1,
}

const styles = StyleSheet.create({
  forgotPwdContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
})

export { SignInScreen }
