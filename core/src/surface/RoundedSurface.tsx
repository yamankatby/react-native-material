import React, { useMemo } from "react";
import { Animated } from "react-native";
import TouchableRoundedSurface from "./TouchableRoundedSurface";
import { SurfaceProps } from "./Surface";
import { useSurfaceBorderRadius } from "./use-surface-border-radius";

export type RoundedSurfaceProps = Omit<SurfaceProps, "family">;

const RoundedSurface: React.FC<RoundedSurfaceProps> & { Touchable: typeof TouchableRoundedSurface } = ({
  category,
  style,
  ...rest
}) => {
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

RoundedSurface.defaultProps = {
  category: "small"
};

RoundedSurface.Touchable = TouchableRoundedSurface;

export default RoundedSurface;
