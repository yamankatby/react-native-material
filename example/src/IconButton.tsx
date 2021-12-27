import React, { useState } from "react";
import { View } from "react-native";
import { Icon, IconButton } from "@react-native-material/core";

const IconButtonScreen = () => {
  const [counter, setCounter] = useState(2);
  const [is, setIs] = useState(true);
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <IconButton
        icon={props => <Icon name={"network-strength-" + ((counter % 4) + 1)} {...props} />}
        onPress={() => setCounter(prevState => prevState + 1)}
      />
      <IconButton
        icon={props => <Icon name={is ? "eye" : "eye-off"} {...props} />}
        color={"error"}
        onPress={() => setIs(!is)}
      />
    </View>
  );
};

export default IconButtonScreen;
