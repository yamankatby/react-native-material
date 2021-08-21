import React from "react";
import {
  PaletteColor,
  PaletteColorValues,
  usePaletteColor,
  useStyleSheet,
  useTheme,
} from "../base";
import { Surface, SurfaceProps } from "../surface";
import { Typography } from "../typography";

export interface ButtonProps extends SurfaceProps {
  title: string;
  color?: PaletteColor | PaletteColorValues | string | undefined;
}

const Button: React.FC<ButtonProps> = ({
  title,
  color,
  containerStyle,
  ...rest
}) => {
  const theme = useTheme();

  const paletteColor = usePaletteColor(color);

  const styles = useStyleSheet(({ palette }) => ({
    container: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
  }));

  return (
    <Surface
      backgroundColor={paletteColor!.main}
      containerStyle={[styles.container, containerStyle]}
      overlayColor={paletteColor!.on}
      {...rest}>
      <Typography variant="button" style={{ color: paletteColor!.on }}>
        {title}
      </Typography>
    </Surface>
  );
};

Button.defaultProps = {
  color: "primary",
};

export default Button;
