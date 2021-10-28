import React from "react";
import { Switch as NativeSwitch, SwitchProps as NativeSwitchProps } from "react-native";
import { useTheme } from "./base";

export interface SwitchProps extends NativeSwitchProps {

}

const Switch: React.FC<SwitchProps> = ({ ...rest }) => {
  const { palette } = useTheme()
  return <NativeSwitch tintColor={palette.primary} {...rest} />
};

export default Switch;
