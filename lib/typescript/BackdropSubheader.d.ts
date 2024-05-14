import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Color } from './hooks/use-palette-color';
export interface BackdropSubheaderProps {
    title?: string | React.ReactElement;
    leading?: React.ReactElement | ((props: {
        color: string;
        size: number;
    }) => React.ReactElement | null) | null;
    trailing?: React.ReactElement | ((props: {
        color: string;
        size: number;
    }) => React.ReactElement | null) | null;
    divider?: boolean | React.ReactElement;
    color?: Color;
    style?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    titleContainerStyle?: StyleProp<ViewStyle>;
    leadingContainerStyle?: StyleProp<ViewStyle>;
    trailingContainerStyle?: StyleProp<ViewStyle>;
}
declare const BackdropSubheader: React.FC<BackdropSubheaderProps>;
export default BackdropSubheader;
