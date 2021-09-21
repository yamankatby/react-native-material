import React from "react";
import { View } from "react-native";
import { Appbar, IconButton } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Main = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <Appbar
        color="transparent"
        tintColor="#666666"
        leading={({ color }) => [
          <IconButton
            key={0}
            color={color}
            icon={<MaterialCommunityIcons name={"menu"} size={24} color={color} />}
            onPress={() => undefined}
          />,
          <IconButton
            key={1}
            color={color}
            icon={<MaterialCommunityIcons name={"menu"} size={24} color={color} />}
            onPress={() => undefined}
          />,
        ]}
        style={{ paddingBottom: insets.bottom, position: "absolute", bottom: 0, start: 0, end: 0 }}
      />
    </View>
  );
};

export default Main;
