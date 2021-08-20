import { useTheme } from '@react-native-material/lab';
import React from 'react';
import { StyleSheet } from 'react-native';
import { ViewStyle, View } from 'react-native';
import { Color, useStyleSheet } from '../foundation';
import { Surface, SurfaceProps } from '../surface';

export interface FABProps extends SurfaceProps {
  color?: Color;
}

const FAB: React.FC<FABProps> = ({
  color,
  category,
  family,
  iosVariant,
  androidVariant,
  overlayColor,
  onPress,
  onLongPress,
  touchableProps,
}) => {
  const theme = useTheme();

  const styles = useStyleSheet(
    ({ colors, elevations }) => ({
      container: {
        width: 58,
        height: 58,
        borderRadius: 29,
        ...elevations[4],
        backgroundColor: colors[color!].main,
      },
    }),
    [color],
  );

  return (
    <Surface
      style={styles.container}
      category={category}
      family={family}
      iosVariant={iosVariant}
      androidVariant={androidVariant}
      overlayColor={overlayColor}
      onPress={onPress}
      onLongPress={onLongPress}
      touchableProps={touchableProps}>
      <View
        style={{
          width: 24,
          height: 24,
          backgroundColor: theme.colors[color!].on,
        }}
      />
    </Surface>
  );
};

FAB.defaultProps = {
  color: 'secondary',
};

export default FAB;
