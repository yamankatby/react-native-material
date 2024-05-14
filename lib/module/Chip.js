function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import chroma from 'chroma-js';
import Pressable from './Pressable';
import Text from './Text';
import { usePaletteColor } from './hooks/use-palette-color';
import { useTheme } from './base/ThemeContext';
const Chip = ({
  label,
  leading,
  trailing,
  variant = 'filled',
  color = 'on-surface',
  style,
  contentContainerStyle,
  labelStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  children,
  pressEffect,
  pressEffectColor,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  delayLongPress,
  disabled,
  hitSlop,
  pressRetentionOffset,
  android_disableSound,
  android_ripple,
  testOnly_pressed,
  ...rest
}) => {
  const theme = useTheme();
  const palette = usePaletteColor(color, theme.palette.surface.main);
  const scale = useMemo(() => chroma.scale([palette.on, palette.main]), [palette]);
  const labelElement = typeof label === 'string' ? /*#__PURE__*/React.createElement(Text, {
    variant: "body2",
    style: [{
      color: scale(0.87).hex()
    }, labelStyle]
  }, label) : typeof label === 'function' ? label({
    color: scale(0.87).hex()
  }) : label;
  const leadingElement = typeof leading === 'function' ? leading({
    color: scale(0.66).hex(),
    size: 24
  }) : leading;
  const trailingElement = typeof trailing === 'function' ? trailing({
    color: scale(0.66).hex(),
    size: 18
  }) : trailing;
  return /*#__PURE__*/React.createElement(View, _extends({
    style: [styles.container, variant === 'filled' && {
      backgroundColor: scale(0.08).hex()
    }, style]
  }, rest), /*#__PURE__*/React.createElement(Pressable, {
    pressEffect: pressEffect,
    pressEffectColor: pressEffectColor ?? scale(0.87).hex(),
    onPress: onPress,
    onPressIn: onPressIn,
    onPressOut: onPressOut,
    onLongPress: onLongPress,
    onBlur: onBlur,
    onFocus: onFocus,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    delayLongPress: delayLongPress,
    disabled: disabled,
    hitSlop: hitSlop,
    pressRetentionOffset: pressRetentionOffset,
    android_disableSound: android_disableSound,
    android_ripple: android_ripple,
    testOnly_pressed: testOnly_pressed,
    style: [styles.contentContainer, contentContainerStyle]
  }, leadingElement && /*#__PURE__*/React.createElement(View, {
    style: [styles.leadingContainer, leadingContainerStyle]
  }, leadingElement), labelElement, children, trailingElement && /*#__PURE__*/React.createElement(View, {
    style: [styles.trailingContainer, trailingContainerStyle]
  }, trailingElement), variant === 'outlined' && /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, styles.outline, {
      borderColor: scale(0.26).hex()
    }]
  })));
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden'
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 32
  },
  leadingContainer: {
    marginStart: -8,
    marginEnd: 8
  },
  trailingContainer: {
    marginStart: 8,
    marginEnd: -4
  },
  outline: {
    borderWidth: 1,
    borderRadius: 16
  }
});
export default Chip;
//# sourceMappingURL=Chip.js.map