import React from "react";
import { ActivityIndicator, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { ColorName, useStyleSheet, useTheme } from "./base";
import Typography from "./Typography";
import TouchableSurface, { TouchableSurfaceProps } from "./TouchableSurface";

export interface ButtonProps extends Omit<TouchableSurfaceProps, 'category'> {
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

export interface ButtonStylesProps {
  variant: 'contained' | 'outlined' | 'text';
  color: ColorName;
  tintColor: ColorName;
  uppercase: boolean;
  disableElevation: boolean;
}

export const useButtonStyles = ({
  variant,
  color,
  tintColor,
  uppercase,
  disableElevation
}: ButtonStylesProps) => useStyleSheet(({ colorScheme }) => ({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // elevation: variant === 'contained' && !disableElevation ? 2 : 0
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: variant === 'text' ? 8 : 16,
    backgroundColor: variant === 'contained' ? colorScheme[color] : 'transparent',
    borderWidth: variant === 'outlined' ? 1 : 0,
    borderColor: colorScheme[color],
    minWidth: 64,
    height: 36
  },
  contentContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    textTransform: uppercase ? 'uppercase' : 'none'
  },
  leadingContainer: {
    marginEnd: 8
  },
  trailingContainer: {
    marginStart: 8
  }
}), [variant, color, tintColor, uppercase, disableElevation])

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
    <TouchableSurface {...rest} innerStyle={styles.inner}>
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
    </TouchableSurface>
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
