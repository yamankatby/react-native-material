import React, { useCallback, useMemo, useState } from "react";
import { LayoutChangeEvent, Platform, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { PaletteColor, usePalette, useTheme } from "./base";
import Surface, { SurfaceProps } from "./Surface";
import Text from "./Text";

export interface AppbarProps extends SurfaceProps {
  title?: string | React.ReactElement;

  subtitle?: string | React.ReactElement;

  variant?: "top" | "bottom";

  color?: PaletteColor;

  tintColor?: PaletteColor;

  enableColorOnDark?: boolean;

  transparent?: boolean;

  centerTitle?: boolean;

  leading?:
    | React.ReactElement
    | React.ReactElement[]
    | ((props: { color: string; size: number }) => React.ReactElement | React.ReactElement[] | null)
    | null;

  trailing?:
    | React.ReactElement
    | React.ReactElement[]
    | ((props: { color: string; size: number }) => React.ReactElement | React.ReactElement[] | null)
    | null;

  contentContainerStyle?: StyleProp<ViewStyle>;

  titleContainerStyle?: StyleProp<ViewStyle>;

  titleStyle?: StyleProp<TextStyle>;

  subtitleStyle?: StyleProp<TextStyle>;

  toolbarContainerStyle?: StyleProp<ViewStyle>;

  leadingContainerStyle?: StyleProp<ViewStyle>;

  trailingContainerStyle?: StyleProp<ViewStyle>;
}

const Appbar: React.FC<AppbarProps> = ({
  title,
  subtitle,
  variant = "top",
  color = "primary",
  tintColor,
  enableColorOnDark = false,
  transparent = false,
  centerTitle = Platform.OS === "ios",
  leading,
  trailing,
  contentContainerStyle,
  titleContainerStyle,
  titleStyle,
  subtitleStyle,
  toolbarContainerStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  style,
  onLayout,
  children,
  ...rest
}) => {
  const { mode, palette } = useTheme();

  const p = usePalette(
    color,
    tintColor ?? (mode === "dark" && !enableColorOnDark && !transparent) ? palette.onSurface : undefined,
  );

  const [surfaceWidth, setSurfaceWidth] = useState(0);

  const lg = useMemo(() => surfaceWidth && surfaceWidth > 600, [surfaceWidth]);

  const [leadingWidth, setLeadingWidth] = useState(() => {
    if (!leading) return 0;
    const items = typeof leading === "function" ? leading({ color: p.tintColor, size: 48 }) : leading;
    return Array.isArray(items) ? items.length * 48 : 48;
  });

  const onSurfaceLayout = useCallback(
    (event: LayoutChangeEvent) => {
      onLayout && onLayout(event);
      setSurfaceWidth(event.nativeEvent.layout.width);
    },
    [onLayout],
  );

  return (
    <Surface
      elevation={transparent ? 0 : variant === "top" ? 4 : 8}
      onLayout={onSurfaceLayout}
      style={[
        !(mode === "dark" && !enableColorOnDark && !transparent) && {
          backgroundColor: transparent ? "transparent" : p.color,
        },
        style,
      ]}
      {...rest}
    >
      <View style={[{ height: lg ? 64 : Platform.OS === "ios" ? 44 : 56 }, contentContainerStyle]}>
        {(title || subtitle) && (
          <View
            style={[
              styles.titleContainer,
              !centerTitle && { marginStart: 12 + (lg ? 8 : 4) + leadingWidth },
              titleContainerStyle,
            ]}
          >
            {title && typeof title === "string" ? (
              <Text
                variant="h6"
                style={[
                  {
                    color: p.tintColor,
                    textAlign: centerTitle ? "center" : "auto",
                  },
                  titleStyle,
                ]}
              >
                {title}
              </Text>
            ) : (
              title
            )}
            {subtitle && typeof subtitle === "string" ? (
              <Text
                variant="caption"
                style={[
                  {
                    color: p.tintColor,
                    textAlign: centerTitle ? "center" : "auto",
                  },
                  subtitleStyle,
                ]}
              >
                {subtitle}
              </Text>
            ) : (
              subtitle
            )}
          </View>
        )}

        <View style={[styles.toolbarContainer, { marginHorizontal: lg ? 8 : 4 }, toolbarContainerStyle]}>
          {leading && (
            <View
              style={[styles.leadingContainer, leadingContainerStyle]}
              onLayout={e => setLeadingWidth(e.nativeEvent.layout.width)}
            >
              {typeof leading === "function" ? leading({ color: p.tintColor, size: 48 }) : leading}
            </View>
          )}
          {trailing && (
            <View style={[styles.trailingContainer, trailingContainerStyle]}>
              {typeof trailing === "function" ? trailing({ color: p.tintColor, size: 48 }) : trailing}
            </View>
          )}
        </View>
      </View>
      {children}
    </Surface>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
  },
  toolbarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  leadingContainer: {
    flexDirection: "row",
  },
  trailingContainer: {
    flexDirection: "row",
    marginStart: "auto",
  },
});

export default Appbar;
