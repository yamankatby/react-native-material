function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Surface from './Surface';
import Text from './Text';
import ActivityIndicator from './ActivityIndicator';
import Pressable from './Pressable';
import { usePaletteColor } from './hooks/use-palette-color';
import { useSurfaceScale } from './hooks/use-surface-scale';
import { useStyles } from './hooks/use-styles';
import { useAnimatedElevation } from './hooks/use-animated-elevation';
const Button = ({
  title,
  leading,
  trailing,
  variant = 'contained',
  color = 'primary',
  tintColor,
  compact = false,
  disableElevation = false,
  uppercase = true,
  loading = false,
  loadingIndicatorPosition = 'leading',
  loadingIndicator,
  style,
  pressableContainerStyle,
  contentContainerStyle,
  titleStyle,
  leadingContainerStyle,
  trailingContainerStyle,
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
  const surfaceScale = useSurfaceScale();
  const p = usePaletteColor(disabled ? surfaceScale(0.12).hex() : color, disabled ? surfaceScale(0.35).hex() : tintColor);
  const contentColor = useMemo(() => variant === 'contained' ? p.on : disabled ? p.on : p.main, [variant, p, disabled]);
  const hasLeading = useMemo(() => !!leading || loading && loadingIndicatorPosition === 'leading', [leading, loading, loadingIndicatorPosition]);
  const hasTrailing = useMemo(() => !!trailing || loading && loadingIndicatorPosition === 'trailing', [trailing, loading, loadingIndicatorPosition]);
  const styles = useStyles(({
    shapes
  }) => ({
    container: {
      backgroundColor: variant === 'contained' ? p.main : 'transparent'
    },
    outline: {
      ...shapes.small,
      borderWidth: 1,
      borderColor: surfaceScale(0.12).hex()
    },
    pressableContainer: {
      ...shapes.small,
      overflow: 'hidden'
    },
    pressable: {
      minWidth: 64,
      height: 36,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingStart: hasLeading ? compact ? 6 : 12 : compact ? 8 : 16,
      paddingEnd: hasTrailing ? compact ? 6 : 12 : compact ? 8 : 16
    },
    titleStyle: {
      textTransform: uppercase ? 'uppercase' : 'none',
      opacity: loading && loadingIndicatorPosition === 'overlay' ? 0 : 1
    },
    leadingContainer: {
      marginEnd: compact ? 6 : 8,
      opacity: loading && loadingIndicatorPosition === 'overlay' ? 0 : 1
    },
    trailingContainer: {
      marginStart: compact ? 6 : 8,
      opacity: loading && loadingIndicatorPosition === 'overlay' ? 0 : 1
    },
    loadingOverlayContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }), [variant, uppercase, compact, loading, loadingIndicatorPosition, p, hasLeading, hasTrailing, surfaceScale]);
  const getTitle = () => {
    switch (typeof title) {
      case 'string':
        return /*#__PURE__*/React.createElement(Text, {
          variant: "button",
          selectable: false,
          style: [{
            color: contentColor
          }, styles.titleStyle, titleStyle]
        }, title);
      case 'function':
        return title({
          color: contentColor
        });
      default:
        return title;
    }
  };
  const getLoadingIndicator = () => {
    if (!loadingIndicator) return /*#__PURE__*/React.createElement(ActivityIndicator, {
      color: contentColor
    });
    switch (typeof loadingIndicator) {
      case 'string':
        return /*#__PURE__*/React.createElement(Text, {
          variant: "button",
          style: {
            color: contentColor
          }
        }, loadingIndicator);
      case 'function':
        return loadingIndicator({
          color: contentColor
        });
      default:
        return loadingIndicator;
    }
  };
  const getLeading = () => {
    if (loading && loadingIndicatorPosition === 'leading') return getLoadingIndicator();
    return typeof leading === 'function' ? leading({
      color: contentColor,
      size: 18
    }) : leading;
  };
  const getTrailing = () => {
    if (loading && loadingIndicatorPosition === 'trailing') return getLoadingIndicator();
    return typeof trailing === 'function' ? trailing({
      color: contentColor,
      size: 18
    }) : trailing;
  };
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = useCallback(event => {
    onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter(event);
    setHovered(true);
  }, [onMouseEnter]);
  const handleMouseLeave = useCallback(event => {
    onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave(event);
    setHovered(false);
  }, [onMouseLeave]);
  const [pressed, setPressed] = useState(false);
  const handlePressIn = useCallback(event => {
    onPressIn === null || onPressIn === void 0 || onPressIn(event);
    setPressed(true);
  }, [onPressIn]);
  const handlePressOut = useCallback(event => {
    onPressOut === null || onPressOut === void 0 || onPressOut(event);
    setPressed(false);
  }, [onPressOut]);
  const animatedElevation = useAnimatedElevation(variant === 'contained' && !disableElevation && !disabled ? pressed ? 8 : hovered ? 4 : 2 : 0);
  return /*#__PURE__*/React.createElement(Surface, _extends({
    category: "small",
    style: [animatedElevation, styles.container, style]
  }, rest), /*#__PURE__*/React.createElement(View, {
    style: [styles.pressableContainer, pressableContainerStyle]
  }, /*#__PURE__*/React.createElement(Pressable, {
    style: [styles.pressable, contentContainerStyle],
    pressEffect: pressEffect,
    pressEffectColor: pressEffectColor ?? contentColor,
    onPress: onPress,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    onLongPress: onLongPress,
    onBlur: onBlur,
    onFocus: onFocus,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    delayLongPress: delayLongPress,
    disabled: disabled,
    hitSlop: hitSlop,
    pressRetentionOffset: pressRetentionOffset,
    android_disableSound: android_disableSound,
    android_ripple: android_ripple,
    testOnly_pressed: testOnly_pressed
  }, hasLeading && /*#__PURE__*/React.createElement(View, {
    style: [styles.leadingContainer, leadingContainerStyle]
  }, getLeading()), getTitle(), hasTrailing && /*#__PURE__*/React.createElement(View, {
    style: [styles.trailingContainer, trailingContainerStyle]
  }, getTrailing()), loading && loadingIndicatorPosition === 'overlay' && /*#__PURE__*/React.createElement(View, {
    style: [styles.loadingOverlayContainer, loadingOverlayContainerStyle]
  }, getLoadingIndicator()))), variant === 'outlined' && /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, styles.outline],
    pointerEvents: "none"
  }));
};
export default Button;
//# sourceMappingURL=Button.js.map