import React from "react";
import { Text, TextProps } from "react-native";
import { ThemeColor, TypographyVariant, useTheme } from "@react-native-material/lab/lib/foundation";
import { useThemeColor } from "../index";

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  color?: ThemeColor;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { variant, color, style, children, ...rest } = props;
  const theme = useTheme();
  const textColor = useThemeColor(color);
  return <Text style={[{ ...theme.typographyStyles[variant!], color: textColor }, style]} {...rest}>{children}</Text>;
};

Typography.defaultProps = {
  variant: "subtitle1",
  color: "onBackground"
};

export default Typography;
