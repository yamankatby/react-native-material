import { createTheme } from "../lab";

const owl = createTheme({
  palette: {
    primary: {
      main: "#0336FF",
    },
    secondary: {
      main: "#FFDE03",
    },
    background: {
      main: "#FFFFFF",
    },
    surface: {
      main: "#FFFFFF",
    },
  },
  typographyStyles: {
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
  shapeScheme: {
    small: {
      cornerRadius: { topStart: 30, topEnd: 0, bottomStart: 0, bottomEnd: 0 },
    },
    medium: { cornerRadius: 0 },
    large: { cornerRadius: 16 },
  },
});

export default owl;
