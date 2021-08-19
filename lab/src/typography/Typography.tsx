import React from "react";
import { Text, TextProps } from "react-native";
import { TypographyVariant, useTheme } from "../foundation";

export interface TypographyProps {
  variant?: TypographyVariant;
}

const Typography: React.FC<TypographyProps & TextProps> = ({
  variant,
  style,
  children,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Text style={[theme.typographyStyles[variant!], style]} {...rest}>
      {children}
    </Text>
  );
};

Typography.defaultProps = {
  variant: "subtitle1",
};

export default Typography;
