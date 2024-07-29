import { colors, spacing } from "app/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: spacing.md,
    backgroundColor: colors.palette.white,
  },
  imageTextContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
  imageContainer: {
    height: 270,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    alignSelf: "center",
    gap: 12,
  },
  titleText: {
    textAlign: "center",
  },
  buttonContainer: {
    gap: 20,
  },
})
