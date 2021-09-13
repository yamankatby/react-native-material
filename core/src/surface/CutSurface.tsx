import React, { useMemo, useState } from "react";
import { Animated, StyleSheet, ViewProps, ViewStyle } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import { ShapeCategory, useTheme } from "../base";

export interface CutSurfaceProps extends Animated.AnimatedProps<ViewProps> {
  category?: ShapeCategory | undefined;
}

const CutSurface: React.FC<CutSurfaceProps> = ({ category, onLayout, style, children, ...rest }) => {
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
    backgroundColor,
    ...restStyle
  } = StyleSheet.flatten(style ?? {}) as ViewStyle;

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

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

  const points = [
    [0, borders.borderTopStartRadius],
    [borders.borderTopStartRadius, 0],
    [width - borders.borderTopEndRadius, 0],
    [width, borders.borderTopEndRadius],
    [width, height - borders.borderBottomEndRadius],
    [width - borders.borderBottomEndRadius, height],
    [borders.borderBottomStartRadius, height],
    [0, height - borders.borderBottomStartRadius]
  ].reduce((p, c) => `${p} ${c}`, "");

  return (
    <Animated.View
      style={[restStyle]}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
        setHeight(e.nativeEvent.layout.height);
        onLayout && onLayout(e)
      }}
      {...rest}
    >
      <Svg style={[StyleSheet.absoluteFill, { width, height }]}>
        <Polygon points={points} fill={backgroundColor?.toString()} />
      </Svg>
      {children}
    </Animated.View>
  )
};

CutSurface.defaultProps = {
  category: "small"
};

export default CutSurface;
