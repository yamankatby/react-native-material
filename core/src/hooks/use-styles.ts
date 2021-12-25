import { DependencyList, useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import chroma from "chroma-js";
import { Theme, useTheme } from "../base/ThemeContext";
import { useWindowSizeClass, WindowSizeClass } from "../base/WindowSizeClassContext";
import { useWindowSize, WindowSize } from "./use-window-size";
import { Spacing, useSpacing } from "../base/SpacingContext";
import { useSurfaceScale } from "./use-surface-scale";
import { useSurfaceColor } from "./use-surface-color";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const useStyles = <T extends NamedStyles<T>>(
  factory: (
    utils: Theme & {
      surfaceScale: chroma.Scale<chroma.Color>;
      surfaceColor: chroma.Scale<chroma.Color>;
      windowSizeClass: WindowSizeClass;
      windowSize: WindowSize;
      spacing: Spacing;
    },
  ) => T,
  deps?: DependencyList | undefined,
): T => {
  const theme = useTheme();
  const surfaceScale = useSurfaceScale();
  const surfaceColor = useSurfaceColor();
  const windowSizeClass = useWindowSizeClass();
  const windowSize = useWindowSize();
  const spacing = useSpacing();

  return useMemo(
    () => factory({ ...theme, surfaceScale, surfaceColor, windowSizeClass, windowSize, spacing }),
    [theme, windowSizeClass, deps],
  );
};
