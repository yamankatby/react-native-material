import React from "react";
import { ScrollView, View } from "react-native";
import { Surface, Text, useTheme } from "@react-native-material/core";

const Surfaces = () => {
  const { palette } = useTheme();
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1, paddingEnd: 16 }}>
      {[
        [0, 1],
        [2, 3],
        [4, 6],
        [8, 12],
        [16, 24]
      ].map((data, index) => (
        <View key={index} style={{ flexDirection: "row", marginTop: 16 }}>
          {data.map(elevation => (
            <Surface
              key={elevation}
              category="medium"
              elevation={elevation}
              style={{ flex: 1, marginStart: 16, justifyContent: "center", alignItems: "center", height: 80 }}
              onPress={() => undefined}
            >
              <Text style={{ color: palette.onSurface }}>{elevation}</Text>
            </Surface>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default Surfaces;
