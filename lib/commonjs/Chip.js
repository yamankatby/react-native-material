"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _chromaJs = _interopRequireDefault(require("chroma-js"));
var _Pressable = _interopRequireDefault(require("./Pressable"));
var _Text = _interopRequireDefault(require("./Text"));
var _usePaletteColor = require("./hooks/use-palette-color");
var _ThemeContext = require("./base/ThemeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Chip = ({
  label,
  leading,
  trailing,
  variant = 'filled',
  color = 'on-surface',
  style,
  contentContainerStyle,
  labelStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  children,
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
  const theme = (0, _ThemeContext.useTheme)();
  const palette = (0, _usePaletteColor.usePaletteColor)(color, theme.palette.surface.main);
  const scale = (0, _react.useMemo)(() => _chromaJs.default.scale([palette.on, palette.main]), [palette]);
  const labelElement = typeof label === 'string' ? /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "body2",
    style: [{
      color: scale(0.87).hex()
    }, labelStyle]
  }, label) : typeof label === 'function' ? label({
    color: scale(0.87).hex()
  }) : label;
  const leadingElement = typeof leading === 'function' ? leading({
    color: scale(0.66).hex(),
    size: 24
  }) : leading;
  const trailingElement = typeof trailing === 'function' ? trailing({
    color: scale(0.66).hex(),
    size: 18
  }) : trailing;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    style: [styles.container, variant === 'filled' && {
      backgroundColor: scale(0.08).hex()
    }, style]
  }, rest), /*#__PURE__*/_react.default.createElement(_Pressable.default, {
    pressEffect: pressEffect,
    pressEffectColor: pressEffectColor ?? scale(0.87).hex(),
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
    testOnly_pressed: testOnly_pressed,
    style: [styles.contentContainer, contentContainerStyle]
  }, leadingElement && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.leadingContainer, leadingContainerStyle]
  }, leadingElement), labelElement, children, trailingElement && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.trailingContainer, trailingContainerStyle]
  }, trailingElement), variant === 'outlined' && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.outline, {
      borderColor: scale(0.26).hex()
    }]
  })));
};
const styles = _reactNative.StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden'
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 32
  },
  leadingContainer: {
    marginStart: -8,
    marginEnd: 8
  },
  trailingContainer: {
    marginStart: 8,
    marginEnd: -4
  },
  outline: {
    borderWidth: 1,
    borderRadius: 16
  }
});
var _default = exports.default = Chip;
//# sourceMappingURL=Chip.js.map