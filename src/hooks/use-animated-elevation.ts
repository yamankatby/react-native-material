import { useEffect, useMemo } from 'react';
import { Animated, Platform, StyleProp, ViewStyle } from 'react-native';
import { Elevation, useTheme } from '../base/ThemeContext';

const inputRange = Array.from(Array(25).keys());

export const useAnimatedElevation = (elevation: Elevation): StyleProp<ViewStyle> => {
  const animated = useMemo(() => new Animated.Value(elevation), []);

  useEffect(() => {
    if (Platform.OS === 'web') return;
    Animated.timing(animated, {
      toValue: elevation,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [elevation]);

  const { elevations } = useTheme();

  return useMemo(
    () => [
      Platform.select({
        android: { elevation: animated },
        default: {
          shadowColor: elevations[elevation].shadowColor,
          shadowOffset: {
            width: animated.interpolate({
              inputRange,
              outputRange: Object.values(elevations).map((e) => e.shadowOffset?.width ?? 0),
            }),
            height: animated.interpolate({
              inputRange,
              outputRange: Object.values(elevations).map((e) => e.shadowOffset?.height ?? 0),
            }),
          },
          shadowOpacity: animated.interpolate({
            inputRange,
            outputRange: Object.values(elevations).map((e) => e.shadowOpacity ?? 0),
          }),
          shadowRadius: animated.interpolate({
            inputRange,
            outputRange: Object.values(elevations).map((e) => e.shadowRadius ?? 0),
          }),
        },
        web: {
          boxShadow: (elevations[elevation] as any).boxShadow,
          transition:
            'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      }),
      Platform.select({
        default: {},
        web: {},
      }),
    ],
    [elevation, elevations]
  );
};
