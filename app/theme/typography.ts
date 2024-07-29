import {
  Poppins_100Thin as poppins100Thin,
  Poppins_100Thin_Italic as poppins100ThinItalic,
  Poppins_200ExtraLight as poppins200ExtraLight,
  Poppins_200ExtraLight_Italic as poppins200ExtraLightItalic,
  Poppins_300Light as poppins300Light,
  Poppins_300Light_Italic as poppins300LightItalic,
  Poppins_400Regular as poppins400Regular,
  Poppins_400Regular_Italic as poppins400RegularItalic,
  Poppins_500Medium as poppins500Medium,
  Poppins_500Medium_Italic as poppins500MediumItalic,
  Poppins_600SemiBold as poppins600SemiBold,
  Poppins_600SemiBold_Italic as poppins600SemiBoldItalic,
  Poppins_700Bold as poppins700Bold,
  Poppins_700Bold_Italic as poppins700BoldItalic,
  Poppins_800ExtraBold as poppins800ExtraBold,
  Poppins_800ExtraBold_Italic as poppins800ExtraBoldItalic,
  Poppins_900Black as poppins900Black,
  Poppins_900Black_Italic as poppins900BlackItalic
} from "@expo-google-fonts/poppins";

export const customFontsToLoad = {
  poppins100Thin,
  poppins100ThinItalic,
  poppins200ExtraLight,
  poppins200ExtraLightItalic,
  poppins300Light,
  poppins300LightItalic,
  poppins400Regular,
  poppins400RegularItalic,
  poppins500Medium,
  poppins500MediumItalic,
  poppins600SemiBold,
  poppins600SemiBoldItalic,
  poppins700Bold,
  poppins700BoldItalic,
  poppins800ExtraBold,
  poppins800ExtraBoldItalic,
  poppins900Black,
  poppins900BlackItalic
}

const fonts = {
  poppins: {
    light: "poppins300Light",
    normal: "poppins400Regular",
    medium: "poppins500Medium",
    semiBold: "poppins600SemiBold",
    bold: "poppins700Bold",
  }
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.poppins,
}
