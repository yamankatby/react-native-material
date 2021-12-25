import React from "react";
import { Animated, StyleProp, ViewProps, ViewStyle } from "react-native";
import { Elevation, ShapeCategory, useTheme } from "./base/ThemeContext";
import { useSurfaceColorValue } from "./hooks/use-surface-color";

export interface SurfaceProps extends Omit<ViewProps, "style"> {
  category?: ShapeCategory;

  elevation?: Elevation;

  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
}

const Surface: React.FC<SurfaceProps> = ({ category, elevation = 0, style, ...rest }) => {
  const { shapes, elevations } = useTheme();

  const backgroundColor = useSurfaceColorValue(elevation);

  return (
    <Animated.View
      style={[elevations[elevation], { backgroundColor }, category && shapes[category], style]}
      {...rest}
    />
  );
};

export default Surface;
