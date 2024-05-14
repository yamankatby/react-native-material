"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePaletteColor = void 0;
var _react = require("react");
var _chromaJs = _interopRequireDefault(require("chroma-js"));
var _ThemeContext = require("../base/ThemeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const usePaletteColor = (main, on) => {
  const {
    palette
  } = (0, _ThemeContext.useTheme)();
  return (0, _react.useMemo)(() => {
    let _main = main;
    if (palette[main]) _main = palette[main].main;else if (main.startsWith('on-') && palette[main.replace('on-', '')]) _main = palette[main.replace('on-', '')].on;
    let _on;
    if (on) {
      if (palette[on]) _on = palette[on].main;else if (on.startsWith('on-') && palette[on.replace('on-', '')]) _on = palette[on.replace('on-', '')].on;else _on = on;
    } else {
      _on = _chromaJs.default.contrast(_main, 'white') > 4.5 ? '#FFFFFF' : '#000000';
    }
    return {
      main: _main,
      on: _on
    };
  }, [palette, main, on]);
};
exports.usePaletteColor = usePaletteColor;
//# sourceMappingURL=use-palette-color.js.map