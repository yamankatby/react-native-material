import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type Mode = "light" | "dark";

export type ColorName =
  | "primary"
  | "primaryVariant"
  | "secondary"
  | "secondaryVariant"
  | "background"
  | "surface"
  | "error"
  | "onPrimary"
  | "onSecondary"
  | "onBackground"
  | "onSurface"
  | "onError";

export type ColorScheme = Record<ColorName, string>;

export type Elevation = 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16 | 24;

export type ElevationScheme = Record<
  Elevation,
  ViewStyle | TextStyle | ImageStyle
>;

export type ShapeCategory = "small" | "medium" | "large";

export type ShapeFamily = "rounded" | "cut";

export interface ShapeBorderRadius {
  topStart: number;
  topEnd: number;
  bottomStart: number;
  bottomEnd: number;
}

export interface ShapeValues {
  family: ShapeFamily;
  borderRadius: ShapeBorderRadius;
}

export type ShapeScheme = Record<ShapeCategory, ShapeValues>;

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

export type TypographyScheme = Record<TypographyVariant, TextStyle>;

export interface Theme {
  mode: Mode;
  colorScheme: ColorScheme;
  elevationScheme: ElevationScheme;
  shapeScheme: ShapeScheme;
  typographyScheme: TypographyScheme;
}
