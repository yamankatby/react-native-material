import React from "react";
import { View } from "react-native";
import { Appbar, IconButton, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import chroma from "chroma-js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Main = () => {
  const insets = useSafeAreaInsets();
  const { colorScheme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colorScheme.background }}>
      <Appbar
        title="Material UI"
        centerTitle={false}
        leading={
          <IconButton
            icon={<MaterialCommunityIcons name={"menu"} size={24} color={colorScheme.onPrimary} />}
            onPress={() => undefined}
          />
        }
        trailing={
          [
            <IconButton
              key={0}
              icon={<MaterialCommunityIcons name={"heart"} size={24} color={colorScheme.onPrimary} />}
              onPress={() => undefined}
            />,
            <IconButton
              key={1}
              icon={<MaterialCommunityIcons name={"magnify"} size={24} color={colorScheme.onPrimary} />}
              onPress={() => undefined}
            />,
            <IconButton
              key={2}
              icon={<MaterialCommunityIcons name={"dots-vertical"} size={24} color={colorScheme.onPrimary} />}
              onPress={() => undefined}
            />,
          ]
        }
        style={{ paddingTop: insets.top }}
      />
      <StatusBar style={chroma.contrast(colorScheme.primary, "white") > 4.5 ? "light" : "dark"} translucent />
    </View>
  );
};

export default Main;
