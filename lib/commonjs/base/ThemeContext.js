"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _defaultTheme = require("./defaultTheme");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ThemeContext = exports.ThemeContext = /*#__PURE__*/(0, _react.createContext)(_defaultTheme.defaultTheme);
const useTheme = () => (0, _react.useContext)(ThemeContext);
exports.useTheme = useTheme;
const ThemeProvider = ({
  theme,
  children
}) => {
  const colorScheme = (0, _reactNative.useColorScheme)();
  const value = (0, _react.useMemo)(() => theme ? theme : colorScheme === 'dark' ? _defaultTheme.darkTheme : _defaultTheme.defaultTheme, [colorScheme, theme]);
  return /*#__PURE__*/_react.default.createElement(ThemeContext.Provider, {
    value: value
  }, children);
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeContext.js.map