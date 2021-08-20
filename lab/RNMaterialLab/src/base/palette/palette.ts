import { Elevation } from "../../foundation";

export type PaletteColor =
  | "primary"
  | "secondary"
  | "background"
  | "surface"
  | "error";

export interface PaletteColorValues {
  main: string;
  on: string;
}

export type Palette = Record<PaletteColor, PaletteColorValues> & {
  elevationColors: Record<Elevation, string>;
};
