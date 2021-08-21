import { useMemo } from "react";
import { useTheme } from "../context";
import { PaletteColor } from "./palette";

export type Color =
  | PaletteColor
  | "onPrimary"
  | "onSecondary"
  | "onBackground"
  | "onSurface"
  | "onError";

export type ColorOptions = Color;

const useColor = (
  color?: ColorOptions | string | undefined
): string | undefined => {
  const { palette } = useTheme();
  return useMemo(() => {
    switch (color) {
      case "primary":
        return palette.primary.main;
      case "secondary":
        return palette.secondary.main;
      case "background":
        return palette.background.main;
      case "surface":
        return palette.surface.main;
      case "error":
        return palette.error.main;
      case "onPrimary":
        return palette.primary.on;
      case "onSecondary":
        return palette.secondary.on;
      case "onBackground":
        return palette.background.on;
      case "onSurface":
        return palette.surface.on;
      case "onError":
        return palette.error.on;
      default:
        return color;
    }
  }, [color, palette]);
};

export default useColor;
