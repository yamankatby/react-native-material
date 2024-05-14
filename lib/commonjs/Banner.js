"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Text = _interopRequireDefault(require("./Text"));
var _Divider = _interopRequireDefault(require("./Divider"));
var _useStyles = require("./hooks/use-styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  const styles = (0, _useStyles.useStyles)(({
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.contentContainer, contentContainerStyle]
  }, illustration && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.illustrationContainer, illustrationContainerStyle]
  }, typeof illustration === 'function' ? illustration({
    size: 40
  }) : illustration), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.textContainer, textContainerStyle]
  }, typeof text === 'string' ? /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "body2",
    style: [styles.text, textStyle]
  }, text) : text)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.actionsContainer, actionsContainerStyle]
  }, Array.isArray(buttons) ? buttons.map((button, index) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: index
  }, button, index !== buttons.length - 1 && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      width: 8
    }
  }))) : buttons), /*#__PURE__*/_react.default.createElement(_Divider.default, null));
};
var _default = exports.default = Banner;
//# sourceMappingURL=Banner.js.map