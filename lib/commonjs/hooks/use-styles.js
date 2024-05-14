"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = void 0;
var _react = require("react");
var _reactNativeFlexLayout = require("react-native-flex-layout");
var _reactNativeWindowSize = require("react-native-window-size");
var _ThemeContext = require("../base/ThemeContext");
var _useSurfaceScale = require("./use-surface-scale");
var _useSurfaceColor = require("./use-surface-color");
const useStyles = (factory, deps) => {
  const theme = (0, _ThemeContext.useTheme)();
  const surfaceScale = (0, _useSurfaceScale.useSurfaceScale)();
  const surfaceColor = (0, _useSurfaceColor.useSurfaceColor)();
  const windowSize = (0, _reactNativeWindowSize.useWindowSize)();
  const spacing = (0, _reactNativeFlexLayout.useSpacingFunc)();
  return (0, _react.useMemo)(() => factory({
    ...theme,
    surfaceScale,
    surfaceColor,
    windowSize,
    spacing
  }), [factory, theme, surfaceScale, surfaceColor, windowSize, spacing, deps]);
};
exports.useStyles = useStyles;
//# sourceMappingURL=use-styles.js.map