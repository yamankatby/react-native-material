import React, { createContext, useContext, useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export interface PaletteColor {
  main: string;
  on: string;
}

export interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  background: PaletteColor;
  surface: PaletteColor;
  error: PaletteColor;
}

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
  palette: {
    primary: { main: "#6200EE", on: "#FFF" },
    secondary: { main: "#03DAC6", on: "#000" },
    background: { main: "#FFF", on: "#000" },
    surface: { main: "#FFF", on: "#000" },
    error: { main: "#B00020", on: "#FFF" }
  },
  shadows: {},
  typography: {}
};

export const defaultDarkTheme: Theme = {
  ...defaultTheme,
  palette: {
    primary: { main: "#BB86FC", on: "#000" },
    secondary: { main: "#03DAC5", on: "#000" },
    background: { main: "#121212", on: "#FFF" },
    surface: { main: "#121212", on: "#FFF" },
    error: { main: "#CF6679", on: "#000" }
  }
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
