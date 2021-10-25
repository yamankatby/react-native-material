import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, TextInput, View } from "react-native";
import { PaletteColor, usePalette, useTheme } from "./base";
import Text from "./Text";

export interface TextFieldProps {
  variant?: "flat" | "outlined";

  color?: PaletteColor;

  label?: string;

  helperText?: string;

  leading?: any;

  trailing?: any;
}

const TextField: React.FC<TextFieldProps> = ({ variant = "flat", color = "primary" }) => {
  const { typography, shapes, palette } = useTheme();

  const p = usePalette(color);

  const [focused, setFocused] = useState(false);

  const [value, setValue] = useState('')

  const activeAnimation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(activeAnimation, {
      toValue: focused || value.length !== 0 ? 1 : 0,
      easing: Easing.out(Easing.ease),
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focused, value]);

  return (
    <View>
      <Animated.View
        style={[
          shapes.medium,
          variant === "flat" && { borderBottomStartRadius: 0, borderBottomEndRadius: 0 },
          variant === 'outlined' && {
            borderWidth: focused ? 2 : 1,
            padding: focused ? 0 : 1,
            borderColor: focused ? p.color : '#5F5F5F',
          },
          {
            flexDirection: "row",
            backgroundColor: variant === "flat" ? "#EDEDED" : palette.surface,
          },
        ]}
      >
        <View style={{ width: 24, height: 24, marginTop: 16, backgroundColor: "gray" }} />
        <TextInput
          style={{
            flex: 1,
            minHeight: variant === 'flat' ? 42 : 54, ...typography.subtitle1,
            marginTop: variant === 'flat' ? 14 : undefined,
            paddingStart: 16,
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={e => setValue(e)}
        />
        <View style={{ width: 24, height: 24, marginTop: 16, backgroundColor: "gray" }} />

        <Animated.View pointerEvents="none" style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          justifyContent: 'center',
          start: 16 + 24,
        }}>
          <Animated.View style={{
            position: 'absolute',
            top: -2,
            start: -4,
            end: -4,
            height: 2,
            backgroundColor: palette.surface,
            transform: [{ scaleX: activeAnimation }],
          }} />
          <Animated.Text
            style={{
              ...typography.subtitle1,
              fontSize: activeAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [typography.subtitle1.fontSize!, typography.body2.fontSize!],
              }),
              transform: [{
                translateY: activeAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, variant === 'flat' ? -12 : -28],
                }),
              }],
            }}>Placeholder</Animated.Text>
        </Animated.View>

        {variant === "flat" && (
          <>
            <View
              style={{ position: "absolute", bottom: 0, start: 0, end: 0, height: 1, backgroundColor: "#5F5F5F" }} />
            <Animated.View
              style={{
                position: "absolute",
                bottom: 0,
                start: 0,
                end: 0,
                height: 2,
                backgroundColor: p.color,
                transform: [{ scaleX: activeAnimation }],
              }}
            />
          </>
        )}
      </Animated.View>
      <View style={{
        height: 16,
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 16,
      }}>
        <Text variant="body2">Hi, there is an error!</Text>
        <Text variant="body2">7/120</Text>
      </View>
    </View>
  );
};

export default TextField;
