import { PaletteColor } from '../base/ThemeContext';
export type Color = 'primary' | 'secondary' | 'background' | 'surface' | 'error' | 'on-primary' | 'on-secondary' | 'on-background' | 'on-surface' | 'on-error' | string;
export declare const usePaletteColor: (main: Color, on?: Color) => PaletteColor;
