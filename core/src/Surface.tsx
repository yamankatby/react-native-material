import React, { useMemo } from "react";
import { Animated, ViewProps } from "react-native";
import chroma from "chroma-js";
import { Elevation, ShapeCategory, useTheme } from "./base";

export interface SurfaceProps extends ViewProps {
  category?: ShapeCategory;

  elevation?: Elevation;
}

const Surface: React.FC<SurfaceProps> = ({ category, elevation = 0, style, ...rest }) => {
  const { mode, palette, elevations, shapes } = useTheme();

  const surfaceScale = useMemo(
    () => chroma.scale([palette.surface, palette.onSurface]),
    [palette.surface, palette.onSurface],
  );

  const backgroundColor = useMemo(() => {
    if (mode === "light") return palette.surface;
    return chroma
      .scale([0, 0.05, 0.07, 0.08, 0.09, 0.11, 0.12, 0.14, 0.15, 0.16].map(x => surfaceScale(x)))
      .domain([0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map(x => (x / 24) * 100))((elevation / 24) * 100)
      .hex();
  }, [mode, palette.surface, surfaceScale]);
  
  return (
    <Animated.View
      style={[{ backgroundColor }, elevations[elevation], category && shapes[category], style]}
      {...rest}
    />
  );
};

export default Surface;
