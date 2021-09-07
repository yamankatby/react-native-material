import { defaultTheme, Theme } from "@react-native-material/core";

export const owl: Theme = {
  ...defaultTheme,
  colorScheme: {
    primary: "#0336FF",
    primaryVariant: "#0008CA",
    secondary: "#FFDE03",
    secondaryVariant: "#C7AD00",
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
        topStart: 16,
        topEnd: 16,
        bottomStart: 16,
        bottomEnd: 16,
      },
    },
  },
  typographyScheme: {
    h1: {
      fontFamily: "Rubik_700Bold",
      fontSize: 96,
    },
    h2: {
      fontFamily: "Rubik_700Bold",
      fontSize: 60,
    },
    h3: {
      fontFamily: "Rubik_700Bold",
      fontSize: 48,
    },
    h4: {
      fontFamily: "Rubik_700Bold",
      fontSize: 34,
    },
    h5: {
      fontFamily: "Rubik_700Bold",
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
      fontFamily: "Rubik_700Bold",
      fontSize: 14,
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "Rubik_400Regular",
      fontSize: 12,
    },
    overline: {
      fontFamily: "Rubik_400Regular",
      fontSize: 10,
      textTransform: "uppercase",
    },
  },
};
