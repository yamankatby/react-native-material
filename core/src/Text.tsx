import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { TypographyVariant, useTheme } from "./base";

export interface TextProps extends RNTextProps {
  variant?: TypographyVariant;
}

const Text: React.FC<TextProps> = ({ variant = "body1", style, ...rest }) => {
  const { typography } = useTheme();
  return <RNText style={[typography[variant], style]} {...rest} />;
};

export default Text;
