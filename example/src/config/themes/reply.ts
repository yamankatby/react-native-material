import { defaultTheme, Theme } from "@react-native-material/core";

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
    onError: "#FFFFFF"
  },
  shapeScheme: {
    small: {
      family: "rounded",
      borderRadius: {
        topStart: 0,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0
      }
    },
    medium: {
      family: "rounded",
      borderRadius: {
        topStart: 0,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0
      }
    },
    large: {
      family: "rounded",
      borderRadius: {
        topStart: 12,
        topEnd: 12,
        bottomStart: 12,
        bottomEnd: 12
      }
    }
  },
  typographyScheme: {
    h1: {
      fontFamily: "WorkSans_300Light",
      fontSize: 96
    },
    h2: {
      fontFamily: "WorkSans_600SemiBold",
      fontSize: 60
    },
    h3: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 48
    },
    h4: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 34
    },
    h5: {
      fontFamily: "WorkSans_700Bold",
      fontSize: 24
    },
    h6: {
      fontFamily: "WorkSans_500Medium",
      fontSize: 20
    },
    subtitle1: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 16
    },
    subtitle2: {
      fontFamily: "WorkSans_500Medium",
      fontSize: 14
    },
    body1: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 18
    },
    body2: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 14
    },
    button: {
      fontFamily: "WorkSans_500Medium",
      fontSize: 14,
      textTransform: "uppercase"
    },
    caption: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 12
    },
    overline: {
      fontFamily: "WorkSans_600SemiBold",
      fontSize: 12,
      textTransform: "uppercase"
    }
  }
};
