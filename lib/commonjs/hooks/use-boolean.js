"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBoolean = void 0;
var _react = require("react");
/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
const useBoolean = (initialState = false) => {
  const [value, setValue] = (0, _react.useState)(initialState);
  const on = (0, _react.useCallback)(() => {
    setValue(true);
  }, []);
  const off = (0, _react.useCallback)(() => {
    setValue(false);
  }, []);
  const toggle = (0, _react.useCallback)(() => {
    setValue(prev => !prev);
  }, []);
  return [value, {
    on,
    off,
    toggle
  }];
};
exports.useBoolean = useBoolean;
//# sourceMappingURL=use-boolean.js.map