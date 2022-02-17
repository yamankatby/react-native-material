import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import chroma from 'chroma-js';
import { useSurfaceColorValue } from './hooks/use-surface-color';
import { useTheme } from './base/ThemeContext';

export interface DialogContentProps {}

const DialogContent: React.FC<DialogContentProps> = ({ children }) => {
  const theme = useTheme();

  const backgroundColor = useSurfaceColorValue(24);

  const scale = useMemo(
    () => chroma.scale([backgroundColor, theme.palette.surface.on]),
    [backgroundColor, theme.palette.surface.on]
  );

  return <View style={[styles.container, { borderColor: scale(0.08).hex() }]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 20,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
  },
});

export default DialogContent;
