import React, { createContext, useContext } from 'react';
import { Color, usePaletteColor } from '../hooks/use-palette-color';

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

  color?: Color;

  [key: string]: any;
}

export const Icon: React.FC<IconProps> = ({ color = 'on-background', ...rest }) => {
  const IconComponent = useIconComponent();
  if (!IconComponent) {
    throw new Error('`IconComponent` is undefined. Seems like you forgot to wrap your component with `Provider`.');
  }
  const { main } = usePaletteColor(color);
  return <IconComponent {...rest} color={main} />;
};
