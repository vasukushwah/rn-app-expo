import { Button, Header, Screen, Text, TextField } from "app/components"
import React, { useRef } from "react"
import { View, TextInput, TouchableOpacity, ViewStyle, StyleSheet } from "react-native"
import { spacing } from "app/theme"
import { Formik } from "formik"
import * as Yup from "yup"
import SocialAccounts from "../Components/SocialAccounts"
import { goBack, navigate } from "app/navigators/navigationUtilities"
import { PUBLIC_SCREENS } from "app/navigators/utils/routes.enum"
import { Picker } from '@react-native-picker/picker'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  gender: Yup.string().required("Gender is required"),
  phone: Yup.string().matches(/^[0-9]+$/, "Phone number is not valid").required("Phone number is required"),
})

const SignUpScreen = () => {
  const lastNameInput = useRef<TextInput>(null)
  const emailInput = useRef<TextInput>(null)
  const phoneInput = useRef<TextInput>(null)

  return (
    <Screen
      contentContainerStyle={$screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
      preset="scroll"
    >
      <Header leftIcon="back" leftText="Back" onLeftPress={() => goBack()} />
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", gender: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View style={{ marginTop: 30, gap: 20 }}>
            <Text preset="title_md" weight="medium" color="text" text="Sign up" />
            <TextField
              value={values.firstName}
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              style={{ height: 30 }}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              placeholder="First Name"
              helper={touched.firstName && errors.firstName ? errors.firstName : ""}
              status={touched.firstName && errors.firstName ? "error" : undefined}
              onSubmitEditing={() => lastNameInput.current?.focus()}
            />
            <TextField
              ref={lastNameInput}
              value={values.lastName}
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              style={{ height: 30 }}
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect={false}
              keyboardType="default"
              placeholder="Last Name"
              helper={touched.lastName && errors.lastName ? errors.lastName : ""}
              status={touched.lastName && errors.lastName ? "error" : undefined}
              onSubmitEditing={() => emailInput.current?.focus()}
            />
            <TextField
              ref={emailInput}
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
              onSubmitEditing={() => phoneInput.current?.focus()}
            />
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={values.gender}
                onValueChange={(itemValue) => setFieldValue("gender", itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
              {touched.gender && errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
            </View>
            <TextField
              ref={phoneInput}
              value={values.phone}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              style={{ height: 30 }}
              autoCapitalize="none"
              autoComplete="tel"
              autoCorrect={false}
              keyboardType="phone-pad"
              placeholder="Phone Number"
              helper={touched.phone && errors.phone ? errors.phone : ""}
              status={touched.phone && errors.phone ? "error" : undefined}
            />
            <View style={styles.termsContainer}>
              <Text
                preset="body_md"
                weight="medium"
                color="disable"
                text="By signing up, you agree to the "
              />
              <TouchableOpacity>
                <Text preset="body_md" weight="medium" color="primary" text="Terms of Service" />
              </TouchableOpacity>
              <Text preset="body_md" weight="medium" color="disable" text=" and " />
              <TouchableOpacity>
                <Text preset="body_md" weight="medium" color="primary" text="Privacy Policy" />
              </TouchableOpacity>
            </View>
            <Button text="Sign Up" preset="filled" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <SocialAccounts />
      <View style={styles.signInContainer}>
        <Text text="Already have an account? " preset="body_lg" weight="medium" color="textDim" />
        <TouchableOpacity onPress={() => navigate(PUBLIC_SCREENS.SIGN_IN)}>
          <Text preset="body_md" weight="medium" color="primary" text="Sign In" />
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
  termsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    marginBottom: 12,
    height: 46,
    justifyContent: 'center'
  },
  picker: {
    height: 46,
    width: '100%',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
})

export default SignUpScreen
