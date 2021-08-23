import { createContext } from "react";
import { createTheme, Theme } from "../theme";

export const defaultTheme = createTheme();

export const ThemeContext = createContext<Theme>(defaultTheme);
