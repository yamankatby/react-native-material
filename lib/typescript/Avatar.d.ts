import React from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Color } from './hooks/use-palette-color';
export interface AvatarProps {
    label?: string | React.ReactElement | ((props: {
        color: string;
    }) => React.ReactElement | null) | null;
    image?: ImageSourcePropType | React.ReactElement | ((props: {
        size: number;
    }) => React.ReactElement | null) | null;
    icon?: React.ReactElement | ((props: {
        color: string;
        size: number;
    }) => React.ReactElement | null) | null;
    size?: number;
    color?: Color;
    tintColor?: Color;
    initials?: boolean;
    uppercase?: boolean;
    autoColor?: boolean;
    style?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    imageContainerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    imageStyle?: StyleProp<ImageStyle>;
}
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
