import { DependencyList, useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Theme } from "../theme";
import useTheme from "./use-theme";

export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

const useStyleSheet = <T extends NamedStyles<T> | NamedStyles<any>>(
  factory: (theme: Theme) => T,
  deps?: DependencyList | undefined
): T => {
  const theme = useTheme();
  return useMemo(() => factory(theme), [theme, deps]);
};

export default useStyleSheet;
