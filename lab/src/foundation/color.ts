import chroma from "chroma-js";
import { ThemeMode } from "./theme";
import { Elevation } from "./elevation";

export type Color =
  | "primary"
  | "secondary"
  | "background"
  | "surface"
  | "error";

export interface ColorVariants {
  main: string;
  on: string;
}

export type Colors = Record<Color, ColorVariants> & {
  surfaceVariants: Record<Elevation, string>;
};

export type ThemeColor =
  | Color
  | "onPrimary"
  | "onSecondary"
  | "onBackground"
  | "onSurface"
  | "onError";

export type ColorsOptions = Partial<Record<ThemeColor, string>>;

const DEFAULT_COLORS: Record<Color, string> = {
  primary: "#6200EE",
  secondary: "#03DAC6",
  background: "#FFF",
  surface: "#FFF",
  error: "#B00020",
};

const DEFAULT_DARK_COLORS: Record<Color, string> = {
  primary: "#BB86FC",
  secondary: "#03DAC5",
  background: "#121212",
  surface: "#121212",
  error: "#CF6679",
};

const on = (color: string) =>
  chroma.contrast(color, "white") > 4.5 ? "white" : "black";

export const createColors = (
  mode: ThemeMode = "light",
  options: ColorsOptions = {}
): Colors => {
  const defaultColors = mode === "light" ? DEFAULT_COLORS : DEFAULT_DARK_COLORS;
  const primary = options.primary ?? defaultColors.primary;
  const secondary = options.secondary ?? defaultColors.secondary;
  const background = options.background ?? defaultColors.background;
  const surface = options.surface ?? defaultColors.surface;
  const error = options.error ?? defaultColors.error;

  const f = chroma.scale([surface, "white"]);
  const scale = (value: number) =>
    mode === "light" ? surface : f(value).hex();

  return {
    primary: {
      main: primary,
      on: options.onPrimary ?? on(primary),
    },
    secondary: {
      main: secondary,
      on: options.onSecondary ?? on(secondary),
    },
    background: {
      main: background,
      on: options.onBackground ?? on(background),
    },
    surface: {
      main: surface,
      on: options.onSurface ?? on(surface),
    },
    error: {
      main: error,
      on: options.onError ?? on(error),
    },
    surfaceVariants: {
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
