import React, { useContext } from "react";
import { PaletteColor, usePalette } from "./base";
import { IconsContext } from "./IconsProvider";

export interface IconProps {
  name: string;

  size?: number;

  color?: PaletteColor;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "onBackground" }) => {
  const palette = usePalette(color);

  const render = useContext(IconsContext);

  if (!render) {
    throw new Error("Icon must be rendered within an IconsProvider");
  }

  return render({ name, size, color: palette.color });
};

export default Icon;
