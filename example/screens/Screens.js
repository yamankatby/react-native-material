import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, FAB, Pressable } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export const AppbarScreen = () => {
  return (
    <Text>Appbar</Text>
  );
}

export const AvatarScreen = () => {
  return (
    <Text>Avatar</Text>
  );
}

export const BackdropScreen = () => {
  return (
    <Text>Backdrop</Text>
  );
}

export const BadgeScreen = () => {
  return (
    <Text>Badge</Text>
  );
}

export const BannerScreen = () => {
  return (
    <Text>Banner</Text>
  );
}

export const ButtonScreen = () => (
  <SafeAreaView style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", margin: 8 }}>
    <Button title="Text" variant="text" style={{ margin: 8 }} />
    <Button title="Contained" style={{ margin: 8 }} />
    <Button title="Outlined" variant="outlined" style={{ margin: 8 }} />
    <Button title="Text" variant="text" disabled style={{ margin: 8 }} />
    <Button title="Contained" disabled style={{ margin: 8 }} />
    <Button title="Outlined" variant="outlined" disabled style={{ margin: 8 }} />
    <Button title="Disable elevation" disableElevation style={{ margin: 8 }} />
    <Button title="Secondary" color="secondary" style={{ margin: 8 }} />
    <Button title="Success" color="success" style={{ margin: 8 }} />
    <Button title="Error" variant="outlined" color="error" style={{ margin: 8 }} />
    <Button
      title="Delete"
      variant="outlined"
      leading={props => <Icon name="delete" selectable={false} {...props} />}
      style={{ margin: 8 }}
    />
    <Button title="Send" trailing={props => <Icon name="send" selectable={false} {...props} />} style={{ margin: 8 }} />
    <Button title="Button" loading style={{ margin: 8 }} />
    <Button title="Button" loading loadingIndicatorPosition="trailing" style={{ margin: 8 }} />
    <Button title="Button" loading loadingIndicatorPosition="overlay" style={{ margin: 8 }} />
    <Button title="Button" variant="outlined" loading style={{ margin: 8 }} />
    <Button title="Button" variant="outlined" loading loadingIndicatorPosition="trailing" style={{ margin: 8 }} />
    <Button title="Button" variant="outlined" loading loadingIndicatorPosition="overlay" style={{ margin: 8 }} />
    <Button title="Button" variant="text" loading style={{ margin: 8 }} />
    <Button title="Button" variant="text" loading loadingIndicatorPosition="trailing" style={{ margin: 8 }} />
    <Button title="Button" variant="text" loading loadingIndicatorPosition="overlay" style={{ margin: 8 }} />
  </SafeAreaView>
);

export const DividerScreen = () => {
  return (
    <Text>Divider</Text>
  );
}

export const FABScreen = () => (
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

export const IconButtonScreen = () => {
  return (
    <Text>IconButton</Text>
  );
}

export const ListItemScreen = () => {
  return (
    <Text>ListItem</Text>
  );
}

export const PressableScreen = () => (
  <SafeAreaView>
    <View style={{ flexDirection: "row", margin: 16 }}>
      <View style={{ flex: 1, height: 80, borderRadius: 4, backgroundColor: "lightgray", overflow: "hidden" }}>
        <Pressable style={StyleSheet.absoluteFill} />
      </View>
      <View
        style={{
          flex: 1,
          height: 80,
          marginStart: 16,
          borderRadius: 4,
          backgroundColor: "lightgray",
          overflow: "hidden"
        }}
      >
        <Pressable style={StyleSheet.absoluteFill} />
      </View>
    </View>
  </SafeAreaView>
);

export const SnackbarScreen = () => {
  return (
    <Text>Snackbar</Text>
  );
}

export const SurfaceScreen = () => {
  return (
    <Text>Surface</Text>
  );
}

export const SwitchScreen = () => {
  return (
    <Text>Switch</Text>
  );
}

export const TextInputScreen = () => {
  return (
    <Text>TextInput</Text>
  );
}

export const TextScreen = () => {
  return (
    <Text>Text</Text>
  );
}
