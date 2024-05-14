"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeWindowSize = require("react-native-window-size");
var _reactNativeFlexLayout = require("react-native-flex-layout");
var _ThemeContext = require("./ThemeContext");
var _IconComponentContext = require("./IconComponentContext");
var _PortalContext = require("./PortalContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Provider = ({
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
}) => /*#__PURE__*/_react.default.createElement(_ThemeContext.ThemeProvider, {
  theme: theme
}, /*#__PURE__*/_react.default.createElement(_reactNativeWindowSize.Provider, {
  breakpoints: breakpoints
}, /*#__PURE__*/_react.default.createElement(_reactNativeFlexLayout.SpacingFuncProvider, {
  spacingFunc: spacingFunc
}, /*#__PURE__*/_react.default.createElement(_IconComponentContext.IconComponentProvider, {
  IconComponent: IconComponent
}, /*#__PURE__*/_react.default.createElement(_PortalContext.PortalProvider, null, children, /*#__PURE__*/_react.default.createElement(_PortalContext.Outlet, null))))));
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map