import React, { createContext } from "react";

export type IconRenderFunction = (props: { name: string; size?: number; color?: string }) => React.ReactElement;

export interface IconsProviderProps {
  render?: IconRenderFunction;
}

export const IconsContext = createContext<IconRenderFunction | null>(null);

const IconsProvider: React.FC<IconsProviderProps> = ({ render, children }) => (
  <IconsContext.Provider value={render || null}>{children}</IconsContext.Provider>
);

export default IconsProvider;
