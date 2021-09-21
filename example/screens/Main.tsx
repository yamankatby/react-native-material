import React, { useState } from "react";
import { Button, View } from "react-native";
import { FAB } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Main = () => {
    const insets = useSafeAreaInsets();
    const [visible, setVisible] = useState(true)
    return (
      <View style={{ flex: 1, paddingTop: insets.top + 16, paddingHorizontal: 16 }}>
          <FAB
            style={{ alignSelf: "flex-start" }}
            icon={props => <MaterialCommunityIcons name="plus" {...props} />}
            color="onBackground"
            visible={visible}
            disabled
            onPress={() => undefined}
          />
          <FAB
            style={{ alignSelf: "flex-start", marginTop: 16 }}
            icon={props => <MaterialCommunityIcons name="plus" {...props} />}
            color="onBackground"
            size="mini"
            visible={visible}
            onPress={() => undefined}
          />
          <FAB
            style={{ alignSelf: "flex-start", marginTop: 16 }}
            icon={props => <MaterialCommunityIcons name="plus" {...props} />}
            color="onBackground"
            label="Button"
            visible={visible}
            variant="extended"
            onPress={() => undefined}
          />
          <FAB
            style={{ alignSelf: "flex-start", marginTop: 16 }}
            icon={props => <MaterialCommunityIcons name="plus" {...props} />}
            color="onBackground"
            label="Button"
            visible={visible}
            variant="extended"
            size="mini"
            onPress={() => undefined}
          />
          <FAB
            style={{ alignSelf: "flex-start", marginTop: 16 }}
            color="onBackground"
            label="Button"
            visible={visible}
            variant="extended"
            onPress={() => undefined}
          />
          <FAB
            style={{ alignSelf: "flex-start", marginTop: 16 }}
            color="onBackground"
            label="Button"
            visible={visible}
            variant="extended"
            size="mini"
            onPress={() => undefined}
          />

          <FAB
            icon={props => <MaterialCommunityIcons name="lifebuoy" {...props} />}
            label="need Help"
            color="primaryVariant"
            visible={visible}
            style={{ position: "absolute", end: 16, bottom: insets.bottom + 16 }}
            onPress={() => undefined}
          />
          <FAB
            icon={props => <MaterialCommunityIcons name="plus" {...props} />}
            size="mini"
            color="primary"
            visible={visible}
            style={{ position: "absolute", end: 16 + 8, bottom: insets.bottom + 88 }}
            onPress={() => undefined}
          />
          <FAB
            icon={props => <MaterialCommunityIcons name="eye" {...props} />}
            size="mini"
            color="primary"
            visible={visible}
            style={{ position: "absolute", end: 24, bottom: insets.bottom + 144 }}
            onPress={() => undefined}
          />

          <Button title={'toggle'} onPress={() => setVisible(e => !e)} />
      </View>
    );
};

export default Main;
