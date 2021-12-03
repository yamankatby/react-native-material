import React from "react";
import { FlatList } from "react-native";
import { ListItem, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const data = [
  { title: "App bars", subtitle: "The app bar provides content and actions related to the current screen." },
  {
    title: "Avatars",
    subtitle: "Avatars are found throughout material design with uses in everything from tables to dialog menus."
  },
  {
    title: "Backdrop",
    subtitle: "A backdrop appears behind all other surfaces in an app, displaying contextual and actionable content."
  },
  { title: "Badges", subtitle: "Badge generates a small badge to the top-right of its child(ren)." },
  { title: "Banners", subtitle: "A banner displays a prominent message and related optional actions." },
  { title: "Buttons", subtitle: "Buttons allow users to take actions, and make choices, with a single tap." },
  {
    title: "Chips",
    subtitle: "A chip is a small block of information, typically used to represent a category."
  },
  { title: "Dividers", subtitle: "A divider is a thin line that groups content in lists and layouts." },
  { title: "FAB", subtitle: "A floating action button (FAB) represents the primary action of a screen." },
  { title: "Icon buttons", subtitle: "Icon buttons are commonly found in app bars and toolbars." },
  { title: "Lists", subtitle: "Lists are continuous, vertical indexes of text or images" },
  { title: "Pressable", subtitle: "A wrapper for making views respond properly to touches." },
  { title: "Snackbars", subtitle: "Snackbars provide brief messages about app processes at the bottom of the screen." },
  {
    title: "Surfaces",
    subtitle: "Surface is a basic container that can give depth to an element with elevation shadow."
  },
  { title: "Texts", subtitle: "Use text to present your design and content as clearly and efficiently as possible." },
  { title: "Text inputs", subtitle: "Text inputs let users enter and edit text." }
];

const Main = () => {
  const { palette } = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <FlatList
      style={{ flex: 1, backgroundColor: palette.background }}
      contentContainerStyle={{ paddingBottom: insets.bottom }}
      data={data}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          secondaryText={item.subtitle}
          trailing={props => <Icon name="chevron-right" {...props} />}
          onPress={() => navigation.navigate(item.title)}
        />
      )}
      keyExtractor={item => item.title}
    />
  );
};

export default Main;
