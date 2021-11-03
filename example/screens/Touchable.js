import React from "react";
import { View } from "react-native";
import { Surface } from "@react-native-material/core";

const Touchable = () => {
  return (
    <View style={{ padding: 16 }}>
      <Surface
        category="medium"
        style={{ height: 80, backgroundColor: "lightblue" }}
        underlayColor="black"
        onPress={() => undefined}
      />
      <Surface
        category="medium"
        style={{ height: 80, backgroundColor: "lightblue", marginTop: 16 }}
        underlayColor="blue"
        onPress={() => undefined}
      />
    </View>
  );
};

export default Touchable;
