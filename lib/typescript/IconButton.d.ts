import React from 'react';
import { ViewProps } from 'react-native';
import { PressableProps } from './Pressable';
import { Color } from './hooks/use-palette-color';
export interface IconButtonProps extends Omit<ViewProps, 'hitSlop'>, Omit<PressableProps, 'style' | 'children'> {
    /**
     * The element to render as the icon.
     */
    icon?: React.ReactNode | ((props: {
        color: string;
        size: number;
    }) => React.ReactNode | null) | null;
    /**
     * The color of the icon and the press effect.
     *
     * @default "on-background"
     */
    color?: Color;
    /**
     * The style of the icon's container view.
     */
    contentContainerStyle?: PressableProps['style'];
}
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;
