import React from "react";
import { View } from "react-native";
import Touchable, { TouchableProps } from "./Touchable";
import Text from "./Text";
import { PaletteColor, useTheme } from "./base";
import chroma from "chroma-js";

export interface ChipProps extends TouchableProps {
  variant?: "filled" | "outlined";

  label?: string;

  color?: PaletteColor;

  leading?: React.ReactElement;

  trailing?: React.ReactElement;
}

const Chip: React.FC<ChipProps> = ({
  variant,
  label,
  color,
  leading,
  trailing,
  style,
  ...rest
}) => {
  const { palette } = useTheme();

  return (
    <Touchable
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          height: 32,
          borderRadius: 16,
          backgroundColor: chroma.scale([palette.surface, palette.onSurface])(0.08).hex(),
        },
        style,
      ]}
      underlayColor={chroma.scale([palette.surface, palette.onSurface])(0.87).hex()}
      rippleContainerBorderRadius={16}
      {...rest}
    >
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          marginStart: 4,
          backgroundColor: chroma.scale([palette.surface, palette.onSurface])(0.6).hex(),
        }}
      />
      <Text
        variant="body1"
        style={{ marginHorizontal: 8, color: chroma.scale([palette.surface, palette.onSurface])(0.87).hex() }}
      >
        {label}
      </Text>
      <View
        style={{
          width: 18,
          height: 18,
          borderRadius: 9,
          marginEnd: 8,
          backgroundColor: chroma.scale([palette.surface, palette.onSurface])(0.6).hex(),
        }}
      />
    </Touchable>
  );
};

export default Chip;
