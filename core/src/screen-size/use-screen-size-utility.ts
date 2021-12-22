import { ScreenSize, useScreenSize } from "./ScreenSizeProvider";
import { useCallback } from "react";

export type ScreenSizeUtility = <T>(base: T, query: Partial<Record<ScreenSize, T>>) => T;

export function useScreenSizeUtility(): ScreenSizeUtility {
  const screenSize = useScreenSize();

  return useCallback(
    (base, query) => {
      const sm = query.sm === undefined ? base : query.sm;
      const md = query.md === undefined ? sm : query.md;
      const lg = query.lg === undefined ? md : query.lg;
      const xl = query.xl === undefined ? lg : query.xl;

      switch (screenSize) {
        case "sm":
          return sm;
        case "md":
          return md;
        case "lg":
          return lg;
        case "xl":
          return xl;
        default:
          return base;
      }
    },
    [screenSize],
  );
}
