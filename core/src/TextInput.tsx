import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  Easing,
  NativeSyntheticEvent,
  StyleSheet,
  TargetedEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  View,
} from "react-native";
import { PaletteColor, usePalette, useStyleSheet, useTheme } from "./base";
import chroma from "chroma-js";

export interface TextInputProps extends RNTextInputProps {
  /**
   * The variant to use.
   *
   * @default "filled"
   */
  variant?: "filled" | "outlined" | "standard";

  /**
   * The label to display.
   */
  label?: string;

  /**
   * The element placed before the text input.
   */
  leading?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The element placed after the text input.
   */
  trailing?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The color of the text input's content (e.g. label, icons, selection).
   *
   * @default "primary"
   */
  color?: PaletteColor;

  /**
   * Text to display before the input. Note that the prefix text will override the leading prop if both are provided.
   */
  prefix?: string;

  /**
   * Text to display after the input. Note that the suffix text will override the trailing prop if both are provided.
   */
  suffix?: string;

  /**
   * The helper text to display.
   */
  helperText?: string;

  /**
   * Callback function to call when user moves pointer over the input.
   */
  onMouseEnter?: (event: NativeSyntheticEvent<TargetedEvent>) => void;

  /**
   * Callback function to call when user moves pointer away from the input.
   */
  onMouseLeave?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  variant = "filled",
  label,
  leading,
  trailing,
  color = "primary",
  prefix,
  suffix,
  helperText,
  style,
  value,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const theme = useTheme();

  const surfaceScale = useMemo(
    () => chroma.scale([theme.palette.surface, theme.palette.onSurface]),
    [theme.palette.surface, theme.palette.onSurface],
  );

  const palette = usePalette(color);

  const leadingElement =
    typeof leading === "function"
      ? leading({
        color: surfaceScale(0.62).hex(),
        size: 24,
      })
      : leading;

  const trailingElement =
    typeof trailing === "function"
      ? trailing({
        color: surfaceScale(0.62).hex(),
        size: 24,
      })
      : trailing;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(
    (event: NativeSyntheticEvent<TargetedEvent>) => {
      onMouseEnter?.(event);
      setHovered(true);
    },
    [onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (event: NativeSyntheticEvent<TargetedEvent>) => {
      onMouseLeave?.(event);
      setHovered(false);
    },
    [onMouseLeave],
  );

  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(event);
      setFocused(true);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur?.(event);
      setFocused(false);
    },
    [onBlur],
  );

  const focusAnimation = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(focusAnimation, {
      toValue: focused ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [focused]);

  const active = useMemo(() => focused || !!value, [focused, value]);

  const activeAnimation = useMemo(() => new Animated.Value(active ? 1 : 0), []);

  useEffect(() => {
    Animated.timing(activeAnimation, {
      toValue: active ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [active]);

  const styles = useStyleSheet(
    () => ({
      container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:
          variant === "filled"
            ? focused
              ? surfaceScale(0.14).hex()
              : hovered
                ? surfaceScale(0.08).hex()
                : surfaceScale(0.04).hex()
            : variant === "outlined"
              ? surfaceScale(0).hex()
              : undefined,
      },
      input: {
        flex: 1,
        minHeight: variant === "standard" ? 48 : 56,
        paddingStart: variant === "standard" || !!leadingElement ? 0 : 16,
        paddingEnd: variant === "standard" || !!trailingElement ? 0 : 16,
        color: surfaceScale(0.87).hex(),
      },
      leading: {
        justifyContent: "center",
        alignItems: "center",
        width: 24,
        height: 24,
        marginStart: variant === "standard" ? 0 : 12,
        marginEnd: 12,
        marginVertical: 12,
      },
      trailing: {
        justifyContent: "center",
        alignItems: "center",
        width: 24,
        height: 24,
        marginStart: 12,
        marginEnd: variant === "standard" ? 0 : 12,
        marginVertical: 12,
      },
      underline: {
        position: "absolute",
        start: 0,
        end: 0,
        bottom: 0,
        height: 1,
        backgroundColor: hovered ? surfaceScale(0.87).hex() : surfaceScale(0.42).hex(),
      },
      underlineFocused: {
        height: 2,
        backgroundColor: palette.color,
      },
      outline: {
        borderWidth: focused ? 2 : 1,
        borderColor: focused ? palette.color : hovered ? surfaceScale(0.87).hex() : surfaceScale(0.42).hex(),
      },
    }),
    [surfaceScale, palette.color, variant, hovered, focused, !!leadingElement, !!trailingElement],
  );

  return (
    <View
      style={[
        variant !== "standard" && theme.shapes.medium,
        variant === "filled" && { borderBottomStartRadius: 0, borderBottomEndRadius: 0 },
        styles.container,
        style,
      ]}
    >
      {/*{leadingElement && <View style={[styles.leading]}>{leadingElement}</View>}*/}

      <View style={[styles.input]}>
        <Animated.Text
          style={[
            {
              backgroundColor: "green",
              position: "absolute",
              top: activeAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [variant === "standard" ? 15 : 19, 0],
              }),
            },
            theme.typography.subtitle1,
          ]}
        >
          {label}
        </Animated.Text>

        <RNTextInput
          style={[{ backgroundColor: "red" }, theme.typography.subtitle1]}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          selectionColor={palette.color}
          placeholderTextColor={surfaceScale(0.4).hex()}
          {...({ onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, ...props } as any)}
          {...props}
        />
      </View>

      {/*{trailingElement && <View style={[styles.trailing]}>{trailingElement}</View>}*/}

      {(variant === "filled" || variant === "standard") && (
        <>
          <View style={[styles.underline]} />
          <Animated.View
            style={[styles.underline, styles.underlineFocused, { transform: [{ scaleX: focusAnimation }] }]}
            pointerEvents="none"
          />
        </>
      )}

      {variant === "outlined" && (
        <View style={[StyleSheet.absoluteFill, theme.shapes.medium, styles.outline]} pointerEvents="none" />
      )}
    </View>
  );
};

export default TextInput;
