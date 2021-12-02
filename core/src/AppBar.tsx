import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { PaletteColor, usePalette, useTheme } from "./base";
import Surface, { SurfaceProps } from "./Surface";
import Text from "./Text";
import { useElevation } from "./base/elevations";

export interface AppBarProps extends SurfaceProps {
  /**
   * Whether you want to place the AppBar at the top or the bottom of the screen.
   *
   * @default "top"
   */
  variant?: "top" | "bottom";

  /**
   * The primary text to display in the AppBar.
   */
  title?: string | React.ReactNode | ((props: { color: string }) => React.ReactNode | null) | null;

  /**
   * The secondary text to display in the AppBar.
   */
  subtitle?: string | React.ReactNode | ((props: { color: string }) => React.ReactNode | null) | null;

  /**
   * Whether the `title` and `subtitle` should be centered.
   *
   * @default false
   */
  centerTitle?: boolean;

  /**
   * The element displayed before the `title`.
   */
  leading?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The element displayed after the `title`.
   */
  trailing?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The fill color of the AppBar's background.
   *
   * @default "primary"
   */
  color?: PaletteColor;

  /**
   * The color of the AppBar's content (title, subtitle, icons, etc.).
   */
  tintColor?: PaletteColor;

  /**
   * Whether the AppBar's background is transparent.
   *
   * @default false
   */
  transparent?: boolean;

  /**
   * If `true`, the `color` prop will be applied in dark mode.
   *
   * @default false
   */
  enableColorOnDark?: boolean;
}

const AppBar: React.FC<AppBarProps> = ({
  variant = "top",
  title,
  subtitle,
  centerTitle = false,
  leading,
  trailing,
  color = "primary",
  tintColor,
  transparent = false,
  enableColorOnDark = false,
  style,
  ...props
}) => {
  const theme = useTheme();

  const surfaceColor = useElevation(variant === "top" ? 4 : 8).backgroundColor;

  const palette = usePalette(theme.mode === "dark" && !enableColorOnDark ? surfaceColor : color, tintColor);

  const titleElement =
    typeof title === "string" ? (
      <Text variant="h6" style={[{ color: palette.tintColor }]}>
        {title}
      </Text>
    ) : typeof title === "function" ? (
      title({ color: palette.tintColor })
    ) : (
      title
    );

  const subtitleElement =
    typeof subtitle === "string" ? (
      <Text variant="caption" style={[{ color: palette.tintColor }]}>
        {subtitle}
      </Text>
    ) : typeof subtitle === "function" ? (
      subtitle({ color: palette.tintColor })
    ) : (
      subtitle
    );

  const leadingElement = typeof leading === "function" ? leading({ color: palette.tintColor, size: 24 }) : leading;

  const trailingElement = typeof trailing === "function" ? trailing({ color: palette.tintColor, size: 24 }) : trailing;

  return (
    <Surface
      style={[{ backgroundColor: transparent ? "transparent" : palette.color }, style]}
      elevation={transparent ? 0 : variant === "top" ? 4 : 8}
      {...props}
    >
      <View style={[styles.contentContainer]}>
        {leadingElement && <View style={[styles.leadingContainer]}>{leadingElement}</View>}
        <View
          style={[centerTitle ? [StyleSheet.absoluteFill, styles.centeredTitleContainer] : styles.titleContainer]}
          pointerEvents={centerTitle ? "none" : undefined}
        >
          {titleElement}
          {subtitleElement}
        </View>
        {trailingElement && <View style={[styles.trailingContainer]}>{trailingElement}</View>}
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Platform.select({ ios: 44, web: 64, default: 56 }),
    paddingHorizontal: 16,
  },
  leadingContainer: {
    marginStart: -12,
    marginEnd: 20,
  },
  trailingContainer: {
    marginStart: 20,
    marginEnd: -12,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  centeredTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppBar;
