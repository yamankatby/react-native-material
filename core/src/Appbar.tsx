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
  style,
  innerContainerStyle,
  titleContainerStyle,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
}) => {
  const dimensions = useWindowDimensions();
  const defaultSize = useMemo(() => dimensions.width < 600, [dimensions.width]);

  const styles = useStyleSheet(({ colorScheme }) => ({
    container: {
      backgroundColor: colorScheme[color!],
      borderRadius: 0,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    innerContainer: {
      flexDirection: "row",
      alignItems: "center",
      height: Platform.select({ ios: 44, default: defaultSize ? 56 : 64 }),
    },
    titleContainer: {
      ...Platform.select({
        ios: {
          flex: 2,
        },
        default: {
          flex: 1,
          marginStart: defaultSize ? 16 : 24,
        },
      }),
      justifyContent: "center",
      height: 24,
    },
    title: {
      ...Platform.select({ ios: { textAlign: "center" } }),
    },
    leadingContainer: {
      ...Platform.select({
        ios: { flex: 1 },
        default: { marginEnd: 12 },
      }),
      marginStart: 12,
    },
    trailingContainer: {
      ...Platform.select({
        ios: { flex: 1 },
        default: { marginStart: 12 },
      }),
      flexDirection: "row",
      justifyContent: "flex-end",
      marginEnd: 12,
    },
  }), [color, defaultSize]);

  return (
    <Surface style={[styles.container, style]}>
      <View style={[styles.innerContainer, innerContainerStyle]}>
        <View style={[styles.leadingContainer, leadingContainerStyle]}>{leading}</View>
        {typeof title === "string" ? (
          <View style={[styles.titleContainer, titleContainerStyle]}>
            <Typography variant="h6" color={tintColor} style={[styles.title, titleStyle]}>
              {title}
            </Typography>
          </View>
        ) : (
          title
        )}
        <View style={[styles.trailingContainer, trailingContainerStyle]}>
          {Array.isArray(trailing)
            ? trailing.map((element, index) => (
              <React.Fragment key={index}>
                {element}
                {index < trailing.length - 1 && <View style={{ width: 24 }} />}
              </React.Fragment>
            ))
            : trailing}
        </View>
      </View>
    </Surface>
  );
};

Appbar.defaultProps = {
  color: "primary",
  tintColor: "onPrimary",
};

export default Appbar;
