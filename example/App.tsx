import { ThemeProvider } from "@react-native-material/lab";
import React from "react";
import Navigator from "./Navigator";
import basil from "./themes/basil";

const App = () => (
  <ThemeProvider theme={basil}>
    <Navigator />
  </ThemeProvider>
);

export default App;
