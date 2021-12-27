import React from "react";
import { SafeAreaView } from "react-native";
import { FAB, Icon } from "@react-native-material/core";

const FABScreen = () => (
  <SafeAreaView style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", margin: 8 }}>
    <FAB icon={props => <Icon name="plus" selectable={false} {...props} />} style={{ margin: 8 }} />
    <FAB icon={props => <Icon name="plus" selectable={false} {...props} />} size="mini" style={{ margin: 8 }} />
    <FAB
      variant="extended"
      icon={props => <Icon name="plus" selectable={false} {...props} />}
      label="Create"
      style={{ margin: 8 }}
    />
    <FAB variant="extended" label="Create" style={{ margin: 8 }} />
    <FAB
      variant="extended"
      icon={props => <Icon name="plus" selectable={false} {...props} />}
      label="Create"
      size="mini"
      style={{ margin: 8 }}
    />
    <FAB icon={props => <Icon name="plus" selectable={false} {...props} />} loading style={{ margin: 8 }} />
    <FAB
      variant="extended"
      icon={props => <Icon name="plus" selectable={false} {...props} />}
      label="Create"
      loading
      style={{ margin: 8 }}
    />
  </SafeAreaView>
);

export default FABScreen;
