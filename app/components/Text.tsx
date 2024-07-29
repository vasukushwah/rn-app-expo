import i18n from "i18n-js"
import React from "react"
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
import { isRTL, translate, TxKeyPath } from "../i18n"
import { colors, typography } from "../theme"

type Sizes = keyof typeof $sizeStyles
type Weights = keyof typeof typography.primary
type Presets = keyof typeof $presets
type Colors = keyof typeof colors

export interface TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: i18n.TranslateOptions
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
  /**
   * Text weight modifier.
   */
  weight?: Weights
  /**
   * Text size modifier.
   */
  size?: Sizes
  /**
   * Children components.
   */
  children?: React.ReactNode

  color?: Colors
}

function isColorKey(value: any): value is Colors {
  return value in colors
}
/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 * @see [Documentation and Examples]{@link https://docs.infinite.red/ignite-cli/boilerplate/components/Text/}
 * @param {TextProps} props - The props for the `Text` component.
 * @returns {JSX.Element} The rendered `Text` component.
 */
export function Text(props: TextProps) {
  const {
    weight,
    size,
    tx,
    txOptions,
    text,
    children,
    color,
    style: $styleOverride,
    ...rest
  } = props

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const preset: Presets = props.preset ?? "default"
  const $colorStyle = props.color && isColorKey(props.color) ? { color: colors[props.color] } : {}

  const $styles: StyleProp<TextStyle> = [
    $rtlStyle,
    $presets[preset],
    weight && $fontWeightStyles[weight],
    size && $sizeStyles[size],
    $colorStyle as TextStyle,
    $styleOverride,
  ]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } satisfies TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } satisfies TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } satisfies TextStyle,
  md: { fontSize: 18, lineHeight: 26 } satisfies TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } satisfies TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } satisfies TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,

  titleXl: { fontSize: 34, lineHeight: 40 } satisfies TextStyle,
  titleLg: { fontSize: 28, lineHeight: 34 } satisfies TextStyle,
  titleMd: { fontSize: 24, lineHeight: 30 } satisfies TextStyle,
  titleSm: { fontSize: 22, lineHeight: 28 } satisfies TextStyle,

  headlineLg: { fontSize: 20, lineHeight: 26 } satisfies TextStyle,
  headlineSm: { fontSize: 18, lineHeight: 24 } satisfies TextStyle,

  subheadLg: { fontSize: 16, lineHeight: 22 } satisfies TextStyle,
  subheadSm: { fontSize: 14, lineHeight: 20 } satisfies TextStyle,

  bodyLg: { fontSize: 16, lineHeight: 22 } satisfies TextStyle,
  bodyMd: { fontSize: 14, lineHeight: 20 } satisfies TextStyle,
  bodySm: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,

  labelLg: { fontSize: 16, lineHeight: 22 } satisfies TextStyle,
  labelMd: { fontSize: 14, lineHeight: 20 } satisfies TextStyle,
  labelSm: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,

  caption: { fontSize: 12, lineHeight: 18 } satisfies TextStyle,
}

const $fontWeightStyles = Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<Weights, TextStyle>

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text },
]

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  heading: [$baseStyle, $sizeStyles.xxl, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  formLabel: [$baseStyle, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  formHelper: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal] as StyleProp<TextStyle>,

  title_sm: [$baseStyle, $sizeStyles.titleSm] as StyleProp<TextStyle>,
  title_md: [$baseStyle, $sizeStyles.titleMd] as StyleProp<TextStyle>,
  title_lg: [$baseStyle, $sizeStyles.titleLg] as StyleProp<TextStyle>,
  title_xl: [$baseStyle, $sizeStyles.titleXl] as StyleProp<TextStyle>,

  headline_sm: [$baseStyle, $sizeStyles.headlineSm] as StyleProp<TextStyle>,
  headline_lg: [$baseStyle, $sizeStyles.headlineLg] as StyleProp<TextStyle>,

  subhead_sm: [$baseStyle, $sizeStyles.subheadSm] as StyleProp<TextStyle>,
  subhead_lg: [$baseStyle, $sizeStyles.subheadLg] as StyleProp<TextStyle>,

  body_sm: [$baseStyle, $sizeStyles.bodySm] as StyleProp<TextStyle>,
  body_md: [$baseStyle, $sizeStyles.bodyMd] as StyleProp<TextStyle>,
  body_lg: [$baseStyle, $sizeStyles.bodyLg] as StyleProp<TextStyle>,

  label_sm: [$baseStyle, $sizeStyles.labelSm] as StyleProp<TextStyle>,
  label_md: [$baseStyle, $sizeStyles.labelMd] as StyleProp<TextStyle>,
  label_lg: [$baseStyle, $sizeStyles.labelLg] as StyleProp<TextStyle>,

  caption: [$baseStyle, $sizeStyles.caption] as StyleProp<TextStyle>,
}

const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}
