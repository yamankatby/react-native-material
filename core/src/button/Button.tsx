import React from "react";
import { ActivityIndicator, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { ColorName, useTheme } from "../base";
import { Surface } from "../surface";
import { Typography } from "../typography";
import { useButtonStyles } from "./styles";

export interface ButtonProps {
  title: string;

  variant?: "contained" | "outlined" | "text" | undefined;

  color?: ColorName;

  tintColor?: ColorName;

  uppercase?: boolean;

  disableElevation?: boolean;

  loading?: boolean;

  indicatorColor?: string;

  indicatorSize?: number | "small" | "large" | undefined;

  leading?: React.ReactElement | undefined;

  trailing?: React.ReactElement | undefined;

  style?: StyleProp<ViewStyle> | undefined;

  contentContainerStyle?: StyleProp<ViewStyle> | undefined;

  titleStyle?: StyleProp<TextStyle> | undefined;

  leadingContainerStyle?: StyleProp<ViewStyle> | undefined;

  trailingContainerStyle?: StyleProp<ViewStyle> | undefined;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  color,
  tintColor,
  uppercase,
  disableElevation,
  loading,
  indicatorColor,
  indicatorSize,
  leading,
  trailing,
  style,
  contentContainerStyle,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle
}) => {
  const theme = useTheme();
  const styles = useButtonStyles({
    variant: variant!,
    color: color!,
    tintColor: tintColor!,
    uppercase: uppercase!,
    disableElevation: disableElevation!
  });
  return (
    <Surface style={[styles.container, style]}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {(loading || leading) && (
          <View style={[styles.leadingContainer, leadingContainerStyle]}>
            {loading && (
              <ActivityIndicator
                color={indicatorColor ?? theme.colorScheme[variant === "contained" ? tintColor! : color!]}
                size={indicatorSize}
              />
            )}
            {!loading && leading}
          </View>
        )}
        <Typography
          variant="button"
          color={variant === "contained" ? tintColor : color}
          style={[styles.title, titleStyle]}
        >
          {title}
        </Typography>
        {trailing && <View style={[styles.trailingContainer, trailingContainerStyle]}>{trailing}</View>}
      </View>
    </Surface>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  tintColor: "onPrimary",
  uppercase: true,
  disableElevation: false
};

export default Button;
