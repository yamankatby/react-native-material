import { defaultTheme, Theme } from "../../../core";

export const crane: Theme = {
  ...defaultTheme,
  colorScheme: {
    primary: "#5D1049",
    primaryVariant: "#4E0D3A",
    secondary: "#E30425",
    secondaryVariant: "#A80000",
    background: "#F9F6F8",
    surface: "#FFFFFF",
    error: "#FF9800",
    onPrimary: "#FFFFFF",
    onSecondary: "#FFFFFF",
    onBackground: "#720D5D",
    onSurface: "#000000",
    onError: "#000000",
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
        topStart: 16,
        topEnd: 16,
        bottomStart: 16,
        bottomEnd: 16,
      },
    },
    large: {
      family: "rounded",
      borderRadius: {
        topStart: 20,
        topEnd: 20,
        bottomStart: 20,
        bottomEnd: 20,
      },
    },
  },
};
