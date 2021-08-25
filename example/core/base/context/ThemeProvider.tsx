import React, { createContext } from "react";
import { defaultTheme, Theme } from "../theme-scheme";

export const ThemeContext = createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  theme?: Theme;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme ?? defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
