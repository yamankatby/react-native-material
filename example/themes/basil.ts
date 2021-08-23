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
  shapeScheme: {
    small: { family: "cut", cornerRadius: 0 },
    medium: { family: "cut", cornerRadius: 0 },
    large: { family: "cut", cornerRadius: 0 },
  },
});

export default basil;
