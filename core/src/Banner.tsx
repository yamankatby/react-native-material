import React from "react";
import { useStyleSheet } from "./base";
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import Typography from "./Typography";
import Divider from "./Divider";

export interface BannerProps {
  text: string | React.ReactElement | null;

  illustration?: React.ReactElement | ((props: { size: number }) => React.ReactElement | null) | null;

  buttons: React.ReactElement | React.ReactElement[] | null;

  style?: StyleProp<ViewStyle>;

  contentContainerStyle?: StyleProp<ViewStyle>;

  illustrationContainerStyle?: StyleProp<ViewStyle>;

  textContainerStyle?: StyleProp<ViewStyle>;

  textStyle?: StyleProp<TextStyle>;

  actionsContainerStyle?: StyleProp<ViewStyle>;
}

const Banner: React.FC<BannerProps> = ({
  text,
  illustration,
  buttons,
  style,
  contentContainerStyle,
  illustrationContainerStyle,
  textContainerStyle,
  textStyle,
  actionsContainerStyle,
}) => {
  const styles = useStyleSheet(({ colorScheme }) => ({
    container: {
      backgroundColor: colorScheme.surface,
    },
    contentContainer: {
      flexDirection: "row",
      marginTop: 24,
      marginBottom: 4,
      marginHorizontal: 16,
    },
    illustrationContainer: {
      marginEnd: 16,
    },
    textContainer: {
      flex: 1,
    },
    actionsContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      margin: 8,
    },
  }), []);

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {illustration && (
          <View style={[styles.illustrationContainer, illustrationContainerStyle]}>
            {typeof illustration === "function" ? illustration({ size: 40 }) : illustration}
          </View>
        )}
        <View style={[styles.textContainer, textContainerStyle]}>
          {typeof text === "string" ? (
            <Typography variant="body2" color="onSurface" style={textStyle}>
              {text}
            </Typography>
          ) : (
            text
          )}
        </View>
      </View>
      <View style={[styles.actionsContainer, actionsContainerStyle]}>
        {Array.isArray(buttons)
          ? buttons.map((button, index) => (
            <React.Fragment key={index}>
              {button}
              {index !== buttons.length - 1 && <View style={{ width: 8 }} />}
            </React.Fragment>
          ))
          : buttons}
      </View>
      <Divider />
    </View>
  );
};

export default Banner;
