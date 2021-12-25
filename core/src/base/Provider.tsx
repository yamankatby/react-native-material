import React from "react";
import { ThemeProvider, ThemeProviderProps } from "./ThemeContext";
import { WindowSizeClassProvider, WindowSizeClassProviderProps } from "./WindowSizeClassContext";
import { SpacingProvider, SpacingProviderProps } from "./SpacingContext";
import { IconComponentProvider, IconComponentProviderProps } from "./IconComponentContext";
import { Outlet, PortalProvider } from "./PortalContext";

export type ProviderProps = ThemeProviderProps &
  WindowSizeClassProviderProps &
  SpacingProviderProps &
  IconComponentProviderProps;

export const Provider: React.FC<ProviderProps> = ({ theme, windowSizes, spacing, IconComponent, children }) => (
  <ThemeProvider theme={theme}>
    <WindowSizeClassProvider windowSizes={windowSizes}>
      <SpacingProvider spacing={spacing}>
        <IconComponentProvider IconComponent={IconComponent}>
          <PortalProvider>
            {children}
            <Outlet />
          </PortalProvider>
        </IconComponentProvider>
      </SpacingProvider>
    </WindowSizeClassProvider>
  </ThemeProvider>
);
