"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _PortalContext = require("./base/PortalContext");
var _Surface = _interopRequireDefault(require("./Surface"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Dialog = ({
  visible = false,
  onDismiss,
  surfaceStyles,
  children
}) => {
  const [portalVisible, setPortalVisible] = (0, _react.useState)(visible);
  const animatedValue = (0, _react.useMemo)(() => new _reactNative.Animated.Value(visible ? 1 : 0), []);
  (0, _react.useEffect)(() => {
    if (visible) setPortalVisible(true);
    _reactNative.Animated.timing(animatedValue, {
      toValue: visible ? 1 : 0,
      duration: 225,
      easing: _reactNative.Easing.out(_reactNative.Easing.cubic),
      useNativeDriver: false
    }).start(() => {
      if (!visible) setPortalVisible(false);
    });
  }, [visible]);
  if (!portalVisible) return null;
  return /*#__PURE__*/_react.default.createElement(_PortalContext.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: onDismiss
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.backdrop, {
      opacity: animatedValue
    }]
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [_reactNative.StyleSheet.absoluteFill, styles.container, {
      opacity: animatedValue
    }],
    pointerEvents: "box-none",
    needsOffscreenAlphaCompositing: _reactNative.Platform.OS === 'android'
  }, /*#__PURE__*/_react.default.createElement(_Surface.default, {
    category: "medium",
    elevation: 24,
    style: [styles.surface, surfaceStyles]
  }, children)));
};
const styles = _reactNative.StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  surface: {
    width: 280,
    marginHorizontal: 40
  }
});
var _default = exports.default = Dialog;
//# sourceMappingURL=Dialog.js.map