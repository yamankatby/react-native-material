import { createTheme } from "../lab";

const crane = createTheme({
  palette: {
    primary: {
      main: "#5D1049",
    },
    secondary: {
      main: "#E30425",
    },
    background: {
      main: "#F0CCE2",
    },
    surface: {
      main: "#FFFFFF",
    },
  },
  typographyStyles: {
    h1: {
      fontFamily: "Raleway_300Light",
      fontSize: 96,
    },
    h2: {
      fontFamily: "Raleway_400Regular",
      fontSize: 60,
    },
    h3: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 48,
    },
    h4: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 34,
    },
    h5: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 24,
    },
    h6: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 20,
    },
    subtitle1: {
      fontFamily: "Raleway_500Medium",
      fontSize: 16,
    },
    subtitle2: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 14,
    },
    body1: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 16,
    },
    body2: {
      fontFamily: "Raleway_400Regular",
      fontSize: 14,
    },
    button: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 14,
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "Raleway_500Medium",
      fontSize: 12,
    },
    overline: {
      fontFamily: "Raleway_600SemiBold",
      fontSize: 12,
      textTransform: "uppercase",
    },
  },
  shapeScheme: {
    small: { cornerRadius: 4 },
    medium: { cornerRadius: 16 },
    large: { cornerRadius: 20 },
  },
});

export default crane;
