import React from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { darkTheme, defaultTheme, ThemeProvider } from "./core";
import Navigator from "./src/config/Navigator";
import { store, useAppSelector } from "./src/config/store";
import { basil } from "./src/config/themes/basil";
import { crane } from "./src/config/themes/crane";
import { fortnightly } from "./src/config/themes/fortnightly";
import { owl } from "./src/config/themes/owl";
import { reply } from "./src/config/themes/reply";
import { shrine } from "./src/config/themes/shrine";

const App = () => {
  const colorScheme = useColorScheme();
  const theme = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider
      theme={
        {
          basil,
          crane,
          fortnightly,
          owl,
          reply,
          shrine,
          default: colorScheme === "light" ? defaultTheme : darkTheme,
        }[theme]
      }
    >
      <Navigator />
    </ThemeProvider>
  );
};

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppProvider;
