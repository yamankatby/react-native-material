import React, { useEffect, useMemo } from "react";
import { Animated, Platform, StyleProp, ViewProps, ViewStyle } from "react-native";
import { ShapeCategory, useTheme } from "./base";
import chroma from "chroma-js";

export type Elevation =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

export interface SurfaceProps extends Omit<ViewProps, "style"> {
  category?: ShapeCategory;

  elevation?: Elevation;

  animateElevation?: boolean;

  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
}

const elevations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

const shadowOffsetHeights = [0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];

const shadowOpacities = [
  0, 0.18, 0.2, 0.22, 0.23, 0.25, 0.27, 0.29, 0.3, 0.32, 0.34, 0.36, 0.37, 0.39, 0.41, 0.43, 0.44, 0.46, 0.48, 0.5,
  0.51, 0.53, 0.55, 0.57, 0.58,
];

const shadowRadius = [
  0, 1.0, 1.41, 2.22, 2.62, 3.84, 4.65, 4.65, 4.65, 5.46, 6.27, 6.68, 7.49, 8.3, 9.11, 9.51, 10.32, 11.14, 11.95, 12.35,
  13.16, 13.97, 14.78, 15.19, 16.0,
];

const boxShadows = [
  "none",
  "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
  "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
  "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
  "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
  "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
  "0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
  "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
  "0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)",
  "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
  "0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)",
  "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
  "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12)",
  "0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12)",
  "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
  "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
  "0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12)",
  "0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12)",
  "0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12)",
  "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)",
  "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12)",
  "0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12)",
  "0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12)",
  "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
];

const Surface: React.FC<SurfaceProps> = ({ category, elevation = 0, animateElevation = false, style, ...rest }) => {
  const { mode, palette, shapes } = useTheme();

  const animatedValue = useMemo(() => new Animated.Value(elevation), []);

  useEffect(() => {
    if (!animateElevation || Platform.OS === "web") return;
    Animated.timing(animatedValue, {
      toValue: elevation,
      duration: 200,
      useNativeDriver: Platform.OS === "android",
    }).start();
  }, [elevation, animateElevation]);

  const surfaceColors = useMemo(() => {
    const colorsScale = chroma.scale([palette.surface, palette.onSurface]);

    const surfaceScale = chroma
      .scale([0, 0.05, 0.07, 0.08, 0.09, 0.11, 0.12, 0.14, 0.15, 0.16].map((x) => colorsScale(x)))
      .domain([0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((x) => (x / 24) * 100));

    return elevations.map((x) => surfaceScale(x).hex());
  }, [mode, palette.surface, palette.onSurface]);

  return (
    <Animated.View
      style={[
        animateElevation
          ? Platform.select({
            android: { elevation: animatedValue },
            web: {
              boxShadow: boxShadows[elevation],
              transition:
                "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            },
            default: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
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
          })
          : Platform.select({
            android: { elevation },
            web: { boxShadow: boxShadows[elevation] },
            default: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: shadowOffsetHeights[elevation],
              },
              shadowOpacity: shadowOpacities[elevation],
              shadowRadius: shadowRadius[elevation],
            },
          }),
        Platform.select({
          web: {
            backgroundColor: surfaceColors[elevation],
          },
          default: {
            backgroundColor: animateElevation
              ? animatedValue.interpolate({
                inputRange: elevations,
                outputRange: surfaceColors,
              })
              : surfaceColors[elevation],
          },
        }),
        category && shapes[category],
        style,
      ]}
      {...rest}
    />
  );
};

export default Surface;
