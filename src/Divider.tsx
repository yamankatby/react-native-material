import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import chroma from 'chroma-js';
import { useTheme } from './base/ThemeContext';

export interface DividerProps {
  color?: string | undefined;

  inset?: number | undefined;

  leadingInset?: number | undefined;

  trailingInset?: number | undefined;

  style?: StyleProp<ViewStyle> | undefined;
}

const Divider: React.FC<DividerProps> = ({ color, inset, leadingInset, trailingInset, style }) => {
  const { palette } = useTheme();
  return (
    <View
      style={[
        {
          height: 1,
          backgroundColor: color ?? chroma(palette.surface.on).alpha(0.08).hex(),
          marginStart: inset ?? leadingInset,
          marginEnd: inset ?? trailingInset,
        },
        style,
      ]}
    />
  );
};

export default Divider;
