"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _ThemeContext = require("./base/ThemeContext");
var _usePaletteColor = require("./hooks/use-palette-color");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Text = ({
  variant = 'body1',
  color = 'on-background',
  style,
  ...rest
}) => {
  const {
    typography
  } = (0, _ThemeContext.useTheme)();
  const palette = (0, _usePaletteColor.usePaletteColor)(color);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, _extends({}, rest, {
    style: [typography[variant], {
      color: palette.main
    }, style]
  }));
};
var _default = exports.default = Text;
//# sourceMappingURL=Text.js.map