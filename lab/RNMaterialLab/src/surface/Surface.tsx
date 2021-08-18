import React, { useMemo } from 'react';
import { Text, View, ViewProps } from 'react-native';
import {
  Elevation,
  ShapeCategory,
  ShapeFamily,
  ShapeSize,
  useTheme,
} from '@react-native-material/lab/lib/foundation';

interface SurfaceProps extends ViewProps {
  category?: ShapeCategory;
  family?: ShapeFamily;
  size?: ShapeSize;
  elevation?: Elevation;
}

const Surface: React.FC<SurfaceProps> = props => {
  const { category, family, size, elevation, style, children, ...rest } = props;

  const theme = useTheme();

  const shapeConfig = useMemo(() => {
    const config = theme.shapeSchema[category!];
    const s = size ?? config.size;
    return {
      family: family ?? config.family,
      size: Array.isArray(s) ? s : [s, s, s, s],
    };
  }, [family, size]);

  return shapeConfig.family === 'rounded' ? (
    <View
      {...rest}
      style={[
        {
          borderTopStartRadius: shapeConfig.size[0],
          borderTopEndRadius: shapeConfig.size[1],
          borderBottomEndRadius: shapeConfig.size[2],
          borderBottomStartRadius: shapeConfig.size[3],
          ...theme.elevations[elevation!],
        },
        style,
      ]}>
      {children}
    </View>
  ) : (
    <View {...rest}>
      <Text>Cut</Text>
    </View>
  );
};

Surface.defaultProps = {
  category: 'small',
  elevation: 0,
};

export default Surface;
