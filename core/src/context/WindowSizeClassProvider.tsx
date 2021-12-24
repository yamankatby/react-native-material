import React, { createContext, useContext, useMemo } from "react";
import { useWindowDimensions } from "react-native";

export type WindowSizeClass = "xs" | "sm" | "md" | "lg" | "xl";

export type WindowSizes = Record<WindowSizeClass, number>;

export const defaultWindowSizes: WindowSizes = { xs: 0, sm: 600, md: 905, lg: 1240, xl: 1440 };

export interface WindowSizeClassProviderProps {
  windowSizes?: WindowSizes;
}

export const WindowSizeClassContext = createContext<WindowSizeClass>("xs");

export const useWindowSizeClass = () => useContext(WindowSizeClassContext);

const WindowSizeClassProvider: React.FC<WindowSizeClassProviderProps> = ({
  windowSizes = defaultWindowSizes,
  children,
}) => {
  const { width } = useWindowDimensions();

  const windowSizeClass = useMemo(() => {
    if (width >= windowSizes.xs && width < windowSizes.sm) return "xs";
    if (width >= windowSizes.sm && width < windowSizes.md) return "sm";
    if (width >= windowSizes.md && width < windowSizes.lg) return "md";
    if (width >= windowSizes.lg && width < windowSizes.xl) return "lg";
    return "xl";
  }, [width, windowSizes]);

  return <WindowSizeClassContext.Provider value={windowSizeClass}>{children}</WindowSizeClassContext.Provider>;
};

export default WindowSizeClassProvider;
