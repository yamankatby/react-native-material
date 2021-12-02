import { TextStyle } from "react-native";
import { useTheme } from "./context";
import { useMemo } from "react";

export type PaletteColorName =
  | "primary"
  | "secondary"
  | "background"
  | "surface"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "onPrimary"
  | "onSecondary"
  | "onBackground"
  | "onSurface"
  | "onSuccess"
  | "onInfo"
  | "onWarning"
  | "onError";

export type Palette = Record<PaletteColorName, string>;

export type ShapeCategory = "small" | "medium" | "large";

export interface ShapeBorderRadius {
  borderBottomEndRadius?: number | undefined;
  borderBottomLeftRadius?: number | undefined;
  borderBottomRightRadius?: number | undefined;
  borderBottomStartRadius?: number | undefined;
  borderRadius?: number | undefined;
  borderTopEndRadius?: number | undefined;
  borderTopLeftRadius?: number | undefined;
  borderTopRightRadius?: number | undefined;
  borderTopStartRadius?: number | undefined;
}

export type Shapes = Record<ShapeCategory, ShapeBorderRadius>;

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

export type Mode = "light" | "dark";

export interface Theme {
  mode: Mode;
  palette: Palette;
  shapes: Shapes;
  typography: Typography;
}

export const defaultTheme: Theme = {
  mode: "light",
  palette: {
    primary: "#6200EE",
    secondary: "#03DAC6",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    success: "#4CAF50",
    info: "#2196F3",
    warning: "#FF9800",
    error: "#B00020",
    onPrimary: "#FFFFFF",
    onSecondary: "#000000",
    onBackground: "#000000",
    onSurface: "#000000",
    onSuccess: "#000000",
    onInfo: "#000000",
    onWarning: "#000000",
    onError: "#FFFFFF",
  },
  shapes: {
    small: { borderRadius: 4 },
    medium: { borderRadius: 4 },
    large: { borderRadius: 0 },
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
};

export const darkTheme: Theme = {
  ...defaultTheme,
  mode: "dark",
  palette: {
    primary: "#BB86FC",
    secondary: "#03DAC6",
    background: "#121212",
    surface: "#121212",
    success: "#80E27E",
    info: "#6EC6FF",
    warning: "#FFC947",
    error: "#CF6679",
    onPrimary: "#000000",
    onSecondary: "#000000",
    onBackground: "#FFFFFF",
    onSurface: "#FFFFFF",
    onSuccess: "#000000",
    onInfo: "#000000",
    onWarning: "#000000",
    onError: "#000000",
  },
};

export const useColorModeValue = <V, D = V>(value: V, darkValue: D): V | D => {
  const { mode } = useTheme();
  return useMemo(() => (mode === "dark" ? darkValue : value), [mode, value, darkValue]);
};
