import { TextStyle } from "react-native";

export interface Typography {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  subtitle1: TextStyle;
  subtitle2: TextStyle;
  body1: TextStyle;
  body2: TextStyle;
  button: TextStyle;
  caption: TextStyle;
  overline: TextStyle;
}

export const typography: Typography = {
  h1: {
    fontWeight: "300",
    fontSize: 96,
    letterSpacing: -1.5
  },
  h2: {
    fontWeight: "300",
    fontSize: 60,
    letterSpacing: -1.5
  },
  h3: {
    fontWeight: "400",
    fontSize: 48,
    letterSpacing: 0
  },
  h4: {
    fontWeight: "400",
    fontSize: 34,
    letterSpacing: 0.25
  },
  h5: {
    fontWeight: "400",
    fontSize: 24,
    letterSpacing: 0
  },
  h6: {
    fontWeight: "500",
    fontSize: 20,
    letterSpacing: 0.15
  },
  subtitle1: {
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 0.15
  },
  subtitle2: {
    fontWeight: "500",
    fontSize: 14,
    letterSpacing: 0.1
  },
  body1: {
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 0.5
  },
  body2: {
    fontWeight: "400",
    fontSize: 14,
    letterSpacing: 0.25
  },
  button: {
    fontWeight: "500",
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1.25
  },
  caption: {
    fontWeight: "400",
    fontSize: 12,
    letterSpacing: 0.4
  },
  overline: {
    fontWeight: "400",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1.5
  }
};
