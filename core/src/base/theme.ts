import { Platform } from "react-native";
import { ColorScheme } from "./color-scheme";
import { ShapeScheme } from "./shape-scheme";
import { TypographyScheme } from "./typography-scheme";
import { ElevationScheme } from "./elevation-scheme";

export type Mode = "light" | "dark";

export interface Theme {
  mode: Mode;
  colorScheme: ColorScheme;
  elevationScheme: ElevationScheme;
  shapeScheme: ShapeScheme;
  typographyScheme: TypographyScheme;
}

export const defaultTheme: Theme = {
  mode: "light",
  colorScheme: {
    primary: "#6200EE",
    primaryVariant: "#3700B3",
    secondary: "#03DAC6",
    secondaryVariant: "#018786",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    error: "#B00020",
    onPrimary: "#FFFFFF",
    onSecondary: "#000000",
    onBackground: "#000000",
    onSurface: "#000000",
    onError: "#FFFFFF",
  },
  elevationScheme: {
    0: {},
    1: Platform.select({
      android: { elevation: 1 },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
      },
      web: {
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      },
    }),
    2: Platform.select({
      android: { elevation: 2 },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
      },
      web: {
        boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
      },
    }),
    3: Platform.select({
      android: { elevation: 3 },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
      },
      web: {
        boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
      },
    }),
    4: Platform.select({
      android: { elevation: 4 },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      web: {
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
      },
    }),
    6: Platform.select({
      android: { elevation: 6 },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
      },
      web: {
        boxShadow:
          "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
      },
    }),
    8: Platform.select({
      android: { elevation: 8 },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      web: {
        boxShadow:
          "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
      },
    }),
    12: Platform.select({
      android: { elevation: 12 },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
      },
      web: {
        boxShadow:
          "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
      },
    }),
    16: Platform.select({
      android: { elevation: 16 },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
      },
      web: {
        boxShadow:
          "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
      },
    }),
    24: Platform.select({
      android: { elevation: 24 },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
      },
      web: {
        boxShadow:
          "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
      },
    }),
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
        topStart: 4,
        topEnd: 4,
        bottomStart: 4,
        bottomEnd: 4,
      },
    },
    large: {
      family: "rounded",
      borderRadius: {
        topStart: 0,
        topEnd: 0,
        bottomStart: 0,
        bottomEnd: 0,
      },
    },
  },
  typographyScheme: {
    h1: {
      fontWeight: "300",
      fontSize: 96,
      letterSpacing: -1.5,
    },
    h2: {
      fontWeight: "300",
      fontSize: 60,
      letterSpacing: -0.5,
    },
    h3: {
      fontSize: 48,
    },
    h4: {
      fontSize: 34,
      letterSpacing: 0.25,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontWeight: "500",
      fontSize: 20,
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontSize: 16,
      letterSpacing: 0.15,
    },
    subtitle2: {
      fontWeight: "500",
      fontSize: 14,
      letterSpacing: 0.1,
    },
    body1: {
      fontSize: 16,
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: 14,
      letterSpacing: 0.25,
    },
    button: {
      fontWeight: "500",
      fontSize: 14,
      letterSpacing: 1.25,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: 10,
      letterSpacing: 0.4,
    },
    overline: {
      fontSize: 12,
      letterSpacing: 1.5,
      textTransform: "uppercase",
    },
  },
};

export const darkTheme: Theme = {
  ...defaultTheme,
  mode: "dark",
  colorScheme: {
    primary: "#BB86FC",
    primaryVariant: "#3700B3",
    secondary: "#03DAC6",
    secondaryVariant: "#03DAC6",
    background: "#121212",
    surface: "#121212",
    error: "#CF6679",
    onPrimary: "#000000",
    onSecondary: "#000000",
    onBackground: "#FFFFFF",
    onSurface: "#FFFFFF",
    onError: "#000000",
  },
};
