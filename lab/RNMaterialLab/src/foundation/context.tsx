import React, { createContext, DependencyList, useContext, useMemo } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { createTheme, Theme } from "./";

const defaultTheme = createTheme();

export const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider: React.FC<{ theme?: Theme }> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme ?? defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const withTheme = <P extends object>(Component: React.ComponentType<P>): React.FC<P & { theme: Theme }> => {
  const theme = useTheme();
  return function WithTheme(props) {
    return <Component {...({ ...props, theme })} />;
  };
};

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle }

export const useStyleSheet = <T extends NamedStyles<T> | NamedStyles<any>>(styles: ((theme: Theme) => T), deps: DependencyList = []): T => {
  const theme = useTheme();
  return useMemo(() => styles(theme), [styles, theme, ...deps]);
};
