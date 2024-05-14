function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Surface from './Surface';
import Pressable from './Pressable';
import Text from './Text';
import ActivityIndicator from './ActivityIndicator';
import { usePaletteColor } from './hooks/use-palette-color';
import { useStyles } from './hooks/use-styles';
import { useAnimatedElevation } from './hooks/use-animated-elevation';
const FAB = ({
  icon,
  label,
  variant = 'standard',
  size = 'default',
  color = 'secondary',
  tintColor,
  loading = false,
  loadingIndicator,
  loadingIndicatorPosition = 'icon',
  visible = true,
  style,
  pressableContainerStyle,
  contentContainerStyle,
  iconContainerStyle,
  labelContainerStyle,
  labelStyle,
  loadingOverlayContainerStyle,
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
  const palette = usePaletteColor(color, tintColor);
  const hasIcon = useMemo(() => icon || loading && loadingIndicatorPosition === 'icon', [icon, loading, loadingIndicatorPosition]);
  const styles = useStyles(() => ({
    container: {
      backgroundColor: palette.main,
      borderRadius: size === 'default' ? 28 : 20
    },
    pressableContainer: {
      borderRadius: size === 'default' ? 28 : 20,
      overflow: 'hidden'
    },
    pressable: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingStart: variant === 'extended' ? hasIcon ? size === 'default' ? 12 : 6 : size === 'default' ? 20 : 10 : size === 'default' ? 16 : 8,
      paddingEnd: variant === 'extended' ? size === 'default' ? 20 : 10 : size === 'default' ? 16 : 8,
      paddingVertical: size === 'default' ? 16 : 8
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24
    },
    labelContainer: {
      marginStart: hasIcon ? size === 'default' ? 12 : 6 : 0
    },
    loadingOverlayContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: palette.main
    }
  }), [variant, size, palette, hasIcon]);
  const animated = useRef(new Animated.Value(visible ? 1 : 0)).current;
  useEffect(() => {
    Animated.timing(animated, {
      toValue: visible ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();
  }, [visible]);
  const getLoadingIndicator = () => {
    if (!loadingIndicator) return /*#__PURE__*/React.createElement(ActivityIndicator, {
      color: palette.on
    });
    switch (typeof loadingIndicator) {
      case 'string':
        return /*#__PURE__*/React.createElement(Text, {
          variant: "button",
          style: {
            color: palette.on
          }
        }, loadingIndicator);
      case 'function':
        return loadingIndicator({
          color: palette.on
        });
      default:
        return loadingIndicator;
    }
  };
  const getIcon = () => {
    if (loading && loadingIndicatorPosition === 'icon') return getLoadingIndicator();
    return typeof icon === 'function' ? icon({
      color: palette.on,
      size: 24
    }) : icon;
  };
  const getLabel = () => {
    switch (typeof label) {
      case 'string':
        return /*#__PURE__*/React.createElement(Text, {
          variant: "button",
          selectable: false,
          style: [{
            color: palette.on
          }, labelStyle]
        }, label);
      case 'function':
        return label({
          color: palette.on
        });
      default:
        return label;
    }
  };
  const [pressed, setPressed] = useState(false);
  const handlePressIn = useCallback(event => {
    onPressIn === null || onPressIn === void 0 || onPressIn(event);
    setPressed(true);
  }, [onPressIn]);
  const handlePressOut = useCallback(event => {
    onPressOut === null || onPressOut === void 0 || onPressOut(event);
    setPressed(false);
  }, [onPressOut]);
  const animatedElevation = useAnimatedElevation(pressed ? 12 : 6);
  return /*#__PURE__*/React.createElement(Surface, _extends({
    style: [animatedElevation, styles.container, {
      transform: [{
        scale: animated
      }]
    }, style]
  }, rest), /*#__PURE__*/React.createElement(View, {
    style: [styles.pressableContainer, pressableContainerStyle]
  }, /*#__PURE__*/React.createElement(Pressable, {
    style: [styles.pressable, contentContainerStyle],
    pressEffect: pressEffect,
    pressEffectColor: pressEffectColor ?? palette.on,
    onPress: onPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
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
    testOnly_pressed: testOnly_pressed
  }, hasIcon && /*#__PURE__*/React.createElement(View, {
    style: [styles.iconContainer, iconContainerStyle]
  }, getIcon()), variant === 'extended' && /*#__PURE__*/React.createElement(View, {
    style: [styles.labelContainer, labelContainerStyle]
  }, getLabel()), loading && loadingIndicatorPosition === 'overlay' && /*#__PURE__*/React.createElement(View, {
    style: [styles.loadingOverlayContainer, loadingOverlayContainerStyle]
  }, getLoadingIndicator()))));
};
export default FAB;
//# sourceMappingURL=FAB.js.map