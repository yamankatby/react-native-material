import React, { useEffect, useMemo, useState } from 'react';
import { Animated, Easing, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Portal } from './base/PortalContext';
import Surface from './Surface';

export interface DialogProps {
  visible?: boolean;

  onDismiss?: () => void;
}

const Dialog: React.FC<DialogProps> = ({ visible = false, onDismiss, children }) => {
  const [portalVisible, setPortalVisible] = useState(visible);

  const animatedValue = useMemo(() => new Animated.Value(visible ? 1 : 0), []);

  useEffect(() => {
    if (visible) setPortalVisible(true);

    Animated.timing(animatedValue, {
      toValue: visible ? 1 : 0,
      duration: 225,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: Platform.OS !== 'android',
    }).start(() => {
      if (!visible) setPortalVisible(false);
    });
  }, [visible]);

  if (!portalVisible) return null;

  return (
    <Portal>
      <TouchableWithoutFeedback onPress={onDismiss}>
        <Animated.View style={[StyleSheet.absoluteFill, styles.backdrop, { opacity: animatedValue }]} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.container, { opacity: animatedValue }]}
        pointerEvents="box-none"
        needsOffscreenAlphaCompositing={Platform.OS === 'android'}
      >
        <Surface category="medium" elevation={24} style={[styles.surface]}>
          {children}
        </Surface>
      </Animated.View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  surface: {
    width: 280,
    marginHorizontal: 40,
  },
});

export default Dialog;
