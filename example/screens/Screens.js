import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Pressable } from "@react-native-material/core";

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

export const ButtonScreen = () => {
  return (
    <Text>Button</Text>
  );
}

export const DividerScreen = () => {
  return (
    <Text>Divider</Text>
  );
}

export const FABScreen = () => {
  return (
    <Text>FAB</Text>
  );
}

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
