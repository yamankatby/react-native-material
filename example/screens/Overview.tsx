import React from "react";
import { View } from "react-native";
import { Button, Snackbar } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Overview: React.FC = () => {
  const ins = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <Snackbar
        style={{ bottom: ins.bottom + 16, start: 16, end: 16, position: 'absolute' }}
        message="Marked as favorite"
        // message="Lorem ipsum dolor sit."
        action={<Button title={"Online"} variant="text" compact />}
      />
    </View>
  )
};

export default Overview;
