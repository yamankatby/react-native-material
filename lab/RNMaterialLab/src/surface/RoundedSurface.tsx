import React from "react";
import { View } from "react-native";
import { Elevation, ShapeCategory } from "../base";
import { TouchableCustomFeedbackProps } from "../button";

export interface RoundedSurfaceProps extends TouchableCustomFeedbackProps {
  category?: ShapeCategory | undefined;
  borderRadius?: number | undefined;
  elevation?: Elevation | undefined;
  backgroundColor?: string | undefined;
  borderWidth?: number | undefined;
  borderColor?: string | undefined;
}

const RoundedSurface: React.FC<RoundedSurfaceProps> = ({
  category,
  iosBehavior,
  androidBehavior,
  overlayColor,
  accessibilityLabel,
  onPress,
  onLongPress,
  extraTouchableProps,
  children,
}) => {
  return (
    <View>
      <View>{children}</View>
    </View>
  );
};

RoundedSurface.defaultProps = {
  category: "small",
};

export default RoundedSurface;
