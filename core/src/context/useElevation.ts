import { useEffect, useMemo } from "react";
import { Animated, Platform } from "react-native";
import { Elevation, useTheme } from "./ThemeProvider";

export const useAnimatedElevation = (elevation: Elevation) => {
  const theme = useTheme();

  const elevations = Object.values(theme.elevations).map(value => value.elevation);
  const shadowOffsetWidths = Object.values(theme.elevations).map(value => value.shadowOffset?.width) as number[];
  const shadowOffsetHeights = Object.values(theme.elevations).map(value => value.shadowOffset?.height) as number[];
  const shadowRadius = Object.values(theme.elevations).map(value => value.shadowRadius) as number[];
  const shadowOpacities = Object.values(theme.elevations).map(value => value.shadowOpacity) as number[];
  const boxShadows = Object.values(theme.elevations).map(value => value.boxShadow);

  const animatedValue = useMemo(() => new Animated.Value(elevation), []);

  useEffect(() => {
    if (Platform.OS === "web") return;
    Animated.timing(animatedValue, {
      toValue: elevation,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [elevation]);

  return useMemo(() => {
    return Platform.select({
      android: { elevation: animatedValue },
      web: {
        boxShadow: boxShadows[elevation],
        transition:
          "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
      default: {
        shadowColor: "#000",
        shadowOffset: {
          width: animatedValue.interpolate({
            inputRange: elevations,
            outputRange: shadowOffsetWidths,
          }),
          height: animatedValue.interpolate({
            inputRange: elevations,
            outputRange: shadowOffsetHeights,
          }),
        },
        shadowOpacity: animatedValue.interpolate({
          inputRange: elevations,
          outputRange: shadowOpacities,
        }),
        shadowRadius: animatedValue.interpolate({
          inputRange: elevations,
          outputRange: shadowRadius,
        }),
      },
    });
  }, []);
};
