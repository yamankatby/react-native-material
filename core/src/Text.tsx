import React from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { TypographyVariant, useTheme } from "./base";

export interface TextProps extends NativeTextProps {
  variant?: TypographyVariant;
}

const Text: React.FC<TextProps> = ({ variant = "body1", style, ...rest }) => {
  const { typography } = useTheme();
  return <NativeText style={[typography[variant], style]} {...rest} />;
};

export default Text;
