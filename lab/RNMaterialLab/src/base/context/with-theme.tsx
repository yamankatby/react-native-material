import React from "react";
import { Theme } from "../theme";
import useTheme from "./use-theme";

export const withTheme = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & { theme: Theme }> => {
  const theme = useTheme();
  return function WithTheme(props) {
    return <Component {...{ ...props, theme }} />;
  };
};
