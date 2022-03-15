import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, GestureResponderEvent, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import Surface, { SurfaceProps } from './Surface';
import Pressable, { PressableProps } from './Pressable';
import Text from './Text';
import ActivityIndicator from './ActivityIndicator';
import { Color, usePaletteColor } from './hooks/use-palette-color';
import { useStyles } from './hooks/use-styles';
import { useAnimatedElevation } from './hooks/use-animated-elevation';

export interface FABProps extends Omit<SurfaceProps, 'hitSlop'>, Omit<PressableProps, 'style' | 'children'> {
  icon?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  label?: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  variant?: 'standard' | 'extended';

  size?: 'default' | 'mini';

  color?: Color;

  tintColor?: Color;

  loading?: boolean;

  loadingIndicator?: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  loadingIndicatorPosition?: 'icon' | 'overlay';

  visible?: boolean;

  pressableContainerStyle?: StyleProp<ViewStyle>;

  contentContainerStyle?: PressableProps['style'];

  iconContainerStyle?: StyleProp<ViewStyle>;

  labelContainerStyle?: StyleProp<ViewStyle>;

  labelStyle?: StyleProp<TextStyle>;

  loadingOverlayContainerStyle?: StyleProp<ViewStyle>;
}

const FAB: React.FC<FABProps> = ({
  icon,
  label,
  variant = 'standard',
  size = 'default',
  color = 'secondary',
  tintColor,
  loading = false,
  loadingIndicator,
  loadingIndicatorPosition = 'icon',
  visible = true,
  style,
  pressableContainerStyle,
  contentContainerStyle,
  iconContainerStyle,
  labelContainerStyle,
  labelStyle,
  loadingOverlayContainerStyle,

  pressEffect,
  pressEffectColor,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  delayLongPress,
  disabled,
  hitSlop,
  pressRetentionOffset,
  android_disableSound,
  android_ripple,
  testOnly_pressed,
  ...rest
}) => {
  const palette = usePaletteColor(color, tintColor);

  const hasIcon = useMemo(
    () => icon || (loading && loadingIndicatorPosition === 'icon'),
    [icon, loading, loadingIndicatorPosition]
  );

  const styles = useStyles(
    () => ({
      container: {
        backgroundColor: palette.main,
        borderRadius: size === 'default' ? 28 : 20,
      },
      pressableContainer: {
        borderRadius: size === 'default' ? 28 : 20,
        overflow: 'hidden',
      },
      pressable: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart:
          variant === 'extended'
            ? hasIcon
              ? size === 'default'
                ? 12
                : 6
              : size === 'default'
              ? 20
              : 10
            : size === 'default'
            ? 16
            : 8,
        paddingEnd: variant === 'extended' ? (size === 'default' ? 20 : 10) : size === 'default' ? 16 : 8,
        paddingVertical: size === 'default' ? 16 : 8,
      },
      iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
      },
      labelContainer: {
        marginStart: hasIcon ? (size === 'default' ? 12 : 6) : 0,
      },
      loadingOverlayContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.main,
      },
    }),
    [variant, size, palette, hasIcon]
  );

  const animated = useRef(new Animated.Value(visible ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: visible ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [visible]);

  const getLoadingIndicator = () => {
    if (!loadingIndicator) return <ActivityIndicator color={palette.on} />;
    switch (typeof loadingIndicator) {
      case 'string':
        return (
          <Text variant="button" style={{ color: palette.on }}>
            {loadingIndicator}
          </Text>
        );
      case 'function':
        return loadingIndicator({ color: palette.on });
      default:
        return loadingIndicator;
    }
  };

  const getIcon = () => {
    if (loading && loadingIndicatorPosition === 'icon') return getLoadingIndicator();
    return typeof icon === 'function' ? icon({ color: palette.on, size: 24 }) : icon;
  };

  const getLabel = () => {
    switch (typeof label) {
      case 'string':
        return (
          <Text variant="button" selectable={false} style={[{ color: palette.on }, labelStyle]}>
            {label}
          </Text>
        );
      case 'function':
        return label({ color: palette.on });
      default:
        return label;
    }
  };

  const [pressed, setPressed] = useState(false);

  const handlePressIn = useCallback(
    (event: GestureResponderEvent) => {
      onPressIn?.(event);
      setPressed(true);
    },
    [onPressIn]
  );

  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      onPressOut?.(event);
      setPressed(false);
    },
    [onPressOut]
  );

  const animatedElevation = useAnimatedElevation(pressed ? 12 : 6);

  return (
    <Surface style={[animatedElevation, styles.container, { transform: [{ scale: animated }] }, style]} {...rest}>
      <View style={[styles.pressableContainer, pressableContainerStyle]}>
        <Pressable
          style={[styles.pressable, contentContainerStyle]}
          pressEffect={pressEffect}
          pressEffectColor={pressEffectColor ?? palette.on}
          onPress={onPress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          onLongPress={onLongPress}
          onBlur={onBlur}
          onFocus={onFocus}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          delayLongPress={delayLongPress}
          disabled={disabled}
          hitSlop={hitSlop}
          pressRetentionOffset={pressRetentionOffset}
          android_disableSound={android_disableSound}
          android_ripple={android_ripple}
          testOnly_pressed={testOnly_pressed}
        >
          {hasIcon && <View style={[styles.iconContainer, iconContainerStyle]}>{getIcon()}</View>}
          {variant === 'extended' && <View style={[styles.labelContainer, labelContainerStyle]}>{getLabel()}</View>}

          {loading && loadingIndicatorPosition === 'overlay' && (
            <View style={[styles.loadingOverlayContainer, loadingOverlayContainerStyle]}>{getLoadingIndicator()}</View>
          )}
        </Pressable>
      </View>
    </Surface>
  );
};

export default FAB;
