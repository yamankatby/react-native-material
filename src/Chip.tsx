import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, TextStyle, View, ViewProps, ViewStyle } from 'react-native';
import chroma from 'chroma-js';
import Pressable, { PressableProps } from './Pressable';
import Text from './Text';
import { Color, usePaletteColor } from './hooks/use-palette-color';
import { useTheme } from './base/ThemeContext';

export interface ChipProps extends Omit<ViewProps, 'hitSlop'>, Omit<PressableProps, 'style' | 'children'> {
  /**
   * The text to display in the chip.
   */
  label: string | React.ReactNode | ((props: { color: string }) => React.ReactNode | null) | null;

  /**
   * The element placed before the `label`.
   */
  leading?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The element placed after the `label`.
   */
  trailing?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The variant of the chip.
   * - `filled`: A filled chip.
   * - `outlined`: A solid background with a border.
   *
   * @default "filled"
   */
  variant?: 'filled' | 'outlined';

  /**
   * The color of the chip.
   */
  color?: Color;

  /**
   * The style of the chip's container.
   */
  contentContainerStyle?: PressableProps['style'];

  /**
   * The style of the chip's label.
   */
  labelStyle?: StyleProp<TextStyle>;

  /**
   * The style of the chip's leading element.
   */
  leadingContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The style of the chip's trailing element.
   */
  trailingContainerStyle?: StyleProp<ViewStyle>;
}

const Chip: React.FC<ChipProps> = ({
  label,
  leading,
  trailing,
  variant = 'filled',
  color = 'on-surface',
  style,
  contentContainerStyle,
  labelStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  children,

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
  const theme = useTheme();

  const palette = usePaletteColor(color, theme.palette.surface.main);

  const scale = useMemo(() => chroma.scale([palette.on, palette.main]), [palette]);

  const labelElement =
    typeof label === 'string' ? (
      <Text variant="body2" style={[{ color: scale(0.87).hex() }, labelStyle]}>
        {label}
      </Text>
    ) : typeof label === 'function' ? (
      label({ color: scale(0.87).hex() })
    ) : (
      label
    );

  const leadingElement = typeof leading === 'function' ? leading({ color: scale(0.66).hex(), size: 24 }) : leading;

  const trailingElement = typeof trailing === 'function' ? trailing({ color: scale(0.66).hex(), size: 18 }) : trailing;

  return (
    <View style={[styles.container, variant === 'filled' && { backgroundColor: scale(0.08).hex() }, style]} {...rest}>
      <Pressable
        pressEffect={pressEffect}
        pressEffectColor={pressEffectColor ?? scale(0.87).hex()}
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
        style={[styles.contentContainer, contentContainerStyle]}
      >
        {leadingElement && <View style={[styles.leadingContainer, leadingContainerStyle]}>{leadingElement}</View>}
        {labelElement}
        {children}
        {trailingElement && <View style={[styles.trailingContainer, trailingContainerStyle]}>{trailingElement}</View>}

        {variant === 'outlined' && (
          <View style={[StyleSheet.absoluteFill, styles.outline, { borderColor: scale(0.26).hex() }]} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 32,
  },
  leadingContainer: {
    marginStart: -8,
    marginEnd: 8,
  },
  trailingContainer: {
    marginStart: 8,
    marginEnd: -4,
  },
  outline: {
    borderWidth: 1,
    borderRadius: 16,
  },
});

export default Chip;
