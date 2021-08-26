import { defaultTheme, Theme } from "../../../core";

export const fortnightly: Theme = {
  ...defaultTheme,
  colorScheme: {
    primary: "#FFFFFF",
    primaryVariant: "#E8E8E8",
    secondary: "#6B38FB",
    secondaryVariant: "#2100C7",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    error: "#B00020",
    onPrimary: "#000000",
    onSecondary: "#FFFFFF",
    onBackground: "#000000",
    onSurface: "#000000",
    onError: "#FFFFFF",
  },
  shapeScheme: {
    small: {
      family: "cut",
      borderRadius: {
        topStart: 0,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
    medium: {
      family: "cut",
      borderRadius: {
        topStart: 0,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
    large: {
      family: "cut",
      borderRadius: {
        topStart: 0,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
  },
};
