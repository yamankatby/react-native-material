import React from "react";
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from "react-native";
import { PaletteColor, useTheme } from "./base";

export interface SwitchProps extends RNSwitchProps {
  tintColor?: PaletteColor;
}

const Switch: React.FC<RNSwitchProps> = ({ tintColor = "primary", ...rest }) => {
  const { palette } = useTheme();
  return <RNSwitch tintColor={palette.primary} {...rest} />;
};

export default Switch;
