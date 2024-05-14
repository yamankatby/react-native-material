"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimatedElevation = void 0;
var _react = require("react");
var _reactNative = require("react-native");
var _ThemeContext = require("../base/ThemeContext");
const inputRange = Array.from(Array(25).keys());
const useAnimatedElevation = elevation => {
  const animated = (0, _react.useMemo)(() => new _reactNative.Animated.Value(elevation), []);
  const noNativeAnimated = (0, _react.useMemo)(() => new _reactNative.Animated.Value(elevation), []);
  (0, _react.useEffect)(() => {
    if (_reactNative.Platform.OS === 'web') return;
    _reactNative.Animated.parallel([_reactNative.Animated.timing(noNativeAnimated, {
      toValue: elevation,
      duration: 200,
      useNativeDriver: false
    }), _reactNative.Animated.timing(animated, {
      toValue: elevation,
      duration: 200,
      useNativeDriver: true
    })]).start();
  }, [elevation]);
  const {
    elevations
  } = (0, _ThemeContext.useTheme)();
  return (0, _react.useMemo)(() => [_reactNative.Platform.select({
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
  }), _reactNative.Platform.select({
    default: {},
    web: {}
  })], [elevation, elevations]);
};
exports.useAnimatedElevation = useAnimatedElevation;
//# sourceMappingURL=use-animated-elevation.js.map