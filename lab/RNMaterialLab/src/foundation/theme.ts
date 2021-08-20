import { Colors, ColorsOptions, createColors } from "./color";
import { createElevations, Elevations } from "./elevation";
import { createTypographyStyles, TypographyStyles } from "./typography";
import {
  createShapeSchema,
  ShapeSchema,
  ShapeSchemaOptions,
} from "./shapeSchema";

export type ThemeMode = "light" | "dark";

export interface Theme {
  mode: ThemeMode;
  colors: Colors;
  elevations: Elevations;
  typographyStyles: TypographyStyles;
  shapeSchema: ShapeSchema;
}

export interface ThemeOptions {
  mode?: ThemeMode;
  colors?: ColorsOptions;
  shapeSchema?: ShapeSchemaOptions;
}

export const createTheme = (options: ThemeOptions = {}): Theme => {
  const mode = options.mode ?? "light";
  const colors = createColors(mode, options.colors);
  return {
    mode,
    colors: colors,
    elevations: createElevations(colors),
    typographyStyles: createTypographyStyles(),
    shapeSchema: createShapeSchema(options.shapeSchema),
  };
};
