import React from 'react';
import { ProviderProps as WindowSizeProviderProps } from 'react-native-window-size';
import { SpacingFuncProviderProps } from 'react-native-flex-layout';
import { ThemeProviderProps } from './ThemeContext';
import { IconComponentProviderProps } from './IconComponentContext';
export interface ProviderProps extends ThemeProviderProps, SpacingFuncProviderProps, IconComponentProviderProps {
    breakpoints?: WindowSizeProviderProps['breakpoints'];
}
export declare const Provider: React.FC<ProviderProps>;
