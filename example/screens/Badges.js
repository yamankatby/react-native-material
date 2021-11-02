import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Badge, IconButton, useTheme } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const Badges = () => {
  const { palette } = useTheme();
  const [count, setCount] = useState(4);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          icon={<Icon name="plus" color={palette.onBackground} size={24} />}
          onPress={() => setCount(prevState => prevState + 1)}
          color={palette.onBackground}
        />
        <Badge label={count} max={9} />
        <IconButton
          icon={<Icon name="minus" color={palette.onBackground} size={24} />}
          onPress={() => setCount(prevState => prevState - 1)}
          color={palette.onBackground}
        />
      </View>
    </ScrollView>
  );
};

export default Badges;
