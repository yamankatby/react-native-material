import React from "react";
import { Animated, ViewProps } from "react-native";
import { Elevation, ShapeCategory, useTheme } from "./base";

export interface SurfaceProps extends Animated.AnimatedProps<ViewProps> {
  category?: ShapeCategory;

  elevation?: Elevation;
}

const Surface: React.FC<SurfaceProps> = ({ category = "small", elevation = 0, style, ...rest }) => {
  const { elevations, shapes, palette } = useTheme();
  return (
    <Animated.View
      style={[shapes[category], elevations[elevation], { backgroundColor: palette.surface }, style]}
      {...rest}
    />
  );
};

export default Surface;
