import React from "react";
import ThemeProvider, { ThemeProviderProps } from "./ThemeProvider";
import WindowSizeClassProvider, { WindowSizeClassProviderProps } from "./WindowSizeClassProvider";
import SpacingProvider, { SpacingProviderProps } from "./SpacingProvider";
import IconProvider, { IconProviderProps } from "./IconProvider";
import PortalProvider, { Outlet, PortalProviderProps } from "./PortalProvider";

export type ProviderProps = ThemeProviderProps &
  WindowSizeClassProviderProps &
  SpacingProviderProps &
  IconProviderProps &
  PortalProviderProps;

const Provider: React.FC<ProviderProps> = ({ theme, windowSizes, spacing, children }) => (
  <ThemeProvider theme={theme}>
    <WindowSizeClassProvider windowSizes={windowSizes}>
      <SpacingProvider spacing={spacing}>
        <IconProvider>
          <PortalProvider>
            {children}
            <Outlet />
          </PortalProvider>
        </IconProvider>
      </SpacingProvider>
    </WindowSizeClassProvider>
  </ThemeProvider>
);

export default Provider;
