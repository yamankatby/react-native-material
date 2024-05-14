"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSurfaceColorValue = exports.useSurfaceColor = void 0;
var _react = require("react");
var _chromaJs = _interopRequireDefault(require("chroma-js"));
var _ThemeContext = require("../base/ThemeContext");
var _useSurfaceScale = require("./use-surface-scale");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const domain = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map(n => n / 24 * 100);
const useSurfaceColor = () => {
  const {
    colorScheme
  } = (0, _ThemeContext.useTheme)();
  const surfaceScale = (0, _useSurfaceScale.useSurfaceScale)();
  return (0, _react.useMemo)(() => {
    if (colorScheme === 'light') return _chromaJs.default.scale([surfaceScale(0)]);
    return _chromaJs.default.scale([0, 0.05, 0.07, 0.08, 0.09, 0.11, 0.12, 0.14, 0.15, 0.1].map(c => surfaceScale(c))).domain(domain);
  }, [colorScheme, surfaceScale]);
};
exports.useSurfaceColor = useSurfaceColor;
const useSurfaceColorValue = elevation => {
  const surfaceScale = useSurfaceColor();
  return (0, _react.useMemo)(() => surfaceScale(elevation).hex(), [surfaceScale, elevation]);
};
exports.useSurfaceColorValue = useSurfaceColorValue;
//# sourceMappingURL=use-surface-color.js.map