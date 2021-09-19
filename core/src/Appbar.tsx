import React, { useMemo } from "react";
import { Platform, StyleProp, TextStyle, useWindowDimensions, View, ViewStyle } from "react-native";
import { ColorName, useStyleSheet } from "./base";
import Surface from "./Surface";
import Typography from "./Typography";

export interface AppbarProps {
  title?: string | React.ReactElement | undefined;

  leading?: React.ReactElement | undefined;

  trailing?: React.ReactElement | React.ReactElement[] | undefined;

  color?: ColorName | undefined;

  tintColor?: ColorName | undefined;

  centerTitle?: boolean | undefined;

  style?: StyleProp<ViewStyle> | undefined;

  innerContainerStyle?: StyleProp<ViewStyle> | undefined;

  titleContainerStyle?: StyleProp<ViewStyle> | undefined;

  titleStyle?: StyleProp<TextStyle> | undefined;

  leadingContainerStyle?: StyleProp<ViewStyle> | undefined;

  trailingContainerStyle?: StyleProp<ViewStyle> | undefined;
}

const Appbar: React.FC<AppbarProps> = ({
  title,
  leading,
  trailing,
  color,
  tintColor,
  centerTitle,
  style,
  innerContainerStyle,
  titleContainerStyle,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
}) => {
  const dimensions = useWindowDimensions();
  const defaultSize = useMemo(() => dimensions.width < 600, [dimensions.width]);
  const hasLeading = useMemo(() => !!leading, [leading])

  const styles = useStyleSheet(({ colorScheme }) => ({
    container: {
      backgroundColor: colorScheme[color!],
      borderRadius: 0,
      elevation: 4,
    },
    innerContainer: {
      flexDirection: "row",
      justifyContent: hasLeading ? 'space-between' : 'flex-end',
      alignItems: "center",
      height: Platform.select({ ios: 44, default: defaultSize ? 56 : 64 }),
      marginHorizontal: defaultSize ? 4 : 12,
    },
    titleContainer: {
      position: 'absolute',
      start: 12,
      end: 12,
      justifyContent: "center",
      height: 24,
      paddingHorizontal: hasLeading ? 52 : 0,
    },
    title: {
      textAlign: centerTitle === true ? 'center' : undefined,
    },
    trailingContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  }), [color, defaultSize, hasLeading, centerTitle]);

  return (
    <Surface style={[styles.container, style]}>
      <View style={[styles.innerContainer, innerContainerStyle]}>
        {typeof title === "string" ? (
          <View style={[styles.titleContainer, titleContainerStyle]}>
            <Typography variant="h6" color={tintColor} style={[styles.title, titleStyle]}>
              {title}
            </Typography>
          </View>
        ) : (
          title
        )}
        {leading && <View style={leadingContainerStyle}>{leading}</View>}
        {trailing && <View style={[styles.trailingContainer, trailingContainerStyle]}>{trailing}</View>}
      </View>
    </Surface>
  );
};

Appbar.defaultProps = {
  color: "primary",
  tintColor: "onPrimary",
  centerTitle: Platform.OS === 'ios',
};

export default Appbar;
