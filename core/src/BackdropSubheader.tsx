import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { PaletteColor, usePalette, useStyleSheet } from "./base";
import Typography from "./Typography";
import Divider from "./Divider";

export interface BackdropSubheaderProps {
  title?: string | React.ReactElement;

  leading?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  trailing?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  divider?: boolean | React.ReactElement;

  color?: PaletteColor;

  style?: StyleProp<ViewStyle>;

  contentContainerStyle?: StyleProp<ViewStyle>;

  titleContainerStyle?: StyleProp<ViewStyle>;
}

const BackdropSubheader: React.FC<BackdropSubheaderProps> = ({
  title,
  leading,
  trailing,
  divider = true,
  color = "onSurface",
  style,
  contentContainerStyle,
  titleContainerStyle,
}) => {
  const palette = usePalette(color);

  const styles = useStyleSheet(() => ({
    container: {
      marginHorizontal: 16,
    },
    contentContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
    },
    titleContainer: {
      flex: 1,
    },
  }));

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {!!leading && typeof leading === "function" ? leading({ color: palette.main, size: 24 }) : leading}
        <View style={[styles.titleContainer, titleContainerStyle]}>
          {typeof title === "string" ? (
            <Typography variant="subtitle1" color={palette.main}>
              {title}
            </Typography>
          ) : (
            title
          )}
        </View>
        {!!trailing && typeof trailing === "function" ? trailing({ color: palette.main, size: 24 }) : trailing}
      </View>
      {typeof divider === "boolean" ? divider && <Divider /> : divider}
    </View>
  );
};

export default BackdropSubheader;
