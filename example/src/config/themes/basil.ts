import { defaultTheme, Theme } from "../../../core";

export const basil: Theme = {
  ...defaultTheme,
  colorScheme: {
    primary: "#356859",
    primaryVariant: "#37966F",
    secondary: "#FD5523",
    secondaryVariant: "#FD6F43",
    background: "#FFFBE6",
    surface: "#B9E4C9",
    error: "#B00020",
    onPrimary: "#FFFFFF",
    onSecondary: "#000000",
    onBackground: "#356859",
    onSurface: "#356859",
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
