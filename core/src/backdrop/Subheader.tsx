import React from 'react'
import { StyleProp, TextStyle, View, ViewStyle } from "react-native";
import Typography from "../Typography";
import { useSubheaderStyles } from "./styles";

export interface SubheaderProps {
  title?: string | undefined;

  leading?: React.ReactElement | undefined;

  trailing?: React.ReactElement | undefined;

  style?: StyleProp<ViewStyle> | undefined;

  titleStyle?: StyleProp<TextStyle> | undefined;

  leadingContainerStyle?: StyleProp<ViewStyle> | undefined;

  trailingContainerStyle?: StyleProp<ViewStyle> | undefined;
}

const Subheader: React.FC<SubheaderProps> = ({
  title,
  leading,
  trailing,
  style,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle
}) => {
  const styles = useSubheaderStyles()
  return (
    <View style={[styles.container, style]}>
      {leading && <View style={[styles.leadingContainer, leadingContainerStyle]}>{leading}</View>}
      <Typography variant="subtitle1" color="onSurface" style={[styles.title, titleStyle]}>{title}</Typography>
      {trailing && <View style={[styles.trailingContainer, trailingContainerStyle]}>{trailing}</View>}
    </View>
  )
}

export default Subheader