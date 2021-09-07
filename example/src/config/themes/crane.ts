import { defaultTheme, Theme } from "@react-native-material/core";

export const crane: Theme = {
  ...defaultTheme,
  colorScheme: {
    primary: "#5D1049",
    primaryVariant: "#720D5D",
    secondary: "#E30425",
    secondaryVariant: "#A80000",
    background: "#F9F6F8",
    surface: "#FFFFFF",
    error: "#FF9800",
    onPrimary: "#FFFFFF",
    onSecondary: "#FFFFFF",
    onBackground: "#720D5D",
    onSurface: "#000000",
    onError: "#000000"
  },
  shapeScheme: {
    small: {
      family: "rounded",
      borderRadius: {
        topStart: 4,
        topEnd: 4,
        bottomStart: 4,
        bottomEnd: 4
      }
    },
    medium: {
      family: "rounded",
      borderRadius: {
        topStart: 16,
        topEnd: 16,
        bottomStart: 16,
        bottomEnd: 16
      }
    },
    large: {
      family: "rounded",
      borderRadius: {
        topStart: 20,
        topEnd: 20,
        bottomStart: 20,
        bottomEnd: 20
      }
    }
  },
  typographyScheme: {
    h1: {
      fontFamily: "Raleway_300Light",
      fontSize: 96
    },
    h2: {
      fontFamily: "Raleway_400Regular",
      fontSize: 60
    },
    h3: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 48
    },
    h4: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 34
    },
    h5: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 24
    },
    h6: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 20
    },
    subtitle1: {
      fontFamily: "Raleway_500Medium",
      fontSize: 16
    },
    subtitle2: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 14
    },
    body1: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 16
    },
    body2: {
      fontFamily: "Raleway_400Regular",
      fontSize: 14
    },
    button: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 14,
      textTransform: "uppercase"
    },
    caption: {
      fontFamily: "Raleway_500Medium",
      fontSize: 12
    },
    overline: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 12,
      textTransform: "uppercase"
    }
  }
};
