import React, { useMemo } from "react";
import { Animated, ViewProps } from "react-native";
import { ShapeCategory } from "../base";
import { useSurfaceBorderRadius } from "./use-surface-border-radius";
import TouchableSurface from "./TouchableSurface";

export interface SurfaceProps extends Animated.AnimatedProps<ViewProps> {
  category?: ShapeCategory | undefined;
}

const Surface: React.FC<SurfaceProps> & { Touchable: typeof TouchableSurface } = ({ category, style, ...rest }) => {
  const [borders, { ...restStyle }] = useSurfaceBorderRadius(style, category!);

  const borderRadius = useMemo(
    () => ({
      borderTopStartRadius: borders.topStart,
      borderTopEndRadius: borders.topEnd,
      borderBottomStartRadius: borders.bottomStart,
      borderBottomEndRadius: borders.bottomEnd
    }),
    [borders]
  );

  return <Animated.View style={[restStyle, borderRadius]} {...rest} />;
};

Surface.defaultProps = {
  category: "small"
};

Surface.Touchable = TouchableSurface;

export default Surface;
