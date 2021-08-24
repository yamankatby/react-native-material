import { createTheme } from "../lab";

const shrine = createTheme({
  palette: {
    primary: {
      main: "#FEDBD0",
      on: "#442C2E",
    },
    secondary: {
      main: "#FEEAE6",
      on: "#442C2E",
    },
    background: {
      main: "#FFFBFA",
      on: "#442C2E",
    },
    surface: {
      main: "#FFFFFF",
      on: "#442C2E",
    },
  },
  typographyStyles: {
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
  shapeScheme: {
    small: { family: "cut", cornerRadius: 4 },
    medium: { family: "cut", cornerRadius: 8 },
    large: { family: "cut", cornerRadius: 24 },
  },
});

export default shrine;
