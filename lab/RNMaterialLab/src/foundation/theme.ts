import {
  Colors,
  ColorsOptions,
  createColors,
  createElevations,
  createShapeSchema,
  createTypographyStyles,
  Elevations,
  ShapeOptions,
  TypographyStyles
} from "./";

export type ThemeMode = "light" | "dark";

export interface Theme {
  mode: ThemeMode;
  colors: Colors;
  elevations: Elevations;
  typographyStyles: TypographyStyles;
  shapeSchema: any;
}

export interface ThemeOptions {
  mode?: ThemeMode;
  colors?: ColorsOptions;
  shape?: ShapeOptions;
}

export const createTheme = (options: ThemeOptions = {}): Theme => {
  const mode = options.mode ?? "light";
  const colors = createColors(mode, options.colors);
  return {
    mode,
    colors: colors,
    elevations: createElevations(colors),
    typographyStyles: createTypographyStyles(),
    shapeSchema: createShapeSchema(options.shape)
  };
};
