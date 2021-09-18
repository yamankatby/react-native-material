import React from "react";
import { ActivityIndicator, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { ColorName, useTheme } from "../base";
import Typography from "../Typography";
import { useButtonStyles } from "./styles";
import { Surface, TouchableSurfaceProps } from "../surface";

export interface ButtonProps extends TouchableSurfaceProps {
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
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  ...rest
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
    <Surface.Touchable {...rest} innerStyle={styles.inner}>
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
    </Surface.Touchable>
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
