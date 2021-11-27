import React, { useState } from "react";
import { ScrollView } from "react-native";
import { IconButton, TextInput, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const TextInputs = () => {
  const insets = useSafeAreaInsets();
  const { palette, typography } = useTheme();
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
            trailing={props =>
              <IconButton
                icon={<Icon name={secureTextEntry ? "eye" : "eye-off"} {...props} />}
                onPress={() => setSecureTextEntry(prevState => !prevState)}
                color={props.color}
              />
            }
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
            label="Success"
            color="success"
            helperText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum expedita placeat ut?"
            leading={props => <Icon name="check-circle" {...props} />}
            trailing={props => <Icon name="check-circle" {...props} />}
            style={{ marginTop: 16 }}
            placeholder="Placeholder"
          />
          <TextInput
            variant={variant}
            label="Info"
            color="info"
            helperText="Lorem ipsum."
            leading={props => <Icon name="information" {...props} />}
            style={{ marginTop: 16 }}
          />
          <TextInput
            variant={variant}
            label="Warning"
            color="warning"
            helperText="Lorem ipsum dolor sit amet, consectetur."
            leading={props => <Icon name="alert-circle" {...props} />}
            style={{ marginTop: 16 }}
          />
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

export default TextInputs;
