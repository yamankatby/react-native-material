function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Animated, Easing, StyleSheet, TextInput as RNTextInput, View } from 'react-native';
import Text from './Text';
import { usePaletteColor } from './hooks/use-palette-color';
import { useTheme } from './base/ThemeContext';
import { useSurfaceScale } from './hooks/use-surface-scale';
import { useStyles } from './hooks/use-styles';
const TextInput = /*#__PURE__*/React.forwardRef(({
  variant = 'filled',
  label,
  leading,
  trailing,
  color = 'primary',
  helperText,
  onMouseEnter,
  onMouseLeave,
  style,
  inputContainerStyle,
  inputStyle,
  leadingContainerStyle,
  trailingContainerStyle,
  placeholder,
  onFocus,
  onBlur,
  ...rest
}, ref) => {
  const theme = useTheme();
  const surfaceScale = useSurfaceScale();
  const palette = usePaletteColor(color);
  const leadingNode = typeof leading === 'function' ? leading({
    color: surfaceScale(0.62).hex(),
    size: 24
  }) : leading;
  const trailingNode = typeof trailing === 'function' ? trailing({
    color: surfaceScale(0.62).hex(),
    size: 24
  }) : trailing;
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = useCallback(event => {
    onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter(event);
    setHovered(true);
  }, [onMouseEnter]);
  const handleMouseLeave = useCallback(event => {
    onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave(event);
    setHovered(false);
  }, [onMouseLeave]);
  const [focused, setFocused] = useState(false);
  const handleFocus = useCallback(event => {
    onFocus === null || onFocus === void 0 || onFocus(event);
    setFocused(true);
  }, [onFocus]);
  const handleBlur = useCallback(event => {
    onBlur === null || onBlur === void 0 || onBlur(event);
    setFocused(false);
  }, [onBlur]);
  const focusAnimation = useMemo(() => new Animated.Value(0), []);
  useEffect(() => {
    Animated.timing(focusAnimation, {
      toValue: focused ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false
    }).start();
  }, [focused]);
  const active = useMemo(() => {
    var _rest$value;
    return focused || (((_rest$value = rest.value) === null || _rest$value === void 0 ? void 0 : _rest$value.length) || 0) > 0;
  }, [focused, rest.value]);
  const activeAnimation = useMemo(() => new Animated.Value(active ? 1 : 0), []);
  useEffect(() => {
    Animated.timing(activeAnimation, {
      toValue: active ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false
    }).start();
  }, [active]);
  const styles = useStyles(() => ({
    inputContainer: {
      flexDirection: 'row',
      backgroundColor: variant === 'filled' ? focused ? surfaceScale(0.14).hex() : hovered ? surfaceScale(0.08).hex() : surfaceScale(0.04).hex() : variant === 'outlined' ? surfaceScale(0).hex() : undefined
    },
    input: {
      flex: 1,
      minHeight: variant === 'standard' ? 48 : 56,
      paddingStart: leadingNode ? 12 : variant === 'standard' ? 0 : 16,
      paddingEnd: trailingNode ? 12 : variant === 'standard' ? 0 : 16,
      color: surfaceScale(0.87).hex()
    },
    leading: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      marginStart: variant === 'standard' ? 0 : 12,
      marginVertical: variant === 'standard' ? 12 : 16
    },
    trailing: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      marginEnd: variant === 'standard' ? 0 : 12,
      marginVertical: variant === 'standard' ? 12 : 16
    },
    underline: {
      position: 'absolute',
      start: 0,
      end: 0,
      bottom: 0,
      height: 1,
      backgroundColor: hovered ? surfaceScale(0.87).hex() : surfaceScale(0.42).hex()
    },
    underlineFocused: {
      position: 'absolute',
      start: 0,
      end: 0,
      bottom: 0,
      height: 2,
      backgroundColor: palette.main
    },
    outline: {
      borderWidth: focused ? 2 : 1,
      borderColor: focused ? palette.main : hovered ? surfaceScale(0.87).hex() : surfaceScale(0.42).hex()
    },
    outlineLabelGap: {
      position: 'absolute',
      top: 0,
      start: -4,
      end: -4,
      height: focused ? 2 : 1,
      backgroundColor: surfaceScale(0).hex()
    },
    labelContainer: {
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      start: variant === 'standard' ? leadingNode ? 36 : 0 : leadingNode ? 48 : 16,
      height: variant === 'standard' ? 48 : 56
    },
    helperText: {
      color: surfaceScale(0.6).hex()
    }
  }), [palette.main, surfaceScale, !!leadingNode, !!trailingNode, variant, focused, hovered]);
  return /*#__PURE__*/React.createElement(View, {
    style: [style]
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.inputContainer, variant !== 'standard' && theme.shapes.medium, variant === 'filled' && {
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0
    }, inputContainerStyle]
  }, leadingNode && /*#__PURE__*/React.createElement(View, {
    style: [styles.leading, leadingContainerStyle]
  }, leadingNode), /*#__PURE__*/React.createElement(RNTextInput, _extends({
    ref: ref,
    style: [styles.input, theme.typography.subtitle1, {
      paddingTop: variant === 'filled' && label ? 18 : 0
    }, inputStyle],
    placeholder: label ? focused ? placeholder : undefined : placeholder,
    selectionColor: palette.main,
    placeholderTextColor: surfaceScale(0.4).hex(),
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, rest)), trailingNode && /*#__PURE__*/React.createElement(View, {
    style: [styles.trailing, trailingContainerStyle]
  }, trailingNode), (variant === 'filled' || variant === 'standard') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(View, {
    style: [styles.underline],
    pointerEvents: "none"
  }), /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.underlineFocused, {
      transform: [{
        scaleX: focusAnimation
      }]
    }],
    pointerEvents: "none"
  })), variant === 'outlined' && /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, theme.shapes.medium, styles.outline],
    pointerEvents: "none"
  }), label && /*#__PURE__*/React.createElement(View, {
    style: [styles.labelContainer],
    pointerEvents: "none"
  }, variant === 'outlined' && /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.outlineLabelGap, {
      transform: [{
        scaleX: activeAnimation
      }]
    }]
  }), /*#__PURE__*/React.createElement(Animated.Text, {
    style: [theme.typography.subtitle1, {
      color: focusAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [surfaceScale(0.87).hex(), palette.main]
      }),
      fontSize: activeAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [theme.typography.subtitle1.fontSize ?? 16, 12]
      }),
      transform: [{
        translateY: activeAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, variant === 'filled' ? -12 : variant === 'outlined' ? -28 : -24]
        })
      }]
    }]
  }, label))), /*#__PURE__*/React.createElement(View, {
    style: {
      marginTop: 4,
      marginHorizontal: 16
    }
  }, helperText && /*#__PURE__*/React.createElement(Text, {
    variant: "body2",
    style: [styles.helperText]
  }, helperText)));
});
export default TextInput;
//# sourceMappingURL=TextInput.js.map