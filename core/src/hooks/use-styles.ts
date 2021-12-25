import { DependencyList, useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Theme, useTheme } from "../base/ThemeContext";
import { useWindowSizeClass, WindowSizeClass } from "../base/WindowSizeClassContext";
import { useWindowSize, WindowSize } from "./use-window-size";
import { Spacing, useSpacing } from "../base/SpacingContext";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const useStyles = <T extends NamedStyles<T>>(
  factory: (utils: Theme & { windowSizeClass: WindowSizeClass; windowSize: WindowSize; spacing: Spacing }) => T,
  deps?: DependencyList | undefined,
): T => {
  const theme = useTheme();
  const windowSizeClass = useWindowSizeClass();
  const windowSize = useWindowSize();
  const spacing = useSpacing();

  return useMemo(() => factory({ ...theme, windowSizeClass, windowSize, spacing }), [theme, windowSizeClass, deps]);
};
