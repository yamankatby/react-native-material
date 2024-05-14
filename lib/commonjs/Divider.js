"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _chromaJs = _interopRequireDefault(require("chroma-js"));
var _ThemeContext = require("./base/ThemeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Divider = ({
  color,
  inset,
  leadingInset,
  trailingInset,
  style
}) => {
  const {
    palette
  } = (0, _ThemeContext.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [{
      height: 1,
      backgroundColor: color ?? (0, _chromaJs.default)(palette.surface.on).alpha(0.08).hex(),
      marginStart: inset ?? leadingInset,
      marginEnd: inset ?? trailingInset
    }, style]
  });
};
var _default = exports.default = Divider;
//# sourceMappingURL=Divider.js.map