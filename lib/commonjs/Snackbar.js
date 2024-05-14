"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Surface = _interopRequireDefault(require("./Surface"));
var _Text = _interopRequireDefault(require("./Text"));
var _reactNative = require("react-native");
var _ThemeContext = require("./base/ThemeContext");
var _useSurfaceScale = require("./hooks/use-surface-scale");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Snackbar = ({
  message,
  action,
  style,
  ...rest
}) => {
  const {
    palette
  } = (0, _ThemeContext.useTheme)();
  const surfaceScale = (0, _useSurfaceScale.useSurfaceScale)();
  return /*#__PURE__*/_react.default.createElement(_Surface.default, _extends({
    elevation: 6,
    category: "medium",
    style: [{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: surfaceScale(0.87).hex()
    }, style]
  }, rest), /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "body2",
    style: {
      marginVertical: 8,
      color: palette.surface.main
    }
  }, message), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginStart: 'auto',
      marginEnd: -8
    }
  }, action));
};
var _default = exports.default = Snackbar;
//# sourceMappingURL=Snackbar.js.map