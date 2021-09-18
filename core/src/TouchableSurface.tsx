import React, { useMemo } from "react";
import { Animated, StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { ShapeCategory, useTheme } from "./base";
import Touchable, { TouchableProps } from "./Touchable";

export interface TouchableSurfaceProps extends Omit<TouchableProps, "style"> {
  category?: ShapeCategory | undefined;

  absoluteSize?: boolean | undefined;

  style?: Animated.AnimatedProps<ViewProps>["style"] | undefined;

  containerStyle?: StyleProp<ViewStyle> | undefined;

  touchableStyle?: StyleProp<ViewStyle> | undefined;

  innerStyle?: StyleProp<ViewStyle> | undefined;
}

const TouchableSurface: React.FC<TouchableSurfaceProps> = ({
  category,
  absoluteSize,
  style,
  containerStyle,
  touchableStyle,
  innerStyle,
  children,
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

  return (
    <Animated.View style={[restStyles, shapeBorderRadius]}>
      <View
        style={[absoluteSize && StyleSheet.absoluteFillObject, shapeBorderRadius, { overflow: "hidden" }, containerStyle]}
      >
        <Touchable style={[absoluteSize && StyleSheet.absoluteFillObject, touchableStyle]} {...rest}>
          <View style={[absoluteSize && StyleSheet.absoluteFillObject, innerStyle]}>{children}</View>
        </Touchable>
      </View>
    </Animated.View>
  );
};

TouchableSurface.defaultProps = {
  category: "small"
};

export default TouchableSurface;
