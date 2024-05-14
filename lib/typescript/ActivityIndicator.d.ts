import React from 'react';
import { ActivityIndicatorProps as RNActivityIndicatorProps } from 'react-native';
import { Color } from './hooks/use-palette-color';
export interface ActivityIndicatorProps extends Omit<RNActivityIndicatorProps, 'color'> {
    /**
     * The color of the spinner.
     *
     * @default "primary"
     */
    color?: Color;
}
declare const ActivityIndicator: React.FC<ActivityIndicatorProps>;
export default ActivityIndicator;
