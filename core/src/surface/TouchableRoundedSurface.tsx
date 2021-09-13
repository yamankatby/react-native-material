import React, { useMemo } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { TouchableCustomFeedback } from "../touchable";
import { TouchableSurfaceProps } from "./TouchableSurface";
import { useSurfaceBorderRadius } from "./use-surface-border-radius";

export type TouchableRoundedSurfaceProps = Omit<TouchableSurfaceProps, "family">;

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
  const [borders, { ...restStyle }] = useSurfaceBorderRadius(style, category!);

  const borderRadius = useMemo(
    () => ({
      borderTopStartRadius: borders.topStart,
      borderTopEndRadius: borders.topEnd,
      borderBottomStartRadius: borders.bottomStart,
      borderBottomEndRadius: borders.bottomEnd,
    }),
    [borders]
  );

  return (
    <Animated.View style={[restStyle, borderRadius]}>
      <View
        style={[absoluteSize && StyleSheet.absoluteFillObject, borderRadius, { overflow: "hidden" }, containerStyle]}
      >
        <TouchableCustomFeedback style={[absoluteSize && StyleSheet.absoluteFillObject, touchableStyle]} {...rest}>
          <View style={[absoluteSize && StyleSheet.absoluteFillObject, innerStyle]}>{children}</View>
        </TouchableCustomFeedback>
      </View>
    </Animated.View>
  );
};

TouchableRoundedSurface.defaultProps = {
  category: "small",
};

export default TouchableRoundedSurface;
