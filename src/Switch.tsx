import React from 'react';
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from 'react-native';

export interface SwitchProps extends RNSwitchProps {}

const Switch: React.FC<SwitchProps> = ({ ...rest }) => {
  return <RNSwitch {...rest} />;
};

export default Switch;
