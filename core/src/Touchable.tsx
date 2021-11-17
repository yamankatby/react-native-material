import React, { useCallback, useState } from "react";
import {
  Animated,
  Easing,
  GestureResponderEvent,
  LayoutChangeEvent,
  Platform,
  Pressable as NativePressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

const Pressable = Animated.createAnimatedComponent(NativePressable);

export interface TouchableProps extends PressableProps {
  underlayColor?: string;

  ripple?: boolean;

  rippleOpacity?: number;

  rippleSize?: number;

  rippleContainerBorderRadius?: number;

  rippleCentered?: boolean;

  rippleDuration?: number;

  style?: any;

  rippleContainerStyle?: StyleProp<ViewStyle>;
}

interface RippleProps {
  key: string;

  style: any;
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  ripple: {
    width: 1,
    height: 1,
    borderRadius: 0.5,
    position: "absolute",
  },
});

let key = 0;

const Touchable: React.FC<TouchableProps> = ({
  underlayColor = "black",
  ripple = true,
  rippleOpacity = 0.3,
  rippleSize,
  rippleContainerBorderRadius,
  rippleCentered = false,
  rippleDuration = 400,
  onPressIn,
  onLayout,
  style,
  rippleContainerStyle,
  children,
  ...rest
}) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const [ripples, setRipples] = useState<RippleProps[]>([]);

  const handleOnLayout = useCallback((event: LayoutChangeEvent) => {
    onLayout && onLayout(event);

    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, [onLayout]);

  const handleOnPressIn = useCallback((event: GestureResponderEvent) => {
    onPressIn && onPressIn(event);

    const { locationX, locationY } = event.nativeEvent;
    const x = (rippleCentered || !locationX ? size.width / 2 : locationX) - 0.5
    const y = (rippleCentered || !locationY ? size.height / 2 : locationY) - 0.5

    const progress = new Animated.Value(0)

    const ripple: RippleProps = {
      key: `${key++}`,
      style: {
        start: x,
        top: y,
        transform: [{
          scale: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, rippleSize ?? Math.max(size.width * 1.25 + Math.abs(size.width / 2 - x) * 2, size.height * 1.25 + Math.abs(size.height / 2 - y) * 2)],
          }),
        }],
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [rippleOpacity, 0],
        }),
      },
    }

    setRipples(prevState => [...prevState, ripple])

    Animated.timing(progress, {
      toValue: 1,
      easing: Easing.out(Easing.ease),
      duration: rippleDuration,
      useNativeDriver: true,
    }).start(() => {
      setRipples(prevState => {
        const index = prevState.findIndex(r => r.key === ripple.key)
        return [...prevState.slice(0, index), ...prevState.slice(index + 1)]
      })
    })
  }, [onPressIn, rippleSize, rippleCentered, rippleDuration, size]);

  return (
    <Pressable
      android_ripple={!ripple ? { color: underlayColor } : undefined}
      onPressIn={ripple ? handleOnPressIn : onPressIn}
      onLayout={ripple ? handleOnLayout : onLayout}
      style={[Platform.OS === 'web' && { cursor: 'pointer' }, style]}
      {...rest}
    >
      {children}
      <View style={[
        styles.container,
        StyleSheet.absoluteFill,
        rippleContainerStyle,
        rippleContainerBorderRadius ? { borderRadius: rippleContainerBorderRadius } : undefined,
      ]}>
        {ripples.map((ripple) => (
          <Animated.View key={ripple.key} style={[styles.ripple, ripple.style, { backgroundColor: underlayColor }]} />
        ))}
      </View>
    </Pressable>
  );
};

export default Touchable;
