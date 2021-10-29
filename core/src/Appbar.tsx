import React, { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Platform, StyleProp, StyleSheet, TextProps, View, ViewProps, ViewStyle } from "react-native";
import { PaletteColor, usePalette, useStyleSheet, useTheme } from "./base";
import Surface, { SurfaceProps } from "./Surface";

export interface AppbarProps extends SurfaceProps {
  title?: string | React.ReactElement | null;

  variant?: "regular" | "prominent";

  position?: "top" | "bottom";

  color?: PaletteColor;

  tintColor?: PaletteColor;

  centerTitle?: boolean;

  image?: React.ReactElement | null;

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

  imageContainerStyle?: Animated.AnimatedProps<ViewProps>["style"];

  contentContainerStyle?: Animated.AnimatedProps<ViewProps>["style"];

  titleContainerStyle?: Animated.AnimatedProps<ViewProps>["style"];

  titleStyle?: Animated.AnimatedProps<TextProps>["style"];

  leadingContainerStyle?: StyleProp<ViewStyle>;

  trailingContainerStyle?: StyleProp<ViewStyle>;
}

const Appbar: React.FC<AppbarProps> = ({
  title,
  variant = "regular",
  position = "top",
  color = "primary",
  tintColor,
  centerTitle = Platform.OS === "ios",
  image,
  leading,
  trailing,
  style,
  imageContainerStyle,
  contentContainerStyle,
  titleContainerStyle,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  children,
  ...rest
}) => {
  const theme = useTheme();

  const palette = usePalette(color, tintColor);

  const hasLeading = useMemo(() => !!leading, [leading]);

  const [width, setWidth] = useState<number | undefined>();

  const isTablet = useMemo(() => width && width > 600, [width]);

  const regularHeight = useMemo(() => Platform.select({ ios: 44, default: isTablet ? 64 : 56 }), [isTablet]);

  const prominentHeight = useMemo(() => 128, []);

  const animated = useRef(new Animated.Value(variant === "regular" ? 0 : 1)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: variant === "regular" ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animated, variant]);

  const opacity = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const height = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [regularHeight, prominentHeight],
  });

  const bottom = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [(regularHeight - 24) / 2, 28],
  });

  const fontSize = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.typography.h6.fontSize!, theme.typography.h5.fontSize!],
  });

  const styles = useStyleSheet(({ typography }) => ({
    container: {
      backgroundColor: palette.color,
      borderRadius: 0,
    },
    imageContainer: {
      backgroundColor: "red",
    },
    titleContainer: {
      position: "absolute",
      start: 0,
      end: 0,
      marginHorizontal: (isTablet ? 24 : 16) + (hasLeading ? 48 : 0),
      justifyContent: "center",
    },
    title: {
      ...typography.h6,
      color: palette.tintColor,
      textAlign: centerTitle ? "center" : "auto",
    },
    toolbar: {
      flexDirection: "row",
      justifyContent: hasLeading ? "space-between" : "flex-end",
      alignItems: "center",
      height: regularHeight,
      paddingHorizontal: isTablet ? 8 : 4,
    },
    actionsContainer: {
      flexDirection: "row",
    },
  }), [position, palette, hasLeading, isTablet, centerTitle, regularHeight]);

  const leadingElement = leading && (
    <View style={[styles.actionsContainer, leadingContainerStyle]}>
      {typeof leading === "function" ? leading({ color: palette.tintColor, size: 48 }) : leading}
    </View>
  );

  const trailingElement = trailing && (
    <View style={[styles.actionsContainer, trailingContainerStyle]}>
      {typeof trailing === "function" ? trailing({ color: palette.tintColor, size: 48 }) : trailing}
    </View>
  );

  return (
    <Surface
      onLayout={e => setWidth(e.nativeEvent.layout.width)}
      elevation={palette.color === "transparent" ? 0 : position === "top" ? 4 : 8}
      style={[styles.container, style]}
      {...rest}
    >
      {image && (
        <Animated.View style={[StyleSheet.absoluteFillObject, { opacity }, imageContainerStyle]}>{image}</Animated.View>
      )}
      <Animated.View style={[{ height }, contentContainerStyle]}>
        {typeof title === "string" ? (
          <Animated.View style={[styles.titleContainer, { bottom }, titleContainerStyle]}>
            <Animated.Text style={[styles.title, { fontSize }, titleStyle]}>{title}</Animated.Text>
          </Animated.View>
        ) : (
          title
        )}
        {(leading || trailing) && (
          <View style={[styles.toolbar]}>
            {leadingElement}
            {trailingElement}
          </View>
        )}
      </Animated.View>
      {children}
    </Surface>
  );
};

export default Appbar;
