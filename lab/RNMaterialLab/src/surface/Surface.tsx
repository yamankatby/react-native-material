import {
  ShapeCategory,
  ShapeFamily,
  useTheme,
} from '@react-native-material/lab/lib/foundation';
import React, { useMemo, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

export interface SurfaceProps {
  category?: ShapeCategory;
  family?: ShapeFamily;
  style?: ViewStyle;
}

const Surface: React.FC<SurfaceProps> = ({
  category,
  family,
  style,
  children,
}) => {
  const {
    borderRadius,
    borderTopStartRadius,
    borderTopEndRadius,
    borderTopRightRadius,
    borderTopLeftRadius,
    borderBottomStartRadius,
    borderBottomEndRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    backgroundColor,
    borderWidth = 0,
    borderColor,
    ...restStyles
  } = style!;

  const theme = useTheme();

  const selectSize = (...values: (number | undefined)[]) =>
    values.find(x => x !== undefined) ?? 0;

  const size = (() => {
    const schema = theme.shapeSchema[category!];
    return [
      selectSize(
        borderTopStartRadius,
        borderTopLeftRadius,
        borderRadius,
        Array.isArray(schema.size) ? schema.size[0] : schema.size,
      ),
      selectSize(
        borderTopEndRadius,
        borderTopRightRadius,
        borderRadius,
        Array.isArray(schema.size) ? schema.size[1] : schema.size,
      ),
      selectSize(
        borderBottomEndRadius,
        borderBottomRightRadius,
        borderRadius,
        Array.isArray(schema.size) ? schema.size[2] : schema.size,
      ),
      selectSize(
        borderBottomStartRadius,
        borderBottomLeftRadius,
        borderRadius,
        Array.isArray(schema.size) ? schema.size[3] : schema.size,
      ),
    ];
  })();

  const shape = useMemo(() => {
    const schema = theme.shapeSchema[category!];
    const selectSize = (...values: (number | undefined)[]) =>
      values.find(x => x) ?? 0;
    return {
      family: family ?? schema.family,
      size: [
        selectSize(
          borderTopStartRadius,
          borderTopLeftRadius,
          borderRadius,
          Array.isArray(schema) ? schema[0] : schema,
        ),
        selectSize(
          borderTopEndRadius,
          borderTopRightRadius,
          borderRadius,
          Array.isArray(schema) ? schema[2] : schema,
        ),
        selectSize(
          borderBottomEndRadius,
          borderBottomRightRadius,
          borderRadius,
          Array.isArray(schema) ? schema[3] : schema,
        ),
        selectSize(
          borderBottomStartRadius,
          borderBottomLeftRadius,
          borderRadius,
          Array.isArray(schema) ? schema[4] : schema,
        ),
      ],
    };
  }, [
    theme.shapeSchema,
    category,
    family,
    borderRadius,
    borderTopStartRadius,
    borderTopEndRadius,
    borderTopRightRadius,
    borderTopLeftRadius,
    borderBottomStartRadius,
    borderBottomEndRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
  ]);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  if (shape.family === 'rounded')
    return (
      <View
        style={[
          {
            borderTopStartRadius: size[0],
            borderTopEndRadius: size[1],
            borderBottomEndRadius: size[2],
            borderBottomStartRadius: size[3],
            backgroundColor,
            borderWidth,
            borderColor,
          },
          restStyles,
        ]}>
        {children}
      </View>
    );
  else
    return (
      <View
        style={restStyles}
        onLayout={e => {
          setWidth(e.nativeEvent.layout.width);
          setHeight(e.nativeEvent.layout.height);
        }}>
        {/* "200,10 250,190 160,210" */}
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
            fill={backgroundColor}
            stroke={borderColor}
            strokeWidth={borderWidth}
          />
        </Svg>
        {children}
      </View>
    );
};


Surface.defaultProps = {
  category: 'small',
  style: {},
};


export default Surface;
