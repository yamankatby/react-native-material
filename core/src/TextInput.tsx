import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Easing,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput as NativeTextInput,
  TextInputFocusEventData,
  TextInputProps as NativeTextInputProps,
  View,
} from "react-native";
import chroma from "chroma-js";
import { PaletteColor, usePalette, useTheme } from "./base";
import Text from "./Text";

export interface TextInputProps extends NativeTextInputProps {
  variant?: "flat" | "outlined";

  color?: PaletteColor;

  label?: string;

  assistiveText?: string;

  leading?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  trailing?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;
}

const TextInput: React.FC<TextInputProps> = ({
  variant = "flat",
  color = "primary",
  label,
  assistiveText,
  leading,
  trailing,
  onFocus,
  onBlur,
  style,
  onChangeText,
  ...rest
}) => {
  const { palette, shapes, typography } = useTheme();

  const p = usePalette(color);

  const surfaceScale = useMemo(
    () => chroma.scale([palette.surface, palette.onSurface]),
    [palette.surface, palette.onSurface],
  )

  const [focused, setFocused] = useState(false);

  const [text, setText] = useState("");

  const active = useMemo(() => focused || text.length > 0, [focused, text]);

  const focusAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnimation, {
      toValue: focused ? 1 : 0,
      easing: Easing.out(Easing.ease),
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focused]);

  const activeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(activeAnimation, {
      toValue: active ? 1 : 0,
      easing: Easing.out(Easing.ease),
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [active]);

  const handleOnFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus && onFocus(e);
      setFocused(true);
    },
    [onFocus],
  );

  const handleOnBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur && onBlur(e);
      setFocused(false);
    },
    [onBlur],
  );

  const handleOnChangeText = useCallback(
    (text: string) => {
      onChangeText && onChangeText(text);
      setText(text);
    },
    [onChangeText],
  );

  return (
    <View style={style}>
      <View style={[shapes.medium, { flexDirection: 'row' }, variant === 'flat' ? {
        backgroundColor: surfaceScale(0.08).hex(),
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
      } : { backgroundColor: palette.surface }]}>
        {leading && <View style={{ width: 40, height: 40, marginTop: 8 }}>{leading}</View>}
        <NativeTextInput
          {...rest}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChangeText={handleOnChangeText}
          style={[
            typography.subtitle1,
            { flex: 1, minHeight: 56, paddingHorizontal: 16, color: palette.onSurface },
            shapes.medium,
            variant === "flat" && { paddingTop: label ? 14 : 0 },
          ]}
        />
        {trailing && <View style={{ width: 40, height: 40, marginTop: 8 }}>{trailing}</View>}
        {variant === "flat" && (
          <>
            <View
              style={{
                height: 1,
                position: "absolute",
                start: 0,
                end: 0,
                bottom: 0,
                backgroundColor: surfaceScale(0.6).hex(),
              }}
            />
            <Animated.View
              style={{
                height: 2,
                position: "absolute",
                start: 0,
                end: 0,
                bottom: 0,
                backgroundColor: p.color,
                transform: [{ scaleX: focusAnimation }],
              }}
            />
          </>
        )}

        {variant === "outlined" && (
          <>
            <Animated.View
              style={[
                StyleSheet.absoluteFill,
                shapes.medium,
                {
                  borderWidth: focused ? 2 : 1,
                  borderColor: focusAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [palette.onSurface, p.color],
                  }),
                },
              ]}
              pointerEvents="none"
            />
          </>
        )}

        <View
          style={{ height: 56, position: "absolute", justifyContent: "center", top: 0, start: leading ? 56 : 16 }}
          pointerEvents="none"
        >
          {variant === "outlined" && label && (
            <Animated.View
              style={{
                position: "absolute",
                top: 0,
                start: -4,
                end: -4,
                height: focused ? 2 : 1,
                backgroundColor: palette.surface,
                transform: [{ scaleX: activeAnimation }],
              }}
            />
          )}
          <Animated.Text
            style={[
              typography.subtitle1,
              {
                color: focusAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [palette.onSurface, p.color],
                }),
                fontSize: activeAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [typography.subtitle1.fontSize ?? 16, 12],
                }),
                transform: [
                  {
                    translateY: activeAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, variant === "flat" ? -12 : -28],
                    }),
                  },
                ],
              },
            ]}
          >
            {label}
          </Animated.Text>
        </View>
      </View>
      <View style={{
        marginTop: 4,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        {assistiveText && <Text variant="body2" style={{
          fontSize: 12,
          color: focused ? p.color : surfaceScale(0.6).hex(),
        }}>{assistiveText}</Text>}
      </View>
    </View>
  );
};

export default TextInput;
