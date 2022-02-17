import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

export const PortalContext = createContext<{
  portals: PortalProps[];
  setPortals: Dispatch<SetStateAction<PortalProps[]>>;
} | null>(null);

export const usePortalContext = () => {
  const portal = useContext(PortalContext);
  if (!portal) {
    throw new Error('usePortalContext must be used within a PortalContext');
  }
  return portal;
};

export const PortalProvider: React.FC = ({ children }) => {
  const [portals, setPortals] = useState<PortalProps[]>([]);

  return <PortalContext.Provider value={{ portals, setPortals }}>{children}</PortalContext.Provider>;
};

export const Outlet: React.FC = () => {
  const { portals } = usePortalContext();

  return (
    <React.Fragment>
      {portals.map(({ key, children }) => (
        <View key={key} pointerEvents="box-none" style={StyleSheet.absoluteFill}>
          {children}
        </View>
      ))}
    </React.Fragment>
  );
};

export interface PortalProps {
  key?: React.Key;

  children?: React.ReactNode;
}

export const Portal: React.FC<PortalProps> = ({ key, children }) => {
  const { setPortals } = usePortalContext();

  const _key = useMemo(() => key ?? `${Date.now() + Math.random()}`, [key]);

  useEffect(() => {
    setPortals((portals) => [...portals, { key: _key, children }]);

    return () => {
      setPortals((portals) => portals.filter((p) => p.key !== _key));
    };
  }, [_key, setPortals, children]);

  return null;
};
