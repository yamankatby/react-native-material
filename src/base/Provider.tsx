import React from 'react';
import { Provider as WindowSizeProvider, ProviderProps as WindowSizeProviderProps } from 'react-native-window-size';
import { SpacingFuncProvider, SpacingFuncProviderProps } from 'react-native-flex-layout';
import { ThemeProvider, ThemeProviderProps } from './ThemeContext';
import { IconComponentProvider, IconComponentProviderProps } from './IconComponentContext';
import { Outlet, PortalProvider } from './PortalContext';

export interface ProviderProps extends ThemeProviderProps, SpacingFuncProviderProps, IconComponentProviderProps {
  breakpoints?: WindowSizeProviderProps['breakpoints'];
}

export const Provider: React.FC<ProviderProps> = ({
  theme,
  breakpoints = { xs: 0, sm: 600, md: 905, lg: 1240, xl: 1440 },
  spacingFunc,
  IconComponent,
  children,
}) => (
  <ThemeProvider theme={theme}>
    <WindowSizeProvider breakpoints={breakpoints}>
      <SpacingFuncProvider spacingFunc={spacingFunc}>
        <IconComponentProvider IconComponent={IconComponent}>
          <PortalProvider>
            {children}
            <Outlet />
          </PortalProvider>
        </IconComponentProvider>
      </SpacingFuncProvider>
    </WindowSizeProvider>
  </ThemeProvider>
);
