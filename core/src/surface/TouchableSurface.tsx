import React from "react";
import { Animated, StyleProp, ViewProps, ViewStyle } from "react-native";
import { ShapeCategory, ShapeFamily, useTheme } from "../base";
import { TouchableCustomFeedbackProps } from "../touchable";
import TouchableRoundedSurface from "./TouchableRoundedSurface";
import TouchableCutSurface from "./TouchableCutSurface";

export interface TouchableSurfaceProps extends Omit<TouchableCustomFeedbackProps, "style"> {
  category?: ShapeCategory | undefined;

  family?: ShapeFamily | undefined;

  absoluteSize?: boolean | undefined;

  style?: Animated.AnimatedProps<ViewProps>["style"] | undefined;

  containerStyle?: StyleProp<ViewStyle> | undefined;

  touchableStyle?: StyleProp<ViewStyle> | undefined;

  innerStyle?: StyleProp<ViewStyle> | undefined;
}

const TouchableSurface: React.FC<TouchableSurfaceProps> = ({ category, family, ...rest }) => {
  const theme = useTheme();
  return (family ?? theme.shapeScheme[category!].family) === "rounded" ? (
    <TouchableRoundedSurface category={category} {...rest} />
  ) : (
    <TouchableCutSurface category={category} {...rest} />
  );
};

TouchableSurface.defaultProps = {
  category: "small"
};

export default TouchableSurface;
