import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, defaultTheme } from './defaultTheme';
export const ThemeContext = /*#__PURE__*/createContext(defaultTheme);
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({
  theme,
  children
}) => {
  const colorScheme = useColorScheme();
  const value = useMemo(() => theme ? theme : colorScheme === 'dark' ? darkTheme : defaultTheme, [colorScheme, theme]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: value
  }, children);
};
//# sourceMappingURL=ThemeContext.js.map