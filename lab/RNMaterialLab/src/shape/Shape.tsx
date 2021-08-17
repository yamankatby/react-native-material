import React, { FC, useMemo, useState } from "react";
import { Platform, View, ViewStyle } from "react-native";
import { ThemeColor } from "../styles/palette";
import { Elevation, ShapeCategory, ShapeFamily, ShapeSize, useTheme } from "../styles";
import Svg, { Polygon } from "react-native-svg";

export interface ShapeProps {
  category?: ShapeCategory;
  family?: ShapeFamily;
  size?: ShapeSize;
  backgroundColor?: ThemeColor | string;
  elevation?: Elevation;
  style?: ViewStyle;
}

const Shape: FC<ShapeProps> = ({ category, elevation, style, children, ...rest }) => {
  const theme = useTheme();

  const { family, size } = useMemo(() => {
    const shapeConfig = theme.shapeSchema[category!];
    const size = rest.size ?? shapeConfig.size;
    return ({
      family: rest.family ?? shapeConfig.family,
      size: Array.isArray(size) ? size : [size, size, size, size]
    });
  }, [category, rest.family, rest.size, theme.shapeSchema]);

  const backgroundColor = useMemo(() => {
    switch (rest.backgroundColor) {
      case "primary":
        return theme.palette.primary.main;
      case "secondary":
        return theme.palette.secondary.main;
      case "background":
        return theme.palette.background.main;
      case "surface":
        return theme.palette.surface.main;
      case "error":
        return theme.palette.error.main;
      case "onPrimary":
        return theme.palette.primary.on;
      case "onSecondary":
        return theme.palette.secondary.on;
      case "onBackground":
        return theme.palette.background.on;
      case "onSurface":
        return theme.palette.surface.on;
      case "onError":
        return theme.palette.error.on;
      default:
        return rest.backgroundColor;
    }
  }, [rest.backgroundColor, theme.palette]);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  return family === "rounded" ? (
    <View
      style={[{
        borderTopStartRadius: size[0],
        borderTopEndRadius: size[1],
        borderBottomEndRadius: size[2],
        borderBottomStartRadius: size[3],
        ...theme.elevation[elevation!],
        backgroundColor
      }, style]}
    >
      {children}
    </View>
  ) : (
    <View
      style={[{ width: style?.width, height: style?.height }, Platform.select({
        android: {
          borderTopStartRadius: size[0] * 3 / 2,
          borderTopEndRadius: size[1] * 3 / 2,
          borderBottomEndRadius: size[2] * 3 / 2,
          borderBottomStartRadius: size[3] * 3 / 2,
          ...theme.elevation[elevation!]
        }
      })]}
      onLayout={e => {
        setWidth(e.nativeEvent.layout.width);
        setHeight(e.nativeEvent.layout.height);
      }}
    >
      <Svg style={[{
        position: "absolute",
        width,
        height,
        ...Platform.select({ ios: theme.elevation[elevation!] })
      }, style]}>
        <Polygon points={`0,${size[0]} ${size[0]},0 ${width - size[1]},0 ${width},${size[1]} ${width},${height - size[2]} ${width - size[2]},${height} ${size[3]},${height} 0,${height - size[3]}`} fill={backgroundColor} />
      </Svg>
      {children}
    </View>
  );
};

Shape.defaultProps = {
  category: "small",
  backgroundColor: "surface",
  elevation: "0"
};

export default Shape;
