import { DependencyList } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type chroma from 'chroma-js';
import { SpacingFunc } from 'react-native-flex-layout';
import { WindowSize } from 'react-native-window-size';
import { Theme } from '../base/ThemeContext';
type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
export declare const useStyles: <T extends NamedStyles<T>>(factory: (utils: Theme & {
    surfaceScale: chroma.Scale<chroma.Color>;
    surfaceColor: chroma.Scale<chroma.Color>;
    windowSize: WindowSize;
    spacing: SpacingFunc;
}) => T, deps?: DependencyList | undefined) => T;
export {};
