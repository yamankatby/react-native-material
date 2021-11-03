import React from "react";
import { View } from "react-native";
import { FAB as FABComponent } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const FAB = () => {
  return (
    <View style={{ flex: 1, padding: 16, alignItems: "flex-start" }}>
      <FABComponent icon={props => <Icon name="plus" {...props} />} onPress={() => undefined} />
      <FABComponent
        icon={props => <Icon name="plus" {...props} />}
        size="mini"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FABComponent
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Create"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FABComponent
        variant="extended"
        label="Create"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FABComponent
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Create"
        size="mini"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FABComponent icon={props => <Icon name="plus" {...props} />} loading style={{ marginTop: 16 }} onPress={() => undefined} />
      <FABComponent
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Create"
        loading
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
    </View>
  );
};

export default FAB;
