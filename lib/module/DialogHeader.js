import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { useTheme } from './base/ThemeContext';
const DialogHeader = ({
  title
}) => {
  const theme = useTheme();
  const titleElement = typeof title === 'string' ? /*#__PURE__*/React.createElement(Text, {
    variant: "h6",
    style: [{
      color: theme.palette.surface.on
    }]
  }, title) : typeof title === 'function' ? title({
    color: theme.palette.surface.on
  }) : title;
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container]
  }, titleElement);
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 24
  }
});
export default DialogHeader;
//# sourceMappingURL=DialogHeader.js.map