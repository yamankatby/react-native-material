import React, { useMemo } from "react";
import { Animated, StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "../base";
import { TouchableCustomFeedback } from "../touchable";
import { TouchableSurfaceProps } from "./TouchableSurface";

export type TouchableRoundedSurfaceProps = Omit<TouchableSurfaceProps, 'family'>

const TouchableRoundedSurface: React.FC<TouchableRoundedSurfaceProps> = ({
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

  return (
    <Animated.View style={[restStyle, borders]}>
      <View style={[absoluteSize && StyleSheet.absoluteFillObject, borders, { overflow: "hidden" }, containerStyle]}>
        <TouchableCustomFeedback style={[absoluteSize && StyleSheet.absoluteFillObject, touchableStyle]} {...rest}>
          <View style={[absoluteSize && StyleSheet.absoluteFillObject, innerStyle]}>{children}</View>
        </TouchableCustomFeedback>
      </View>
    </Animated.View>
  );
};

TouchableRoundedSurface.defaultProps = {
  category: "small"
};

export default TouchableRoundedSurface;
