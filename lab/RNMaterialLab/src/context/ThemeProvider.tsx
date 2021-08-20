import React, { createContext, useContext } from "react";
import { createTheme, Theme } from "../base";

export const defaultTheme = createTheme();

export const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export interface ThemeProviderProps {
  theme?: Theme | undefined;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme ?? defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
