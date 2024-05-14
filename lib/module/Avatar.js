import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';
import { usePaletteColor } from './hooks/use-palette-color';
import { useStyles } from './hooks/use-styles';
const Avatar = ({
  label,
  image,
  icon,
  size = 56,
  color = 'secondary',
  tintColor,
  initials = true,
  uppercase = true,
  autoColor = false,
  style,
  contentContainerStyle,
  imageContainerStyle,
  labelStyle,
  imageStyle
}) => {
  const palette = usePaletteColor(autoColor ? getColor(typeof label === 'string' ? label : '') : color, tintColor);
  const styles = useStyles(() => ({
    container: {
      width: size,
      height: size,
      backgroundColor: palette.main,
      borderRadius: size / 2
    },
    contentContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center'
    },
    label: {
      fontSize: size / 2,
      color: palette.on,
      textTransform: uppercase ? 'uppercase' : 'none'
    },
    image: {
      width: size,
      height: size,
      borderRadius: size / 2
    }
  }), [size, uppercase, palette]);
  const getLabel = () => {
    switch (typeof label) {
      case 'string':
        return /*#__PURE__*/React.createElement(Text, {
          variant: "h6",
          style: [styles.label, labelStyle]
        }, initials ? getInitials(label) : label);
      case 'function':
        return label({
          color: palette.on
        });
      default:
        return label;
    }
  };
  const getImage = () => {
    if (!image || /*#__PURE__*/React.isValidElement(image)) return image;
    if (typeof image === 'function') return image({
      size
    });
    return /*#__PURE__*/React.createElement(Image, {
      source: image,
      style: [styles.image, imageStyle]
    });
  };
  const getIcon = () => {
    if (typeof icon === 'function') return icon({
      color: palette.on,
      size: size / 2
    });
    return icon;
  };
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, (label || icon) && /*#__PURE__*/React.createElement(View, {
    style: [styles.contentContainer, contentContainerStyle]
  }, label ? getLabel() : icon && getIcon()), image && /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFillObject, imageContainerStyle]
  }, getImage()));
};
function getColor(label) {
  let hash = 0;
  let i;
  for (i = 0; i < label.length; i += 1) {
    hash = label.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = hash >> i * 8 & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}
function getInitials(label) {
  const namesArray = label.trim().split(' ');
  if (namesArray.length === 1) return `${namesArray[0].charAt(0)}`;else return `${namesArray[0].charAt(0)}${namesArray[namesArray.length - 1].charAt(0)}`;
}
export default Avatar;
//# sourceMappingURL=Avatar.js.map