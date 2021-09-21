import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Appbar, FAB, IconButton } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Main = () => {
  const insets = useSafeAreaInsets();
  const [isProminent, setIsProminent] = useState(true);
  return (
    <View style={{ flex: 1 }}>
      <Appbar
        title="Material UI"
        variant={isProminent ? "prominent" : "regular"}
        centerTitle={false}
        image={<Image source={{ uri: 'https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png' }}
                      style={StyleSheet.absoluteFillObject} />}
        leading={({ color }) => (
          <IconButton
            color={color}
            icon={<MaterialCommunityIcons name={"menu"} size={24} color={color} />}
            onPress={() => setIsProminent((prev) => !prev)}
          />
        )}
        fab={
          <FAB
            icon={(props) => <MaterialCommunityIcons name="plus" {...props} />}
            position="appbar-trailing"
            visible={isProminent}
          />
        }
        style={{ paddingTop: insets.top }}
      />
    </View>
  );
};

export default Main;
