import React, { useCallback, useState } from "react";
import {
  Animated,
  Easing,
  GestureResponderEvent,
  LayoutChangeEvent,
  Platform,
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  StyleSheet,
  View,
} from "react-native";
import chroma from "chroma-js";

export interface PressableProps extends RNPressableProps {
  effect?: "android-ripple" | "highlight" | "ripple" | "none";

  effectColor?: string;

  style: any;
}

const Pressable: React.FC<PressableProps> = ({
  effect = Platform.select({ android: "android-ripple", web: "ripple", default: "highlight" }),
  effectColor = "black",
  onLayout,
  onPressIn,
  onPressOut,
  children,
  ...rest
}) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  const [ripples, setRipples] = useState<{ key: string; style: any }[]>([]);

  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { width, height } = event.nativeEvent.layout;
      setSize({ width, height });
      onLayout?.(event);
    },
    [onLayout],
  );

  const [pressed, setPressed] = useState(false);

  const handlePressIn = useCallback(
    (event: GestureResponderEvent) => {
      setPressed(true);
      onPressIn?.(event);

      if (effect === "ripple") {
        const x = event.nativeEvent.locationX - 0.5;
        const y = event.nativeEvent.locationY - 0.5;

        const scale = new Animated.Value(0);
        const opacity = new Animated.Value(1);

        const ripple = {
          key: `ripple-#${Date.now() + Math.random()}`,
          style: { start: x, top: y, transform: [{ scale }], opacity },
        };

        setRipples(prevState => [...prevState, ripple]);

        Animated.timing(scale, {
          toValue: Math.max(
            size.width * 1.25 + Math.abs(size.width / 2 - x) * 2,
            size.height * 1.25 + Math.abs(size.height / 2 - y) * 2,
          ),
          easing: Easing.out(Easing.ease),
          duration: 400,
          useNativeDriver: true,
        }).start();
      }
    },
    [onPressIn, effect, size],
  );

  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      setPressed(false);
      onPressOut?.(event);

      if (effect === "ripple") {
        Animated.timing(ripples[ripples.length - 1].style.opacity, {
          toValue: 0,
          easing: Easing.out(Easing.ease),
          duration: 400,
          useNativeDriver: false,
        }).start(() => {
          setRipples(prevState => prevState.slice(1));
        });
      }
    },
    [effect, ripples, onPressOut],
  );

  return (
    <RNPressable
      android_ripple={effect === "android-ripple" ? { color: effectColor } : undefined}
      onLayout={handleLayout}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      {children}
      <View
        style={[
          StyleSheet.absoluteFill,
          styles.effectContainer,
          { backgroundColor: effect === "highlight" && pressed ? chroma(effectColor).alpha(0.2).hex() : "transparent" },
        ]}
      >
        {ripples.map(ripple => (
          <Animated.View
            key={ripple.key}
            style={[styles.ripple, { backgroundColor: chroma(effectColor).alpha(0.2).hex() }, ripple.style]}
          />
        ))}
      </View>
    </RNPressable>
  );
};

const styles = StyleSheet.create({
  effectContainer: {
    overflow: "hidden",
  },
  ripple: {
    position: "absolute",
    width: 1,
    height: 1,
    borderRadius: 0.5,
  },
});

export default Pressable;
