import React from "react";
import { ThemeProvider } from "./core";
import Navigator from "./src/config/Navigator";
import { basil } from "./src/config/themes/basil";
import { crane } from "./src/config/themes/crane";
import { fortnightly } from "./src/config/themes/fortnightly";
import { owl } from "./src/config/themes/owl";
import { reply } from "./src/config/themes/reply";
import { shrine } from "./src/config/themes/shrine";

const App = () => {
  return <Navigator />;
};

const AppProvider = () => (
  <ThemeProvider theme={reply}>
    <App />
  </ThemeProvider>
);

export default AppProvider;
