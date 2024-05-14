"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeFlexLayout = require("react-native-flex-layout");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DialogActions = ({
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNativeFlexLayout.HStack, {
    justify: "end",
    spacing: 2,
    style: [styles.container]
  }, children);
};
const styles = _reactNative.StyleSheet.create({
  container: {
    margin: 8
  }
});
var _default = exports.default = DialogActions;
//# sourceMappingURL=DialogActions.js.map