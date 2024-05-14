import React from 'react';
import { StyleProp, TextStyle, ViewProps, ViewStyle } from 'react-native';
import { PressableProps } from './Pressable';
import { Color } from './hooks/use-palette-color';
export interface ChipProps extends Omit<ViewProps, 'hitSlop'>, Omit<PressableProps, 'style' | 'children'> {
    /**
     * The text to display in the chip.
     */
    label: string | React.ReactNode | ((props: {
        color: string;
    }) => React.ReactNode | null) | null;
    /**
     * The element placed before the `label`.
     */
    leading?: React.ReactNode | ((props: {
        color: string;
        size: number;
    }) => React.ReactNode | null) | null;
    /**
     * The element placed after the `label`.
     */
    trailing?: React.ReactNode | ((props: {
        color: string;
        size: number;
    }) => React.ReactNode | null) | null;
    /**
     * The variant of the chip.
     * - `filled`: A filled chip.
     * - `outlined`: A solid background with a border.
     *
     * @default "filled"
     */
    variant?: 'filled' | 'outlined';
    /**
     * The color of the chip.
     */
    color?: Color;
    /**
     * The style of the chip's container.
     */
    contentContainerStyle?: PressableProps['style'];
    /**
     * The style of the chip's label.
     */
    labelStyle?: StyleProp<TextStyle>;
    /**
     * The style of the chip's leading element.
     */
    leadingContainerStyle?: StyleProp<ViewStyle>;
    /**
     * The style of the chip's trailing element.
     */
    trailingContainerStyle?: StyleProp<ViewStyle>;
}
declare const Chip: React.FC<ChipProps>;
export default Chip;
