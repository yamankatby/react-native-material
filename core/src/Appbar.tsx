import React from "react";
import { Platform, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { useStyleSheet } from "./base";
import Surface from "./Surface";
import Typography from "./Typography";

export interface AppbarProps {
  title?: string | React.ReactElement | undefined;

  leading?: React.ReactElement | undefined;

  trailing?: React.ReactElement | React.ReactElement[] | undefined;

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
  style,
  innerContainerStyle,
  titleContainerStyle,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
}) => {
  const styles = useStyleSheet(({ colorScheme }) => ({
    container: {
      backgroundColor: colorScheme.primary,
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
      height: 56,
    },
    titleContainer: {
      flex: Platform.OS === 'ios' ? 2 : 1,
      justifyContent: "center",
      height: 24,
    },
    title: {
      ...Platform.select({ ios: { textAlign: "center" } }),
    },
    leadingContainer: {
      ...Platform.select({ ios: { flex: 1 } }),
    },
    trailingContainer: {
      ...Platform.select({ ios: { flex: 1 } }),
      flexDirection: "row",
      justifyContent: "flex-end",
    },
  }));

  return (
    <Surface style={[styles.container, style]}>
      <View style={[styles.innerContainer, innerContainerStyle]}>
        <View style={[styles.leadingContainer, leadingContainerStyle]}>{leading}</View>
        {typeof title === "string" ? (
          <View style={[styles.titleContainer, titleContainerStyle]}>
            <Typography variant="h6" color="onPrimary" style={[styles.title, titleStyle]}>
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

export default Appbar;
