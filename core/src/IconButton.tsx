import React from "react";
import { StyleSheet } from "react-native";
import { PaletteColor, usePalette } from "./base";
import Pressable, { PressableProps } from "./Pressable";

export interface IconButtonProps extends PressableProps {
  icon?: React.ReactElement;

  color?: PaletteColor;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
  },
});

const IconButton: React.FC<IconButtonProps> = ({ icon, color = "onBackground", style, ...rest }) => {
  const palette = usePalette(color);
  return (
    <Pressable
      style={[styles.container, style]}
      effectColor={palette.color}
      {...rest}
    >
      {icon}
    </Pressable>
  );
};

export default IconButton;
