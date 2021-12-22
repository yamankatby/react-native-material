import React, { useContext, useEffect, useMemo } from "react";
import { PortalsContext } from "./PortalsProvider";

const Portal: React.FC = ({ children }) => {
  const portals = useContext(PortalsContext);

  if (!portals) {
    throw new Error("Portal must be used within a PortalProvider");
  }

  const key = useMemo(() => `${Date.now() + Math.random()}`, []);

  useEffect(() => {
    portals.setPortals(prevState => [...prevState, { key, children }]);
    return () => {
      portals.setPortals(prevState => prevState.filter(portal => portal.key !== key));
    };
  }, [portals.setPortals, key, children]);

  return null;
};

export default Portal;
