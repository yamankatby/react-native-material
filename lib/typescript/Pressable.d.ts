import React from 'react';
import { NativeSyntheticEvent, PressableProps as RNPressableProps, TargetedEvent } from 'react-native';
import { Color } from './hooks/use-palette-color';
export interface PressableProps extends RNPressableProps {
    pressEffect?: 'none' | 'highlight' | 'ripple' | 'android-ripple';
    pressEffectColor?: Color;
    onMouseEnter?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
    onMouseLeave?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
    style?: any;
}
declare const Pressable: React.FC<PressableProps>;
export default Pressable;
