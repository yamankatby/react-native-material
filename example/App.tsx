import React from "react";
import { ThemeProvider } from "./core";
import Navigator from "./src/config/Navigator";

const App = () => {
  return <Navigator />;
};

const AppProvider = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppProvider;
