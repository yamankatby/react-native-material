import React from "react";
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from "react-native";
import { PaletteColor, usePalette } from "./base";

export interface ActivityIndicatorProps extends RNActivityIndicatorProps {
  color?: PaletteColor;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ color = "primary", ...rest }) => {
  const palette = usePalette(color);
  return <RNActivityIndicator color={palette.color} {...rest} />;
};

export default ActivityIndicator;
