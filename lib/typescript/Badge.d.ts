import React from 'react';
import { Animated, StyleProp, TextStyle, ViewProps } from 'react-native';
import { Color } from './hooks/use-palette-color';
export interface BadgeProps {
    label?: number | string | React.ReactElement | ((props: {
        color: string;
    }) => React.ReactElement | null) | null;
    showZero?: boolean;
    max?: number;
    visible?: boolean;
    color?: Color;
    tintColor?: Color;
    style?: Animated.AnimatedProps<ViewProps>['style'];
    labelStyle?: StyleProp<TextStyle>;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
