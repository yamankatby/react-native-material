import { useContext } from "react";
import { Theme } from "./theme";
import { ThemeContext } from "./ThemeProvider";

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
