import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, getShapeRadius } from '../foundation';
import { SharedSurfaceProps } from './Surface';
import { TouchableCustomFeedback } from '../button';

const RoundedSurface: React.FC<SharedSurfaceProps> = ({
  category,
  style,
  onPress,
  onLongPress,
  iosVariant,
  androidVariant,
  overlayColor,
  children,
}) => {
  const mergedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  const theme = useTheme();

  const radius = getShapeRadius(
    mergedStyles,
    theme.shapeSchema[category!].radius,
  );

  return (
    <View style={[radius, style]}>
      {!!(onPress || onLongPress) ? (
        <View style={[{ overflow: 'hidden', backgroundColor: 'red' }]}>
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

RoundedSurface.defaultProps = {
  category: 'small',
  style: {},
};

export default RoundedSurface;
