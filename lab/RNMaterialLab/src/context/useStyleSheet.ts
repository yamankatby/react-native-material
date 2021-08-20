import { DependencyList, useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Theme } from "../base";
import { useTheme } from "./ThemeProvider";

export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const useStyleSheet = <T extends NamedStyles<T> | NamedStyles<any>>(
  styles: (theme: Theme) => T,
  deps: DependencyList = []
) => {
  const theme = useTheme();
  return useMemo(() => styles(theme), [theme, ...deps]);
};
