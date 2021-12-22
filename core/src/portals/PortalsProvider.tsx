import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

interface Portal {
  key: string;
  children: React.ReactNode;
}

export const PortalsContext = createContext<{
  portals: Portal[];
  setPortals: Dispatch<SetStateAction<Portal[]>>;
} | null>(null);

const PortalsProvider: React.FC = ({ children }) => {
  const [portals, setPortals] = useState<Portal[]>([]);
  return <PortalsContext.Provider value={{ portals, setPortals }}>{children}</PortalsContext.Provider>;
};

export const Outlet: React.FC = () => {
  const portals = useContext(PortalsContext);

  if (!portals) {
    throw new Error("Outlet must be rendered within a PortalsProvider");
  }

  return (
    <>
      {portals.portals.map(({ key, children }) => (
        <View key={key} pointerEvents="box-none" style={StyleSheet.absoluteFill}>
          {children}
        </View>
      ))}
    </>
  );
};

export default PortalsProvider;
