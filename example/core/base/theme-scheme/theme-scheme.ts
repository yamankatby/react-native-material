import { ColorScheme } from "../color-scheme";
import { ShapeScheme } from "../shape-scheme";
import { TypographyScheme } from "../typography-scheme";

export type Mode = "light" | "dark";

export interface Theme {
  mode: Mode;
  colorScheme: ColorScheme;
  shapeScheme: ShapeScheme;
  typographyScheme: TypographyScheme;
}

export const defaultTheme: Theme = {
  mode: "light",
  colorScheme: {
    primary: "#6200EE",
    primaryVariant: "#3700B3",
    secondary: "#03DAC6",
    secondaryVariant: "#018786",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    error: "#B00020",
    onPrimary: "#FFFFFF",
    onSecondary: "#000000",
    onBackground: "#000000",
    onSurface: "#000000",
    onError: "#FFFFFF",
  },
  shapeScheme: {
    small: {
      family: "rounded",
      borderRadius: {
        topStart: 4,
        topEnd: 4,
        bottomStart: 4,
        bottomEnd: 4,
      },
    },
    medium: {
      family: "rounded",
      borderRadius: {
        topStart: 4,
        topEnd: 4,
        bottomStart: 4,
        bottomEnd: 4,
      },
    },
    large: {
      family: "rounded",
      borderRadius: {
        topStart: 0,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
  },
  typographyScheme: {
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
      fontSize: 10,
      letterSpacing: 0.4,
    },
    overline: {
      fontSize: 12,
      letterSpacing: 1.5,
      textTransform: "uppercase",
    },
  },
};

export const darkTheme: Theme = {
  ...defaultTheme,
  mode: "dark",
  colorScheme: {
    primary: "#BB86FC",
    primaryVariant: "#3700B3",
    secondary: "#03DAC6",
    secondaryVariant: "#03DAC6",
    background: "#121212",
    surface: "#121212",
    error: "#CF6679",
    onPrimary: "#000000",
    onSecondary: "#000000",
    onBackground: "#FFFFFF",
    onSurface: "#FFFFFF",
    onError: "#000000",
  },
};
