import { useTheme } from "../context";
import { on } from "./createPalette";
import { PaletteColor, PaletteColorValues } from "./palette";

const usePaletteColor = (
  color?: PaletteColor | PaletteColorValues | string | undefined
): PaletteColorValues | undefined => {
  const { palette } = useTheme();
  if (typeof color !== "string") return color;
  switch (color) {
    case "primary":
      return palette.primary;
    case "secondary":
      return palette.secondary;
    case "background":
      return palette.background;
    case "surface":
      return palette.surface;
    case "error":
      return palette.error;
    default:
      return { main: color, on: on(color) };
  }
};

export default usePaletteColor;
