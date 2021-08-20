import React from "react";
import { Theme } from "../theme";
import { defaultTheme, ThemeContext } from "./context";

export interface ThemeProviderProps {
  theme?: Theme | undefined;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={defaultTheme ?? theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
