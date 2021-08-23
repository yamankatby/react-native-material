import { createTheme } from "@react-native-material/lab";

const fortnightly = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#6B38FB",
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
  shapeScheme: {
    small: { family: "cut", cornerRadius: 0 },
    medium: { family: "cut", cornerRadius: 0 },
    large: { family: "cut", cornerRadius: 0 },
  },
});

export default fortnightly;
