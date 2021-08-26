import React, { useState } from "react";
import { Animated, StyleSheet, ViewProps } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import {
  ShapeBorderRadius,
  ShapeCategory,
  ShapeFamily,
  useTheme,
} from "../base";

export interface SurfaceProps extends ViewProps {
  category?: ShapeCategory;

  family?: ShapeFamily;
}

const Surface: React.FC<SurfaceProps> = ({ family, ...rest }) => {
  const theme = useTheme();

  return (family ?? theme.shapeScheme[rest.category!].family) === "rounded" ? (
    <RoundedSurface {...rest} />
  ) : (
    <CutSurface {...rest} />
  );
};

Surface.defaultProps = {
  category: "small",
};

export interface RoundedSurfaceProps extends ViewProps {
  category?: ShapeCategory;
}

export const RoundedSurface: React.FC<RoundedSurfaceProps> = ({
  category,
  style,
  ...rest
}) => {
  const styles = StyleSheet.flatten(style ?? {});

  const theme = useTheme();

  const radius = theme.shapeScheme[category!].borderRadius;

  const borderRadius: ShapeBorderRadius = {
    topStart:
      styles.borderTopStartRadius ??
      styles.borderTopLeftRadius ??
      styles.borderRadius ??
      radius.topStart,
    topEnd:
      styles.borderTopEndRadius ??
      styles.borderTopRightRadius ??
      styles.borderRadius ??
      radius.topEnd,
    bottomStart:
      styles.borderBottomStartRadius ??
      styles.borderBottomRightRadius ??
      styles.borderRadius ??
      radius.bottomStart,
    bottomEnd:
      styles.borderBottomEndRadius ??
      styles.borderBottomRightRadius ??
      styles.borderRadius ??
      radius.bottomEnd,
  };

  return (
    <Animated.View
      style={[
        style,
        {
          borderTopStartRadius: borderRadius.topStart,
          borderTopEndRadius: borderRadius.topEnd,
          borderBottomStartRadius: borderRadius.bottomStart,
          borderBottomEndRadius: borderRadius.bottomEnd,
        },
      ]}
      {...rest}
    />
  );
};

RoundedSurface.defaultProps = {
  category: "small",
};

export interface CutSurfaceProps extends ViewProps {
  category?: ShapeCategory;
}

export const CutSurface: React.FC<CutSurfaceProps> = ({
  category,
  style,
  children,
  ...rest
}) => {
  const { backgroundColor, ...styles } = StyleSheet.flatten(style ?? {});

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const theme = useTheme();

  const radius = theme.shapeScheme[category!].borderRadius;

  const borderRadius: ShapeBorderRadius = {
    topStart:
      styles.borderTopStartRadius ??
      styles.borderTopLeftRadius ??
      styles.borderRadius ??
      radius.topStart,
    topEnd:
      styles.borderTopEndRadius ??
      styles.borderTopRightRadius ??
      styles.borderRadius ??
      radius.topEnd,
    bottomStart:
      styles.borderBottomStartRadius ??
      styles.borderBottomRightRadius ??
      styles.borderRadius ??
      radius.bottomStart,
    bottomEnd:
      styles.borderBottomEndRadius ??
      styles.borderBottomRightRadius ??
      styles.borderRadius ??
      radius.bottomEnd,
  };

  const points = [
    [0, borderRadius.topStart],
    [borderRadius.topStart, 0],
    [width - borderRadius.topEnd, 0],
    [width, borderRadius.topEnd],
    [width, height - borderRadius.bottomEnd],
    [width - borderRadius.bottomEnd, height],
    [borderRadius.bottomStart, height],
    [0, height - borderRadius.bottomStart],
  ].reduce((p, c) => `${p} ${c}`, "");

  return (
    <Animated.View
      style={styles}
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width);
        setHeight(e.nativeEvent.layout.height);
      }}
      {...rest}
    >
      <Svg style={{ position: "absolute" }}>
        <Polygon points={points} fill={backgroundColor?.toString()} />
      </Svg>
      {children}
    </Animated.View>
  );
};

CutSurface.defaultProps = {
  category: "small",
};

export default Surface;
