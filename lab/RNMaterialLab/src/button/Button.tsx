import React, { useMemo } from "react";
import { TextStyle, ViewStyle, ActivityIndicator, View } from "react-native";
import { ColorOption, usePaletteColor } from "../base";
import { Surface, SurfaceProps } from "../surface";
import { Typography } from "../typography";

export interface ButtonProps extends SurfaceProps {
  title: string;

  variant?: "contained" | "outlined" | "text";

  color?: ColorOption | undefined;

  leading?: (info: { color?: string }) => React.ReactElement | null;

  trailing?: (info: { color?: string }) => React.ReactElement | null;

  loading?: boolean;

  uppercase?: boolean;

  disableElevation?: boolean;

  indicatorColor?: string;

  indciatorSize?: number | "small" | "large" | undefined;

  titleStyle?: TextStyle;

  leadingContainerStyle?: ViewStyle;

  trailingContainerStyle?: ViewStyle;

  indicatorStyle?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  color,
  leading,
  trailing,
  loading,
  uppercase,
  disableElevation,
  indicatorColor,
  indciatorSize,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  indicatorStyle,
  ...rest
}) => {
  const paletteColor = usePaletteColor(color);

  const foregroundColor =
    variant === "contained" ? paletteColor?.on : paletteColor?.main;

  const leadingView = useMemo(() => {
    if (loading) {
      return (
        <ActivityIndicator
          style={indicatorStyle}
          color={indicatorColor ?? foregroundColor}
          size={indciatorSize}
        />
      );
    }

    let view = leading && leading({ color: foregroundColor });
    if (view) return view;
  }, [
    loading,
    indicatorStyle,
    indicatorColor,
    indciatorSize,
    foregroundColor,
    leading,
  ]);

  const trailingView = useMemo(() => {
    let view = trailing && trailing({ color: foregroundColor });
    if (view) return view;
  }, [trailing, foregroundColor]);

  return (
    <Surface
      containerStyle={[
        {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: variant === "outlined" ? 11 : 12,
          paddingVertical: variant === "outlined" ? 7 : 8,
        },
      ]}
      backgroundColor={variant === "contained" ? paletteColor?.main : undefined}
      borderWidth={variant === "outlined" ? 2 : undefined}
      borderColor={variant === "outlined" ? paletteColor?.main : undefined}
      overlayColor={
        variant === "contained" ? paletteColor?.on : paletteColor?.main
      }
      {...rest}>
      {leadingView && (
        <View style={[{ marginEnd: 8 }, leadingContainerStyle]}>
          {leadingView}
        </View>
      )}
      <Typography
        variant="button"
        style={[
          {
            color:
              variant === "contained" ? paletteColor?.on : paletteColor?.main,
            textTransform: uppercase ? "uppercase" : "none",
          },
          titleStyle,
        ]}>
        {title}
      </Typography>
      {trailingView && (
        <View style={[{ marginStart: 8 }, trailingContainerStyle]}>
          {trailingView}
        </View>
      )}
    </Surface>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  uppercase: true,
};

export default Button;
