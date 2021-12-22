import { DependencyList, useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Theme } from "../theme/theme";
import { useTheme } from "../theme/use-theme";
import { ScreenSizeUtility, useScreenSizeUtility } from "../screen-size/use-screen-size-utility";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export function useStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  factory: (utilities: Theme & { screenSize: ScreenSizeUtility }) => T,
  deps?: DependencyList | undefined,
): T {
  const theme = useTheme();
  const screenSize = useScreenSizeUtility();

  return useMemo(() => factory({ ...theme, screenSize }), [theme, screenSize, deps]);
}
