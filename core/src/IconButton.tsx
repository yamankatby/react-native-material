import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { PaletteColor, usePalette } from "./base";
import Pressable, { PressableProps } from "./Pressable";

export interface IconButtonProps extends Omit<ViewProps, "hitSlop">, Omit<PressableProps, "style" | "children"> {
  icon?: React.ReactElement;

  color?: PaletteColor;

  contentContainerStyle?: PressableProps["style"];
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    overflow: "hidden",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  color = "onBackground",
  style,
  contentContainerStyle,
  effect,
  effectColor,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  onBlur,
  onFocus,
  delayLongPress,
  disabled,
  hitSlop,
  pressRetentionOffset,
  android_disableSound,
  android_ripple,
  testOnly_pressed,
  ...rest
}) => {
  const palette = usePalette(color);
  return (
    <View style={[styles.container, style]} {...rest}>
      <Pressable
        style={[StyleSheet.absoluteFill, styles.contentContainer, contentContainerStyle]}
        effect={effect}
        effectColor={effectColor ?? palette.color}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onLongPress={onLongPress}
        onBlur={onBlur}
        onFocus={onFocus}
        delayLongPress={delayLongPress}
        disabled={disabled}
        hitSlop={hitSlop}
        pressRetentionOffset={pressRetentionOffset}
        android_disableSound={android_disableSound}
        android_ripple={android_ripple}
        testOnly_pressed={testOnly_pressed}
      >
        {icon}
      </Pressable>
    </View>
  );
};

export default IconButton;
