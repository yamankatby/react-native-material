import chroma from "chroma-js";

export interface PaletteColor {
  main: string;
  on: string;
}

export interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  background: PaletteColor;
  surface: PaletteColor;
  error: PaletteColor;
}

export interface PaletteOptions {
  mode?: "light" | "dark";
  blend?: boolean;

  primary?: string;
  secondary?: string;
  background?: string;
  surface?: string;
  error?: string;
  onPrimary?: string;
  onSecondary?: string;
  onBackground?: string;
  onSurface?: string;
  onError?: string;
}

const DEFAULT_PRIMARY = "#6200EE";
const DEFAULT_SECONDARY = "#03DAC6";
const DEFAULT_BACKGROUND = "#FFF";
const DEFAULT_SURFACE = "#FFF";
const DEFAULT_ERROR = "#B00020";

const DEFAULT_DARK_PRIMARY = "#BB86FC";
const DEFAULT_DARK_SECONDARY = "#03DAC5";
const DEFAULT_DARK_BACKGROUND = "#121212";
const DEFAULT_DARK_SURFACE = "#121212";
const DEFAULT_DARK_ERROR = "#CF6679";

export const createPalette = (palette: PaletteOptions): Palette => {
  const mode = palette.mode ? palette.mode : "light";
  const primary = palette.primary ? palette.primary : mode === "light" ? DEFAULT_PRIMARY : DEFAULT_DARK_PRIMARY;
  const secondary = palette.secondary ? palette.secondary : mode === "light" ? DEFAULT_SECONDARY : DEFAULT_DARK_SECONDARY;
  const background = palette.background ? palette.background : mode === "light" ? DEFAULT_BACKGROUND : DEFAULT_DARK_BACKGROUND;
  const surface = palette.surface ? palette.surface : mode === "light" ? DEFAULT_SURFACE : DEFAULT_DARK_SURFACE;
  const error = palette.error ? palette.error : mode === "light" ? DEFAULT_ERROR : DEFAULT_DARK_ERROR;

  const on = (c: string) => chroma.contrast(c, "white") > 4.5 ? "white" : "black";

  return {
    primary: { main: primary, on: palette.onPrimary ? palette.onPrimary : on(primary) },
    secondary: { main: secondary, on: palette.onSecondary ? palette.onSecondary : on(secondary) },
    background: { main: background, on: palette.onBackground ? palette.onBackground : on(background) },
    surface: { main: surface, on: palette.onSurface ? palette.onSurface : on(surface) },
    error: { main: error, on: palette.onError ? palette.onError : on(error) }
  };
};
