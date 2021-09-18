import React from "react";
import { View } from "react-native";
import { Appbar, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import chroma from "chroma-js";

const Main = () => {
  const insets = useSafeAreaInsets();
  const { colorScheme } = useTheme()

  const x = <View style={{ width: 24, height: 24, backgroundColor: 'white' }} />

  return (
    <View style={{ flex: 1, backgroundColor: colorScheme.background }}>
      <Appbar
        title="Main"
        leading={x}
        trailing={[x, x]}
        style={{ paddingTop: insets.top }}
      />
      <StatusBar style={chroma.contrast(colorScheme.primary, "white") > 4.5 ? "light" : "dark"} translucent />
    </View>
  );
};

export default Main;
