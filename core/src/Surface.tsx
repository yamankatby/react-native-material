import React, { useMemo } from "react";
import { Animated } from "react-native";
import chroma from "chroma-js";
import { Elevation, ShapeCategory, useTheme } from "./base";
import Touchable, { TouchableProps } from "./Touchable";

export interface SurfaceProps extends Omit<TouchableProps, "hitSlop"> {
  category?: ShapeCategory;

  elevation?: Elevation;
}

const Surface: React.FC<SurfaceProps> = ({ category, elevation = 0, style, ...rest }) => {
  const { mode, palette, elevations, shapes } = useTheme();

  const backgroundColor = useMemo(() => {
    if (mode === "light") return palette.surface;
    const scale = chroma.scale([palette.surface, palette.onSurface]);
    return chroma
      .scale([0, 0.05, 0.07, 0.08, 0.09, 0.11, 0.12, 0.14, 0.15, 0.16].map(x => scale(x)))
      .domain([0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map(x => (x / 24) * 100))((elevation / 24) * 100)
      .hex();
  }, [mode, palette.surface, palette.onSurface]);

  if (
    rest.onPress ||
    rest.onPressIn ||
    rest.onPressOut ||
    rest.onLongPress ||
    rest.onBlur ||
    rest.onFocus ||
    rest.delayLongPress ||
    rest.disabled ||
    rest.pressRetentionOffset ||
    rest.android_disableSound ||
    rest.android_ripple ||
    rest.testOnly_pressed
  ) {
    return (
      <Touchable
        style={[{ backgroundColor }, elevations[elevation], category && shapes[category], style]}
        underlayColor={palette.onSurface}
        rippleContainerStyle={category && shapes[category]}
        {...rest}
      />
    );
  }

  return (
    <Animated.View
      style={[{ backgroundColor }, elevations[elevation], category && shapes[category], style]}
      {...rest}
    />
  );
};

export default Surface;

