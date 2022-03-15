import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import Pressable, { PressableProps } from './Pressable';
import { Color, usePaletteColor } from './hooks/use-palette-color';

export interface IconButtonProps extends Omit<ViewProps, 'hitSlop'>, Omit<PressableProps, 'style' | 'children'> {
  /**
   * The element to render as the icon.
   */
  icon?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The color of the icon and the press effect.
   *
   * @default "on-background"
   */
  color?: Color;

  /**
   * The style of the icon's container view.
   */
  contentContainerStyle?: PressableProps['style'];
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    overflow: 'hidden',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color = 'on-background',
  style,
  contentContainerStyle,

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
  const palette = usePaletteColor(color);
  return (
    <View style={[styles.container, style]} {...rest}>
      <Pressable
        style={[StyleSheet.absoluteFill, styles.contentContainer, contentContainerStyle]}
        pressEffect={pressEffect}
        pressEffectColor={pressEffectColor ?? palette.main}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
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
        {icon ? (typeof icon === 'function' ? icon({ color: palette.main, size: 24 }) : icon) : null}
      </Pressable>
    </View>
  );
};

export default IconButton;
