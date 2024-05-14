"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Text = _interopRequireDefault(require("./Text"));
var _Divider = _interopRequireDefault(require("./Divider"));
var _usePaletteColor = require("./hooks/use-palette-color");
var _useStyles = require("./hooks/use-styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  const palette = (0, _usePaletteColor.usePaletteColor)(color);
  const styles = (0, _useStyles.useStyles)(() => ({
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.contentContainer, contentContainerStyle]
  }, !!leading && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.leadingContainer, leadingContainerStyle]
  }, typeof leading === 'function' ? leading({
    color: palette.main,
    size: 24
  }) : leading), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.titleContainer, titleContainerStyle]
  }, typeof title === 'string' ? /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "subtitle1",
    style: {
      color: palette.main
    }
  }, title) : title), !!trailing && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.trailingContainer, trailingContainerStyle]
  }, typeof trailing === 'function' ? trailing({
    color: palette.main,
    size: 24
  }) : trailing)), typeof divider === 'boolean' ? divider && /*#__PURE__*/_react.default.createElement(_Divider.default, null) : divider);
};
var _default = exports.default = BackdropSubheader;
//# sourceMappingURL=BackdropSubheader.js.map