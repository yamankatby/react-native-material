import React from "react";
import { ThemeProvider } from "./core";
import Navigator from "./src/config/Navigator";
import { shrine } from "./src/config/themes/shrine";

const App = () => {
  return <Navigator />;
};

const AppProvider = () => (
  <ThemeProvider theme={shrine}>
    <App />
  </ThemeProvider>
);

export default AppProvider;
