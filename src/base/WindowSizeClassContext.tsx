import React, { createContext, useContext, useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

export type WindowSizeClass = 'base' | 'sm' | 'md' | 'lg' | 'xl';

export type WindowSizes = Record<WindowSizeClass, number>;

export const defaultWindowSizes: WindowSizes = { base: 0, sm: 600, md: 905, lg: 1240, xl: 1440 };

export interface WindowSizeClassProviderProps {
  windowSizes?: WindowSizes;
}

export const WindowSizeClassContext = createContext<WindowSizeClass>('base');

export const useWindowSizeClass = () => useContext(WindowSizeClassContext);

export const WindowSizeClassProvider: React.FC<WindowSizeClassProviderProps> = ({
  windowSizes = defaultWindowSizes,
  children,
}) => {
  const { width } = useWindowDimensions();

  const windowSizeClass: WindowSizeClass = useMemo(() => {
    if (width >= windowSizes.base && width < windowSizes.sm) return 'base';
    if (width >= windowSizes.sm && width < windowSizes.md) return 'sm';
    if (width >= windowSizes.md && width < windowSizes.lg) return 'md';
    if (width >= windowSizes.lg && width < windowSizes.xl) return 'lg';
    return 'xl';
  }, [width, windowSizes]);

  return <WindowSizeClassContext.Provider value={windowSizeClass}>{children}</WindowSizeClassContext.Provider>;
};
