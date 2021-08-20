import React from "react";
import { Theme } from "../base";
import { useTheme } from "./ThemeProvider";

export const withTheme = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & { theme: Theme }> => {
  const theme = useTheme();
  return function WithTheme(props) {
    return <Component {...{ ...props, theme }} />;
  };
};
