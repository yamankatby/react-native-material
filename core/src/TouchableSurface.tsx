import React, { useEffect } from "react";
import { Platform } from "react-native";
import { Elevation, ShapeCategory, useTheme } from "./base";
import Touchable, { TouchableProps } from "./Touchable";
import chroma from "chroma-js";

export interface TouchableSurfaceProps extends TouchableProps {
  category?: ShapeCategory;

  elevation?: Elevation;
}

const TouchableSurface: React.FC<TouchableSurfaceProps> = ({ category = "small", elevation = 2, style, ...rest }) => {
  const { shapes, elevations, mode, palette } = useTheme();

  useEffect(() => {
    if (Platform.OS !== "web") return;
    const style = document.createElement("style");
    style.textContent = `textarea, select, input, button { outline: none!important; }`;
    document.head.append(style);
  }, []);

  return (
    <Touchable
      underlayColor={palette.onSurface}
      style={[shapes[category], elevations[elevation], { backgroundColor: mode === 'light' ? palette.surface : chroma.scale([palette.surface, chroma.scale([palette.surface, palette.onSurface])(0.16).hex()])(elevation / 100).hex() }, style]}
      rippleContainerStyle={shapes[category]}
      {...rest}
    />
  );
};

export default TouchableSurface;
