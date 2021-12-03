import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
  AppBar,
  Avatar,
  Backdrop,
  BackdropSubheader,
  Button,
  Chip,
  FAB,
  HStack,
  IconButton,
  Pressable
} from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
  const insets = useSafeAreaInsets();
  const [revealed, setRevealed] = useState(false);

  return (
    <Backdrop
      revealed={revealed}
      header={
        <AppBar
          title={revealed ? "Menu" : "Backdrop"}
          tintColor="onPrimary"
          leading={props => (
            <IconButton
              icon={props => <Icon name={revealed ? "close" : "menu"} {...props} />}
              onPress={() => setRevealed(!revealed)}
              {...props}
            />
          )}
          trailing={props => (
            <HStack>
              <IconButton icon={props => <Icon name="heart" {...props} />} {...props} />
              <IconButton icon={props => <Icon name="magnify" {...props} />} {...props} />
              <IconButton
                icon={props => <Icon name={Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical"} {...props} />}
                {...props}
              />
            </HStack>
          )}
          transparent
          style={{ paddingTop: insets.top }}
        />
      }
      backLayer={<View style={{ height: 180 }} />}
    >
      <BackdropSubheader title="Subheader" />
    </Backdrop>
  );
};

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

export const ChipScreen = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <HStack style={{ margin: 8 }} wrap="wrap">
      <Chip label="Label" style={{ margin: 8 }} />
      <Chip label="Chip" style={{ margin: 8 }} />
      <Chip label="Long Text" style={{ margin: 8 }} />
      <Chip
        label="Long Text"
        color="primary"
        leading={props => <Avatar label={"y k"} {...props} />}
        style={{ margin: 8 }}
      />
      <Chip label="Long Text" color="lightgreen" style={{ margin: 8 }} />
      <Chip variant="outlined" label="Label" style={{ margin: 8 }} />
      <Chip variant="outlined" label="Chip" style={{ margin: 8 }} />
      <Chip variant="outlined" label="Long Text" style={{ margin: 8 }} />
      <Chip variant="outlined" label="Long Text" color="primary" style={{ margin: 8 }} />
      <Chip variant="outlined" label="Long Text" color="darkgreen" style={{ margin: 8 }} />
      <Chip label="Chip" leading={props => <Avatar label={"y k"} {...props} />} style={{ margin: 8 }} />
      <Chip label="Label" leading={props => <Icon name="face" {...props} />} style={{ margin: 8 }} />
      <Chip label="Chip" leading={props => <Icon name="face" {...props} />} style={{ margin: 8 }} />
      <Chip label="Long Text" leading={props => <Icon name="face" {...props} />} style={{ margin: 8 }} />
      <Chip
        label="Long Text"
        color="primary"
        loading
        leading={props => <Icon name="face" {...props} />}
        trailing={props => <Icon name="close-circle" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        label="Long Text"
        color="lightgreen"
        leading={props => <Icon name="face" {...props} />}
        trailing={props => <Icon name="close-circle" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        variant="outlined"
        label="Label"
        leading={props => <Icon name="face" {...props} />}
        trailing={props => <Icon name="close-circle" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        variant="outlined"
        label="Chip"
        leading={props => <Icon name="face" {...props} />}
        trailing={props => <Icon name="close-circle" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        variant="outlined"
        label="Long Text"
        leading={props => <Icon name="face" {...props} />}
        trailing={props => <Icon name="close-circle" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        variant="outlined"
        label="Long Text"
        color="primary"
        leading={props => <Icon name="face" {...props} />}
        disabled
        style={{ margin: 8 }}
      />
      <Chip
        variant="outlined"
        label="Long Text"
        color="darkgreen"
        leading={props => <Icon name="face" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        label="Label"
        variant={toggle ? "filled" : "outlined"}
        color={"primary"}
        onPress={() => setToggle(!toggle)}
        style={{ margin: 8 }}
      />
    </HStack>
  );
};

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
