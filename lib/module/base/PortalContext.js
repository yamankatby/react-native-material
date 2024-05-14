import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
export const PortalContext = /*#__PURE__*/createContext(null);
export const usePortalContext = () => {
  const portal = useContext(PortalContext);
  if (!portal) {
    throw new Error('usePortalContext must be used within a PortalContext');
  }
  return portal;
};
export const PortalProvider = ({
  children
}) => {
  const [portals, setPortals] = useState([]);
  return /*#__PURE__*/React.createElement(PortalContext.Provider, {
    value: {
      portals,
      setPortals
    }
  }, children);
};
export const Outlet = () => {
  const {
    portals
  } = usePortalContext();
  return /*#__PURE__*/React.createElement(React.Fragment, null, portals.map(({
    key,
    children
  }) => /*#__PURE__*/React.createElement(View, {
    key: key,
    pointerEvents: "box-none",
    style: StyleSheet.absoluteFill
  }, children)));
};
export const Portal = ({
  key,
  children
}) => {
  const {
    setPortals
  } = usePortalContext();
  const _key = useMemo(() => key ?? `${Date.now() + Math.random()}`, [key]);
  useEffect(() => {
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
//# sourceMappingURL=PortalContext.js.map