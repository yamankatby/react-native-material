import React, { useMemo } from "react";
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import chroma from "chroma-js";
import { PaletteColor, usePalette, useStyleSheet, useTheme } from "./base";
import Surface, { SurfaceProps } from "./Surface";
import Text from "./Text";
import ActivityIndicator from "./ActivityIndicator";
import Pressable, { PressableProps } from "./Pressable";

export interface ButtonProps extends Omit<SurfaceProps, "hitSlop">, Omit<PressableProps, "style" | "children"> {
  /**
   * The text content of the button.
   */
  title: string | React.ReactNode | ((props: { color: string }) => React.ReactNode | null) | null;

  /**
   * The element placed before the `title`.
   */
  leading?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The element placed after the `title`.
   */
  trailing?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The style of the button.
   * - `text`: Text buttons are typically used for less important actions (low emphasis).
   * - `outlined`: Outlined buttons are used for more emphasis than text buttons due to the stroke (medium emphasis).
   * - `contained`: Contained buttons have more emphasis, as they use a color fill and shadow (high emphasis).
   *
   * @default "contained"
   */
  variant?: "text" | "outlined" | "contained";

  /**
   * The main color of the button.
   * for `contained` buttons, this is the background color.
   * for `outlined` and `text` buttons, this is the color of the content (text, icons, etc.).
   *
   * @default "primary"
   */
  color?: PaletteColor;

  /**
   * The color of the `contained` buttons content (text, icons, etc.). No effect on `outlined` and `text` buttons.
   */
  tintColor?: PaletteColor;

  /**
   * Smaller horizontal padding, useful for `text` buttons in a row.
   *
   * @default false
   */
  compact?: boolean;

  /**
   * If `true`, no shadow is used. No effect on `outlined` and `text` buttons.
   *
   * @default false
   */
  disableElevation?: boolean;

  /**
   * If `false`, the button title is not rendered in upper case. No effect if you pass a React.Node as the `title` prop.
   *
   * @default true
   */
  uppercase?: boolean;

  /**
   * Whether to show a loading indicator.
   *
   * @default false
   */
  loading?: boolean;

  /**
   * The place where the loading indicator should appear.
   * - `leading`: The indicator will replace the `leading` element.
   * - `trailing`: The indicator will replace the `trailing` element.
   * - `overlay`: The indicator will be added as an overlay over the button.
   *
   * @default "leading"
   */
  loadingIndicatorPosition?: "leading" | "trailing" | "overlay";

  /**
   * A React.Node to replace the default loading indicator. Also, you can pass a string to show a text (e.g. "Loading...").
   */
  loadingIndicator?: string | React.ReactNode | ((props: { color: string }) => React.ReactNode | null) | null;

  /**
   * The style of the button's pressable component container.
   */
  pressableContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The style of the button's container.
   */
  contentContainerStyle?: PressableProps["style"];

  /**
   * The style of the button's text. No effect if you pass a React.Node as the `title` prop.
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * The style of the button's leading element container.
   */
  leadingContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The style of the button's trailing element container.
   */
  trailingContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The style of the button's loading indicator overlay view. No effect if `loadingIndicatorPosition` is not `overlay`.
   */
  loadingOverlayContainerStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  leading,
  trailing,
  variant = "contained",
  color = "primary",
  tintColor,
  uppercase = true,
  compact = false,
  disableElevation = false,
  loading = false,
  loadingIndicator,
  loadingIndicatorPosition = "leading",
  style,
  pressableContainerStyle,
  contentContainerStyle,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  loadingOverlayContainerStyle,
  pressEffect,
  pressEffectColor,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
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

  const p = usePalette(
    disabled ? chroma.scale([theme.palette.surface, theme.palette.onSurface])(0.12).hex() : color,
    disabled ? chroma.scale([theme.palette.surface, theme.palette.onSurface])(0.35).hex() : tintColor,
  );

  const contentColor = useMemo(
    () => (variant === "contained" ? p.tintColor : disabled ? p.tintColor : p.color),
    [variant, p, disabled],
  );

  const hasLeading = useMemo(
    () => !!leading || (loading && loadingIndicatorPosition === "leading"),
    [leading, loading, loadingIndicatorPosition],
  );

  const hasTrailing = useMemo(
    () => !!trailing || (loading && loadingIndicatorPosition === "trailing"),
    [trailing, loading, loadingIndicatorPosition],
  );

  const styles = useStyleSheet(
    ({ palette, shapes }) => ({
      container: {
        backgroundColor: variant === "contained" ? p.color : "transparent",
        borderWidth: variant === "outlined" ? 1 : 0,
        borderColor: chroma(palette.onSurface).alpha(0.12).hex(),
      },
      pressableContainer: {
        ...shapes.small,
        overflow: "hidden",
      },
      pressable: {
        minWidth: 64,
        height: 36,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingStart: hasLeading ? (compact ? 6 : 12) : compact ? 8 : 16,
        paddingEnd: hasTrailing ? (compact ? 6 : 12) : compact ? 8 : 16,
      },
      titleStyle: {
        textTransform: uppercase ? "uppercase" : "none",
        opacity: loading && loadingIndicatorPosition === "overlay" ? 0 : 1,
      },
      leadingContainer: {
        marginEnd: compact ? 6 : 8,
        opacity: loading && loadingIndicatorPosition === "overlay" ? 0 : 1,
      },
      trailingContainer: {
        marginStart: compact ? 6 : 8,
        opacity: loading && loadingIndicatorPosition === "overlay" ? 0 : 1,
      },
      loadingOverlayContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
      },
    }),
    [variant, uppercase, compact, loading, loadingIndicatorPosition, p, hasLeading, hasTrailing],
  );

  const getTitle = () => {
    switch (typeof title) {
      case "string":
        return (
          <Text variant="button" selectable={false} style={[{ color: contentColor }, styles.titleStyle, titleStyle]}>
            {title}
          </Text>
        );
      case "function":
        return title({ color: contentColor });
      default:
        return title;
    }
  };

  const getLoadingIndicator = () => {
    if (!loadingIndicator) return <ActivityIndicator color={contentColor} />;
    switch (typeof loadingIndicator) {
      case "string":
        return (
          <Text variant="button" style={{ color: contentColor }}>
            {loadingIndicator}
          </Text>
        );
      case "function":
        return loadingIndicator({ color: contentColor });
      default:
        return loadingIndicator;
    }
  };

  const getLeading = () => {
    if (loading && loadingIndicatorPosition === "leading") return getLoadingIndicator();
    return typeof leading === "function" ? leading({ color: contentColor, size: 18 }) : leading;
  };

  const getTrailing = () => {
    if (loading && loadingIndicatorPosition === "trailing") return getLoadingIndicator();
    return typeof trailing === "function" ? trailing({ color: contentColor, size: 18 }) : trailing;
  };

  return (
    <Surface
      elevation={variant === "contained" && !disableElevation && !disabled ? 2 : 0}
      style={[styles.container, style]}
      category="small"
      {...rest}
    >
      <View style={[styles.pressableContainer, pressableContainerStyle]}>
        <Pressable
          style={[styles.pressable, contentContainerStyle]}
          pressEffect={pressEffect}
          pressEffectColor={pressEffectColor ?? contentColor}
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onLongPress={onLongPress}
          onBlur={onBlur}
          onFocus={onFocus}
          delayLongPress={delayLongPress}
          disabled={disabled}
          hitSlop={hitSlop}
          pressRetentionOffset={pressRetentionOffset}
          android_disableSound={android_disableSound}
          android_ripple={android_ripple}
          testOnly_pressed={testOnly_pressed}
        >
          {hasLeading && <View style={[styles.leadingContainer, leadingContainerStyle]}>{getLeading()}</View>}
          {getTitle()}
          {hasTrailing && <View style={[styles.trailingContainer, trailingContainerStyle]}>{getTrailing()}</View>}

          {loading && loadingIndicatorPosition === "overlay" && (
            <View style={[styles.loadingOverlayContainer, loadingOverlayContainerStyle]}>{getLoadingIndicator()}</View>
          )}
        </Pressable>
      </View>
    </Surface>
  );
};

export default Button;
