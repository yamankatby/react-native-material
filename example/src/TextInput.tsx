import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon, IconButton, TextInput } from "@react-native-material/core";

const TextInputScreen = () => {
  const insets = useSafeAreaInsets();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: insets.bottom + 16 }}
    >
      {(["filled", "outlined", "standard"] as const).map(variant => (
        <React.Fragment key={variant}>
          <TextInput variant={variant} style={{ marginTop: 16 }} />
          <TextInput variant={variant} label="Label" style={{ marginTop: 16 }} />
          <TextInput
            variant={variant}
            label="Password"
            trailing={props => (
              <IconButton
                icon={<Icon name={secureTextEntry ? "eye" : "eye-off"} {...props} />}
                onPress={() => setSecureTextEntry(prevState => !prevState)}
                color={props.color}
              />
            )}
            style={{ marginTop: 16 }}
            secureTextEntry={secureTextEntry}
          />
          <TextInput
            variant={variant}
            label="Assistive text"
            helperText="Some important text"
            style={{ marginTop: 16 }}
          />
          <TextInput variant={variant} label="Number" style={{ marginTop: 16 }} />
          <TextInput
            variant={variant}
            label="Error"
            color="error"
            leading={props => <Icon name="alert-decagram" {...props} />}
            helperText="There is an error!"
            style={{ marginTop: 16 }}
          />
          <TextInput variant={variant} label="Multiline" multiline style={{ marginTop: 16 }} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default TextInputScreen;
