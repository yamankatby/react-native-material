import { TextStyle } from "react-native";

export type PaletteColor = { main: string; on: string };

export interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  background: PaletteColor;
  surface: PaletteColor;
  error: PaletteColor;
}

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

export type Typography = Record<TypographyVariant, TextStyle>;

export type ShapeCategory = "small" | "medium" | "large";

export interface ShapeBorderRadius {
  borderTopStartRadius: number;
  borderTopEndRadius: number;
  borderBottomStartRadius: number;
  borderBottomEndRadius: number;
}

export type Shapes = Record<ShapeCategory, ShapeBorderRadius>;

export type BreakpointKey = "sm" | "md" | "lg" | "xl";

export type Breakpoints = Record<BreakpointKey, number>;

export interface Theme {
  colorScheme: "light" | "dark";
  palette: Palette;
  typography: Typography;
  shapes: Shapes;
  breakpoints: Breakpoints;
}

export const defaultTheme: Theme = {
  colorScheme: "light",
  palette: {
    primary: { main: "#6200EE", on: "#FFFFFF" },
    secondary: { main: "#03DAC6", on: "#000000" },
    background: { main: "#FFFFFF", on: "#000000" },
    surface: { main: "#FFFFFF", on: "#000000" },
    error: { main: "#B00020", on: "#FFFFFF" },
  },
  typography: {
    h1: {
      fontWeight: "300",
      fontSize: 96,
      letterSpacing: -1.5,
    },
    h2: {
      fontWeight: "300",
      fontSize: 60,
      letterSpacing: -0.5,
    },
    h3: {
      fontSize: 48,
    },
    h4: {
      fontSize: 34,
      letterSpacing: 0.25,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontWeight: "500",
      fontSize: 20,
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontSize: 16,
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontWeight: "500",
      fontSize: 14,
      letterSpacing: 0.1,
    },
    body1: {
      fontSize: 16,
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: 14,
      letterSpacing: 0.25,
    },
    button: {
      fontWeight: "500",
      fontSize: 14,
      letterSpacing: 1.25,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: 12,
      letterSpacing: 0.4,
    },
    overline: {
      fontSize: 10,
      letterSpacing: 1.5,
      textTransform: "uppercase",
    },
  },
  shapes: {
    small: {
      borderTopStartRadius: 4,
      borderTopEndRadius: 4,
      borderBottomStartRadius: 4,
      borderBottomEndRadius: 4,
    },
    medium: {
      borderTopStartRadius: 4,
      borderTopEndRadius: 4,
      borderBottomStartRadius: 4,
      borderBottomEndRadius: 4,
    },
    large: {
      borderTopStartRadius: 0,
      borderTopEndRadius: 0,
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0,
    },
  },
  breakpoints: {
    sm: 600,
    md: 905,
    lg: 1240,
    xl: 1440,
  },
};

export const darkTheme: Theme = {
  ...defaultTheme,
  colorScheme: "dark",
  palette: {
    primary: { main: "#BB86FC", on: "#000000" },
    secondary: { main: "#03DAC6", on: "#000000" },
    background: { main: "#121212", on: "#FFFFFF" },
    surface: { main: "#121212", on: "#FFFFFF" },
    error: { main: "#CF6679", on: "#000000" },
  },
};
