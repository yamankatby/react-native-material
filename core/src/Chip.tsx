import React, { useMemo } from "react";
import { StyleProp, StyleSheet, TextStyle, View, ViewProps, ViewStyle } from "react-native";
import chroma from "chroma-js";
import { PaletteColor, usePalette, useTheme } from "./base";
import Pressable, { PressableProps } from "./Pressable";
import Text from "./Text";

export interface ChipProps extends Omit<ViewProps, "hitSlop">, Omit<PressableProps, "style" | "children"> {
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
  variant?: "filled" | "outlined";

  /**
   * The fill color of the chip.
   * If variant is `filled`, this will be the background color.
   * If variant is `outlined`, this will be the border color.
   */
  color?: PaletteColor;

  /**
   * The color of the chip's content (text, icons, etc.).
   */
  tintColor?: PaletteColor;

  /**
   * The style of the chip's container.
   */
  contentContainerStyle?: PressableProps["style"];

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
  variant = "filled",
  color,
  tintColor,
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

  const surfaceScale = useMemo(
    () => chroma.scale([theme.palette.surface, theme.palette.onSurface]),
    [theme.palette.surface, theme.palette.onSurface],
  );

  const palette = usePalette(
    color || surfaceScale(variant === "outlined" ? 0.26 : 0.08).hex(),
    tintColor || (color === undefined ? surfaceScale(0.66).hex() : variant === "outlined" ? color : undefined),
  );

  const labelElement =
    typeof label === "string" ? (
      <Text variant="body2" style={[{ color: color ? palette.tintColor : surfaceScale(0.87).hex() }, labelStyle]}>
        {label}
      </Text>
    ) : typeof label === "function" ? (
      label({ color: color ? palette.tintColor : surfaceScale(0.87).hex() })
    ) : (
      label
    );

  const leadingElement = typeof leading === "function" ? leading({ color: palette.tintColor, size: 24 }) : leading;

  const trailingElement = typeof trailing === "function" ? trailing({ color: palette.tintColor, size: 18 }) : trailing;

  return (
    <View style={[styles.container, variant === "filled" && { backgroundColor: palette.color }, style]} {...rest}>
      <Pressable
        pressEffect={pressEffect}
        pressEffectColor={pressEffectColor ?? palette.tintColor}
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

        {variant === "outlined" && (
          <View style={[StyleSheet.absoluteFill, styles.outline, { borderColor: palette.color }]} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: "hidden",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
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
