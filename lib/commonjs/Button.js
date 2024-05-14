"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Surface = _interopRequireDefault(require("./Surface"));
var _Text = _interopRequireDefault(require("./Text"));
var _ActivityIndicator = _interopRequireDefault(require("./ActivityIndicator"));
var _Pressable = _interopRequireDefault(require("./Pressable"));
var _usePaletteColor = require("./hooks/use-palette-color");
var _useSurfaceScale = require("./hooks/use-surface-scale");
var _useStyles = require("./hooks/use-styles");
var _useAnimatedElevation = require("./hooks/use-animated-elevation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Button = ({
  title,
  leading,
  trailing,
  variant = 'contained',
  color = 'primary',
  tintColor,
  compact = false,
  disableElevation = false,
  uppercase = true,
  loading = false,
  loadingIndicatorPosition = 'leading',
  loadingIndicator,
  style,
  pressableContainerStyle,
  contentContainerStyle,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
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
  const surfaceScale = (0, _useSurfaceScale.useSurfaceScale)();
  const p = (0, _usePaletteColor.usePaletteColor)(disabled ? surfaceScale(0.12).hex() : color, disabled ? surfaceScale(0.35).hex() : tintColor);
  const contentColor = (0, _react.useMemo)(() => variant === 'contained' ? p.on : disabled ? p.on : p.main, [variant, p, disabled]);
  const hasLeading = (0, _react.useMemo)(() => !!leading || loading && loadingIndicatorPosition === 'leading', [leading, loading, loadingIndicatorPosition]);
  const hasTrailing = (0, _react.useMemo)(() => !!trailing || loading && loadingIndicatorPosition === 'trailing', [trailing, loading, loadingIndicatorPosition]);
  const styles = (0, _useStyles.useStyles)(({
    shapes
  }) => ({
    container: {
      backgroundColor: variant === 'contained' ? p.main : 'transparent'
    },
    outline: {
      ...shapes.small,
      borderWidth: 1,
      borderColor: surfaceScale(0.12).hex()
    },
    pressableContainer: {
      ...shapes.small,
      overflow: 'hidden'
    },
    pressable: {
      minWidth: 64,
      height: 36,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingStart: hasLeading ? compact ? 6 : 12 : compact ? 8 : 16,
      paddingEnd: hasTrailing ? compact ? 6 : 12 : compact ? 8 : 16
    },
    titleStyle: {
      textTransform: uppercase ? 'uppercase' : 'none',
      opacity: loading && loadingIndicatorPosition === 'overlay' ? 0 : 1
    },
    leadingContainer: {
      marginEnd: compact ? 6 : 8,
      opacity: loading && loadingIndicatorPosition === 'overlay' ? 0 : 1
    },
    trailingContainer: {
      marginStart: compact ? 6 : 8,
      opacity: loading && loadingIndicatorPosition === 'overlay' ? 0 : 1
    },
    loadingOverlayContainer: {
      ..._reactNative.StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }), [variant, uppercase, compact, loading, loadingIndicatorPosition, p, hasLeading, hasTrailing, surfaceScale]);
  const getTitle = () => {
    switch (typeof title) {
      case 'string':
        return /*#__PURE__*/_react.default.createElement(_Text.default, {
          variant: "button",
          selectable: false,
          style: [{
            color: contentColor
          }, styles.titleStyle, titleStyle]
        }, title);
      case 'function':
        return title({
          color: contentColor
        });
      default:
        return title;
    }
  };
  const getLoadingIndicator = () => {
    if (!loadingIndicator) return /*#__PURE__*/_react.default.createElement(_ActivityIndicator.default, {
      color: contentColor
    });
    switch (typeof loadingIndicator) {
      case 'string':
        return /*#__PURE__*/_react.default.createElement(_Text.default, {
          variant: "button",
          style: {
            color: contentColor
          }
        }, loadingIndicator);
      case 'function':
        return loadingIndicator({
          color: contentColor
        });
      default:
        return loadingIndicator;
    }
  };
  const getLeading = () => {
    if (loading && loadingIndicatorPosition === 'leading') return getLoadingIndicator();
    return typeof leading === 'function' ? leading({
      color: contentColor,
      size: 18
    }) : leading;
  };
  const getTrailing = () => {
    if (loading && loadingIndicatorPosition === 'trailing') return getLoadingIndicator();
    return typeof trailing === 'function' ? trailing({
      color: contentColor,
      size: 18
    }) : trailing;
  };
  const [hovered, setHovered] = (0, _react.useState)(false);
  const handleMouseEnter = (0, _react.useCallback)(event => {
    onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter(event);
    setHovered(true);
  }, [onMouseEnter]);
  const handleMouseLeave = (0, _react.useCallback)(event => {
    onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave(event);
    setHovered(false);
  }, [onMouseLeave]);
  const [pressed, setPressed] = (0, _react.useState)(false);
  const handlePressIn = (0, _react.useCallback)(event => {
    onPressIn === null || onPressIn === void 0 || onPressIn(event);
    setPressed(true);
  }, [onPressIn]);
  const handlePressOut = (0, _react.useCallback)(event => {
    onPressOut === null || onPressOut === void 0 || onPressOut(event);
    setPressed(false);
  }, [onPressOut]);
  const animatedElevation = (0, _useAnimatedElevation.useAnimatedElevation)(variant === 'contained' && !disableElevation && !disabled ? pressed ? 8 : hovered ? 4 : 2 : 0);
  return /*#__PURE__*/_react.default.createElement(_Surface.default, _extends({
    category: "small",
    style: [animatedElevation, styles.container, style]
  }, rest), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.pressableContainer, pressableContainerStyle]
  }, /*#__PURE__*/_react.default.createElement(_Pressable.default, {
    style: [styles.pressable, contentContainerStyle],
    pressEffect: pressEffect,
    pressEffectColor: pressEffectColor ?? contentColor,
    onPress: onPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    onLongPress: onLongPress,
    onBlur: onBlur,
    onFocus: onFocus,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    delayLongPress: delayLongPress,
    disabled: disabled,
    hitSlop: hitSlop,
    pressRetentionOffset: pressRetentionOffset,
    android_disableSound: android_disableSound,
    android_ripple: android_ripple,
    testOnly_pressed: testOnly_pressed
  }, hasLeading && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.leadingContainer, leadingContainerStyle]
  }, getLeading()), getTitle(), hasTrailing && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.trailingContainer, trailingContainerStyle]
  }, getTrailing()), loading && loadingIndicatorPosition === 'overlay' && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.loadingOverlayContainer, loadingOverlayContainerStyle]
  }, getLoadingIndicator()))), variant === 'outlined' && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.outline],
    pointerEvents: "none"
  }));
};
var _default = exports.default = Button;
//# sourceMappingURL=Button.js.map