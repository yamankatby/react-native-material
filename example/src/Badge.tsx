import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Badge, Icon, IconButton } from "@react-native-material/core";

const BadgeScreen = () => {
  const [count, setCount] = useState(4);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          icon={props => <Icon name="plus" {...props} />}
          onPress={() => setCount(prevState => prevState + 1)}
        />
        <Badge label={count} max={9} />
        <IconButton
          icon={props => <Icon name="minus" {...props} />}
          onPress={() => setCount(prevState => prevState - 1)}
        />
      </View>
    </ScrollView>
  );
};

export default BadgeScreen;
