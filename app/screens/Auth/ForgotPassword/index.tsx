import { Button, Header, Screen, Text, TextField } from "app/components"
import React, { useState, useRef } from "react"
import { View, ViewStyle, TextInput, StyleSheet, Platform } from "react-native"
import { colors, SCREEN_HEIGHT, SCREEN_WIDTH, spacing } from "app/theme"
import { Formik } from "formik"
import * as Yup from "yup"
import OtpInputs, { OtpInputsRef } from 'react-native-otp-inputs';
import { goBack } from "app/navigators/navigationUtilities"

const emailValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
})

const otpValidationSchema = Yup.object().shape({
  otp: Yup.string().length(4, "OTP must be 4 digits").required("OTP is required"),
})

const ForgotPasswordScreen = () => {
  const [step, setStep] = useState(1)
  const emailInput = useRef<TextInput>(null)
  const otpInput = useRef<OtpInputsRef>(null)

  const handleEmailSubmit = (values) => {
    console.log(values)
    // Code to send OTP to the entered email
    setStep(2)
  }

  const handleOtpSubmit = (values) => {
    console.log(values)
    // Code to verify OTP and proceed
  }

  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
      preset="scroll"
    >
      <Header leftIcon="back" leftText="Back" onLeftPress={() => goBack()} />
      {step === 1 && (
        <Formik
          initialValues={{ email: "" }}
          validationSchema={emailValidationSchema}
          onSubmit={handleEmailSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={{ marginTop: 30, gap: 20 }}>
              <Text preset="title_md" weight="medium" color="text" text="Forgot Password" />
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
                onSubmitEditing={() => emailInput.current?.focus()}
              />
              <Button text="Send OTP" preset="filled" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      )}
      {step === 2 && (
        <Formik
          initialValues={{ otp: "" }}
          validationSchema={otpValidationSchema}
          onSubmit={handleOtpSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={{ marginTop: 30, gap: 20 }}>
              <Text preset="title_md" weight="medium" color="text" text="Enter OTP" />
              <OtpInputs
                handleChange={handleChange("otp")}
                defaultValue={values.otp}
                ref={otpInput}
                numberOfInputs={4}
                inputStyles={styles.otpInput}
                autofillFromClipboard={true}
                autofillListenerIntervalMS={5}
                focusStyles={{borderColor: colors.primary}}
              />
              {touched.otp && errors.otp && <Text style={styles.errorText}>{errors.otp}</Text>}
              <Button text="Verify OTP" preset="filled" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      )}
    </Screen>
  )
}

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.md,
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  otpInput: {
    backgroundColor: colors.transparent,
    borderRadius: SCREEN_HEIGHT * 0.01,
    fontSize: 22,
    textAlign: "center",
    height: SCREEN_HEIGHT * 0.08,
    width: SCREEN_WIDTH * 0.16,
    borderWidth: 0.5,
    borderColor: colors.border,
    color: colors.text
  }
})

export default ForgotPasswordScreen
