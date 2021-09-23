import React from "react";
import { View } from "react-native";
import Avatar from "@react-native-material/core/lib/Avatar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Main = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, padding: 16, paddingTop: insets.top }}>
      <Avatar
        label={"Yaman Katby"}
        autoColor
        icon={(props) => <MaterialCommunityIcons name={"account"} {...props} />}
        style={{ marginTop: 12 }}
        size={124}
      />
      <Avatar
        label="RN"
        autoColor
        initials={false}
        icon={(props) => <MaterialCommunityIcons name={"account"} {...props} />}
        style={{ marginTop: 12 }}
      />
      <Avatar label="N google how you" style={{ marginTop: 12 }} />
      <Avatar label="RN" style={{ marginTop: 12 }} />
    </View>
  );
};

export default Main;
