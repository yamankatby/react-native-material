import React from "react";
import { PaletteColor, usePalette, useStyleSheet } from "./base";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Typography from "./Typography";

export interface AvatarProps {
  label?: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  image?: ImageSourcePropType | React.ReactElement | ((props: { size: number }) => React.ReactElement | null) | null;

  icon?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  size?: number;

  color?: PaletteColor;

  tintColor?: PaletteColor;

  style?: StyleProp<ViewStyle>;

  contentContainerStyle?: StyleProp<ViewStyle>;

  imageOverlayStyle?: StyleProp<ViewStyle>;

  labelStyle?: StyleProp<TextStyle>;

  imageStyle?: StyleProp<ImageStyle>;
}

const Avatar: React.FC<AvatarProps> = ({
  label,
  image,
  icon,
  size = 56,
  color = 'secondary',
  tintColor,
  style,
  contentContainerStyle,
  imageOverlayStyle,
  labelStyle,
  imageStyle,
}) => {
  const palette = usePalette(color, tintColor)

  const styles = useStyleSheet(() => ({
    container: {
      width: size,
      height: size,
      backgroundColor: palette.main,
      borderRadius: size / 2,
    },
    contentContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: size / 2,
    },
    image: {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  }), [size, palette])

  const getLabel = () => {
    switch (typeof label) {
      case "string":
        return <Typography variant="h6" color={palette.on} style={[styles.label, labelStyle]}>{label}</Typography>
      case "function":
        return label({ color: palette.on })
      default:
        return label
    }
  }

  const getImage = () => {
    if (!image || React.isValidElement(image)) return image
    if (typeof image === 'function') return image({ size })
    return <Image source={image} style={[styles.image, imageStyle]} />
  }

  const getIcon = () => {
    if (typeof icon === "function") return icon({ color: palette.on, size: size / 2 })
    return icon
  }

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.contentContainer, contentContainerStyle]}>
        {!!label ? getLabel() : !!icon && getIcon()}
      </View>
      {!!image &&
      <View style={[StyleSheet.absoluteFillObject, imageOverlayStyle]}>{getImage()}</View>}
    </View>
  )
};

export default Avatar;
