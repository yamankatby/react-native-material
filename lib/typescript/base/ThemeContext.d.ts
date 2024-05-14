import React from 'react';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
export type ColorScheme = 'light' | 'dark';
export type Elevation = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
export type Elevations = Record<Elevation, ViewStyle | TextStyle | ImageStyle>;
export type PaletteColorName = 'primary' | 'secondary' | 'background' | 'surface' | 'error' | string;
export type PaletteColor = {
    main: string;
    on: string;
};
export type Palette = Record<PaletteColorName, PaletteColor>;
export type ShapeCategory = 'small' | 'medium' | 'large';
export interface ShapeBorderRadius {
    borderTopStartRadius: number;
    borderTopEndRadius: number;
    borderBottomStartRadius: number;
    borderBottomEndRadius: number;
}
export type Shapes = Record<ShapeCategory, ShapeBorderRadius>;
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline';
export type Typography = Record<TypographyVariant, TextStyle>;
export interface Theme {
    colorScheme: ColorScheme;
    elevations: Elevations;
    palette: Palette;
    shapes: Shapes;
    typography: Typography;
}
export interface ThemeProviderProps {
    theme?: Theme;
}
export declare const ThemeContext: React.Context<Theme>;
export declare const useTheme: () => Theme;
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
