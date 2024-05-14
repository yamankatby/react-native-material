import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export interface BannerProps {
    text: string | React.ReactElement | null;
    illustration?: React.ReactElement | ((props: {
        size: number;
    }) => React.ReactElement | null) | null;
    buttons: React.ReactElement | React.ReactElement[] | null;
    style?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    illustrationContainerStyle?: StyleProp<ViewStyle>;
    textContainerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    actionsContainerStyle?: StyleProp<ViewStyle>;
}
declare const Banner: React.FC<BannerProps>;
export default Banner;
