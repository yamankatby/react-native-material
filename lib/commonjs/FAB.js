"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Surface = _interopRequireDefault(require("./Surface"));
var _Pressable = _interopRequireDefault(require("./Pressable"));
var _Text = _interopRequireDefault(require("./Text"));
var _ActivityIndicator = _interopRequireDefault(require("./ActivityIndicator"));
var _usePaletteColor = require("./hooks/use-palette-color");
var _useStyles = require("./hooks/use-styles");
var _useAnimatedElevation = require("./hooks/use-animated-elevation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const FAB = ({
  icon,
  label,
  variant = 'standard',
  size = 'default',
  color = 'secondary',
  tintColor,
  loading = false,
  loadingIndicator,
  loadingIndicatorPosition = 'icon',
  visible = true,
  style,
  pressableContainerStyle,
  contentContainerStyle,
  iconContainerStyle,
  labelContainerStyle,
  labelStyle,
  loadingOverlayContainerStyle,
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
  const palette = (0, _usePaletteColor.usePaletteColor)(color, tintColor);
  const hasIcon = (0, _react.useMemo)(() => icon || loading && loadingIndicatorPosition === 'icon', [icon, loading, loadingIndicatorPosition]);
  const styles = (0, _useStyles.useStyles)(() => ({
    container: {
      backgroundColor: palette.main,
      borderRadius: size === 'default' ? 28 : 20
    },
    pressableContainer: {
      borderRadius: size === 'default' ? 28 : 20,
      overflow: 'hidden'
    },
    pressable: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingStart: variant === 'extended' ? hasIcon ? size === 'default' ? 12 : 6 : size === 'default' ? 20 : 10 : size === 'default' ? 16 : 8,
      paddingEnd: variant === 'extended' ? size === 'default' ? 20 : 10 : size === 'default' ? 16 : 8,
      paddingVertical: size === 'default' ? 16 : 8
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24
    },
    labelContainer: {
      marginStart: hasIcon ? size === 'default' ? 12 : 6 : 0
    },
    loadingOverlayContainer: {
      ..._reactNative.StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.main
    }
  }), [variant, size, palette, hasIcon]);
  const animated = (0, _react.useRef)(new _reactNative.Animated.Value(visible ? 1 : 0)).current;
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(animated, {
      toValue: visible ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [visible]);
  const getLoadingIndicator = () => {
    if (!loadingIndicator) return /*#__PURE__*/_react.default.createElement(_ActivityIndicator.default, {
      color: palette.on
    });
    switch (typeof loadingIndicator) {
      case 'string':
        return /*#__PURE__*/_react.default.createElement(_Text.default, {
          variant: "button",
          style: {
            color: palette.on
          }
        }, loadingIndicator);
      case 'function':
        return loadingIndicator({
          color: palette.on
        });
      default:
        return loadingIndicator;
    }
  };
  const getIcon = () => {
    if (loading && loadingIndicatorPosition === 'icon') return getLoadingIndicator();
    return typeof icon === 'function' ? icon({
      color: palette.on,
      size: 24
    }) : icon;
  };
  const getLabel = () => {
    switch (typeof label) {
      case 'string':
        return /*#__PURE__*/_react.default.createElement(_Text.default, {
          variant: "button",
          selectable: false,
          style: [{
            color: palette.on
          }, labelStyle]
        }, label);
      case 'function':
        return label({
          color: palette.on
        });
      default:
        return label;
    }
  };
  const [pressed, setPressed] = (0, _react.useState)(false);
  const handlePressIn = (0, _react.useCallback)(event => {
    onPressIn === null || onPressIn === void 0 || onPressIn(event);
    setPressed(true);
  }, [onPressIn]);
  const handlePressOut = (0, _react.useCallback)(event => {
    onPressOut === null || onPressOut === void 0 || onPressOut(event);
    setPressed(false);
  }, [onPressOut]);
  const animatedElevation = (0, _useAnimatedElevation.useAnimatedElevation)(pressed ? 12 : 6);
  return /*#__PURE__*/_react.default.createElement(_Surface.default, _extends({
    style: [animatedElevation, styles.container, {
      transform: [{
        scale: animated
      }]
    }, style]
  }, rest), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.pressableContainer, pressableContainerStyle]
  }, /*#__PURE__*/_react.default.createElement(_Pressable.default, {
    style: [styles.pressable, contentContainerStyle],
    pressEffect: pressEffect,
    pressEffectColor: pressEffectColor ?? palette.on,
    onPress: onPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
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
  }, hasIcon && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.iconContainer, iconContainerStyle]
  }, getIcon()), variant === 'extended' && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.labelContainer, labelContainerStyle]
  }, getLabel()), loading && loadingIndicatorPosition === 'overlay' && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.loadingOverlayContainer, loadingOverlayContainerStyle]
  }, getLoadingIndicator()))));
};
var _default = exports.default = FAB;
//# sourceMappingURL=FAB.js.map