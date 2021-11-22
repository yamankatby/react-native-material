import React, { useCallback, useState } from "react";
import {
  Animated,
  GestureResponderEvent,
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
}

const AnimatedPressable = Animated.createAnimatedComponent(RNPressable);

const Pressable: React.FC<PressableProps> = ({
  effect = Platform.select({ android: "android-ripple", web: "ripple", default: "highlight" }),
  effectColor = "black",
  onPressIn,
  onPressOut,
  children,
  ...rest
}) => {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = useCallback(
    (event: GestureResponderEvent) => {
      setPressed(true);
      onPressIn?.(event);
    },
    [onPressIn],
  );

  const handlePressOut = useCallback(
    (event: GestureResponderEvent) => {
      setPressed(false);
      onPressOut?.(event);
    },
    [onPressOut],
  );

  return (
    <AnimatedPressable
      android_ripple={effect === "android-ripple" ? { color: effectColor } : undefined}
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
      />
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  effectContainer: {
    overflow: "hidden",
  },
});

export default Pressable;
