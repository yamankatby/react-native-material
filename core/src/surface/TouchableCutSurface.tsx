import React, { useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
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
  const [borders, { backgroundColor, ...restStyle }] = useSurfaceBorderRadius(style, category!);

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
      style={restStyle}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
        setHeight(e.nativeEvent.layout.height);
        onLayout && onLayout(e)
      }}
    >
      <View style={[absoluteSize && StyleSheet.absoluteFill, containerStyle]}>
        <TouchableCustomFeedback style={[absoluteSize && StyleSheet.absoluteFill, touchableStyle]} {...rest}>
          <View style={[absoluteSize && StyleSheet.absoluteFill, innerStyle, { backgroundColor: 'transparent' }]}>
            <Svg style={[StyleSheet.absoluteFill, { width, height }]}>
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
