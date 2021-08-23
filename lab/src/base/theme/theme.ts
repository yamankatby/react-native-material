import { Elevations } from "../elevations/elevations";
import { Palette } from "../palette";
import { ShapeScheme } from "../shape-scheme";
import { TypographyStyles } from "../typography-styles";

export type ThemeMode = "light" | "dark";

export interface Theme {
  mode: ThemeMode;
  palette: Palette;
  elevations: Elevations;
  shapeScheme: ShapeScheme;
  typographyStyles: TypographyStyles;
}
