import React from "react";
import { useColorScheme } from "react-native";
import { darkTheme, defaultTheme, ThemeProvider } from "./core";
import Navigator from "./src/config/Navigator";

const App = () => {
  return <Navigator />;
};

const AppProvider = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === "light" ? defaultTheme : darkTheme}>
      <App />
    </ThemeProvider>
  );
};

export default AppProvider;
