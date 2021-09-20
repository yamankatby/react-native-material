import React, { createContext, DependencyList, useContext, useMemo } from "react";
import { defaultTheme, Theme } from "./theme";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { ColorName } from "./color-scheme";
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

export interface Palette {
  main: string;
  on: string;
}

export type PaletteColor = ColorName | string;

export const usePalette = (main: ColorName | string, on?: ColorName | string | undefined): Palette => {
  const { colorScheme } = useTheme();
  const _main = useMemo(() => {
    switch (main) {
      case "primary":
        return colorScheme.primary;
      case "primaryVariant":
        return colorScheme.primaryVariant;
      case "secondary":
        return colorScheme.secondary;
      case "secondaryVariant":
        return colorScheme.secondaryVariant;
      case "background":
        return colorScheme.background;
      case "surface":
        return colorScheme.surface;
      case "error":
        return colorScheme.error;
      case "onPrimary":
        return colorScheme.onPrimary;
      case "onSecondary":
        return colorScheme.onSecondary;
      case "onBackground":
        return colorScheme.onBackground;
      case "onSurface":
        return colorScheme.onSurface;
      case "onError":
        return colorScheme.onError;
      default:
        return main;
    }
  }, [main, colorScheme]);

  const _on = useMemo(() => {
    if (on) {
      switch (on) {
        case "primary":
          return colorScheme.primary;
        case "primaryVariant":
          return colorScheme.primaryVariant;
        case "secondary":
          return colorScheme.secondary;
        case "secondaryVariant":
          return colorScheme.secondaryVariant;
        case "background":
          return colorScheme.background;
        case "surface":
          return colorScheme.surface;
        case "error":
          return colorScheme.error;
        case "onPrimary":
          return colorScheme.onPrimary;
        case "onSecondary":
          return colorScheme.onSecondary;
        case "onBackground":
          return colorScheme.onBackground;
        case "onSurface":
          return colorScheme.onSurface;
        case "onError":
          return colorScheme.onError;
        default:
          return on;
      }
    }
    switch (main) {
      case "primary":
        return colorScheme.onPrimary;
      case "secondary":
        return colorScheme.onSecondary;
      case "background":
        return colorScheme.onBackground;
      case "surface":
        return colorScheme.onSurface;
      case "error":
        return colorScheme.onError;
      case "onPrimary":
        return colorScheme.primary;
      case "onSecondary":
        return colorScheme.secondary;
      case "onBackground":
        return colorScheme.background;
      case "onSurface":
        return colorScheme.surface;
      case "onError":
        return colorScheme.error;
      default:
        return chroma.contrast(_main, "white") > 4.5 ? "#FFFFFF" : "#000000";
    }
  }, [main, on, colorScheme, _main]);

  return { main: _main, on: _on };
};
