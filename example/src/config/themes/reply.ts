import { defaultTheme, Theme } from "../../../core";

export const reply: Theme = {
  ...defaultTheme,
  colorScheme: {
    primary: "#344955",
    primaryVariant: "#232F34",
    secondary: "#F9AA33",
    secondaryVariant: "#C17B00",
    background: "#EDF0F2",
    surface: "#FFFFFF",
    error: "#B00020",
    onPrimary: "#FFFFFF",
    onSecondary: "#344955",
    onBackground: "#4A6572",
    onSurface: "#000000",
    onError: "#FFFFFF",
  },
  shapeScheme: {
    small: {
      family: "rounded",
      borderRadius: {
        topStart: 0,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
    medium: {
      family: "rounded",
      borderRadius: {
        topStart: 0,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
    large: {
      family: "rounded",
      borderRadius: {
        topStart: 12,
        topEnd: 12,
        bottomStart: 12,
        bottomEnd: 12,
      },
    },
  },
};
