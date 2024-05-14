import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
export interface DividerProps {
    color?: string | undefined;
    inset?: number | undefined;
    leadingInset?: number | undefined;
    trailingInset?: number | undefined;
    style?: StyleProp<ViewStyle> | undefined;
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
