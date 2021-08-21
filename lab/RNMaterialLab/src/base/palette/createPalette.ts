import chroma from "chroma-js";
import { ThemeMode } from "../theme";
import { Palette, PaletteColor, PaletteColorValues } from "./palette";

export type PaletteOptions = Partial<
  Record<PaletteColor, Partial<PaletteColorValues>>
>;

const DEFAULT_COLORS: Record<PaletteColor, string> = {
  primary: "#6200EE",
  secondary: "#03DAC6",
  background: "#FFF",
  surface: "#FFF",
  error: "#B00020",
};

const DEFAULT_DARK_COLORS: Record<PaletteColor, string> = {
  primary: "#BB86FC",
  secondary: "#03DAC5",
  background: "#121212",
  surface: "#121212",
  error: "#CF6679",
};

export const on = (color: string) =>
  chroma.contrast(color, "white") > 4.5 ? "white" : "black";

export const createPalette = (
  mode: ThemeMode = "light",
  options?: PaletteOptions | undefined
): Palette => {
  const defaultColors = mode === "light" ? DEFAULT_COLORS : DEFAULT_DARK_COLORS;
  const primary = options?.primary?.main ?? defaultColors.primary;
  const secondary = options?.secondary?.main ?? defaultColors.secondary;
  const background = options?.background?.main ?? defaultColors.background;
  const surface = options?.surface?.main ?? defaultColors.surface;
  const error = options?.error?.main ?? defaultColors.error;

  const f = chroma.scale([surface, "white"]);
  const scale = (value: number) =>
    mode === "light" ? surface : f(value).hex();

  return {
    primary: {
      main: primary,
      on: options?.primary?.on ?? on(primary),
    },
    secondary: {
      main: secondary,
      on: options?.secondary?.on ?? on(secondary),
    },
    background: {
      main: background,
      on: options?.background?.on ?? on(background),
    },
    surface: {
      main: surface,
      on: options?.surface?.on ?? on(surface),
    },
    error: {
      main: error,
      on: options?.error?.on ?? on(error),
    },
    elevationColors: {
      "0": surface,
      "1": scale(0.05),
      "2": scale(0.07),
      "3": scale(0.08),
      "4": scale(0.09),
      "6": scale(0.11),
      "8": scale(0.12),
      "12": scale(0.14),
      "16": scale(0.15),
      "24": scale(0.16),
    },
  };
};
