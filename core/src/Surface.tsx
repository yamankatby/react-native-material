import React from "react";
import { Animated, ViewProps } from "react-native";
import { Elevation, ShapeCategory, useTheme } from "./base";
import chroma from "chroma-js";

export interface SurfaceProps extends Animated.AnimatedProps<ViewProps> {
  category?: ShapeCategory;

  elevation?: Elevation;
}

const Surface: React.FC<SurfaceProps> = ({ category = "small", elevation = 0, style, ...rest }) => {
  const { elevations, shapes, palette, mode } = useTheme();
  return (
    <Animated.View
      style={[shapes[category], elevations[elevation], { backgroundColor: mode === 'light' ? palette.surface : chroma.scale([palette.surface, chroma.scale([palette.surface, palette.onSurface])(0.16).hex()])(elevation / 100).hex() }, style]}
      {...rest}
    />
  );
};

export default Surface;
