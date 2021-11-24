import React, { useMemo } from "react";
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import chroma from "chroma-js";
import { PaletteColor, usePalette, useStyleSheet, useTheme } from "./base";
import Surface, { SurfaceProps } from "./Surface";
import Text from "./Text";
import ActivityIndicator from "./ActivityIndicator";
import Pressable, { PressableProps } from "./Pressable";

export interface ButtonProps extends Omit<SurfaceProps, "hitSlop">, Omit<PressableProps, "style" | "children"> {
  title: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  leading?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  trailing?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  variant?: "contained" | "outlined" | "text";

  color?: PaletteColor;

  tintColor?: PaletteColor;

  uppercase?: boolean;

  compact?: boolean;

  disableElevation?: boolean;

  loading?: boolean;

  loadingIndicator?: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  loadingIndicatorPosition?: "leading" | "trailing" | "overlay";

  pressableContainerStyle?: StyleProp<ViewStyle>;

  contentContainerStyle?: PressableProps["style"];

  titleStyle?: StyleProp<TextStyle>;

  leadingContainerStyle?: StyleProp<ViewStyle>;

  trailingContainerStyle?: StyleProp<ViewStyle>;

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
