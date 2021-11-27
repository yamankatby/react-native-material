import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  Easing,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TargetedEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  View,
  ViewStyle,
} from "react-native";
import chroma from "chroma-js";
import { PaletteColor, usePalette, useStyleSheet, useTheme } from "./base";
import Text from "./Text";

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

  /**
   * The style of the container view.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * The style of the text input container view.
   */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The style of the text input.
   */
  inputStyle?: RNTextInputProps["style"];

  /**
   * The style of the text input's leading element container.
   */
  leadingContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The style of the text input's trailing element container.
   */
  trailingContainerStyle?: StyleProp<ViewStyle>;
}

const TextInput: React.FC<TextInputProps> = ({
  variant = "filled",
  label,
  leading,
  trailing,
  color = "primary",
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
  onChangeText,
  ...rest
}) => {
  const theme = useTheme();

  const surfaceScale = useMemo(
    () => chroma.scale([theme.palette.surface, theme.palette.onSurface]),
    [theme.palette.surface, theme.palette.onSurface],
  );

  const palette = usePalette(color);

  const leadingNode = typeof leading === "function" ? leading({ color: surfaceScale(0.62).hex(), size: 24 }) : leading;

  const trailingNode =
    typeof trailing === "function"
      ? trailing({
        color: surfaceScale(0.62).hex(),
        size: 24,
      })
      : trailing;

  const [text, setText] = useState("");

  const handleChangeText = useCallback(
    (text: string) => {
      onChangeText?.(text);
      setText(text);
    },
    [onChangeText],
  );

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
      useNativeDriver: false,
    }).start();
  }, [focused]);

  const active = useMemo(() => focused || text.length > 0, [focused, text]);

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
      inputContainer: {
        flexDirection: "row",
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
        paddingStart: !!leadingNode ? 12 : variant === "standard" ? 0 : 16,
        paddingEnd: !!trailingNode ? 12 : variant === "standard" ? 0 : 16,
        color: surfaceScale(0.87).hex(),
      },
      leading: {
        justifyContent: "center",
        alignItems: "center",
        width: 24,
        height: 24,
        marginStart: variant === "standard" ? 0 : 12,
        marginVertical: variant === "standard" ? 12 : 16,
      },
      trailing: {
        justifyContent: "center",
        alignItems: "center",
        width: 24,
        height: 24,
        marginEnd: variant === "standard" ? 0 : 12,
        marginVertical: variant === "standard" ? 12 : 16,
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
        position: "absolute",
        start: 0,
        end: 0,
        bottom: 0,
        height: 2,
        backgroundColor: palette.color,
      },
      outline: {
        borderWidth: focused ? 2 : 1,
        borderColor: focused ? palette.color : hovered ? surfaceScale(0.87).hex() : surfaceScale(0.42).hex(),
      },
      outlineLabelGap: {
        position: "absolute",
        top: 0,
        start: -4,
        end: -4,
        height: focused ? 2 : 1,
        backgroundColor: surfaceScale(0).hex(),
      },
      labelContainer: {
        justifyContent: "center",
        position: "absolute",
        top: 0,
        start: variant === "standard" ? (!!leadingNode ? 36 : 0) : !!leadingNode ? 48 : 16,
        height: variant === "standard" ? 48 : 56,
      },
      helperText: {
        color: surfaceScale(0.6).hex(),
      },
    }),
    [palette.color, surfaceScale, !!leadingNode, !!trailingNode, variant, focused, hovered],
  );

  return (
    <View style={[style]}>
      <View
        style={[
          styles.inputContainer,
          variant !== "standard" && theme.shapes.medium,
          variant === "filled" && { borderBottomStartRadius: 0, borderBottomEndRadius: 0 },
          inputContainerStyle,
        ]}
      >
        {leadingNode && <View style={[styles.leading, leadingContainerStyle]}>{leadingNode}</View>}

        <RNTextInput
          style={[
            styles.input,
            theme.typography.subtitle1,
            { paddingTop: variant === "filled" && label ? 18 : 0 },
            inputStyle,
          ]}
          placeholder={label ? (focused ? placeholder : undefined) : placeholder}
          selectionColor={palette.color}
          placeholderTextColor={surfaceScale(0.4).hex()}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...({ onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, ...rest } as any)}
        />

        {trailingNode && <View style={[styles.trailing, trailingContainerStyle]}>{trailingNode}</View>}

        {(variant === "filled" || variant === "standard") && (
          <>
            <View style={[styles.underline]} pointerEvents="none" />
            <Animated.View
              style={[styles.underlineFocused, { transform: [{ scaleX: focusAnimation }] }]}
              pointerEvents="none"
            />
          </>
        )}

        {variant === "outlined" && (
          <View style={[StyleSheet.absoluteFill, theme.shapes.medium, styles.outline]} pointerEvents="none" />
        )}

        {label && (
          <View style={[styles.labelContainer]} pointerEvents="none">
            {variant === "outlined" && (
              <Animated.View style={[styles.outlineLabelGap, { transform: [{ scaleX: activeAnimation }] }]} />
            )}
            <Animated.Text
              style={[
                theme.typography.subtitle1,
                {
                  color: focusAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [surfaceScale(0.87).hex(), palette.color],
                  }),
                  fontSize: activeAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [theme.typography.subtitle1.fontSize ?? 16, 12],
                  }),
                  transform: [
                    {
                      translateY: activeAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, variant === "filled" ? -12 : variant === "outlined" ? -28 : -24],
                      }),
                    },
                  ],
                },
              ]}
            >
              {label}
            </Animated.Text>
          </View>
        )}
      </View>
      <View style={{ marginTop: 4, marginHorizontal: 16 }}>
        {helperText && (
          <Text variant="body2" style={[styles.helperText]}>
            {helperText}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TextInput;
