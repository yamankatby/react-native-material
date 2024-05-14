import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { SurfaceProps } from './Surface';
import { PressableProps } from './Pressable';
import { Color } from './hooks/use-palette-color';
export interface FABProps extends Omit<SurfaceProps, 'hitSlop'>, Omit<PressableProps, 'style' | 'children'> {
    icon?: React.ReactElement | ((props: {
        color: string;
        size: number;
    }) => React.ReactElement | null) | null;
    label?: string | React.ReactElement | ((props: {
        color: string;
    }) => React.ReactElement | null) | null;
    variant?: 'standard' | 'extended';
    size?: 'default' | 'mini';
    color?: Color;
    tintColor?: Color;
    loading?: boolean;
    loadingIndicator?: string | React.ReactElement | ((props: {
        color: string;
    }) => React.ReactElement | null) | null;
    loadingIndicatorPosition?: 'icon' | 'overlay';
    visible?: boolean;
    pressableContainerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: PressableProps['style'];
    iconContainerStyle?: StyleProp<ViewStyle>;
    labelContainerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    loadingOverlayContainerStyle?: StyleProp<ViewStyle>;
}
declare const FAB: React.FC<FABProps>;
export default FAB;
