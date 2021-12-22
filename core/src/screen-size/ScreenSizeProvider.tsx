import React, { createContext, useContext, useMemo } from "react";
import { useWindowDimensions } from "react-native";

export type ScreenSize = "sm" | "md" | "lg" | "xl";

export type ScreenSizes = Record<ScreenSize, number>;

export const defaultScreenSizes: ScreenSizes = { sm: 600, md: 905, lg: 1240, xl: 1440 };

export interface ScreenSizeProviderProps {
  screenSizes?: ScreenSizes;
}

export const ScreenSizeContext = createContext<ScreenSize | null>(null);

export function useScreenSize(): ScreenSize | null {
  return useContext(ScreenSizeContext);
}

const ScreenSizeProvider: React.FC<ScreenSizeProviderProps> = ({ screenSizes = defaultScreenSizes, children }) => {
  const { width } = useWindowDimensions();

  const screenSize: ScreenSize | null = useMemo(() => {
    if (width < screenSizes.sm) return null;
    if (width >= screenSizes.sm && width < screenSizes.md) return "sm";
    if (width >= screenSizes.md && width < screenSizes.lg) return "md";
    if (width >= screenSizes.lg && width < screenSizes.xl) return "lg";
    return "xl";
  }, [screenSizes, width]);

  return <ScreenSizeContext.Provider value={screenSize}>{children}</ScreenSizeContext.Provider>;
};

export default ScreenSizeProvider;
