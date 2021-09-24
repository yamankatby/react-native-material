import React, { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar, Badge, Banner, Button } from "@react-native-material/core";

const Main = () => {
  const insets = useSafeAreaInsets();

  const [num, setNum] = useState(0);

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Banner
        text="Two line string with two actions. One to two lines is preferable on mobile and tablet. "
        illustration={props => (
          <Avatar
            color="primary"
            size={props.size}
            icon={props => <MaterialCommunityIcons name={"account"} {...props} />}
          />
        )}
        buttons={[
          <Button title={'Action'} variant="text" compact onPress={() => undefined} />,
          <Button title={'Action'} variant="text" compact onPress={() => undefined} />,
        ]}
      />

      <Avatar
        label={"Yaman Katby"}
        autoColor
        icon={props => <MaterialCommunityIcons name={"account"} {...props} />}
        style={{ marginTop: 12 }}
      />
      <Avatar icon={props => <MaterialCommunityIcons name={"account"} {...props} />} style={{ marginTop: 12 }} />
      <Avatar label="N google how you" style={{ marginTop: 12 }} autoColor />
      <Avatar label="yaman katby" style={{ marginTop: 12 }} autoColor />

      <Badge style={{ alignSelf: "flex-start", marginTop: 12 }} label={99} />
      <Badge style={{ alignSelf: "flex-start", marginTop: 12 }} color="primary" label={"cool"} />
      <Badge style={{ alignSelf: "flex-start", marginTop: 12 }} color="skyblue" label={121} />
      <Badge style={{ alignSelf: "flex-start", marginTop: 12 }} color="onPrimary" label={num} max={9} />
      <Button title={"+"} onPress={() => setNum(p => p + 1)} />
      <Button title={"-"} onPress={() => setNum(p => p - 1)} />
    </View>
  );
};

export default Main;
