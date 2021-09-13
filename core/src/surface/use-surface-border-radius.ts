import { Animated, StyleProp, StyleSheet, ViewProps, ViewStyle } from "react-native";
import { ShapeBorderRadius, ShapeCategory, useTheme } from "../base";
import { useMemo } from "react";

export const useSurfaceBorderRadius = (
  style: StyleProp<ViewStyle> | Animated.AnimatedProps<ViewProps>["style"] | undefined,
  category: ShapeCategory
): [ShapeBorderRadius, ViewStyle] => {
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
    ...rest
  } = StyleSheet.flatten(style ?? {}) as ViewStyle

  const { shapeScheme } = useTheme()

  const radius = useMemo(() => shapeScheme[category].borderRadius, [category, shapeScheme])

  const shapeBorderRadius: ShapeBorderRadius = useMemo(() => ({
    topStart: borderTopStartRadius ?? borderTopLeftRadius ?? borderRadius ?? radius.topStart,
    topEnd: borderTopEndRadius ?? borderTopRightRadius ?? borderRadius ?? radius.topEnd,
    bottomStart: borderBottomStartRadius ?? borderBottomLeftRadius ?? borderRadius ?? radius.bottomStart,
    bottomEnd: borderBottomEndRadius ?? borderBottomRightRadius ?? borderRadius ?? radius.bottomEnd
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

  return [shapeBorderRadius, rest]
};
