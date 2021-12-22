import { useMemo } from "react";
import { ScreenSizeUtility, useScreenSizeUtility } from "./use-screen-size-utility";

export const useScreenSizeValue: ScreenSizeUtility = (base, query) => {
  const screenSizeUtility = useScreenSizeUtility();
  return useMemo(() => screenSizeUtility(base, query), [screenSizeUtility, base, query]);
}
