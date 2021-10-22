import React, { createContext, DependencyList, useContext, useMemo } from "react";
import { defaultTheme, PaletteColorName, Theme } from "./theme";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import chroma from "chroma-js";

export const ThemeContext = createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  theme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => (
  <ThemeContext.Provider value={theme ?? defaultTheme}>{children}</ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);

export type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const useStyleSheet = <T extends NamedStyles<T> | NamedStyles<any>>(
  factory: (theme: Theme) => T,
  deps?: DependencyList | undefined,
): T => {
  const theme = useTheme();
  return useMemo(() => factory(theme), [theme, deps]);
};

interface Palette {
  main: string;
  on: string;
}

export type PaletteColor = PaletteColorName | string;

export const usePalette = (main: PaletteColorName | string, on?: PaletteColorName | string | undefined): Palette => {
  const { palette } = useTheme();
  const _main = useMemo(() => {
    switch (main) {
      case "primary":
        return palette.primary;
      case "secondary":
        return palette.secondary;
      case "background":
        return palette.background;
      case "surface":
        return palette.surface;
      case "error":
        return palette.error;
      case "onPrimary":
        return palette.onPrimary
      case "onSecondary":
        return palette.onSecondary
      case "onBackground":
        return palette.onBackground
      case "onSurface":
        return palette.onSurface
      case "onError":
        return palette.onError
      default:
        return main;
    }
  }, [main, palette]);

  const _on = useMemo(() => {
    if (on) {
      switch (on) {
        case "primary":
          return palette.primary;
        case "secondary":
          return palette.secondary;
        case "background":
          return palette.background;
        case "surface":
          return palette.surface;
        case "error":
          return palette.error;
        case "onPrimary":
          return palette.onPrimary
        case "onSecondary":
          return palette.onSecondary
        case "onBackground":
          return palette.onBackground
        case "onSurface":
          return palette.onSurface
        case "onError":
          return palette.onError
        default:
          return on;
      }
    }
    switch (main) {
      case "primary":
        return palette.onPrimary
      case "secondary":
        return palette.onSecondary
      case "background":
        return palette.onBackground
      case "surface":
        return palette.onSurface
      case "error":
        return palette.onError
      case "onPrimary":
        return palette.primary;
      case "onSecondary":
        return palette.secondary;
      case "onBackground":
        return palette.background;
      case "onSurface":
        return palette.surface;
      case "onError":
        return palette.error;
      default:
        return chroma.contrast(_main, "white") > 4.5 ? "#FFFFFF" : "#000000";
    }
  }, [main, on, palette, _main]);

  return { main: _main, on: _on };
};
