import React from 'react'
import { Text, TextProps } from "react-native";
import { ColorName, TypographyVariant, useTheme } from "./base";

export interface TypographyProps extends TextProps {
  variant?: TypographyVariant | undefined;

  color?: ColorName | undefined;
}

const Typography: React.FC<TypographyProps> = ({ variant, color, style, ...rest }) => {
  const theme = useTheme()
  return <Text style={[theme.typographyScheme[variant!], { color: theme.colorScheme[color!] }, style]} {...rest} />
}

Typography.defaultProps = {
  variant: "body1",
  color: 'onBackground'
}

export default Typography