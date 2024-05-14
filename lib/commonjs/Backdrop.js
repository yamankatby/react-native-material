"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Surface = _interopRequireDefault(require("./Surface"));
var _useStyles = require("./hooks/use-styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Backdrop = ({
  revealed = false,
  header,
  headerHeight,
  backLayer,
  backLayerHeight,
  subheader,
  subheaderHeight,
  style,
  headerContainerStyle,
  backLayerContainerStyle,
  frontLayerContainerStyle,
  subheaderContainerStyle,
  children
}) => {
  const [currentHeaderHeight, setCurrentHeaderHeight] = (0, _react.useState)(headerHeight ?? 0);
  const [currentBackLayerHeight, setCurrentBackLayerHeight] = (0, _react.useState)(backLayerHeight ?? 0);
  const [currentSubheaderHeight, setCurrentSubheaderHeight] = (0, _react.useState)(subheaderHeight ?? 0);
  const styles = (0, _useStyles.useStyles)(({
    palette
  }) => ({
    container: {
      flex: 1,
      backgroundColor: palette.primary.main,
      overflow: 'hidden'
    },
    frontLayer: {
      position: 'absolute',
      start: 0,
      end: 0,
      bottom: 0,
      backgroundColor: palette.surface.main,
      borderTopStartRadius: 16,
      borderTopEndRadius: 16,
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0,
      elevation: 1
    }
  }));
  const animated = (0, _react.useRef)(new _reactNative.Animated.Value(revealed ? 1 : 0)).current;
  (0, _react.useEffect)(() => {
    _reactNative.Animated.timing(animated, {
      toValue: revealed ? 1 : 0,
      duration: 300,
      useNativeDriver: false
    }).start();
  }, [revealed]);
  const dimensions = (0, _reactNative.useWindowDimensions)();
  const translateY = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, dimensions.height < currentHeaderHeight + currentBackLayerHeight ? dimensions.height - currentHeaderHeight - currentSubheaderHeight : currentBackLayerHeight]
  });
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [headerContainerStyle, {
      height: headerHeight
    }],
    onLayout: e => {
      if (!headerHeight) setCurrentHeaderHeight(e.nativeEvent.layout.height);
    }
  }, header), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [backLayerContainerStyle, {
      height: backLayerHeight
    }],
    onLayout: e => {
      if (!backLayerHeight) setCurrentBackLayerHeight(e.nativeEvent.layout.height);
    }
  }, backLayer), /*#__PURE__*/_react.default.createElement(_Surface.default, {
    style: [styles.frontLayer, {
      top: currentHeaderHeight,
      transform: [{
        translateY
      }]
    }, frontLayerContainerStyle]
  }, subheader && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [subheaderContainerStyle, {
      height: subheaderHeight
    }],
    onLayout: e => {
      if (!subheaderHeight) setCurrentSubheaderHeight(e.nativeEvent.layout.height);
    }
  }, subheader), children));
};
var _default = exports.default = Backdrop;
//# sourceMappingURL=Backdrop.js.map