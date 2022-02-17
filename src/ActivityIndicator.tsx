import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import { Color, usePaletteColor } from './hooks/use-palette-color';

export interface ActivityIndicatorProps extends Omit<RNActivityIndicatorProps, 'color'> {
  /**
   * The color of the spinner.
   *
   * @default "primary"
   */
  color?: Color;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ color = 'primary', ...rest }) => {
  const { main } = usePaletteColor(color);
  return <RNActivityIndicator {...rest} color={main} />;
};

export default ActivityIndicator;
