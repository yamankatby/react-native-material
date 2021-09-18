import React, { useMemo } from "react";
import { Animated, StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { ShapeCategory } from "../base";
import Touchable, { TouchableProps } from "../Touchable";
import { useSurfaceBorderRadius } from "./use-surface-border-radius";

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
  const [borders, { ...restStyle }] = useSurfaceBorderRadius(style, category!);

  const borderRadius = useMemo(
    () => ({
      borderTopStartRadius: borders.topStart,
      borderTopEndRadius: borders.topEnd,
      borderBottomStartRadius: borders.bottomStart,
      borderBottomEndRadius: borders.bottomEnd
    }),
    [borders]
  );

  return (
    <Animated.View style={[restStyle, borderRadius]}>
      <View
        style={[absoluteSize && StyleSheet.absoluteFillObject, borderRadius, { overflow: "hidden" }, containerStyle]}
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
