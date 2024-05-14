import React from 'react';
import { View } from 'react-native';
import Text from './Text';
import Divider from './Divider';
import { useStyles } from './hooks/use-styles';
const Banner = ({
  text,
  illustration,
  buttons,
  style,
  contentContainerStyle,
  illustrationContainerStyle,
  textContainerStyle,
  textStyle,
  actionsContainerStyle
}) => {
  const styles = useStyles(({
    palette
  }) => ({
    container: {
      backgroundColor: palette.surface.main
    },
    contentContainer: {
      flexDirection: 'row',
      marginTop: 24,
      marginBottom: 4,
      marginHorizontal: 16
    },
    illustrationContainer: {
      marginEnd: 16
    },
    textContainer: {
      flex: 1
    },
    text: {
      color: palette.surface.on
    },
    actionsContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: 8
    }
  }), []);
  return /*#__PURE__*/React.createElement(View, {
    style: [styles.container, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.contentContainer, contentContainerStyle]
  }, illustration && /*#__PURE__*/React.createElement(View, {
    style: [styles.illustrationContainer, illustrationContainerStyle]
  }, typeof illustration === 'function' ? illustration({
    size: 40
  }) : illustration), /*#__PURE__*/React.createElement(View, {
    style: [styles.textContainer, textContainerStyle]
  }, typeof text === 'string' ? /*#__PURE__*/React.createElement(Text, {
    variant: "body2",
    style: [styles.text, textStyle]
  }, text) : text)), /*#__PURE__*/React.createElement(View, {
    style: [styles.actionsContainer, actionsContainerStyle]
  }, Array.isArray(buttons) ? buttons.map((button, index) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: index
  }, button, index !== buttons.length - 1 && /*#__PURE__*/React.createElement(View, {
    style: {
      width: 8
    }
  }))) : buttons), /*#__PURE__*/React.createElement(Divider, null));
};
export default Banner;
//# sourceMappingURL=Banner.js.map