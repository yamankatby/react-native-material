import React, { createContext } from "react";

export type IconRenderFunction = (props: { name: string; size?: number; color?: string }) => React.ReactElement;

export interface IconsProviderProps {
  render: IconRenderFunction | null;
}

export const IconsContext = createContext<IconRenderFunction | null>(null);

const IconsProvider: React.FC<IconsProviderProps> = ({ render, children }) => (
  <IconsContext.Provider value={render}>{children}</IconsContext.Provider>
);

export default IconsProvider;
