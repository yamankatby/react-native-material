import React, { useState } from "react";
import { Animated, StyleSheet, View, ViewStyle } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import { TouchableCustomFeedback } from "../touchable";
import { TouchableSurfaceProps } from "./TouchableSurface";
import { useSurfaceBorderRadius } from "./use-surface-border-radius";

export type TouchableCutSurfaceProps = Omit<TouchableSurfaceProps, 'family'>

const TouchableCutSurface: React.FC<TouchableCutSurfaceProps> = ({
  category,
  absoluteSize,
  style,
  containerStyle,
  touchableStyle,
  innerStyle,
  onLayout,
  children,
  ...rest
}) => {
  const [borders, restStyles] = useSurfaceBorderRadius(style, category!);
  const {backgroundColor, ...restInnerStyles} = StyleSheet.flatten(innerStyle ?? {}) as ViewStyle

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const points = [
    [0, borders.topStart],
    [borders.topStart, 0],
    [width - borders.topEnd, 0],
    [width, borders.topEnd],
    [width, height - borders.bottomEnd],
    [width - borders.bottomEnd, height],
    [borders.bottomStart, height],
    [0, height - borders.bottomStart]
  ].reduce((p, c) => `${p} ${c}`, "");

  return (
    <Animated.View
      style={[restStyles]}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
        setHeight(e.nativeEvent.layout.height);
        onLayout && onLayout(e)
      }}
    >
      <View
        style={[absoluteSize && StyleSheet.absoluteFillObject, { overflow: "hidden" }, containerStyle]}
      >
        <TouchableCustomFeedback style={[absoluteSize && StyleSheet.absoluteFillObject, touchableStyle]} {...rest}>
          <View style={[absoluteSize && StyleSheet.absoluteFillObject, restInnerStyles]}>
            <Svg style={[StyleSheet.absoluteFillObject, { width, height }]}>
              <Polygon points={points} fill={backgroundColor?.toString()} />
            </Svg>
            {children}
          </View>
        </TouchableCustomFeedback>
      </View>
    </Animated.View>
  )
};

TouchableCutSurface.defaultProps = {};

export default TouchableCutSurface;
