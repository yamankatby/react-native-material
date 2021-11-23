import React, { useMemo } from "react";
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import chroma from "chroma-js";
import { PaletteColor, usePalette, useStyleSheet } from "./base";
import Surface, { SurfaceProps } from "./Surface";
import Text from "./Text";
import ActivityIndicator from "./ActivityIndicator";

export interface ButtonProps extends SurfaceProps {
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
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  loadingOverlayContainerStyle,
  ...rest
}) => {
  const p = usePalette(color, tintColor);
  const contentColor = useMemo(() => (variant === "contained" ? p.tintColor : p.color), [variant, p]);

  const hasLeading = useMemo(
    () => !!leading || (loading && loadingIndicatorPosition === "leading"),
    [leading, loading, loadingIndicatorPosition],
  );

  const hasTrailing = useMemo(
    () => !!trailing || (loading && loadingIndicatorPosition === "trailing"),
    [trailing, loading, loadingIndicatorPosition],
  );

  const styles = useStyleSheet(
    ({ palette }) => ({
      container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 64,
        height: 36,
        paddingStart: hasLeading ? (compact ? 6 : 12) : compact ? 8 : 16,
        paddingEnd: hasTrailing ? (compact ? 6 : 12) : compact ? 8 : 16,
        backgroundColor: variant === "contained" ? p.color : "transparent",
        borderWidth: variant === "outlined" ? 1 : 0,
        borderColor: chroma(palette.onSurface).alpha(0.12).hex(),
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
          <Text variant="button" style={[{ color: contentColor }, styles.titleStyle, titleStyle]}>
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
    <Surface elevation={variant === "contained" && !disableElevation ? 2 : 0} style={[styles.container, style]} effectColor={contentColor} category="small" {...rest}>
      {hasLeading && <View style={[styles.leadingContainer, leadingContainerStyle]}>{getLeading()}</View>}
      {getTitle()}
      {hasTrailing && <View style={[styles.trailingContainer, trailingContainerStyle]}>{getTrailing()}</View>}

      {loading && loadingIndicatorPosition === "overlay" && (
        <View style={[styles.loadingOverlayContainer, loadingOverlayContainerStyle]}>{getLoadingIndicator()}</View>
      )}
    </Surface>
  );
};

export default Button;
