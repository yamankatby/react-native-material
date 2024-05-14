function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback, useState } from 'react';
import { Animated, Easing, Platform, Pressable as RNPressable, StyleSheet, View } from 'react-native';
import chroma from 'chroma-js';
import { usePaletteColor } from './hooks/use-palette-color';
const Pressable = ({
  pressEffect = Platform.select({
    android: 'android-ripple',
    web: 'ripple',
    default: 'highlight'
  }),
  pressEffectColor = 'on-background',
  onLayout,
  onPressIn,
  onPressOut,
  onFocus,
  onBlur,
  android_ripple,
  onMouseEnter,
  onMouseLeave,
  children,
  ...rest
}) => {
  const {
    main: color
  } = usePaletteColor(pressEffectColor);
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });
  const [ripples, setRipples] = useState([]);
  const handleLayout = useCallback(event => {
    const {
      width,
      height
    } = event.nativeEvent.layout;
    setSize({
      width,
      height
    });
    onLayout === null || onLayout === void 0 || onLayout(event);
  }, [onLayout]);
  const [pressed, setPressed] = useState(false);
  const handlePressIn = useCallback(event => {
    setPressed(true);
    onPressIn === null || onPressIn === void 0 || onPressIn(event);
    if (pressEffect === 'ripple') {
      const {
        locationX,
        locationY
      } = event.nativeEvent;
      const x = (locationX ?? size.width / 2) - 0.5;
      const y = (locationY ?? size.height / 2) - 0.5;
      const scale = new Animated.Value(0);
      const opacity = new Animated.Value(1);
      const ripple = {
        key: `${Date.now() + Math.random()}`,
        style: {
          start: x,
          top: y,
          transform: [{
            scale
          }],
          opacity
        }
      };
      setRipples(prevState => [...prevState, ripple]);
      Animated.timing(scale, {
        toValue: Math.max(size.width * 1.25 + Math.abs(size.width / 2 - x) * 2, size.height * 1.25 + Math.abs(size.height / 2 - y) * 2),
        easing: Easing.out(Easing.ease),
        duration: 400,
        useNativeDriver: false
      }).start();
    }
  }, [onPressIn, pressEffect, size]);
  const handlePressOut = useCallback(event => {
    setPressed(false);
    onPressOut === null || onPressOut === void 0 || onPressOut(event);
    if (pressEffect === 'ripple' && ripples.length) {
      Animated.timing(ripples[ripples.length - 1].style.opacity, {
        toValue: 0,
        easing: Easing.out(Easing.ease),
        duration: 400,
        useNativeDriver: false
      }).start(() => {
        setRipples(prevState => prevState.slice(1));
      });
    }
  }, [pressEffect, ripples, onPressOut]);
  const [focused, setFocused] = useState(false);
  const handleFocus = useCallback(event => {
    setFocused(true);
    onFocus === null || onFocus === void 0 || onFocus(event);
  }, [onFocus]);
  const handleBlur = useCallback(event => {
    setFocused(false);
    onBlur === null || onBlur === void 0 || onBlur(event);
  }, [onBlur]);
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = useCallback(event => {
    setHovered(true);
    onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter(event);
  }, [onMouseEnter]);
  const handleMouseLeave = useCallback(event => {
    setHovered(false);
    onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave(event);
  }, [onMouseLeave]);
  return /*#__PURE__*/React.createElement(RNPressable, _extends({
    android_ripple: pressEffect === 'android-ripple' ? android_ripple ?? {
      color: chroma(color).alpha(0.26).hex()
    } : undefined,
    onLayout: handleLayout,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, rest), /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, {
      backgroundColor: hovered && !rest.disabled ? chroma(color).alpha(0.04).hex() : 'transparent'
    }, {
      transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    }]
  }), focused && !rest.disabled && /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, {
      backgroundColor: chroma(color).alpha(0.12).hex()
    }]
  }), pressEffect === 'highlight' && pressed && /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, {
      backgroundColor: chroma(color).alpha(0.26).hex()
    }]
  }), pressEffect === 'ripple' && ripples.length !== 0 && /*#__PURE__*/React.createElement(View, {
    style: [StyleSheet.absoluteFill, styles.effectContainer]
  }, ripples.map(ripple => /*#__PURE__*/React.createElement(Animated.View, {
    key: ripple.key,
    style: [styles.ripple, {
      backgroundColor: chroma(color).alpha(0.1).hex()
    }, ripple.style]
  }))), children);
};
const styles = StyleSheet.create({
  effectContainer: {
    overflow: 'hidden'
  },
  ripple: {
    position: 'absolute',
    width: 1,
    height: 1,
    borderRadius: 0.5
  }
});
export default Pressable;
//# sourceMappingURL=Pressable.js.map