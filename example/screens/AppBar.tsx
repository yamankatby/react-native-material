import React from "react";
import { Image, ScrollView } from "react-native";
import { Appbar, FAB, IconButton } from "@react-native-material/core";
import { useRoute } from "@react-navigation/native";
import { Section } from "./FAB";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const AppBarExample = () => {
  const params = useRoute().params as any;

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={params?.section && { flex: 1 }}
    >
      <Section name="overview" title="Overview">
        <Appbar
          title="Page title"
          leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )}
          trailing={(props) => [
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="heart" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="magnify" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="dots-vertical" size={24} color={props.color} />}
            />,
          ]}
          style={{ flex: 1 }}
        />
      </Section>

      <Section name="regular" title="Regular Appbar">
        <Appbar title="Page title" style={{ flex: 1 }} />
      </Section>
      <Section name="prominent" title="Prominent Appbar">
        <Appbar variant="prominent" title="Page title" style={{ flex: 1 }} />
      </Section>

      <Section name="regular-buttons" title="Regular Appbar Buttons">
        <Appbar
          title="Page title"
          leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )}
          trailing={(props) => [
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="heart" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="magnify" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="dots-vertical" size={24} color={props.color} />}
            />,
          ]}
          style={{ flex: 1 }}
        />

      </Section>

      <Section name="prominent-buttons" title="Prominent Appbar Buttons">
        <Appbar
          variant="prominent"
          title="Page title"
          leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )}
          trailing={(props) => [
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="heart" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="magnify" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="dots-vertical" size={24} color={props.color} />}
            />,
          ]}
          style={{ flex: 1 }}
        />
      </Section>

      <Section name="prominent-image" title="Prominent Appbar Image">
        <Appbar
          variant="prominent"
          title="Page title"
          leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )}
          trailing={(props) => [
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="heart" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="magnify" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="dots-vertical" size={24} color={props.color} />}
            />,
          ]}
          image={<Image
            source={{ uri: 'https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png' }}
            style={{ position: 'absolute', top: 0, start: 0, end: 0, bottom: 0 }} />}
          style={{ flex: 1 }}
        />
      </Section>

      <Section name="prominent-fab" title="Prominent Appbar FAB">
        <Appbar
          variant="prominent"
          title="Page title"
          leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )}
          trailing={(props) => [
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="heart" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="magnify" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="dots-vertical" size={24} color={props.color} />}
            />,
          ]}
          style={{ flex: 1 }}
        >
          <FAB size="mini" icon={(props) => <Icon name="plus" {...props} />} onPress={() => undefined}
               style={{ position: 'absolute', start: 16, bottom: -20 }} />
        </Appbar>
      </Section>

      <Section name="prominent-fab-2" title="Prominent Appbar FAB">
        <Appbar
          variant="prominent"
          title="Page title"
          image={<Image
            source={{ uri: 'https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png' }}
            style={{ position: 'absolute', top: 0, start: 0, end: 0, bottom: 0 }} />}
          leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )}
          trailing={(props) => [
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="heart" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="magnify" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="dots-vertical" size={24} color={props.color} />}
            />,
          ]}
          style={{ flex: 1 }}
        >
          <FAB icon={(props) => <Icon name="plus" {...props} />} onPress={() => undefined}
               style={{ position: 'absolute', end: 16, bottom: -28 }} />
        </Appbar>
      </Section>

      <Section name="color" title="Coloring">
        <Appbar
          leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )}
          trailing={(props) => [
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="heart" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="magnify" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="dots-vertical" size={24} color={props.color} />}
            />,
          ]}
          title="Page title" color="yellow" tintColor="#1976d2" style={{ flex: 1 }} />
      </Section>

      <Section name="bottom" title="Bottom Appbar">
        <Appbar
          position="bottom"
          leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )}
          trailing={(props) => [
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="magnify" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="dots-vertical" size={24} color={props.color} />}
            />,
          ]}
          style={{ flex: 1 }}
        >
          <FAB icon={props => <Icon name="plus" {...props} />} onPress={() => undefined}
               style={{ position: 'absolute', top: -28, alignSelf: 'center' }} />
        </Appbar>

      </Section>
    </ScrollView>
  );
};

export default AppBarExample;
