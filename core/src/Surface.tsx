import React, { useMemo } from "react";
import { Animated, StyleSheet, ViewProps, ViewStyle } from "react-native";
import { ShapeCategory, useTheme } from "./base";

export interface SurfaceProps extends Animated.AnimatedProps<ViewProps> {
  category?: ShapeCategory | undefined;
}

const Surface: React.FC<SurfaceProps> = ({ category, style, ...rest }) => {
  const {
    borderTopStartRadius,
    borderTopEndRadius,
    borderBottomStartRadius,
    borderBottomEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderRadius,
    ...restStyles
  } = StyleSheet.flatten(style ?? {}) as ViewStyle

  const { shapeScheme } = useTheme()

  const radius = useMemo(() => shapeScheme[category!].borderRadius, [category, shapeScheme])

  const shapeBorderRadius = useMemo(() => ({
    borderTopStartRadius: borderTopStartRadius ?? borderTopLeftRadius ?? borderRadius ?? radius.topStart,
    borderTopEndRadius: borderTopEndRadius ?? borderTopRightRadius ?? borderRadius ?? radius.topEnd,
    borderBottomStartRadius: borderBottomStartRadius ?? borderBottomLeftRadius ?? borderRadius ?? radius.bottomStart,
    borderBottomEndRadius: borderBottomEndRadius ?? borderBottomRightRadius ?? borderRadius ?? radius.bottomEnd
  }), [
    radius,
    borderTopStartRadius,
    borderTopEndRadius,
    borderBottomStartRadius,
    borderBottomEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderRadius
  ])

  return <Animated.View style={[restStyles, shapeBorderRadius]} {...rest} />;
};

Surface.defaultProps = {
  category: "small"
};

export default Surface;
