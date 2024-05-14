import React from 'react';
import { View } from 'react-native';
import Text from './Text';
import Divider from './Divider';
import { usePaletteColor } from './hooks/use-palette-color';
import { useStyles } from './hooks/use-styles';
const BackdropSubheader = ({
  title,
  leading,
  trailing,
  divider = true,
  color = 'on-surface',
  style,
  contentContainerStyle,
  titleContainerStyle,
  leadingContainerStyle,
  trailingContainerStyle
}) => {
  const palette = usePaletteColor(color);
  const styles = useStyles(() => ({
    container: {
      marginHorizontal: 16
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12
    },
    titleContainer: {
      flex: 1
    },
    leadingContainer: {
      marginEnd: 16
    },
    trailingContainer: {
      marginStart: 16
    }
  }));
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.contentContainer, contentContainerStyle]
  }, !!leading && /*#__PURE__*/React.createElement(View, {
    style: [styles.leadingContainer, leadingContainerStyle]
  }, typeof leading === 'function' ? leading({
    color: palette.main,
    size: 24
  }) : leading), /*#__PURE__*/React.createElement(View, {
    style: [styles.titleContainer, titleContainerStyle]
  }, typeof title === 'string' ? /*#__PURE__*/React.createElement(Text, {
    variant: "subtitle1",
    style: {
      color: palette.main
    }
  }, title) : title), !!trailing && /*#__PURE__*/React.createElement(View, {
    style: [styles.trailingContainer, trailingContainerStyle]
  }, typeof trailing === 'function' ? trailing({
    color: palette.main,
    size: 24
  }) : trailing)), typeof divider === 'boolean' ? divider && /*#__PURE__*/React.createElement(Divider, null) : divider);
};
export default BackdropSubheader;
//# sourceMappingURL=BackdropSubheader.js.map