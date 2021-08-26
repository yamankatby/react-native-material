import { defaultTheme, Theme } from "../../../core";

export const shrine: Theme = {
  ...defaultTheme,
  colorScheme: {
    primary: "#FEDBD0",
    primaryVariant: "#F1CBC1",
    secondary: "#FEEAE6",
    secondaryVariant: "#CBB8B4",
    background: "#FFFFFF",
    surface: "#FFFBFA",
    error: "#B00020",
    onPrimary: "#442C2E",
    onSecondary: "#442C2E",
    onBackground: "#442C2E",
    onSurface: "#442C2E",
    onError: "#FFFFFF",
  },
  shapeScheme: {
    small: {
      family: "cut",
      borderRadius: {
        topStart: 4,
        topEnd: 4,
        bottomStart: 4,
        bottomEnd: 4,
      },
    },
    medium: {
      family: "cut",
      borderRadius: {
        topStart: 8,
        topEnd: 8,
        bottomStart: 8,
        bottomEnd: 8,
      },
    },
    large: {
      family: "cut",
      borderRadius: {
        topStart: 24,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
  },
};
