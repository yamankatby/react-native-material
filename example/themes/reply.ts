import { createTheme } from "@react-native-material/lab";

// WorkSans_600SemiBold,
// WorkSans_400Regular,
// WorkSans_700Bold,
// WorkSans_300Light,

const reply = createTheme({
  palette: {
    primary: {
      main: "#344955",
    },
    secondary: {
      main: "#F9AA33",
    },
    background: {
      main: "#EDF0F2",
    },
    surface: {
      main: "#FEFEFE",
    },
  },
  typographyStyles: {
    h1: {
      fontFamily: "WorkSans_300Light",
      fontSize: 96,
    },
    h2: {
      fontFamily: "WorkSans_600SemiBold",
      fontSize: 60,
    },
    h3: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 48,
    },
    h4: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 34,
    },
    h5: {
      fontFamily: "WorkSans_700Bold",
      fontSize: 24,
    },
    h6: {
      fontFamily: "WorkSans_500Medium",
      fontSize: 20,
    },
    subtitle1: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 16,
    },
    subtitle2: {
      fontFamily: "WorkSans_500Medium",
      fontSize: 14,
    },
    body1: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 18,
    },
    body2: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 14,
    },
    button: {
      fontFamily: "WorkSans_500Medium",
      fontSize: 14,
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: "WorkSans_400Regular",
      fontSize: 12,
    },
    overline: {
      fontFamily: "WorkSans_600SemiBold",
      fontSize: 12,
      textTransform: "uppercase",
    },
  },
  shapeScheme: {
    small: { cornerRadius: 30 },
    medium: { cornerRadius: 0 },
    large: { cornerRadius: 12 },
  },
});

export default reply;
