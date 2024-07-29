// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  primary: "#FEC400",
  secondary: "#B7083C",
  error: "#F44336",
  success: "#43A048",
  warning: "#FB8A00",
  info: "#B8B8B8",

  primary900: "#F3BD06",
  primary800: "#F4BE05",
  primary700: "#EDAE10",
  primary600: "#F5BF28",
  primary500: "#F5C73F",
  primary400: "#F6CD56",
  primary300: "#FBDB86",
  primary200: "#FFE773",
  primary100: "#FFF1B1",
  primary50: "#FFFBE7",

  secondary900: "#820036",
  secondary800: "#A4003B",
  secondary700: "#B7083C",
  secondary600: "#CB103F",
  secondary500: "#DB1740",
  secondary400: "#E23859",
  secondary300: "#EA5A75",
  secondary200: "#F2899B",
  secondary100: "#F8B7C3",
  secondary50: "#FCE2E7",

  gray900: "#2A2A2A",
  gray800: "#414141",
  gray700: "#5A5A5A",
  gray600: "#717171",
  gray500: "#898989",
  gray400: "#A0A0A0",
  gray300: "#B8B8B8",
  gray200: "#D0D0D0",
  gray100: "#E8E8E8",
  gray50: "#F7F7F7",

  yellow900: "#F57F17",
  yellow800: "#F9A825",
  yellow700: "#FBC02D",
  yellow600: "#FDD835",
  yellow500: "#FAE635",
  yellow400: "#FCEB55",
  yellow300: "#FEF075",
  yellow200: "#FFF59D",
  yellow100: "#FFF9C4",
  yellow50: "#FFFDE7",

  green900: "#1B5E21",
  green800: "#2E7D33",
  green700: "#388E3D",
  green600: "#43A048",
  green500: "#4CAF51",
  green400: "#66BB6B",
  green300: "#81C784",
  green200: "#A5D6A7",
  green100: "#C8E6C9",
  green50: "#E8F5E9",

  contentTertiary: "#5A5A5A",
  contentSecondary: "#414141",
  contentDisabled: "#B8B8B8",
  contentPrimary: "#2A2A2A",

  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  background: "linear-gradient(#FFF0BF, #F1BD0E)",
  black: "#121212",
  white: "#FFFFFF",
  darkBg: "#1F212A",
  darkBg1: "#35383F",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.contentPrimary,
  /**
   * Secondary text information.
   */
  textDim: palette.gray400,
  /**
   * The default color of the screen background.
   */
  background: palette.white,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.black,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
  primary: palette.primary,
  disable: palette.contentDisabled,
}
