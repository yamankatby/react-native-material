import React, { useEffect, useMemo, useRef } from "react";
import { Animated, StyleProp, TextStyle, ViewProps } from "react-native";
import { PaletteColor, usePalette, useStyleSheet } from "./base";
import Typography from "./Typography";

export interface BadgeProps {
  label?: number | string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  showZero?: boolean;

  max?: number;

  visible?: boolean;

  color?: PaletteColor;

  tintColor?: PaletteColor;

  style?: Animated.AnimatedProps<ViewProps>["style"];

  labelStyle?: StyleProp<TextStyle>;
}

const Badge: React.FC<BadgeProps> = ({
  label,
  showZero = false,
  max = 99,
  visible = true,
  color = "secondary",
  tintColor,
  style,
  labelStyle,
  children,
}) => {
  const palette = usePalette(color, tintColor);

  const styles = useStyleSheet(() => ({
    container: {
      minWidth: 20,
      height: 20,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 6,
      backgroundColor: palette.color,
      borderRadius: 10,
    },
  }), [palette]);

  const isVisible = useMemo(() => (label === 0 ? visible && showZero : visible), [label, showZero, visible]);

  const animated = useRef(new Animated.Value(isVisible ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: isVisible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const getLabel = () => {
    switch (typeof label) {
      case "number":
      case "string":
        return (
          <Typography variant="body2" color={palette.tintColor} style={[labelStyle]}>
            {typeof label === "number" && label > max ? `${max}+` : label}
          </Typography>
        );
      case "function":
        return label({ color: palette.tintColor });
      default:
        return label;
    }
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: animated }] }, style]}>
      {getLabel()}
      {children}
    </Animated.View>
  );
};

export default Badge;
