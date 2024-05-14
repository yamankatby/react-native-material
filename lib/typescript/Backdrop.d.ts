import React from 'react';
import { Animated, StyleProp, ViewProps, ViewStyle } from 'react-native';
export interface BackdropProps {
    revealed?: boolean;
    header?: React.ReactElement | null;
    headerHeight?: number;
    backLayer?: React.ReactElement | null;
    backLayerHeight?: number;
    subheader?: React.ReactElement | null;
    subheaderHeight?: number;
    style?: StyleProp<ViewStyle>;
    headerContainerStyle?: StyleProp<ViewStyle>;
    backLayerContainerStyle?: StyleProp<ViewStyle>;
    frontLayerContainerStyle?: Animated.AnimatedProps<ViewProps>['style'];
    subheaderContainerStyle?: StyleProp<ViewStyle>;
}
declare const Backdrop: React.FC<BackdropProps>;
export default Backdrop;
