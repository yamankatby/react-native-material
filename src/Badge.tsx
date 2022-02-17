import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, StyleProp, TextStyle, ViewProps } from 'react-native';
import Text from './Text';
import { Color, usePaletteColor } from './hooks/use-palette-color';
import { useStyles } from './hooks/use-styles';

export interface BadgeProps {
  label?: number | string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  showZero?: boolean;

  max?: number;

  visible?: boolean;

  color?: Color;

  tintColor?: Color;

  style?: Animated.AnimatedProps<ViewProps>['style'];

  labelStyle?: StyleProp<TextStyle>;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  showZero = false,
  max = 99,
  visible = true,
  color = 'secondary',
  tintColor,
  style,
  labelStyle,
  children,
}) => {
  const palette = usePaletteColor(color, tintColor);

  const styles = useStyles(
    () => ({
      container: {
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
        backgroundColor: palette.main,
        borderRadius: 10,
      },
    }),
    [palette]
  );

  const isVisible = useMemo(() => (label === 0 ? visible && showZero : visible), [label, showZero, visible]);

  const animated = useRef(new Animated.Value(isVisible ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: isVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const getLabel = () => {
    switch (typeof label) {
      case 'number':
      case 'string':
        return (
          <Text variant="body2" style={[{ color: palette.on }, labelStyle]}>
            {typeof label === 'number' && label > max ? `${max}+` : label}
          </Text>
        );
      case 'function':
        return label({ color: palette.on });
      default:
        return label;
    }
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: animated }] }, style]}>
      {getLabel()}
      {children}
    </Animated.View>
  );
};

export default Badge;
