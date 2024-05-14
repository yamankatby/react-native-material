import React from 'react';
import { Color } from '../hooks/use-palette-color';
export type IconComponent = React.ComponentType<IconProps>;
export interface IconComponentProviderProps {
    IconComponent?: IconComponent | null;
}
export declare const IconComponentContext: React.Context<IconComponent | null>;
export declare const useIconComponent: () => IconComponent | null;
export declare const IconComponentProvider: React.FC<IconComponentProviderProps>;
export interface IconProps {
    name: string;
    size?: number;
    color?: Color;
    [key: string]: any;
}
export declare const Icon: React.FC<IconProps>;
