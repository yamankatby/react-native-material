import { createTheme } from "@react-native-material/lab";

const basil = createTheme({
  palette: {
    primary: {
      main: "#356859",
    },
    secondary: {
      main: "#FD5523",
    },
    background: {
      main: "#FFFBE6",
    },
    surface: {
      main: "#B9E4C9",
    },
  },
  typographyStyles: {
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
  shapeScheme: {
    small: { family: "cut", cornerRadius: 0 },
    medium: { family: "cut", cornerRadius: 0 },
    large: { family: "cut", cornerRadius: 0 },
  },
});

export default basil;
