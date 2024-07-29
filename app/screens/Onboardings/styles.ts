import { spacing } from "app/theme"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: spacing.md,
    justifyContent: "space-between",
  },
  skipContainer: {
    alignItems: "flex-end",
  },
  contentContainer: {
    gap: 20,
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    height: 210,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  titleText: {
    textAlign: "center",
  },
  textContainer: {
    maxWidth: 250,
    alignSelf: "center",
    gap: 12,
  },
})

export default styles
