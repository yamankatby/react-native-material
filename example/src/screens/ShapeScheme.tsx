import * as Analytics from "expo-firebase-analytics";
import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import { Surface, useTheme } from "../../core";
import { useAppSelector } from "../config/store";

interface ShapeProps {
  unit: number;
  width: number;
  height: number;
  top: number;
  start: number;
  title?: string;
  style?: ViewStyle;
}

const Shape: React.FC<ShapeProps> = ({
  unit,
  width,
  height,
  top,
  start,
  title,
  style,
}) => {
  const theme = useTheme();
  const currentTheme = useAppSelector((state) => state.theme);
  return (
    <Surface
      style={[
        {
          width: unit * width + 1,
          height: unit * height + 1,
          position: "absolute",
          top: top * unit - 0.5,
          start: start * unit - 0.5,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      {title && (
        <Text
          style={[
            theme.typographyScheme.h5,
            {
              color:
                currentTheme === "fortnightly"
                  ? theme.colorScheme.onBackground
                  : theme.colorScheme.primary,
            },
          ]}
        >
          {title}
        </Text>
      )}
    </Surface>
  );
};

const ShapeScheme: React.FC = () => {
  useEffect(() => {
    Analytics.setCurrentScreen("ShapeScheme", "ShapeScheme");
  }, []);

  const { width, height } = useWindowDimensions();
  const unit = width / 22;

  const theme = useTheme();

  const palette = {
    basil: {
      background: "#DEF3E5",
      borders: "#BCD7C9",
      surface: "#FFFBE6",
    },
    crane: {
      background: "#F0CCE2",
      borders: "#D1A4C1",
      surface: "#FFFFFF",
    },
    fortnightly: {
      background: "#EDEDED",
      borders: "#FFFFFF",
      surface: "#FFFFFF",
    },
    owl: {
      background: "#FFF583",
      borders: "#FFE211",
      surface: "#FFFFFF",
    },
    reply: {
      background: "#B4C1CC",
      borders: "#8898A3",
      surface: "#FFFFFF",
    },
    shrine: {
      background: "#FFF0E8",
      borders: "#FFD8CB",
      surface: "#FFFFFF",
    },
    default: {
      background: theme.mode === "light" ? "#E5E5E5" : "#292929",
      borders: theme.mode === "light" ? "#CCCCCC" : "#121212",
      surface: theme.mode === "light" ? "white" : "#121212",
    },
  };

  const currentTheme = useAppSelector((state) => state.theme);

  const columns: JSX.Element[] = [];

  for (let index = 1; index < 22; index++) {
    columns.push(
      <View
        key={index}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          start: unit * index - 1,
          width: 2,
          backgroundColor: palette[currentTheme].borders,
        }}
      />
    );
  }

  const rows: JSX.Element[] = [];

  for (let index = 1; index < 48; index++) {
    rows.push(
      <View
        key={index}
        style={{
          position: "absolute",
          top: unit * index - 1,
          start: 0,
          end: 0,
          height: 2,
          backgroundColor: palette[currentTheme].borders,
        }}
      />
    );
  }

  return (
    <ScrollView style={{ backgroundColor: palette[currentTheme].background }}>
      <View
        style={{
          flex: 1,
          height: height > unit * 48 ? height : unit * 48,
          backgroundColor: palette[currentTheme].background,
        }}
      >
        {columns}
        {rows}

        <Shape
          unit={unit}
          width={5}
          height={5}
          top={2}
          start={2}
          title="S"
          style={{
            borderTopStartRadius: unit * 2,
            backgroundColor: palette[currentTheme].surface,
          }}
        />
        <Shape
          unit={unit}
          width={5}
          height={7}
          top={9}
          start={2}
          style={{
            borderRadius: unit * 2.5,
            backgroundColor: palette[currentTheme].surface,
          }}
        />
        <Shape
          unit={unit}
          width={5}
          height={5}
          top={18}
          start={2}
          style={{
            borderRadius: unit * 2.5,
            backgroundColor: palette[currentTheme].surface,
          }}
        />
        <Shape
          unit={unit}
          width={11}
          height={7}
          top={2}
          start={9}
          style={{ backgroundColor: palette[currentTheme].surface }}
        />
        <Shape
          unit={unit}
          width={11}
          height={7}
          top={11}
          start={9}
          title="M"
          style={{ backgroundColor: palette[currentTheme].surface }}
        />
        <Shape
          unit={unit}
          width={11}
          height={3}
          top={20}
          start={9}
          style={{ backgroundColor: palette[currentTheme].surface }}
        />
        <Shape
          unit={unit}
          width={18}
          height={13}
          top={25}
          start={2}
          title="L"
          style={{
            borderTopStartRadius: unit,
            borderTopEndRadius: unit,
            backgroundColor: palette[currentTheme].surface,
          }}
        />
        <Shape
          unit={unit}
          width={18}
          height={6}
          top={40}
          start={2}
          style={{
            borderTopStartRadius: unit,
            borderTopEndRadius: unit,
            backgroundColor: palette[currentTheme].surface,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ShapeScheme;
