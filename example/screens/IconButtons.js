import React, { useState } from "react";
import { View } from "react-native";
import { IconButton, useTheme } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const IconButtons = () => {
  const { palette } = useTheme();
  const [counter, setCounter] = useState(2);
  const [is, setIs] = useState(true)
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <IconButton
        icon={<Icon name={"network-strength-" + ((counter % 4) + 1) } size={24} color={palette.onBackground} />}
        color={palette.onBackground}
        onPress={() => setCounter(prevState => prevState + 1)}
      />
      <IconButton icon={<Icon name={is ? "eye" : 'eye-off'} size={24} color={palette.error} />} color={palette.error} onPress={() => setIs(!is)} />
    </View>
  );
};

export default IconButtons;
