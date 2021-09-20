import React, { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  Platform,
  StyleProp,
  StyleSheet,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import { ColorName, useStyleSheet, useTheme } from "./base";
import Surface from "./Surface";

export interface AppbarProps {
  title?: string | React.ReactElement | undefined;

  variant?: 'regular' | 'prominent' | undefined;

  leading?: React.ReactElement | undefined;

  trailing?: React.ReactElement | React.ReactElement[] | undefined;

  color?: ColorName | undefined;

  tintColor?: ColorName | undefined;

  centerTitle?: boolean | undefined;

  style?: StyleProp<ViewStyle> | undefined;

  innerContainerStyle?: StyleProp<ViewStyle> | undefined;

  titleContainerStyle?: StyleProp<ViewStyle> | undefined;

  titleStyle?: StyleProp<TextStyle> | undefined;

  leadingContainerStyle?: StyleProp<ViewStyle> | undefined;

  trailingContainerStyle?: StyleProp<ViewStyle> | undefined;
}

const Appbar: React.FC<AppbarProps> = ({
  title,
  variant,
  leading,
  trailing,
  color,
  tintColor,
  centerTitle,
  style,
  innerContainerStyle,
  titleContainerStyle,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
}) => {
  const dimensions = useWindowDimensions();
  const defaultSize = useMemo(() => dimensions.width < 600, [dimensions.width]);
  const hasLeading = useMemo(() => !!leading, [leading])

  const animated = useRef(new Animated.Value(variant === 'regular' ? 0 : 1)).current

  const regularHeight = Platform.OS === 'ios' ? 44 : defaultSize ? 56 : 64
  const prominentHeight = 128

  const theme = useTheme()

  useEffect(() => {
    Animated.timing(animated, {
      toValue: variant === 'regular' ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }, [variant])

  const height = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [regularHeight, prominentHeight],
  })

  const scale = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.typographyScheme.h6.fontSize!, theme.typographyScheme.h5.fontSize!],
  })

  const bottom = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [(regularHeight - 24) / 2, 28],
  })

  const opacity = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  const styles = useStyleSheet(({ colorScheme, elevationScheme, typographyScheme }) => ({
    container: {
      backgroundColor: colorScheme[color!],
      elevation: 4,
      borderRadius: 0,
    },
    innerContainer: {},
    toolbar: {
      flexDirection: "row",
      justifyContent: hasLeading ? 'space-between' : 'flex-end',
      alignItems: 'center',
      paddingHorizontal: defaultSize ? 4 : 12,
      height: regularHeight,
    },
    titleContainer: {
      position: 'absolute',
      start: 16,
      end: 16,
      justifyContent: 'center',
      height: 24,
      paddingHorizontal: hasLeading ? 56 : 0,
    },
    title: {
      ...typographyScheme.h6,
      color: 'white',
      textAlign: centerTitle === true ? 'center' : undefined,
    },
    trailingContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  }), [color, defaultSize, hasLeading, regularHeight, centerTitle]);

  return (
    <Surface style={[styles.container, style]}>
      <Animated.Image
        style={[StyleSheet.absoluteFillObject, { opacity }]}
        source={{
          uri: 'https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png',
        }}
      />
      <Animated.View style={[styles.innerContainer, { height }]}>
        <Animated.View style={[styles.titleContainer, { bottom }]}>
          <Animated.Text style={[styles.title, { fontSize: scale }]}>{title}</Animated.Text>
        </Animated.View>
        <View style={[styles.toolbar]}>
          {leading && <View style={leadingContainerStyle}>{leading}</View>}
          {trailing && <View style={[styles.trailingContainer, trailingContainerStyle]}>{trailing}</View>}
        </View>
      </Animated.View>
    </Surface>
  );
};

Appbar.defaultProps = {
  variant: 'regular',
  color: "primary",
  tintColor: "onPrimary",
  centerTitle: Platform.OS === 'ios',
};

export default Appbar;
