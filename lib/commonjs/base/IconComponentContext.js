"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIconComponent = exports.IconComponentProvider = exports.IconComponentContext = exports.Icon = void 0;
var _react = _interopRequireWildcard(require("react"));
var _usePaletteColor = require("../hooks/use-palette-color");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const IconComponentContext = exports.IconComponentContext = /*#__PURE__*/(0, _react.createContext)(null);
const useIconComponent = () => (0, _react.useContext)(IconComponentContext);
exports.useIconComponent = useIconComponent;
const IconComponentProvider = ({
  IconComponent,
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(IconComponentContext.Provider, {
    value: IconComponent ?? null
  }, children);
};
exports.IconComponentProvider = IconComponentProvider;
const Icon = ({
  color = 'on-background',
  ...rest
}) => {
  const IconComponent = useIconComponent();
  if (!IconComponent) {
    throw new Error('`IconComponent` is undefined. Seems like you forgot to wrap your component with `Provider`.');
  }
  const {
    main
  } = (0, _usePaletteColor.usePaletteColor)(color);
  return /*#__PURE__*/_react.default.createElement(IconComponent, _extends({}, rest, {
    color: main
  }));
};
exports.Icon = Icon;
//# sourceMappingURL=IconComponentContext.js.map