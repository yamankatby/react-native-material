import React from "react";
import { ThemeProvider } from "./src";

const App = () => {
  return null;
};

const AppProvider = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppProvider;
