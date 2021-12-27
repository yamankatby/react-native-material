import React, { useState } from "react";
import { Button, Icon, ListItem, Snackbar, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

const SnackbarScreen = () => {
  const { colorScheme } = useTheme();
  const insets = useSafeAreaInsets();
  const [longText, setLongText] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ListItem
        title="Long text"
        trailing={longText ? props => <Icon name="check" {...props} /> : null}
        onPress={() => setLongText(prevState => !prevState)}
      />
      <Snackbar
        message={
          longText
            ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cum debitis, dolor eius esse illum ipsam iste possimus ratione soluta ut veniam?"
            : "Lorem ipsum dolor sit."
        }
        action={
          <Button
            variant="text"
            title="Fix it"
            color={colorScheme === "dark" ? "#6200EE" : "#BB86FC"}
            compact
            onPress={() => undefined}
          />
        }
        style={{ position: "absolute", start: 16, end: 16, bottom: insets.bottom + 16 }}
      />
    </View>
  );
};

export default SnackbarScreen;
