import React from 'react';
import { SpacingFuncProvider, SpacingFuncProviderProps } from 'react-native-flex-layout';
import { ThemeProvider, ThemeProviderProps } from './ThemeContext';
import { WindowSizeClassProvider, WindowSizeClassProviderProps } from './WindowSizeClassContext';
import { IconComponentProvider, IconComponentProviderProps } from './IconComponentContext';
import { Outlet, PortalProvider } from './PortalContext';

export type ProviderProps = ThemeProviderProps &
  WindowSizeClassProviderProps &
  SpacingFuncProviderProps &
  IconComponentProviderProps;

export const Provider: React.FC<ProviderProps> = ({ theme, windowSizes, spacingFunc, IconComponent, children }) => (
  <ThemeProvider theme={theme}>
    <WindowSizeClassProvider windowSizes={windowSizes}>
      <SpacingFuncProvider spacingFunc={spacingFunc}>
        <IconComponentProvider IconComponent={IconComponent}>
          <PortalProvider>
            {children}
            <Outlet />
          </PortalProvider>
        </IconComponentProvider>
      </SpacingFuncProvider>
    </WindowSizeClassProvider>
  </ThemeProvider>
);
