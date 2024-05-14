import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { SurfaceProps } from './Surface';
import { PressableProps } from './Pressable';
import { Color } from './hooks/use-palette-color';
export interface ButtonProps extends Omit<SurfaceProps, 'hitSlop'>, Omit<PressableProps, 'style' | 'children'> {
    /**
     * The text content of the button.
     */
    title: string | React.ReactNode | ((props: {
        color: string;
    }) => React.ReactNode | null) | null;
    /**
     * The element placed before the `title`.
     */
    leading?: React.ReactNode | ((props: {
        color: string;
        size: number;
    }) => React.ReactNode | null) | null;
    /**
     * The element placed after the `title`.
     */
    trailing?: React.ReactNode | ((props: {
        color: string;
        size: number;
    }) => React.ReactNode | null) | null;
    /**
     * The style of the button.
     * - `text`: Text buttons are typically used for less important actions (low emphasis).
     * - `outlined`: Outlined buttons are used for more emphasis than text buttons due to the stroke (medium emphasis).
     * - `contained`: Contained buttons have more emphasis, as they use a color fill and shadow (high emphasis).
     *
     * @default "contained"
     */
    variant?: 'text' | 'outlined' | 'contained';
    /**
     * The main color of the button.
     * for `contained` buttons, this is the background color.
     * for `outlined` and `text` buttons, this is the color of the content (text, icons, etc.).
     *
     * @default "primary"
     */
    color?: Color;
    /**
     * The color of the `contained` buttons content (text, icons, etc.). No effect on `outlined` and `text` buttons.
     */
    tintColor?: Color;
    /**
     * Smaller horizontal padding, useful for `text` buttons in a row.
     *
     * @default false
     */
    compact?: boolean;
    /**
     * If `true`, no shadow is used. No effect on `outlined` and `text` buttons.
     *
     * @default false
     */
    disableElevation?: boolean;
    /**
     * If `false`, the button title is not rendered in upper case. No effect if you pass a React.Node as the `title` prop.
     *
     * @default true
     */
    uppercase?: boolean;
    /**
     * Whether to show a loading indicator.
     *
     * @default false
     */
    loading?: boolean;
    /**
     * The place where the loading indicator should appear.
     * - `leading`: The indicator will replace the `leading` element.
     * - `trailing`: The indicator will replace the `trailing` element.
     * - `overlay`: The indicator will be added as an overlay over the button.
     *
     * @default "leading"
     */
    loadingIndicatorPosition?: 'leading' | 'trailing' | 'overlay';
    /**
     * A React.Node to replace the default loading indicator. Also, you can pass a string to show a text (e.g. "Loading...").
     */
    loadingIndicator?: string | React.ReactNode | ((props: {
        color: string;
    }) => React.ReactNode | null) | null;
    /**
     * The style of the button's pressable component container.
     */
    pressableContainerStyle?: StyleProp<ViewStyle>;
    /**
     * The style of the button's container.
     */
    contentContainerStyle?: PressableProps['style'];
    /**
     * The style of the button's text. No effect if you pass a React.Node as the `title` prop.
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * The style of the button's leading element container.
     */
    leadingContainerStyle?: StyleProp<ViewStyle>;
    /**
     * The style of the button's trailing element container.
     */
    trailingContainerStyle?: StyleProp<ViewStyle>;
    /**
     * The style of the button's loading indicator overlay view. No effect if `loadingIndicatorPosition` is not `overlay`.
     */
    loadingOverlayContainerStyle?: StyleProp<ViewStyle>;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
