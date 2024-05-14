import React from 'react';
import { Animated, StyleProp, ViewProps, ViewStyle } from 'react-native';
import type { Elevation, ShapeCategory } from './base/ThemeContext';
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
declare const Surface: React.FC<SurfaceProps>;
export default Surface;
