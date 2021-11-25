# Floating action button (FAB)

A floating action button (FAB) represents the primary action of a screen.

```js with-preview
import React from "react";
import { View } from "react-native";
import { FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <FAB
      icon={props => <Icon name="plus" {...props} />}
      onPress={() => undefined}
    />
    <FAB
      icon={props => <Icon name="plus" {...props} />}
      color="primary"
      loading
      style={{ marginTop: 16 }}
      onPress={() => undefined}
    />
    <FAB
      variant="extended"
      icon={props => <Icon name="navigation" {...props} />}
      label="navigate"
      color="primary"
      style={{ marginTop: 16 }}
      onPress={() => undefined}
    />
  </View>
);

export default App;
```

A floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all
screen content, typically as a circular shape with an icon in its center. FABs come in three types: regular, mini, and
extended.

Only use a FAB if it is the most suitable way to present a screen's primary action.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Fab)
[`🎨 Material Design`](https://material.io/components/buttons-floating-action-button)

## Variants

### Regular

```js with-preview
import React from "react";
import { View } from "react-native";
import { FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <FAB
      icon={props => <Icon name="star" {...props} />}
      color="primary"
      onPress={() => undefined}
    />
  </View>
);

export default App;
```

### Extended

```js with-preview
import React from "react";
import { View } from "react-native";
import { FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <FAB
      variant="extended"
      label="Button"
      color="primary"
      onPress={() => undefined}
    />
    <FAB
      variant="extended"
      icon={props => <Icon name="star" {...props} />}
      label="Button"
      color="primary"
      onPress={() => undefined}
      style={{ marginTop: 16 }}
    />
  </View>
);

export default App;
```

## Sizing

```js with-preview
import React from "react";
import { View } from "react-native";
import { FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <FAB
      icon={props => <Icon name="account" {...props} />}
      onPress={() => undefined}
    />
    <FAB
      icon={props => <Icon name="account" {...props} />}
      size="mini"
      onPress={() => undefined}
      style={{ marginTop: 16 }}
    />
  </View>
);

export default App;
```

```js with-preview
import React from "react";
import { View } from "react-native";
import { FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FAB
        variant="extended"
        icon={props => <Icon name="heart" {...props} />}
        label="Button"
        onPress={() => undefined}
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="heart" {...props} />}
        label="Button"
        size="mini"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
    </View>
  );
};

export default App;
```

## Coloring

```js with-preview
import React from "react";
import { ScrollView } from "react-native";
import { FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <ScrollView
    style={{ flex: 1 }}
    contentContainerStyle={{ alignItems: "center", paddingVertical: 16 }}
  >
    <FAB
      icon={props => <Icon name="lock" {...props} />}
      onPress={() => undefined}
    />
    <FAB
      variant="extended"
      icon={props => <Icon name="lock" {...props} />}
      label="Button"
      tintColor="red"
      style={{ marginTop: 16 }}
      onPress={() => undefined}
    />
    <FAB
      icon={props => <Icon name="lock" {...props} />}
      color="onPrimary"
      style={{ marginTop: 16 }}
      onPress={() => undefined}
    />
    <FAB
      icon={props => <Icon name="lock" {...props} />}
      color="#FDCAE4"
      style={{ marginTop: 16 }}
      onPress={() => undefined}
    />
    <FAB
      icon={props => <Icon name="lock" {...props} />}
      color="#FDCAE4"
      tintColor="yellow"
      style={{ marginTop: 16 }}
      onPress={() => undefined}
    />
  </ScrollView>
);

export default App;
```

## Loading

```js with-preview
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { FAB, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: "center", paddingVertical: 16 }}
    >
      <Switch value={loading} onValueChange={setLoading}/>
      <FAB
        icon={props => <Icon name="plus" {...props} />}
        color="primary"
        loading={loading}
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Button"
        color="primary"
        loading={loading}
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Button"
        color="primary"
        loading={loading}
        style={{ marginTop: 16 }}
        onPress={() => undefined}
        loadingIndicatorPosition="overlay"
      />
      <FAB
        icon={props => <Icon name="plus" {...props} />}
        size="mini"
        color="primary"
        loading={loading}
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
    </ScrollView>
  );
};

export default App;
```

### Custom Loading Indicator

```js with-preview
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { FAB, Text, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: "center", paddingVertical: 16 }}
    >
      <Switch value={loading} onValueChange={setLoading}/>
      <FAB
        icon={props => <Icon name="plus" {...props} />}
        color="error"
        loading={loading}
        loadingIndicator="⏳"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Button"
        color="onError"
        loading={loading}
        loadingIndicator={props => (
          <Text
            style={{
              width: 24,
              height: 24,
              backgroundColor: props.color,
              color: "white",
              borderRadius: 12,
              textAlign: "center"
            }}
          >
            ...
          </Text>
        )}
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Button"
        color="onError"
        loading={loading}
        loadingIndicator="Loading..."
        loadingIndicatorPosition="overlay"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FAB
        icon={props => <Icon name="plus" {...props} />}
        size="mini"
        color="onError"
        loading={loading}
        loadingIndicator="⏰"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
    </ScrollView>
  );
};

export default App;
```

## Visibility

```js with-preview
import React, { useState } from "react";
import { View } from "react-native";
import { FAB, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Switch value={visible} onValueChange={setVisible}/>
      <FAB
        icon={props => <Icon name="plus" {...props} />}
        visible={visible}
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FAB
        size="mini"
        icon={props => <Icon name="plus" {...props} />}
        visible={visible}
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="navigation" {...props} />}
        label="Navigate"
        color="primary"
        visible={visible}
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
    </View>
  );
};

export default App;
```
