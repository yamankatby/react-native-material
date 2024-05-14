import React from 'react';
import { Provider as WindowSizeProvider } from 'react-native-window-size';
import { SpacingFuncProvider } from 'react-native-flex-layout';
import { ThemeProvider } from './ThemeContext';
import { IconComponentProvider } from './IconComponentContext';
import { Outlet, PortalProvider } from './PortalContext';
export const Provider = ({
  theme,
  breakpoints = {
    xs: 0,
    sm: 600,
    md: 905,
    lg: 1240,
    xl: 1440
  },
  spacingFunc,
  IconComponent,
  children
}) => /*#__PURE__*/React.createElement(ThemeProvider, {
  theme: theme
}, /*#__PURE__*/React.createElement(WindowSizeProvider, {
  breakpoints: breakpoints
}, /*#__PURE__*/React.createElement(SpacingFuncProvider, {
  spacingFunc: spacingFunc
}, /*#__PURE__*/React.createElement(IconComponentProvider, {
  IconComponent: IconComponent
}, /*#__PURE__*/React.createElement(PortalProvider, null, children, /*#__PURE__*/React.createElement(Outlet, null))))));
//# sourceMappingURL=Provider.js.map