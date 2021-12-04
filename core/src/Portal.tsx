import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";

interface Portal {
  key: string;
  children: React.ReactNode;
}

const PortalsContext = createContext<{
  portals: Portal[];
  setPortals: Dispatch<SetStateAction<Portal[]>>;
} | null>(null);

const Outlet: React.FC = () => {
  const portals = useContext(PortalsContext)?.portals;
  return (
    <>
      {portals?.map(({ key, children }) => (
        <View key={key} pointerEvents="box-none" style={StyleSheet.absoluteFill}>
          {children}
        </View>
      ))}
    </>
  );
};

export const PortalProvider: React.FC = ({ children }) => {
  const [portals, setPortals] = useState<Portal[]>([]);
  return (
    <PortalsContext.Provider value={{ portals, setPortals }}>
      {children}
      <Outlet />
    </PortalsContext.Provider>
  );
};

export const Portal: React.FC = ({ children }) => {
  const portals = useContext(PortalsContext);

  const key = useMemo(() => `${Date.now() + Math.random()}`, []);

  useEffect(() => {
    if (!portals?.setPortals) return;
    portals.setPortals(prevState => [...prevState, { key, children }]);
    return () => {
      portals.setPortals(prevState => prevState.filter(portal => portal.key !== key));
    };
  }, [portals?.setPortals, key, children]);

  return null;
};
