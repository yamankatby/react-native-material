"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _Surface = _interopRequireDefault(require("./Surface"));
var _Text = _interopRequireDefault(require("./Text"));
var _useSurfaceColor = require("./hooks/use-surface-color");
var _usePaletteColor = require("./hooks/use-palette-color");
var _ThemeContext = require("./base/ThemeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const AppBar = ({
  variant = 'top',
  title,
  subtitle,
  centerTitle = false,
  leading,
  trailing,
  color = 'primary',
  tintColor,
  transparent = false,
  enableColorOnDark = false,
  style,
  contentContainerStyle,
  titleContentStyle,
  titleStyle,
  subtitleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  children,
  ...props
}) => {
  const theme = (0, _ThemeContext.useTheme)();
  const surfaceColor = (0, _useSurfaceColor.useSurfaceColorValue)(variant === 'top' ? 4 : 8);
  const palette = (0, _usePaletteColor.usePaletteColor)(theme.colorScheme === 'dark' && !enableColorOnDark ? surfaceColor : color, tintColor);
  const titleElement = typeof title === 'string' ? /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "h6",
    style: [{
      color: palette.on
    }, titleStyle]
  }, title) : typeof title === 'function' ? title({
    color: palette.on
  }) : title;
  const subtitleElement = typeof subtitle === 'string' ? /*#__PURE__*/_react.default.createElement(_Text.default, {
    variant: "caption",
    style: [{
      color: palette.on
    }, subtitleStyle]
  }, subtitle) : typeof subtitle === 'function' ? subtitle({
    color: palette.on
  }) : subtitle;
  const leadingElement = typeof leading === 'function' ? leading({
    color: palette.on,
    size: 24
  }) : leading;
  const trailingElement = typeof trailing === 'function' ? trailing({
    color: palette.on,
    size: 24
  }) : trailing;
  return /*#__PURE__*/_react.default.createElement(_Surface.default, _extends({
    style: [{
      backgroundColor: transparent ? 'transparent' : palette.main,
      zIndex: variant === 'top' ? 4 : 8
    }, style],
    elevation: transparent ? 0 : variant === 'top' ? 4 : 8
  }, props), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.contentContainer, contentContainerStyle]
  }, leadingElement && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.leadingContainer, leadingContainerStyle]
  }, leadingElement), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [centerTitle ? [_reactNative.StyleSheet.absoluteFill, styles.centeredTitleContainer] : styles.titleContainer, titleContentStyle],
    pointerEvents: centerTitle ? 'none' : undefined
  }, titleElement, subtitleElement), trailingElement && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.trailingContainer, trailingContainerStyle]
  }, trailingElement)), children);
};
const styles = _reactNative.StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: _reactNative.Platform.select({
      ios: 44,
      web: 64,
      default: 56
    }),
    paddingHorizontal: 16
  },
  leadingContainer: {
    marginStart: -12,
    marginEnd: 20
  },
  trailingContainer: {
    marginStart: 20,
    marginEnd: -12
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  centeredTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
var _default = exports.default = AppBar;
//# sourceMappingURL=AppBar.js.map