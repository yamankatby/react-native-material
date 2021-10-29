import React from "react";
import {
  ActivityIndicator as NativeActivityIndicator,
  ActivityIndicatorProps as NativeActivityIndicatorProps,
} from "react-native";
import { PaletteColor, usePalette } from "./base";

export interface ActivityIndicatorProps extends NativeActivityIndicatorProps {
  color?: PaletteColor;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ color = "primary", ...rest }) => {
  const palette = usePalette(color);
  return <NativeActivityIndicator color={palette.color} {...rest} />;
};

export default ActivityIndicator;
