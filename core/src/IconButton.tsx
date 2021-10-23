import React from "react";
import { StyleSheet } from "react-native";
import { PaletteColor, usePalette } from "./base";
import Touchable, { TouchableProps } from "./Touchable";

export interface IconButtonProps extends TouchableProps {
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
})

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color = "onBackground",
  ...rest
}) => {
  const palette = usePalette(color)
  return (
    <Touchable style={styles.container} underlayColor={palette.color} rippleContainerBorderRadius={24} {...rest}>
      {icon}
    </Touchable>
  );
};

export default IconButton;
