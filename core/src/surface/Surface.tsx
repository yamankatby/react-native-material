import React from "react";
import { Animated, ViewProps } from "react-native";
import { ShapeCategory, ShapeFamily, useTheme } from "../base";
import TouchableSurface from "./TouchableSurface";
import RoundedSurface from "./RoundedSurface";
import CutSurface from "./CutSurface";

export interface SurfaceProps extends Animated.AnimatedProps<ViewProps> {
  category?: ShapeCategory | undefined;

  family?: ShapeFamily | undefined;
}

const Surface: React.FC<SurfaceProps> & { Touchable: typeof TouchableSurface } = ({ category, family, ...rest }) => {
  const theme = useTheme();
  return (family ?? theme.shapeScheme[category!].family) === "rounded" ? (
    <RoundedSurface category={category} {...rest} />
  ) : (
    <CutSurface category={category} {...rest} />
  );
};

Surface.defaultProps = {
  category: "small"
};

Surface.Touchable = TouchableSurface;

export default Surface;
