import React from 'react';
import { NativeSyntheticEvent, StyleProp, TargetedEvent, TextInputProps as RNTextInputProps, ViewStyle } from 'react-native';
import { Color } from './hooks/use-palette-color';
export interface TextInputProps extends RNTextInputProps {
    /**
     * The variant to use.
     *
     * @default "filled"
     */
    variant?: 'filled' | 'outlined' | 'standard';
    /**
     * The label to display.
     */
    label?: string;
    /**
     * The element placed before the text input.
     */
    leading?: React.ReactNode | ((props: {
        color: string;
        size: number;
    }) => React.ReactNode | null) | null;
    /**
     * The element placed after the text input.
     */
    trailing?: React.ReactNode | ((props: {
        color: string;
        size: number;
    }) => React.ReactNode | null) | null;
    /**
     * The color of the text input's content (e.g. label, icons, selection).
     *
     * @default "primary"
     */
    color?: Color;
    /**
     * The helper text to display.
     */
    helperText?: string;
    /**
     * Callback function to call when user moves pointer over the input.
     */
    onMouseEnter?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
    /**
     * Callback function to call when user moves pointer away from the input.
     */
    onMouseLeave?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
    /**
     * The style of the container view.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * The style of the text input container view.
     */
    inputContainerStyle?: StyleProp<ViewStyle>;
    /**
     * The style of the text input.
     */
    inputStyle?: RNTextInputProps['style'];
    /**
     * The style of the text input's leading element container.
     */
    leadingContainerStyle?: StyleProp<ViewStyle>;
    /**
     * The style of the text input's trailing element container.
     */
    trailingContainerStyle?: StyleProp<ViewStyle>;
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
