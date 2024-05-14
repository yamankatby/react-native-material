"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePortalContext = exports.PortalProvider = exports.PortalContext = exports.Portal = exports.Outlet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PortalContext = exports.PortalContext = /*#__PURE__*/(0, _react.createContext)(null);
const usePortalContext = () => {
  const portal = (0, _react.useContext)(PortalContext);
  if (!portal) {
    throw new Error('usePortalContext must be used within a PortalContext');
  }
  return portal;
};
exports.usePortalContext = usePortalContext;
const PortalProvider = ({
  children
}) => {
  const [portals, setPortals] = (0, _react.useState)([]);
  return /*#__PURE__*/_react.default.createElement(PortalContext.Provider, {
    value: {
      portals,
      setPortals
    }
  }, children);
};
exports.PortalProvider = PortalProvider;
const Outlet = () => {
  const {
    portals
  } = usePortalContext();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, portals.map(({
    key,
    children
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    key: key,
    pointerEvents: "box-none",
    style: _reactNative.StyleSheet.absoluteFill
  }, children)));
};
exports.Outlet = Outlet;
const Portal = ({
  key,
  children
}) => {
  const {
    setPortals
  } = usePortalContext();
  const _key = (0, _react.useMemo)(() => key ?? `${Date.now() + Math.random()}`, [key]);
  (0, _react.useEffect)(() => {
    setPortals(portals => [...portals, {
      key: _key,
      children
    }]);
    return () => {
      setPortals(portals => portals.filter(p => p.key !== _key));
    };
  }, [_key, setPortals, children]);
  return null;
};
exports.Portal = Portal;
//# sourceMappingURL=PortalContext.js.map