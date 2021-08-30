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
        topStart: 16,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
  },
  typographyScheme: {
    h1: {
      fontFamily: "Rubik_300Light",
      fontSize: 96,
    },
    h2: {
      fontFamily: "Rubik_300Light",
      fontSize: 60,
    },
    h3: {
      fontFamily: "Rubik_400Regular",
      fontSize: 48,
    },
    h4: {
      fontFamily: "Rubik_400Regular",
      fontSize: 34,
    },
    h5: {
      fontFamily: "Rubik_500Medium",
      fontSize: 24,
    },
    h6: {
      fontFamily: "Rubik_500Medium",
      fontSize: 20,
    },
    subtitle1: {
      fontFamily: "Rubik_500Medium",
      fontSize: 16,
    },
    subtitle2: {
      fontFamily: "Rubik_500Medium",
      fontSize: 14,
    },
    body1: {
      fontFamily: "Rubik_400Regular",
      fontSize: 16,
    },
    body2: {
      fontFamily: "Rubik_400Regular",
      fontSize: 14,
    },
    button: {
      fontFamily: "Rubik_500Medium",
      fontSize: 14,
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "Rubik_400Regular",
      fontSize: 12,
    },
    overline: {
      fontFamily: "Rubik_400Regular",
      fontSize: 14,
      textTransform: "uppercase",
    },
  },
};
