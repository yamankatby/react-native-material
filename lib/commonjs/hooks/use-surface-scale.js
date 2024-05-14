"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSurfaceScale = void 0;
var _ThemeContext = require("../base/ThemeContext");
var _react = require("react");
var _chromaJs = _interopRequireDefault(require("chroma-js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const useSurfaceScale = () => {
  const {
    palette
  } = (0, _ThemeContext.useTheme)();
  return (0, _react.useMemo)(() => _chromaJs.default.scale([palette.surface.main, palette.surface.on]), [palette.surface]);
};
exports.useSurfaceScale = useSurfaceScale;
//# sourceMappingURL=use-surface-scale.js.map