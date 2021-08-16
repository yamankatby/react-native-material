import React, { createContext, useContext, useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export interface Palette {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
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
    primary: "#6200EE",
    primaryVariant: "#3700B3",
    secondary: "#03DAC6",
    secondaryVariant: "#018786",
    background: "#FFF",
    surface: "#FFF",
    error: "#B00020",
    onPrimary: "#FFF",
    onSecondary: "#000",
    onBackground: "#000",
    onSurface: "#000",
    onError: "#FFF"
  },
  shadows: {},
  typography: {}
};

export const defaultDarkTheme: Theme = {
  ...defaultTheme,
  palette: {
    primary: "#BB86FC",
    primaryVariant: "#3700B3",
    secondary: "#03DAC5",
    secondaryVariant: "#018786",
    background: "#121212",
    surface: "#121212",
    error: "#CF6679",
    onPrimary: "#000",
    onSecondary: "#000",
    onBackground: "#FFF",
    onSurface: "#FFF",
    onError: "#000"
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
