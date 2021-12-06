import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import chroma from "chroma-js";
import { useTheme } from "./base";
import { useElevation } from "./base/elevations";

export interface DialogContentProps {
}

const DialogContent: React.FC<DialogContentProps> = ({ children }) => {
  const theme = useTheme();
  const backgroundColor = useElevation(24).backgroundColor;

  const scale = useMemo(
    () => chroma.scale([backgroundColor, theme.palette.onSurface]),
    [backgroundColor, theme.palette.onSurface],
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
