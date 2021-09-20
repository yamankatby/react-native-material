import React from "react";
import TouchableSurface, { TouchableSurfaceProps } from "./TouchableSurface";
import { ColorName, usePalette, useStyleSheet } from "./base";

export interface IconButtonProps extends TouchableSurfaceProps {
  icon?: React.ReactElement | undefined;

  color?: ColorName | string | undefined;

  size?: "small" | "medium" | "large" | undefined;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, color, size, ...rest }) => {
  const palette = usePalette(color!)

  const styles = useStyleSheet(() => ({
    container: {
      width: 48,
      height: 48,
      borderRadius: 48 / 2,
    },
    innerContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
  }));

  return (
    <TouchableSurface
      style={styles.container}
      innerStyle={styles.innerContainer}
      overlayColor={palette.main}
      absoluteSize
      {...rest}
    >
      {icon}
    </TouchableSurface>
  );
};

IconButton.defaultProps = {
  color: "onBackground",
  size: "medium",
};

export default IconButton;
