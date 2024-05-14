import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { TypographyVariant } from './base/ThemeContext';
import { Color } from './hooks/use-palette-color';
export interface TextProps extends RNTextProps {
    /**
     * The variant of the text.
     *
     * @default "body1"
     */
    variant?: TypographyVariant;
    /**
     * The color of the text.
     *
     * @default "on-background"
     */
    color?: Color;
}
declare const Text: React.FC<TextProps>;
export default Text;
