import React from "react";
import {
  ActivityIndicator as NativeActivityIndicator,
  ActivityIndicatorProps as NativeActivityIndicatorProps,
} from "react-native";
import { useTheme } from "./base";

export interface ActivityIndicatorProps extends NativeActivityIndicatorProps {

}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ ...rest }) => {
  const { palette } = useTheme()
  return (
    <NativeActivityIndicator color={palette.primary} {...rest} />
  )
};

export default ActivityIndicator;
