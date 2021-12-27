import React from "react";
import { ScrollView, View } from "react-native";
import { Surface, Text } from "@react-native-material/core";

const SurfaceScreen = () => (
  <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1, paddingEnd: 16 }}>
    {[[0, 1] as const, [2, 3] as const, [4, 6] as const, [8, 12] as const, [16, 24] as const].map((data, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 16 }}>
        {data.map(elevation => (
          <Surface
            key={elevation}
            category="medium"
            elevation={elevation}
            style={{ flex: 1, marginStart: 16, justifyContent: "center", alignItems: "center", height: 80 }}
          >
            <Text>{elevation}</Text>
          </Surface>
        ))}
      </View>
    ))}
  </ScrollView>
);

export default SurfaceScreen;
