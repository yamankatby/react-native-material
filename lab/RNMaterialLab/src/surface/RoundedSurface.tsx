import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-native-material/lab/lib/foundation';
import { SharedSurfaceProps } from './Surface';
import TouchableCustomFeedback from '../button/TouchableCustomFeedback';

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
  const mergedStyle = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  const theme = useTheme();
  const size = theme.shapeSchema[category!].size;
  const sizes = Array.isArray(size) ? size : [size, size, size, size];

  const round = {
    borderTopStartRadius:
      mergedStyle.borderTopStartRadius ??
      mergedStyle.borderTopLeftRadius ??
      mergedStyle.borderRadius ??
      sizes[0],
    borderTopEndRadius:
      mergedStyle.borderTopEndRadius ??
      mergedStyle.borderTopRightRadius ??
      mergedStyle.borderRadius ??
      sizes[1],
    borderBottomEndRadius:
      mergedStyle.borderBottomEndRadius ??
      mergedStyle.borderBottomRightRadius ??
      mergedStyle.borderRadius ??
      sizes[2],
    borderBottomStartRadius:
      mergedStyle.borderBottomStartRadius ??
      mergedStyle.borderBottomLeftRadius ??
      mergedStyle.borderRadius ??
      sizes[3],
  };

  return (
    <View style={[round, style]}>
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

RoundedSurface.defaultProps = {
  category: 'small',
  style: {},
};

export default RoundedSurface;
