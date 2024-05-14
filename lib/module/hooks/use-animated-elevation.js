import { useEffect, useMemo } from 'react';
import { Animated, Platform } from 'react-native';
import { useTheme } from '../base/ThemeContext';
const inputRange = Array.from(Array(25).keys());
export const useAnimatedElevation = elevation => {
  const animated = useMemo(() => new Animated.Value(elevation), []);
  const noNativeAnimated = useMemo(() => new Animated.Value(elevation), []);
  useEffect(() => {
    if (Platform.OS === 'web') return;
    Animated.parallel([Animated.timing(noNativeAnimated, {
      toValue: elevation,
      duration: 200,
      useNativeDriver: false
    }), Animated.timing(animated, {
      toValue: elevation,
      duration: 200,
      useNativeDriver: true
    })]).start();
  }, [elevation]);
  const {
    elevations
  } = useTheme();
  return useMemo(() => [Platform.select({
    android: {
      elevation: animated
    },
    ios: {
      shadowOffset: {
        width: noNativeAnimated.interpolate({
          inputRange,
          outputRange: Object.values(elevations).map(e => {
            var _e$shadowOffset;
            return ((_e$shadowOffset = e.shadowOffset) === null || _e$shadowOffset === void 0 ? void 0 : _e$shadowOffset.width) ?? 0;
          })
        }),
        height: noNativeAnimated.interpolate({
          inputRange,
          outputRange: Object.values(elevations).map(e => {
            var _e$shadowOffset2;
            return ((_e$shadowOffset2 = e.shadowOffset) === null || _e$shadowOffset2 === void 0 ? void 0 : _e$shadowOffset2.height) ?? 0;
          })
        })
      }
    },
    default: {
      shadowColor: elevations[elevation].shadowColor,
      shadowOffset: {
        width: animated.interpolate({
          inputRange,
          outputRange: Object.values(elevations).map(e => {
            var _e$shadowOffset3;
            return ((_e$shadowOffset3 = e.shadowOffset) === null || _e$shadowOffset3 === void 0 ? void 0 : _e$shadowOffset3.width) ?? 0;
          })
        }),
        height: animated.interpolate({
          inputRange,
          outputRange: Object.values(elevations).map(e => {
            var _e$shadowOffset4;
            return ((_e$shadowOffset4 = e.shadowOffset) === null || _e$shadowOffset4 === void 0 ? void 0 : _e$shadowOffset4.height) ?? 0;
          })
        })
      },
      shadowOpacity: animated.interpolate({
        inputRange,
        outputRange: Object.values(elevations).map(e => e.shadowOpacity ?? 0)
      }),
      shadowRadius: animated.interpolate({
        inputRange,
        outputRange: Object.values(elevations).map(e => e.shadowRadius ?? 0)
      })
    },
    web: {
      boxShadow: elevations[elevation].boxShadow,
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    }
  }), Platform.select({
    default: {},
    web: {}
  })], [elevation, elevations]);
};
//# sourceMappingURL=use-animated-elevation.js.map