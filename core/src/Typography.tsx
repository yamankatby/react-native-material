import React from "react";
import { Text, TextProps } from "react-native";
import { PaletteColor, TypographyVariant, usePalette, useTheme } from "./base";

export interface TypographyProps extends TextProps {
  variant?: TypographyVariant;

  color?: PaletteColor;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  color = "onBackground",
  style,
  ...rest
}) => {
  const { typographyScheme } = useTheme();
  const palette = usePalette(color);
  return <Text style={[typographyScheme[variant], { color: palette.color }, style]} {...rest} />;
};

export default Typography;
