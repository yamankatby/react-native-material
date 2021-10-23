import React from "react";
import { Elevation, ShapeCategory, useTheme } from "./base";
import Touchable, { TouchableProps } from "./Touchable";

export interface TouchableSurfaceProps extends TouchableProps {
  category?: ShapeCategory;

  elevation?: Elevation;
}

const TouchableSurface: React.FC<TouchableSurfaceProps> = ({ category = "small", elevation = 2, style, ...rest }) => {
  const { shapes, elevations } = useTheme();
  return (
    <Touchable
      style={[shapes[category], elevations[elevation], style]}
      rippleContainerStyle={shapes[category]}
      {...rest}
    />
  );
};

export default TouchableSurface;
