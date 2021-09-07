import { defaultTheme, Theme } from "@react-native-material/core";

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
    onSurface: "#29302E",
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
        topEnd: 16,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
  },
  typographyScheme: {
    h1: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 96,
    },
    h2: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 60,
    },
    h3: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 48,
    },
    h4: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 34,
    },
    h5: {
      fontFamily: "Montserrat_500Medium",
      fontSize: 24,
    },
    h6: {
      fontFamily: "Lekton_700Bold",
      fontSize: 21,
    },
    subtitle1: {
      fontFamily: "Lekton_700Bold",
      fontSize: 17,
    },
    subtitle2: {
      fontFamily: "Lekton_700Bold",
      fontSize: 15,
    },
    body1: {
      fontFamily: "Montserrat_600SemiBold",
      fontSize: 16,
    },
    body2: {
      fontFamily: "Montserrat_400Regular",
      fontSize: 14,
    },
    button: {
      fontFamily: "Montserrat_700Bold",
      fontSize: 14,
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "Montserrat_500Medium",
      fontSize: 12,
    },
    overline: {
      fontFamily: "Montserrat_400Regular",
      fontSize: 10,
      textTransform: "uppercase",
    },
  },
};
