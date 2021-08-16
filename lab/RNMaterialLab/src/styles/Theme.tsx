import React, { createContext, useContext, useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { createPalette, Palette } from "./palette";

export interface Shadows {

}

export interface Typography {

}

export interface Theme {
  palette: Palette;
  shadows: Shadows;
  typography: Typography;
}

export const defaultTheme: Theme = {
  palette: createPalette({}),
  shadows: {},
  typography: {}
};

export const defaultDarkTheme: Theme = {
  palette: createPalette({ mode: "dark" }),
  shadows: {},
  typography: {}
};

export const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ theme, children }: any) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

export const useStyleSheet = <T extends NamedStyles<T> | NamedStyles<any>>(styles: (theme: Theme) => T): T => {
  const theme = useTheme();
  return useMemo(() => styles(theme), [styles, theme]);
};
