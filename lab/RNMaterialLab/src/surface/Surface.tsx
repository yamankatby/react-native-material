import React, { useMemo, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import {
  ShapeCategory,
  ShapeFamily,
  useTheme,
} from '@react-native-material/lab/lib/foundation';

export interface SurfaceComponentProps {
  size: [number, number, number, number];
  style?: ViewStyle;
}

const RoundedSurface: React.FC<SurfaceComponentProps> = ({
  size,
  style,
  children,
}) => {
  return (
    <View
      style={[
        {
          borderTopStartRadius: size[0],
          borderTopEndRadius: size[1],
          borderBottomEndRadius: size[2],
          borderBottomStartRadius: size[3],
        },
        style,
      ]}>
      {children}
    </View>
  );
};

const CutSurface: React.FC<SurfaceComponentProps> = ({
  size,
  style,
  children,
}) => {
  const { backgroundColor, borderColor, borderWidth = 0, ...rest } = style!;

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  return (
    <View
      style={rest}
      onLayout={e => {
        setWidth(e.nativeEvent.layout.width);
        setHeight(e.nativeEvent.layout.height);
      }}>
      <Svg style={{ position: 'absolute', width, height }}>
        <Polygon
          points={[
            [borderWidth, size[0] + borderWidth],
            [size[0] + borderWidth, borderWidth],
            [width - size[1] - borderWidth, borderWidth],
            [width - borderWidth, size[1] + borderWidth],
            [width - borderWidth, height - size[2] - borderWidth],
            [width - size[2] - borderWidth, height - borderWidth],
            [size[3] + borderWidth, height - borderWidth],
            [borderWidth, height - size[3] - borderWidth],
          ].reduce((p, c) => `${p} ${c}`, '')}
          fill={backgroundColor as any}
          stroke={borderColor as any}
          strokeWidth={borderWidth}
        />
      </Svg>
      {children}
    </View>
  );
};

CutSurface.defaultProps = {
  style: {},
};

export interface SurfaceProps {
  category?: ShapeCategory;
  family?: ShapeFamily;
  style?: ViewStyle | (ViewStyle | undefined)[];
}

const Surface: React.FC<SurfaceProps> = ({
  category,
  family,
  style,
  children,
}) => {
  const mergedStyle = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  const theme = useTheme();

  const shape = useMemo(() => {
    const schema = theme.shapeSchema[category!];

    const selectSize = (...values: (number | undefined)[]) =>
      values.find(x => x !== undefined) ?? 0;

    return {
      family: family ?? schema.family,
      size: [
        selectSize(
          mergedStyle.borderTopStartRadius,
          mergedStyle.borderTopLeftRadius,
          mergedStyle.borderRadius,
          Array.isArray(schema.size) ? schema.size[0] : schema.size,
        ),
        selectSize(
          mergedStyle.borderTopEndRadius,
          mergedStyle.borderTopRightRadius,
          mergedStyle.borderRadius,
          Array.isArray(schema.size) ? schema.size[1] : schema.size,
        ),
        selectSize(
          mergedStyle.borderBottomEndRadius,
          mergedStyle.borderBottomRightRadius,
          mergedStyle.borderRadius,
          Array.isArray(schema.size) ? schema.size[2] : schema.size,
        ),
        selectSize(
          mergedStyle.borderBottomStartRadius,
          mergedStyle.borderBottomLeftRadius,
          mergedStyle.borderRadius,
          Array.isArray(schema.size) ? schema.size[3] : schema.size,
        ),
      ] as SurfaceComponentProps['size'],
    };
  }, [theme.shapeSchema, category, family, mergedStyle]);

  return shape.family === 'rounded' ? (
    <RoundedSurface size={shape.size} style={mergedStyle}>
      {children}
    </RoundedSurface>
  ) : (
    <CutSurface size={shape.size} style={mergedStyle}>
      {children}
    </CutSurface>
  );
};

Surface.defaultProps = {
  category: 'small',
  style: {},
};

export default Surface;
export { RoundedSurface, CutSurface };
