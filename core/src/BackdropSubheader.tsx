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

  leadingContainerStyle?: StyleProp<ViewStyle>;

  trailingContainerStyle?: StyleProp<ViewStyle>;
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
  leadingContainerStyle,
  trailingContainerStyle,
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
    leadingContainer: {
      marginEnd: 16,
    },
    trailingContainer: {
      marginStart: 16,
    },
  }));

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {!!leading &&
        <View style={[styles.leadingContainer, leadingContainerStyle]}>
          {typeof leading === "function" ? leading({ color: palette.color, size: 24 }) : leading}
        </View>
        }
        <View style={[styles.titleContainer, titleContainerStyle]}>
          {typeof title === "string" ? (
            <Typography variant="subtitle1" color={palette.color}>
              {title}
            </Typography>
          ) : (
            title
          )}
        </View>
        {!!trailing &&
        <View style={[styles.trailingContainer, trailingContainerStyle]}>
          {typeof trailing === "function" ? trailing({ color: palette.color, size: 24 }) : trailing}
        </View>
        }
      </View>
      {typeof divider === "boolean" ? divider && <Divider /> : divider}
    </View>
  );
};

export default BackdropSubheader;
