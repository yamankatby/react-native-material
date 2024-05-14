"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Text = _interopRequireDefault(require("./Text"));
var _ThemeContext = require("./base/ThemeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DialogHeader = ({
  title
}) => {
  const theme = (0, _ThemeContext.useTheme)();
  const titleElement = typeof title === 'string' ? /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "h6",
    style: [{
      color: theme.palette.surface.on
    }]
  }, title) : typeof title === 'function' ? title({
    color: theme.palette.surface.on
  }) : title;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container]
  }, titleElement);
};
const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 24
  }
});
var _default = exports.default = DialogHeader;
//# sourceMappingURL=DialogHeader.js.map