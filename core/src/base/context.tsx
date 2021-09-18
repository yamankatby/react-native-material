import React, { createContext, DependencyList, useContext, useMemo } from "react";
import { defaultTheme, Theme } from "./theme";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

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

export const useTheme = () => useContext(ThemeContext);

export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const useStyleSheet = <T extends NamedStyles<T> | NamedStyles<any>>(
  factory: (theme: Theme) => T,
  deps?: DependencyList | undefined
): T => {
  const theme = useTheme();
  return useMemo(() => factory(theme), [theme, deps]);
};

export default ThemeProvider;
