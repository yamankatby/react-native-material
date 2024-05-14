function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Surface from './Surface';
import Text from './Text';
import { useSurfaceColorValue } from './hooks/use-surface-color';
import { usePaletteColor } from './hooks/use-palette-color';
import { useTheme } from './base/ThemeContext';
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
  const theme = useTheme();
  const surfaceColor = useSurfaceColorValue(variant === 'top' ? 4 : 8);
  const palette = usePaletteColor(theme.colorScheme === 'dark' && !enableColorOnDark ? surfaceColor : color, tintColor);
  const titleElement = typeof title === 'string' ? /*#__PURE__*/React.createElement(Text, {
    variant: "h6",
    style: [{
      color: palette.on
    }, titleStyle]
  }, title) : typeof title === 'function' ? title({
    color: palette.on
  }) : title;
  const subtitleElement = typeof subtitle === 'string' ? /*#__PURE__*/React.createElement(Text, {
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
  return /*#__PURE__*/React.createElement(Surface, _extends({
    style: [{
      backgroundColor: transparent ? 'transparent' : palette.main,
      zIndex: variant === 'top' ? 4 : 8
    }, style],
    elevation: transparent ? 0 : variant === 'top' ? 4 : 8
  }, props), /*#__PURE__*/React.createElement(View, {
    style: [styles.contentContainer, contentContainerStyle]
  }, leadingElement && /*#__PURE__*/React.createElement(View, {
    style: [styles.leadingContainer, leadingContainerStyle]
  }, leadingElement), /*#__PURE__*/React.createElement(View, {
    style: [centerTitle ? [StyleSheet.absoluteFill, styles.centeredTitleContainer] : styles.titleContainer, titleContentStyle],
    pointerEvents: centerTitle ? 'none' : undefined
  }, titleElement, subtitleElement), trailingElement && /*#__PURE__*/React.createElement(View, {
    style: [styles.trailingContainer, trailingContainerStyle]
  }, trailingElement)), children);
};
const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.select({
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
export default AppBar;
//# sourceMappingURL=AppBar.js.map