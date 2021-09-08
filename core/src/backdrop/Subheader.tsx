import React from 'react'
import { StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
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
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {trailing && <View style={[styles.trailingContainer, trailingContainerStyle]}>{trailing}</View>}
    </View>
  )
}

export default Subheader