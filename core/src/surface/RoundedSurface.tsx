import React, { useMemo } from "react";
import { Animated, StyleSheet, ViewProps, ViewStyle } from "react-native";
import { ShapeCategory, useTheme } from "../base";
import TouchableRoundedSurface from "./TouchableRoundedSurface";

export interface RoundedSurfaceProps extends Animated.AnimatedProps<ViewProps> {
  category?: ShapeCategory | undefined;
}

const RoundedSurface: React.FC<RoundedSurfaceProps> & { Touchable: typeof TouchableRoundedSurface } = ({
  category,
  style,
  ...rest
}) => {
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
    ...restStyle
  } = StyleSheet.flatten(style ?? {}) as ViewStyle;

  const theme = useTheme();

  const radius = useMemo(() => theme.shapeScheme[category!].borderRadius, [theme.shapeScheme, category]);

  const borders = useMemo(
    () => ({
      borderTopStartRadius: borderTopStartRadius ?? borderTopLeftRadius ?? borderRadius ?? radius.topStart,
      borderTopEndRadius: borderTopEndRadius ?? borderTopRightRadius ?? borderRadius ?? radius.topEnd,
      borderBottomStartRadius: borderBottomStartRadius ?? borderBottomLeftRadius ?? borderRadius ?? radius.bottomStart,
      borderBottomEndRadius: borderBottomEndRadius ?? borderBottomRightRadius ?? borderRadius ?? radius.bottomEnd
    }),
    [
      borderTopStartRadius,
      borderTopLeftRadius,
      borderTopEndRadius,
      borderTopRightRadius,
      borderBottomStartRadius,
      borderBottomLeftRadius,
      borderBottomEndRadius,
      borderBottomRightRadius,
      borderRadius,
      radius
    ]
  );

  return <Animated.View style={[restStyle, borders]} {...rest} />;
};

RoundedSurface.defaultProps = {
  category: "small"
};

RoundedSurface.Touchable = TouchableRoundedSurface;

export default RoundedSurface;
