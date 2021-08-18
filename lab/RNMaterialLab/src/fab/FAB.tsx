import React, {useMemo} from 'react';
import {View, ViewProps} from 'react-native';
import {
  Color,
  ColorVariants,
  useTheme,
} from '@react-native-material/lab/lib/foundation';
import Surface from '../surface/Surface';

interface FABProps extends ViewProps {
  color?: Color | ColorVariants;
}

const FAB: React.FC<FABProps> = props => {
  const theme = useTheme();
  const {color} = props;

  const variants = useColor(color!);

  return (
    <Surface
      style={{
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        position: 'absolute',
        bottom: 16 + 32,
        right: 16,
        overflow: 'hidden',
      }}
      elevation={4}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'red',
        }}>
        <View style={{width: 24, height: 24, backgroundColor: variants.on}} />
      </View>
    </Surface>
  );
};

const useColor = (color: Color | ColorVariants): ColorVariants => {
  const {colors} = useTheme();
  return useMemo(
    () => (typeof color === 'string' ? colors[color] : color),
    [colors, color],
  );
};

FAB.defaultProps = {
  color: 'secondary',
};

export default FAB;
