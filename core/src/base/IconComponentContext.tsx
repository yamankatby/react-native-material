import React, { createContext, useContext } from "react";

export type IconComponent = React.ComponentType<IconProps>;

export interface IconComponentProviderProps {
  IconComponent?: IconComponent | null;
}

export const IconComponentContext = createContext<IconComponent | null>(null);

export const useIconComponent = () => useContext(IconComponentContext);

export const IconComponentProvider: React.FC<IconComponentProviderProps> = ({ IconComponent, children }) => {
  return <IconComponentContext.Provider value={IconComponent ?? null}>{children}</IconComponentContext.Provider>;
};

export interface IconProps {
  name: string;

  size?: number;

  color?: string;

  [key: string]: any;
}

export const Icon: React.FC<IconProps> = props => {
  const IconComponent = useIconComponent();
  if (!IconComponent) {
    throw new Error("`IconComponent` is undefined. Seems like you forgot to wrap your component with `Provider`.");
  }
  return <IconComponent {...props} />;
};
