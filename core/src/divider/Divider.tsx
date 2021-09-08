import React from 'react'
import { useDividerStyles } from "./styles";
import { StyleProp, View, ViewStyle } from "react-native";

export interface DividerProps {
  color?: string | undefined;

  leadingInset?: number | undefined;

  trailingInset?: number | undefined

  style?: StyleProp<ViewStyle> | undefined
}

const Divider: React.FC<DividerProps> = ({ color, leadingInset, trailingInset, style }) => {
  const styles = useDividerStyles({ color, leadingInset, trailingInset });
  return <View style={[styles.divider, style]} />
};

export default Divider