import {
  createElevations,
  ElevationsOptions,
} from "../elevations/createElevations";
import { createPalette, PaletteOptions } from "../palette";
import { createShapeScheme, ShapeSchemeOptions } from "../shape-scheme";
import {
  createTypographyStyles,
  TypographyStylesOptions,
} from "../typography-styles";
import { Theme, ThemeMode } from "./theme";

export interface ThemeOptions {
  mode?: ThemeMode;
  palette?: PaletteOptions;
  elevations?: ElevationsOptions;
  shapeScheme?: ShapeSchemeOptions | undefined;
  typographyStyles?: TypographyStylesOptions | undefined;
}

export const createTheme = (options?: ThemeOptions | undefined): Theme => {
  const mode = options?.mode ?? "light";
  const palette = createPalette(mode, options?.palette);
  return {
    mode,
    palette,
    elevations: createElevations(palette, options?.elevations),
    shapeScheme: createShapeScheme(options?.shapeScheme),
    typographyStyles: createTypographyStyles(options?.typographyStyles),
  };
};
