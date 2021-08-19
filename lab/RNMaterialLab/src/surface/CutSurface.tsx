import { useTheme } from '@react-native-material/lab/lib/foundation';
import React, { useState } from 'react';
import { View } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import TouchableCustomFeedback from '../button/TouchableCustomFeedback';
import { SharedSurfaceProps } from './Surface';

const CutSurface: React.FC<SharedSurfaceProps> = ({
  category,
  style,
  onPress,
  onLongPress,
  iosVariant,
  androidVariant,
  overlayColor,
  children,
}) => {
  const {
    borderTopStartRadius,
    borderTopLeftRadius,
    borderRadius,
    borderTopEndRadius,
    borderTopRightRadius,
    borderBottomEndRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderBottomLeftRadius,
    borderWidth = 0,
    backgroundColor,
    borderColor,
    ...rest
  } = Array.isArray(style) ? Object.assign({}, ...style) : style;

  const theme = useTheme();
  const size = theme.shapeSchema[category!].size;
  const sizes = Array.isArray(size) ? size : [size, size, size, size];

  const round = {
    borderTopStartRadius:
      borderTopStartRadius ?? borderTopLeftRadius ?? borderRadius ?? sizes[0],
    borderTopEndRadius:
      borderTopEndRadius ?? borderTopRightRadius ?? borderRadius ?? sizes[1],
    borderBottomEndRadius:
      borderBottomEndRadius ??
      borderBottomRightRadius ??
      borderRadius ??
      sizes[2],
    borderBottomStartRadius:
      borderBottomStartRadius ??
      borderBottomLeftRadius ??
      borderRadius ??
      sizes[3],
  };

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
            [borderWidth, round.borderTopStartRadius + borderWidth],
            [round.borderTopStartRadius + borderWidth, borderWidth],
            [width - round.borderTopEndRadius - borderWidth, borderWidth],
            [width - borderWidth, round.borderTopEndRadius + borderWidth],
            [
              width - borderWidth,
              height - round.borderBottomEndRadius - borderWidth,
            ],
            [
              width - round.borderBottomEndRadius - borderWidth,
              height - borderWidth,
            ],
            [round.borderBottomStartRadius + borderWidth, height - borderWidth],
            [borderWidth, height - round.borderBottomStartRadius - borderWidth],
          ].reduce((p, c) => `${p} ${c}`, '')}
          fill={backgroundColor as any}
          stroke={borderColor as any}
          strokeWidth={borderWidth}
        />
      </Svg>
      {!!(onPress || onLongPress) ? (
        <View style={[round, { overflow: 'hidden' }]}>
          <TouchableCustomFeedback
            iosVariant={iosVariant}
            androidVariant={androidVariant}
            overlayColor={overlayColor}
            onPress={onPress}
            onLongPress={onLongPress}>
            {children}
          </TouchableCustomFeedback>
        </View>
      ) : (
        children
      )}
    </View>
  );
};

CutSurface.defaultProps = {
  category: 'small',
  style: {},
};

export default CutSurface;
