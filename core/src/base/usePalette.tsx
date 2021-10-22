import { useMemo } from "react";
import chroma from "chroma-js";
import { useTheme } from "./context";
import { PaletteColorName } from "./theme";

export type PaletteColor = PaletteColorName | string;

export const usePalette = (
  color: PaletteColor,
  tintColor?: PaletteColor,
): { color: string, tintColor: string } => {
  const { palette } = useTheme();

  const main = useMemo(() => {
    switch (color) {
      case "primary":
        return palette.primary;
      case "secondary":
        return palette.secondary;
      case "background":
        return palette.background;
      case "surface":
        return palette.surface;
      case "success":
        return palette.success;
      case "info":
        return palette.info;
      case "warning":
        return palette.warning;
      case "error":
        return palette.error;
      case "onPrimary":
        return palette.onPrimary;
      case "onSecondary":
        return palette.onSecondary;
      case "onBackground":
        return palette.onBackground;
      case "onSurface":
        return palette.onSurface;
      case "onSuccess":
        return palette.onSuccess;
      case "onInfo":
        return palette.onInfo;
      case "onWarning":
        return palette.onWarning;
      case "onError":
        return palette.onError;
      default:
        return color;
    }
  }, [palette, color]);

  const on = useMemo(() => {
    if (tintColor) {
      switch (tintColor) {
        case "primary":
          return palette.primary;
        case "secondary":
          return palette.secondary;
        case "background":
          return palette.background;
        case "surface":
          return palette.surface;
        case "success":
          return palette.success;
        case "info":
          return palette.info;
        case "warning":
          return palette.warning;
        case "error":
          return palette.error;
        case "onPrimary":
          return palette.onPrimary;
        case "onSecondary":
          return palette.onSecondary;
        case "onBackground":
          return palette.onBackground;
        case "onSurface":
          return palette.onSurface;
        case "onSuccess":
          return palette.onSuccess;
        case "onInfo":
          return palette.onInfo;
        case "onWarning":
          return palette.onWarning;
        case "onError":
          return palette.onError;
        default:
          return tintColor;
      }
    } else {
      switch (color) {
        case "primary":
          return palette.onPrimary;
        case "secondary":
          return palette.onSecondary;
        case "background":
          return palette.onBackground;
        case "surface":
          return palette.onSurface;
        case "success":
          return palette.onSuccess;
        case "info":
          return palette.onInfo;
        case "warning":
          return palette.onWarning;
        case "error":
          return palette.onError;
        case "onPrimary":
          return palette.primary;
        case "onSecondary":
          return palette.secondary;
        case "onBackground":
          return palette.background;
        case "onSurface":
          return palette.surface;
        case "onSuccess":
          return palette.success;
        case "onInfo":
          return palette.info;
        case "onWarning":
          return palette.warning;
        case "onError":
          return palette.error;
        default:
          return chroma.contrast(main, "white") > 4.5 ? "#FFFFFF" : "#000000";
      }
    }
  }, [palette, color, tintColor, main]);

  return { color: main, tintColor: on };
};
