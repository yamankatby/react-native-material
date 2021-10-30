import React from "react";
import { Switch as NativeSwitch, SwitchProps } from "react-native";
import { useTheme } from "./base";

const Switch: React.FC<SwitchProps> = (props) => {
  const { palette } = useTheme();
  return <NativeSwitch tintColor={palette.primary} {...props} />;
};

export default Switch;
