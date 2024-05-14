"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _chromaJs = _interopRequireDefault(require("chroma-js"));
var _useSurfaceColor = require("./hooks/use-surface-color");
var _ThemeContext = require("./base/ThemeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DialogContent = ({
  children
}) => {
  const theme = (0, _ThemeContext.useTheme)();
  const backgroundColor = (0, _useSurfaceColor.useSurfaceColorValue)(24);
  const scale = (0, _react.useMemo)(() => _chromaJs.default.scale([backgroundColor, theme.palette.surface.on]), [backgroundColor, theme.palette.surface.on]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, {
      borderColor: scale(0.08).hex()
    }]
  }, children);
};
const styles = _reactNative.StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 20
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
  }
});
var _default = exports.default = DialogContent;
//# sourceMappingURL=DialogContent.js.map