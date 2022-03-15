import React from 'react';
import { Animated, StyleProp, ViewProps, ViewStyle } from 'react-native';
import type { Elevation, ShapeCategory } from './base/ThemeContext';
import { useStyles } from './hooks/use-styles';

export interface SurfaceProps extends Omit<ViewProps, 'style'> {
  /**
   * The relative size of the surface.
   */
  category?: ShapeCategory;

  /**
   * The elevation of the surface.
   *
   * @default 0
   */
  elevation?: Elevation;

  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
}

const Surface: React.FC<SurfaceProps> = ({ category, elevation = 0, style, ...rest }) => {
  const styles = useStyles(
    ({ elevations, shapes, surfaceColor }) => ({
      surface: {
        ...elevations[elevation],
        ...(category ? shapes[category] : {}),
        backgroundColor: surfaceColor(elevation).hex(),
      },
    }),
    [category, elevation]
  );

  return <Animated.View style={[styles.surface, style]} {...rest} />;
};

export default Surface;
