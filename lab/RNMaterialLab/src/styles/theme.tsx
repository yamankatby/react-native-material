import React, { createContext, useContext, useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { createPalette, Palette, PaletteOptions } from "./palette";
import { elevation, Elevation } from "./elevation";
import { typography, Typography } from "./typography";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

export interface ShapeOptions {
  family: "rounded" | "cut";
  size: (number | string) | [(number | string), (number | string), (number | string), (number | string)];
}

export interface Shape {
  small: ShapeOptions;
  medium: ShapeOptions;
  large: ShapeOptions;
}

const shape: Shape = {
  small: {
    family: "rounded",
    size: 4
  },
  medium: {
    family: "rounded",
    size: 4
  },
  large: {
    family: "rounded",
    size: 0
  }
};

export interface Theme {
  palette: Palette;
  elevation: Elevation;
  typography: Typography;
}

export const defaultTheme: Theme = {
  palette: createPalette({}),
  elevation,
  typography
};

export const defaultDarkTheme: Theme = {
  palette: createPalette({ mode: "dark" }),
  elevation,
  typography
};

export const ThemeContext = createContext<Theme>(defaultTheme);

export interface ThemeOptions {
  palette?: PaletteOptions;
}

export const createTheme = (options: ThemeOptions): Theme => {
  return {
    palette: createPalette(options.palette ?? {}),
    elevation: elevation,
    typography: typography
  };
};

export const ThemeProvider = ({ theme, children }: { theme?: Theme, children: any }) => {
  return (
    <ThemeContext.Provider value={theme ?? defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const useStyleSheet = <T extends NamedStyles<T> | NamedStyles<any>>(styles: (theme: Theme) => T): T => {
  const theme = useTheme();
  return useMemo(() => styles(theme), [styles, theme]);
};
