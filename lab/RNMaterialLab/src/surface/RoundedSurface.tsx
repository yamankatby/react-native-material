import React from "react";
import { View } from "react-native";
import { TouchableCustomFeedbackProps } from "../button";
import { Elevation, ShapeCategory } from "../foundation";

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

const shapeSchema = {
  small: {
    family: "rounded",
    cornerRadius: 4, // { topStart: 4, topEnd: 4, bottomStart: 4, bottomEnd: 4 },
  },
  medium: {
    family: "rounded",
  },
  large: {
    family: "rounded",
  },
};
