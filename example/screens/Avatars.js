import React from "react";
import { ScrollView, View } from "react-native";
import { Avatar } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const Avatars = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar label="Remy Sharp" size={38} />
        <Avatar label="Travis Howard" style={{ marginStart: 16 }} />
        <Avatar label="Cindy Baker" size={72} style={{ marginStart: 16 }} />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
        <Avatar label="Remy Sharp" size={38} autoColor />
        <Avatar label="Travis Howard" autoColor style={{ marginStart: 16 }} />
        <Avatar label="Cindy Baker" size={72} autoColor style={{ marginStart: 16 }} />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
        <Avatar label="Remy Sharp" image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={38} />
        <Avatar
          label="Travis Howard"
          image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }}
          style={{ marginStart: 16 }}
        />
        <Avatar
          label="Cindy Baker"
          image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }}
          size={72}
          style={{ marginStart: 16 }}
        />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
        <Avatar icon={props => <Icon name="file" {...props} />} size={38} />
        <Avatar icon={props => <Icon name="folder" {...props} />} style={{ marginStart: 16 }} />
        <Avatar icon={props => <Icon name="music" {...props} />} size={72} style={{ marginStart: 16 }} />
      </View>
    </ScrollView>
  );
};

export default Avatars;
