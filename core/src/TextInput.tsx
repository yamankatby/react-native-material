// import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import {
//   Animated,
//   Easing,
//   NativeSyntheticEvent,
//   StyleSheet,
//   TextInput as NativeTextInput,
//   TextInputFocusEventData,
//   TextInputProps as NativeTextInputProps,
//   View,
// } from "react-native";
// import chroma from "chroma-js";
// import { PaletteColor, usePalette, useTheme } from "./base";
// import Text from "./Text";
//
// export interface TextInputProps extends NativeTextInputProps {
//   variant?: "flat" | "outlined";
//
//   color?: PaletteColor;
//
//   label?: string;
//
//   assistiveText?: string;
//
//   leading?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;
//
//   trailing?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;
// }
//
// const TextInput: React.FC<TextInputProps> = ({
//   variant = "flat",
//   color = "primary",
//   label,
//   assistiveText,
//   leading,
//   trailing,
//   onFocus,
//   onBlur,
//   style,
//   onChangeText,
//   ...rest
// }) => {
//   const { palette, shapes, typography } = useTheme();
//
//   const p = usePalette(color);
//
//   const surfaceScale = useMemo(
//     () => chroma.scale([palette.surface, palette.onSurface]),
//     [palette.surface, palette.onSurface],
//   )
//
//   const [focused, setFocused] = useState(false);
//
//   const [text, setText] = useState("");
//
//   const active = useMemo(() => focused || text.length > 0, [focused, text]);
//
//   const focusAnimation = useRef(new Animated.Value(0)).current;
//
//   useEffect(() => {
//     Animated.timing(focusAnimation, {
//       toValue: focused ? 1 : 0,
//       easing: Easing.out(Easing.ease),
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//   }, [focused]);
//
//   const activeAnimation = useRef(new Animated.Value(0)).current;
//
//   useEffect(() => {
//     Animated.timing(activeAnimation, {
//       toValue: active ? 1 : 0,
//       easing: Easing.out(Easing.ease),
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//   }, [active]);
//
//   const handleOnFocus = useCallback(
//     (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
//       onFocus && onFocus(e);
//       setFocused(true);
//     },
//     [onFocus],
//   );
//
//   const handleOnBlur = useCallback(
//     (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
//       onBlur && onBlur(e);
//       setFocused(false);
//     },
//     [onBlur],
//   );
//
//   const handleOnChangeText = useCallback(
//     (text: string) => {
//       onChangeText && onChangeText(text);
//       setText(text);
//     },
//     [onChangeText],
//   );
//
//   return (
//     <View style={style}>
//       <View style={[shapes.medium, { flexDirection: 'row' }, variant === 'flat' ? {
//         backgroundColor: surfaceScale(0.08).hex(),
//         borderBottomStartRadius: 0,
//         borderBottomEndRadius: 0,
//       } : { backgroundColor: palette.surface }]}>
//         {leading && <View style={{
//           width: 48,
//           height: 48,
//           marginTop: 4,
//           alignItems: "center",
//           justifyContent: "center",
//         }}>{leading}</View>}
//         <NativeTextInput
//           {...rest}
//           onFocus={handleOnFocus}
//           onBlur={handleOnBlur}
//           onChangeText={handleOnChangeText}
//           style={[
//             typography.subtitle1,
//             { flex: 1, minHeight: 56, paddingHorizontal: leading ? 8 : 16, color: palette.onSurface },
//             shapes.medium,
//             variant === "flat" && { paddingTop: label ? 14 : 0 },
//           ]}
//         />
//         {trailing && <View style={{
//           width: 48,
//           height: 48,
//           marginTop: 4,
//           alignItems: "center",
//           justifyContent: "center",
//         }}>{trailing}</View>}
//         {variant === "flat" && (
//           <>
//             <View
//               style={{
//                 height: 1,
//                 position: "absolute",
//                 start: 0,
//                 end: 0,
//                 bottom: 0,
//                 backgroundColor: surfaceScale(0.6).hex(),
//               }}
//             />
//             <Animated.View
//               style={{
//                 height: 2,
//                 position: "absolute",
//                 start: 0,
//                 end: 0,
//                 bottom: 0,
//                 backgroundColor: p.color,
//                 transform: [{ scaleX: focusAnimation }],
//               }}
//             />
//           </>
//         )}
//
//         {variant === "outlined" && (
//           <>
//             <Animated.View
//               style={[
//                 StyleSheet.absoluteFill,
//                 shapes.medium,
//                 {
//                   borderWidth: focused ? 2 : 1,
//                   borderColor: focusAnimation.interpolate({
//                     inputRange: [0, 1],
//                     outputRange: [palette.onSurface, p.color],
//                   }),
//                 },
//               ]}
//               pointerEvents="none"
//             />
//           </>
//         )}
//
//         <View
//           style={{ height: 56, position: "absolute", justifyContent: "center", top: 0, start: leading ? 56 : 16 }}
//           pointerEvents="none"
//         >
//           {variant === "outlined" && label && (
//             <Animated.View
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 start: -4,
//                 end: -4,
//                 height: focused ? 2 : 1,
//                 backgroundColor: palette.surface,
//                 transform: [{ scaleX: activeAnimation }],
//               }}
//             />
//           )}
//           <Animated.Text
//             style={[
//               typography.subtitle1,
//               {
//                 color: focusAnimation.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [palette.onSurface, p.color],
//                 }),
//                 fontSize: activeAnimation.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [typography.subtitle1.fontSize ?? 16, 12],
//                 }),
//                 transform: [
//                   {
//                     translateY: activeAnimation.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, variant === "flat" ? -12 : -28],
//                     }),
//                   },
//                 ],
//               },
//             ]}
//           >
//             {label}
//           </Animated.Text>
//         </View>
//       </View>
//       <View style={{
//         marginTop: 4,
//         marginHorizontal: 16,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start',
//       }}>
//         {assistiveText && <Text variant="body2" style={{
//           fontSize: 12,
//           color: focused ? p.color : surfaceScale(0.6).hex(),
//         }}>{assistiveText}</Text>}
//       </View>
//     </View>
//   );
// };
//
// export default TextInput;


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
  )

  const palette = usePalette(color);

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

  const styles = useStyleSheet(
    () => ({
      container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: variant === 'filled' ? surfaceScale(0.08).hex() : undefined,
      },
      input: {
        flex: 1,
        minHeight: 48,
      },
      underline: {
        position: "absolute",
        start: 0,
        end: 0,
        bottom: 0,
        height: 1,
        backgroundColor: hovered ? surfaceScale(0.6).hex() : surfaceScale(0.23).hex(),
      },
      underlineFocused: {
        height: 2,
        backgroundColor: palette.color,
      },
      outline: {
        borderWidth: focused ? 2 : 1,
        borderColor: focused ? palette.color : hovered ? surfaceScale(0.6).hex() : surfaceScale(0.23).hex(),
      },
    }),
    [surfaceScale, palette.color, variant, hovered, focused],
  );

  return (
    <View style={[styles.container, style]}>
      <RNTextInput
        style={[styles.input]}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...({ onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, ...props } as any)}
        {...props}
      />

      {(variant === "filled" || variant === "standard") && (
        <>
          <View style={[styles.underline]} />
          <Animated.View
            style={[styles.underline, styles.underlineFocused, { transform: [{ scaleX: focusAnimation }] }]}
            pointerEvents="none"
          />
        </>
      )}

      {variant === 'outlined' && <View style={[StyleSheet.absoluteFill, styles.outline]} pointerEvents="none" />}
    </View>
  );
};

export default TextInput;


