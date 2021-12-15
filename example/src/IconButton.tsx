import React, { useState } from "react";
import { Icon, IconButton, useTheme } from "@react-native-material/core";
import { View } from "react-native";

const IconButtonScreen = () => {
  const { palette } = useTheme();
  const [counter, setCounter] = useState(2);
  const [is, setIs] = useState(true);
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <IconButton
        icon={<Icon name={"network-strength-" + ((counter % 4) + 1)} size={24} color={palette.onBackground} />}
        color={palette.onBackground}
        onPress={() => setCounter(prevState => prevState + 1)}
      />
      <IconButton
        icon={<Icon name={is ? "eye" : "eye-off"} size={24} color={palette.error} />}
        color={palette.error}
        onPress={() => setIs(!is)}
      />
    </View>
  );
};

export default IconButtonScreen;
