import React, { useState } from "react";
import { ScrollView } from "react-native";
import { IconButton, TextInput, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const TextInputs = () => {
  const insets = useSafeAreaInsets();
  const { palette } = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: insets.bottom + 16 }}
    >
      {["filled", "outlined", 'standard'].map(variant => (
        <React.Fragment key={variant}>
          <TextInput variant={variant} style={{ marginTop: 16 }} />
          <TextInput variant={variant} label="Label" style={{ marginTop: 16 }} />
          <TextInput
            variant={variant}
            label="Password"
            trailing={
              <IconButton
                icon={<Icon name={secureTextEntry ? "eye" : "eye-off"} color={palette.onSurface} size={24} />}
                onPress={() => setSecureTextEntry(prevState => !prevState)}
              />
            }
            style={{ marginTop: 16 }}
            secureTextEntry={secureTextEntry}
          />
          <TextInput
            variant={variant}
            label="Assistive text"
            assistiveText="Some important text"
            style={{ marginTop: 16 }}
          />
          <TextInput variant={variant} label="Number" style={{ marginTop: 16 }} />
          <TextInput
            variant={variant}
            label="Success"
            color="success"
            assistiveText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum expedita placeat ut?"
            leading={<Icon name="check-circle" color={palette.success} size={24} />}
            style={{ marginTop: 16 }}
            placeholder="Placeholder"
          />
          <TextInput
            variant={variant}
            label="Info"
            color="info"
            assistiveText="Lorem ipsum."
            leading={<Icon name="information" color={palette.info} size={24} />}
            style={{ marginTop: 16 }}
          />
          <TextInput
            variant={variant}
            label="Warning"
            color="warning"
            assistiveText="Lorem ipsum dolor sit amet, consectetur."
            leading={<Icon name="alert-circle" color={palette.warning} size={24} />}
            style={{ marginTop: 16 }}
          />
          <TextInput
            variant={variant}
            label="Error"
            color="error"
            leading={<Icon name="alert-decagram" color={palette.error} size={24} />}
            assistiveText="There is an error!"
            style={{ marginTop: 16 }}
          />
          <TextInput variant={variant} label="Multiline" multiline style={{ marginTop: 16 }} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default TextInputs;
