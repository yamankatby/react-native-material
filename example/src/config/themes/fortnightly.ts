import { defaultTheme, Theme } from "@react-native-material/core";

export const fortnightly: Theme = {
  ...defaultTheme,
  colorScheme: {
    primary: "#FFFFFF",
    primaryVariant: "#E8E8E8",
    secondary: "#6B38FB",
    secondaryVariant: "#2100C7",
    background: "#E8E8E8",
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
        topStart: 16,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
  },
  typographyScheme: {
    h1: {
      fontFamily: "Merriweather_900Black_Italic",
      fontSize: 96,
    },
    h2: {
      fontFamily: "LibreFranklin_300Light",
      fontSize: 60,
    },
    h3: {
      fontFamily: "Merriweather_900Black_Italic",
      fontSize: 48,
    },
    h4: {
      fontFamily: "LibreFranklin_400Regular",
      fontSize: 34,
    },
    h5: {
      fontFamily: "LibreFranklin_400Regular",
      fontSize: 24,
    },
    h6: {
      fontFamily: "Merriweather_700Bold_Italic",
      fontSize: 20,
    },
    subtitle1: {
      fontFamily: "LibreFranklin_500Medium",
      fontSize: 16,
    },
    subtitle2: {
      fontFamily: "Merriweather_300Light",
      fontSize: 14,
    },
    body1: {
      fontFamily: "Merriweather_400Regular",
      fontSize: 16,
    },
    body2: {
      fontFamily: "LibreFranklin_400Regular",
      fontSize: 14,
    },
    button: {
      fontFamily: "LibreFranklin_700Bold",
      fontSize: 14,
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "Merriweather_400Regular_Italic",
      fontSize: 12,
    },
    overline: {
      fontFamily: "LibreFranklin_700Bold",
      fontSize: 10,
      textTransform: "uppercase",
    },
  },
};
