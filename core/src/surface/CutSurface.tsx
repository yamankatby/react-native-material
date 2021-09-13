import React, { useState } from "react";
import { Animated, StyleSheet } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import { SurfaceProps } from "./Surface";
import TouchableCutSurface from "./TouchableCutSurface";
import { useSurfaceBorderRadius } from "./use-surface-border-radius";

export type CutSurfaceProps = Omit<SurfaceProps, "family">;

const CutSurface: React.FC<CutSurfaceProps> & { Touchable: typeof TouchableCutSurface } = ({
  category,
  onLayout,
  style,
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
    [0, height - borders.bottomStart],
  ].reduce((p, c) => `${p} ${c}`, "");

  return (
    <Animated.View
      style={[restStyle]}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
        setHeight(e.nativeEvent.layout.height);
        onLayout && onLayout(e);
      }}
      {...rest}
    >
      <Svg style={[StyleSheet.absoluteFill, { width, height }]}>
        <Polygon points={points} fill={backgroundColor?.toString()} />
      </Svg>
      {children}
    </Animated.View>
  );
};

CutSurface.defaultProps = {
  category: "small",
};

CutSurface.Touchable = TouchableCutSurface;

export default CutSurface;
