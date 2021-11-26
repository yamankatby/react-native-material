import React from "react";
import { Animated, StyleProp, ViewProps, ViewStyle } from "react-native";
import { ShapeCategory, useTheme } from "./base";
import { Elevation, useElevation } from "./base/elevations";

export interface SurfaceProps extends Omit<ViewProps, "style"> {
  category?: ShapeCategory;

  elevation?: Elevation;

  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
}

const Surface: React.FC<SurfaceProps> = ({ category, elevation = 0, style, ...rest }) => {
  const { shapes } = useTheme();

  const elevationStyle = useElevation(elevation);

  return <Animated.View style={[elevationStyle, category && shapes[category], style]} {...rest} />;
};

export default Surface;
