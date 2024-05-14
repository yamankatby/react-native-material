"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Text = _interopRequireDefault(require("./Text"));
var _usePaletteColor = require("./hooks/use-palette-color");
var _ThemeContext = require("./base/ThemeContext");
var _useSurfaceScale = require("./hooks/use-surface-scale");
var _useStyles = require("./hooks/use-styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const TextInput = /*#__PURE__*/_react.default.forwardRef(({
  variant = 'filled',
  label,
  leading,
  trailing,
  color = 'primary',
  helperText,
  onMouseEnter,
  onMouseLeave,
  style,
  inputContainerStyle,
  inputStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  placeholder,
  onFocus,
  onBlur,
  ...rest
}, ref) => {
  const theme = (0, _ThemeContext.useTheme)();
  const surfaceScale = (0, _useSurfaceScale.useSurfaceScale)();
  const palette = (0, _usePaletteColor.usePaletteColor)(color);
  const leadingNode = typeof leading === 'function' ? leading({
    color: surfaceScale(0.62).hex(),
    size: 24
  }) : leading;
  const trailingNode = typeof trailing === 'function' ? trailing({
    color: surfaceScale(0.62).hex(),
    size: 24
  }) : trailing;
  const [hovered, setHovered] = (0, _react.useState)(false);
  const handleMouseEnter = (0, _react.useCallback)(event => {
    onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter(event);
    setHovered(true);
  }, [onMouseEnter]);
  const handleMouseLeave = (0, _react.useCallback)(event => {
    onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave(event);
    setHovered(false);
  }, [onMouseLeave]);
  const [focused, setFocused] = (0, _react.useState)(false);
  const handleFocus = (0, _react.useCallback)(event => {
    onFocus === null || onFocus === void 0 || onFocus(event);
    setFocused(true);
  }, [onFocus]);
  const handleBlur = (0, _react.useCallback)(event => {
    onBlur === null || onBlur === void 0 || onBlur(event);
    setFocused(false);
  }, [onBlur]);
  const focusAnimation = (0, _react.useMemo)(() => new _reactNative.Animated.Value(0), []);
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(focusAnimation, {
      toValue: focused ? 1 : 0,
      duration: 200,
      easing: _reactNative.Easing.out(_reactNative.Easing.ease),
      useNativeDriver: false
    }).start();
  }, [focused]);
  const active = (0, _react.useMemo)(() => {
    var _rest$value;
    return focused || (((_rest$value = rest.value) === null || _rest$value === void 0 ? void 0 : _rest$value.length) || 0) > 0;
  }, [focused, rest.value]);
  const activeAnimation = (0, _react.useMemo)(() => new _reactNative.Animated.Value(active ? 1 : 0), []);
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(activeAnimation, {
      toValue: active ? 1 : 0,
      duration: 200,
      easing: _reactNative.Easing.out(_reactNative.Easing.ease),
      useNativeDriver: false
    }).start();
  }, [active]);
  const styles = (0, _useStyles.useStyles)(() => ({
    inputContainer: {
      flexDirection: 'row',
      backgroundColor: variant === 'filled' ? focused ? surfaceScale(0.14).hex() : hovered ? surfaceScale(0.08).hex() : surfaceScale(0.04).hex() : variant === 'outlined' ? surfaceScale(0).hex() : undefined
    },
    input: {
      flex: 1,
      minHeight: variant === 'standard' ? 48 : 56,
      paddingStart: leadingNode ? 12 : variant === 'standard' ? 0 : 16,
      paddingEnd: trailingNode ? 12 : variant === 'standard' ? 0 : 16,
      color: surfaceScale(0.87).hex()
    },
    leading: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      marginStart: variant === 'standard' ? 0 : 12,
      marginVertical: variant === 'standard' ? 12 : 16
    },
    trailing: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      marginEnd: variant === 'standard' ? 0 : 12,
      marginVertical: variant === 'standard' ? 12 : 16
    },
    underline: {
      position: 'absolute',
      start: 0,
      end: 0,
      bottom: 0,
      height: 1,
      backgroundColor: hovered ? surfaceScale(0.87).hex() : surfaceScale(0.42).hex()
    },
    underlineFocused: {
      position: 'absolute',
      start: 0,
      end: 0,
      bottom: 0,
      height: 2,
      backgroundColor: palette.main
    },
    outline: {
      borderWidth: focused ? 2 : 1,
      borderColor: focused ? palette.main : hovered ? surfaceScale(0.87).hex() : surfaceScale(0.42).hex()
    },
    outlineLabelGap: {
      position: 'absolute',
      top: 0,
      start: -4,
      end: -4,
      height: focused ? 2 : 1,
      backgroundColor: surfaceScale(0).hex()
    },
    labelContainer: {
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      start: variant === 'standard' ? leadingNode ? 36 : 0 : leadingNode ? 48 : 16,
      height: variant === 'standard' ? 48 : 56
    },
    helperText: {
      color: surfaceScale(0.6).hex()
    }
  }), [palette.main, surfaceScale, !!leadingNode, !!trailingNode, variant, focused, hovered]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.inputContainer, variant !== 'standard' && theme.shapes.medium, variant === 'filled' && {
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0
    }, inputContainerStyle]
  }, leadingNode && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.leading, leadingContainerStyle]
  }, leadingNode), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    ref: ref,
    style: [styles.input, theme.typography.subtitle1, {
      paddingTop: variant === 'filled' && label ? 18 : 0
    }, inputStyle],
    placeholder: label ? focused ? placeholder : undefined : placeholder,
    selectionColor: palette.main,
    placeholderTextColor: surfaceScale(0.4).hex(),
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, rest)), trailingNode && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.trailing, trailingContainerStyle]
  }, trailingNode), (variant === 'filled' || variant === 'standard') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.underline],
    pointerEvents: "none"
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.underlineFocused, {
      transform: [{
        scaleX: focusAnimation
      }]
    }],
    pointerEvents: "none"
  })), variant === 'outlined' && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, theme.shapes.medium, styles.outline],
    pointerEvents: "none"
  }), label && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.labelContainer],
    pointerEvents: "none"
  }, variant === 'outlined' && /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.outlineLabelGap, {
      transform: [{
        scaleX: activeAnimation
      }]
    }]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.Text, {
    style: [theme.typography.subtitle1, {
      color: focusAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [surfaceScale(0.87).hex(), palette.main]
      }),
      fontSize: activeAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [theme.typography.subtitle1.fontSize ?? 16, 12]
      }),
      transform: [{
        translateY: activeAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, variant === 'filled' ? -12 : variant === 'outlined' ? -28 : -24]
        })
      }]
    }]
  }, label))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginTop: 4,
      marginHorizontal: 16
    }
  }, helperText && /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "body2",
    style: [styles.helperText]
  }, helperText)));
});
var _default = exports.default = TextInput;
//# sourceMappingURL=TextInput.js.map