import React, { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  Platform,
  StyleProp,
  StyleSheet,
  TextProps,
  useWindowDimensions,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { PaletteColor, usePalette, useStyleSheet, useTheme } from "./base";
import Surface, { SurfaceProps } from "./Surface";

export interface AppbarProps extends SurfaceProps {
  title?: string | React.ReactElement | null;

  variant?: "regular" | "prominent";

  color?: PaletteColor;

  tintColor?: PaletteColor;

  centerTitle?: boolean;

  image?: React.ReactElement;

  leading?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  trailing?:
    | React.ReactElement
    | React.ReactElement[]
    | ((props: { color: string; size: number }) => React.ReactElement | React.ReactElement[] | null)
    | null;

  fab?: React.ReactElement | null;

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
  color = "primary",
  tintColor,
  centerTitle = Platform.OS === "ios",
  image,
  leading,
  trailing,
  fab,
  style,
  imageContainerStyle,
  contentContainerStyle,
  titleContainerStyle,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  ...rest
}) => {
  const theme = useTheme();

  const palette = usePalette(color, tintColor);

  const hasLeading = useMemo(() => !!leading, [leading]);

  const dimensions = useWindowDimensions();

  const isTablet = useMemo(() => dimensions.width > 600, [dimensions.width]);

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
    outputRange: [theme.typographyScheme.h6.fontSize!, theme.typographyScheme.h5.fontSize!],
  });

  const styles = useStyleSheet(({ typographyScheme }) => ({
    container: {
      backgroundColor: palette.main,
      borderRadius: 0,
      elevation: 4,
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
      ...typographyScheme.h6,
      color: palette.on,
      textAlign: centerTitle ? "center" : "auto",
    },
    toolbar: {
      flexDirection: "row",
      justifyContent: hasLeading ? "space-between" : "flex-end",
      alignItems: "center",
      height: regularHeight,
      paddingHorizontal: isTablet ? 8 : 4,
    },
    trailingContainer: {
      flexDirection: "row",
    },
  }), [palette, hasLeading, isTablet, centerTitle, regularHeight]);

  const leadingElement = leading && (
    <View style={[leadingContainerStyle]}>
      {typeof leading === "function" ? leading({ color: palette.on, size: 48 }) : leading}
    </View>
  );

  const trailingElement = trailing && (
    <View style={[styles.trailingContainer, trailingContainerStyle]}>
      {typeof trailing === "function" ? trailing({ color: palette.on, size: 48 }) : trailing}
    </View>
  );

  return (
    <Surface style={[styles.container, style]} {...rest}>
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
      {!!fab && fab}
    </Surface>
  );
};

export default Appbar;
