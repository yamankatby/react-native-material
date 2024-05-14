"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _useStyles = require("./hooks/use-styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Surface = ({
  category,
  elevation = 0,
  style,
  ...rest
}) => {
  const styles = (0, _useStyles.useStyles)(({
    elevations,
    shapes,
    surfaceColor
  }) => ({
    surface: {
      ...elevations[elevation],
      ...(category ? shapes[category] : {}),
      backgroundColor: surfaceColor(elevation).hex()
    }
  }), [category, elevation]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, _extends({
    style: [styles.surface, style]
  }, rest));
};
var _default = exports.default = Surface;
//# sourceMappingURL=Surface.js.map