import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import Typography from "./Typography";
import { useStyleSheet } from "./base";

export interface BackdropSubheaderProps {
  title?: string | undefined;

  leading?: React.ReactElement | undefined;

  trailing?: React.ReactElement | undefined;

  style?: StyleProp<ViewStyle> | undefined;

  titleStyle?: StyleProp<TextStyle> | undefined;

  leadingContainerStyle?: StyleProp<ViewStyle> | undefined;

  trailingContainerStyle?: StyleProp<ViewStyle> | undefined;
}

export const useBackdropSubheaderStyles = () => useStyleSheet(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  title: {
    flex: 1
  },
  leadingContainer: {
    marginEnd: 12
  },
  trailingContainer: {
    marginStart: 12
  }
}))

const BackdropSubheader: React.FC<BackdropSubheaderProps> = ({
  title,
  leading,
  trailing,
  style,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle
}) => {
  const styles = useBackdropSubheaderStyles()
  return (
    <View style={[styles.container, style]}>
      {leading && <View style={[styles.leadingContainer, leadingContainerStyle]}>{leading}</View>}
      <Typography variant="subtitle1" color="onSurface" style={[styles.title, titleStyle]}>{title}</Typography>
      {trailing && <View style={[styles.trailingContainer, trailingContainerStyle]}>{trailing}</View>}
    </View>
  )
}

export default BackdropSubheader