import React, { useEffect, useMemo, useState } from 'react';
import { Animated, Easing, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Portal } from './base/PortalContext';
import Surface from './Surface';
const Dialog = ({
  visible = false,
  onDismiss,
  surfaceStyles,
  children
}) => {
  const [portalVisible, setPortalVisible] = useState(visible);
  const animatedValue = useMemo(() => new Animated.Value(visible ? 1 : 0), []);
  useEffect(() => {
    if (visible) setPortalVisible(true);
    Animated.timing(animatedValue, {
      toValue: visible ? 1 : 0,
      duration: 225,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false
    }).start(() => {
      if (!visible) setPortalVisible(false);
    });
  }, [visible]);
  if (!portalVisible) return null;
  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: onDismiss
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [StyleSheet.absoluteFill, styles.backdrop, {
      opacity: animatedValue
    }]
  })), /*#__PURE__*/React.createElement(Animated.View, {
    style: [StyleSheet.absoluteFill, styles.container, {
      opacity: animatedValue
    }],
    pointerEvents: "box-none",
    needsOffscreenAlphaCompositing: Platform.OS === 'android'
  }, /*#__PURE__*/React.createElement(Surface, {
    category: "medium",
    elevation: 24,
    style: [styles.surface, surfaceStyles]
  }, children)));
};
const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  surface: {
    width: 280,
    marginHorizontal: 40
  }
});
export default Dialog;
//# sourceMappingURL=Dialog.js.map