"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Pressable = _interopRequireDefault(require("./Pressable"));
var _usePaletteColor = require("./hooks/use-palette-color");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const styles = _reactNative.StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    overflow: 'hidden'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const IconButton = ({
  icon,
  color = 'on-background',
  style,
  contentContainerStyle,
  pressEffect,
  pressEffectColor,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  delayLongPress,
  disabled,
  hitSlop,
  pressRetentionOffset,
  android_disableSound,
  android_ripple,
  testOnly_pressed,
  ...rest
}) => {
  const palette = (0, _usePaletteColor.usePaletteColor)(color);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: [styles.container, style]
  }, rest), /*#__PURE__*/_react.default.createElement(_Pressable.default, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.contentContainer, contentContainerStyle],
    pressEffect: pressEffect,
    pressEffectColor: pressEffectColor ?? palette.main,
    onPress: onPress,
    onPressIn: onPressIn,
    onPressOut: onPressOut,
    onLongPress: onLongPress,
    onBlur: onBlur,
    onFocus: onFocus,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    delayLongPress: delayLongPress,
    disabled: disabled,
    hitSlop: hitSlop,
    pressRetentionOffset: pressRetentionOffset,
    android_disableSound: android_disableSound,
    android_ripple: android_ripple,
    testOnly_pressed: testOnly_pressed
  }, icon ? typeof icon === 'function' ? icon({
    color: palette.main,
    size: 24
  }) : icon : null));
};
var _default = exports.default = IconButton;
//# sourceMappingURL=IconButton.js.map