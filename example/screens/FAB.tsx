import React, { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BackdropSubheader, FAB, useTheme } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export const Section: React.FC<{ name: string; title: string }> = ({ name, title, children }) => {
  const params = useRoute().params as any;
  if (params?.section && params?.section !== name) return null;
  else if (params?.section === name) {
    return (
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", margin: 24 }}>{children}</View>
    );
  }
  return (
    <>
      <BackdropSubheader title={title} style={{ marginEnd: 0 }} />
      <ScrollView horizontal contentContainerStyle={{ flexDirection: "row", alignItems: "center", padding: 16 }}>
        {children}
      </ScrollView>
    </>
  );
};

const FABExample = () => {
  const params = useRoute().params as any;

  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(true);

  const [isVisible, setIsVisible] = useState(true);

  const separator = <View style={{ width: 16, height: 16 }} />;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={params?.section && { flex: 1 }}>
      <Section name="overview" title="Overview">
        <FAB icon={(props) => <Icon name="plus" {...props} />} onPress={() => undefined} />
        {separator}
        <FAB icon={(props) => <Icon name="pencil" {...props} />} loading color="primary" onPress={() => undefined} />
        {separator}
        <FAB
          icon={(props) => <Icon name="navigation" {...props} />}
          variant="extended"
          label="Navigate"
          color="primary"
          onPress={() => undefined}
        />
      </Section>

      <Section name="standard" title="Standard FAB">
        <FAB icon={(props) => <Icon name="star" {...props} />} color="primary" onPress={() => undefined} />
      </Section>

      <Section name="extended" title="Extended FAB">
        <FAB variant="extended" label="Button" color="primary" onPress={() => undefined} />
        {separator}
        <FAB
          icon={(props) => <Icon name="star" {...props} />}
          variant="extended"
          label="Button"
          color="primary"
          onPress={() => undefined}
        />
      </Section>

      <Section name="regular-size" title="Regular FAB Size">
        <FAB icon={(props) => <Icon name="account" {...props} />} onPress={() => undefined} />
        {separator}
        <FAB icon={(props) => <Icon name="account" {...props} />} size="mini" onPress={() => undefined} />
      </Section>

      <Section name="extended-size" title="Extended FAB Size">
        <FAB
          variant="extended"
          icon={(props) => <Icon name="heart" {...props} />}
          label="Button"
          onPress={() => undefined}
        />
        {separator}
        <FAB
          variant="extended"
          icon={(props) => <Icon name="heart" {...props} />}
          label="Button"
          size="mini"
          onPress={() => undefined}
        />
      </Section>

      <Section name="color" title="Coloring">
        <FAB icon={(props) => <Icon name="lock" {...props} />} onPress={() => undefined} />
        {separator}
        <FAB icon={(props) => <Icon name="lock" {...props} />} tintColor="red" onPress={() => undefined}
             variant="extended" label="Button" />
        {separator}
        <FAB icon={(props) => <Icon name="lock" {...props} />} color="onPrimary" onPress={() => undefined} />
        {separator}
        <FAB icon={(props) => <Icon name="lock" {...props} />} color="#FDCAE4" onPress={() => undefined} />
        {separator}
        <FAB icon={(props) => <Icon name="lock" {...props} />} color="#FDCAE4" tintColor="yellow"
             onPress={() => undefined} />
      </Section>

      <Section name="loading" title="Loading">
        <Switch tintColor={theme.colorScheme.secondary} value={isLoading} onValueChange={(val) => setIsLoading(val)} />
        {separator}
        <FAB
          icon={(props) => <Icon name="plus" {...props} />}
          loading={isLoading}
          color="primary"
          onPress={() => undefined}
        />
        {separator}
        <FAB
          variant="extended"
          icon={(props) => <Icon name="plus" {...props} />}
          label="Button"
          loading={isLoading}
          color="primary"
          onPress={() => undefined}
        />
        {separator}
        <FAB
          variant="extended"
          icon={(props) => <Icon name="plus" {...props} />}
          label="Button"
          loading={isLoading}
          loadingIndicatorPosition="overlay"
          color="primary"
          onPress={() => undefined}
        />
        {separator}
        <FAB
          icon={(props) => <Icon name="plus" {...props} />}
          size="mini"
          loading={isLoading}
          color="primary"
          onPress={() => undefined}
        />
      </Section>

      <Section name="custom-loading-indicator" title="Custom Loading Indicator">
        <Switch tintColor={theme.colorScheme.error} value={isLoading} onValueChange={(val) => setIsLoading(val)} />
        {separator}
        <FAB
          icon={(props) => <Icon name="plus" {...props} />}
          loading={isLoading}
          color="error"
          loadingIndicator="⏳"
          onPress={() => undefined}
        />
        {separator}
        <FAB
          variant="extended"
          icon={(props) => <Icon name="plus" {...props} />}
          label="Button"
          loading={isLoading}
          loadingIndicator={(props) => (
            <Text
              style={{
                backgroundColor: props.color,
                color: "white",
                borderRadius: 50,
                width: 24,
                height: 24,
                textAlign: "center",
              }}
            >
              ...
            </Text>
          )}
          color="onError"
          onPress={() => undefined}
        />
        {separator}
        <FAB
          variant="extended"
          icon={(props) => <Icon name="plus" {...props} />}
          label="Button"
          loading={isLoading}
          loadingIndicatorPosition="overlay"
          loadingIndicator="Loading..."
          color="onError"
          onPress={() => undefined}
        />
        {separator}
        <FAB
          icon={(props) => <Icon name="plus" {...props} />}
          size="mini"
          loading={isLoading}
          loadingIndicator="⏰"
          color="onError"
          onPress={() => undefined}
        />
      </Section>

      <Section name="visible" title="Visibility">
        <Switch value={isVisible} onValueChange={(val) => setIsVisible(val)} />
        {separator}
        <FAB icon={(props) => <Icon name="plus" {...props} />} onPress={() => undefined} visible={isVisible} />
        {separator}
        <FAB
          icon={(props) => <Icon name="plus" {...props} />}
          onPress={() => undefined}
          size="mini"
          visible={isVisible}
        />
        {separator}
        <FAB
          icon={(props) => <Icon name="navigation" {...props} />}
          variant="extended"
          label="Navigate"
          color="primary"
          onPress={() => undefined}
          visible={isVisible}
        />
      </Section>
    </ScrollView>
  );
};

export default FABExample;
