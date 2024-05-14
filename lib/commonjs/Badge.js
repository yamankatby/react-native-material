"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Text = _interopRequireDefault(require("./Text"));
var _usePaletteColor = require("./hooks/use-palette-color");
var _useStyles = require("./hooks/use-styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Badge = ({
  label,
  showZero = false,
  max = 99,
  visible = true,
  color = 'secondary',
  tintColor,
  style,
  labelStyle,
  children
}) => {
  const palette = (0, _usePaletteColor.usePaletteColor)(color, tintColor);
  const styles = (0, _useStyles.useStyles)(() => ({
    container: {
      minWidth: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 6,
      backgroundColor: palette.main,
      borderRadius: 10
    }
  }), [palette]);
  const isVisible = (0, _react.useMemo)(() => label === 0 ? visible && showZero : visible, [label, showZero, visible]);
  const animated = (0, _react.useRef)(new _reactNative.Animated.Value(isVisible ? 1 : 0)).current;
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(animated, {
      toValue: isVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [isVisible]);
  const getLabel = () => {
    switch (typeof label) {
      case 'number':
      case 'string':
        return /*#__PURE__*/_react.default.createElement(_Text.default, {
          variant: "body2",
          style: [{
            color: palette.on
          }, labelStyle]
        }, typeof label === 'number' && label > max ? `${max}+` : label);
      case 'function':
        return label({
          color: palette.on
        });
      default:
        return label;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.Animated.View, {
    style: [styles.container, {
      transform: [{
        scale: animated
      }]
    }, style]
  }, getLabel(), children);
};
var _default = exports.default = Badge;
//# sourceMappingURL=Badge.js.map