import React from "react";
import Surface, { SurfaceProps } from "./Surface";
import Text from "./Text";
import { View } from "react-native";
import { useTheme } from "./base";
import chroma from "chroma-js";

export interface SnackbarProps extends SurfaceProps {
  message: string;

  action?: React.ReactElement;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, action, style, ...rest }) => {
  const { palette } = useTheme()
  return (
    <Surface
      elevation={6}
      category={"medium"}
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: chroma.scale([palette.surface, palette.onSurface])(0.87).hex(),
        },
        style,
      ]}
      {...rest}
    >
      <Text variant="body2" style={{ marginVertical: 8, color: palette.surface }}>{message}</Text>
      <View style={{ marginStart: 'auto', marginEnd: -8 }}>
        {action}
      </View>
    </Surface>
  );
};

export default Snackbar;
