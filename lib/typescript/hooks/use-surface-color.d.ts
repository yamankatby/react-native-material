import chroma from 'chroma-js';
import { Elevation } from '../base/ThemeContext';
export declare const useSurfaceColor: () => chroma.Scale<chroma.Color>;
export declare const useSurfaceColorValue: (elevation: Elevation) => string;
