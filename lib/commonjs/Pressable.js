"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _chromaJs = _interopRequireDefault(require("chroma-js"));
var _usePaletteColor = require("./hooks/use-palette-color");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Pressable = ({
  pressEffect = _reactNative.Platform.select({
    android: 'android-ripple',
    web: 'ripple',
    default: 'highlight'
  }),
  pressEffectColor = 'on-background',
  onLayout,
  onPressIn,
  onPressOut,
  onFocus,
  onBlur,
  android_ripple,
  onMouseEnter,
  onMouseLeave,
  children,
  ...rest
}) => {
  const {
    main: color
  } = (0, _usePaletteColor.usePaletteColor)(pressEffectColor);
  const [size, setSize] = (0, _react.useState)({
    width: 0,
    height: 0
  });
  const [ripples, setRipples] = (0, _react.useState)([]);
  const handleLayout = (0, _react.useCallback)(event => {
    const {
      width,
      height
    } = event.nativeEvent.layout;
    setSize({
      width,
      height
    });
    onLayout === null || onLayout === void 0 || onLayout(event);
  }, [onLayout]);
  const [pressed, setPressed] = (0, _react.useState)(false);
  const handlePressIn = (0, _react.useCallback)(event => {
    setPressed(true);
    onPressIn === null || onPressIn === void 0 || onPressIn(event);
    if (pressEffect === 'ripple') {
      const {
        locationX,
        locationY
      } = event.nativeEvent;
      const x = (locationX ?? size.width / 2) - 0.5;
      const y = (locationY ?? size.height / 2) - 0.5;
      const scale = new _reactNative.Animated.Value(0);
      const opacity = new _reactNative.Animated.Value(1);
      const ripple = {
        key: `${Date.now() + Math.random()}`,
        style: {
          start: x,
          top: y,
          transform: [{
            scale
          }],
          opacity
        }
      };
      setRipples(prevState => [...prevState, ripple]);
      _reactNative.Animated.timing(scale, {
        toValue: Math.max(size.width * 1.25 + Math.abs(size.width / 2 - x) * 2, size.height * 1.25 + Math.abs(size.height / 2 - y) * 2),
        easing: _reactNative.Easing.out(_reactNative.Easing.ease),
        duration: 400,
        useNativeDriver: false
      }).start();
    }
  }, [onPressIn, pressEffect, size]);
  const handlePressOut = (0, _react.useCallback)(event => {
    setPressed(false);
    onPressOut === null || onPressOut === void 0 || onPressOut(event);
    if (pressEffect === 'ripple' && ripples.length) {
      _reactNative.Animated.timing(ripples[ripples.length - 1].style.opacity, {
        toValue: 0,
        easing: _reactNative.Easing.out(_reactNative.Easing.ease),
        duration: 400,
        useNativeDriver: false
      }).start(() => {
        setRipples(prevState => prevState.slice(1));
      });
    }
  }, [pressEffect, ripples, onPressOut]);
  const [focused, setFocused] = (0, _react.useState)(false);
  const handleFocus = (0, _react.useCallback)(event => {
    setFocused(true);
    onFocus === null || onFocus === void 0 || onFocus(event);
  }, [onFocus]);
  const handleBlur = (0, _react.useCallback)(event => {
    setFocused(false);
    onBlur === null || onBlur === void 0 || onBlur(event);
  }, [onBlur]);
  const [hovered, setHovered] = (0, _react.useState)(false);
  const handleMouseEnter = (0, _react.useCallback)(event => {
    setHovered(true);
    onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter(event);
  }, [onMouseEnter]);
  const handleMouseLeave = (0, _react.useCallback)(event => {
    setHovered(false);
    onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave(event);
  }, [onMouseLeave]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.Pressable, _extends({
    android_ripple: pressEffect === 'android-ripple' ? android_ripple ?? {
      color: (0, _chromaJs.default)(color).alpha(0.26).hex()
    } : undefined,
    onLayout: handleLayout,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, rest), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, {
      backgroundColor: hovered && !rest.disabled ? (0, _chromaJs.default)(color).alpha(0.04).hex() : 'transparent'
    }, {
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    }]
  }), focused && !rest.disabled && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, {
      backgroundColor: (0, _chromaJs.default)(color).alpha(0.12).hex()
    }]
  }), pressEffect === 'highlight' && pressed && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, {
      backgroundColor: (0, _chromaJs.default)(color).alpha(0.26).hex()
    }]
  }), pressEffect === 'ripple' && ripples.length !== 0 && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.effectContainer]
  }, ripples.map(ripple => /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    key: ripple.key,
    style: [styles.ripple, {
      backgroundColor: (0, _chromaJs.default)(color).alpha(0.1).hex()
    }, ripple.style]
  }))), children);
};
const styles = _reactNative.StyleSheet.create({
  effectContainer: {
    overflow: 'hidden'
  },
  ripple: {
    position: 'absolute',
    width: 1,
    height: 1,
    borderRadius: 0.5
  }
});
var _default = exports.default = Pressable;
//# sourceMappingURL=Pressable.js.map