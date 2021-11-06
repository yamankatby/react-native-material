# App Bar

The App Bar displays information and actions relating to the current screen.

```js with-preview
import React from "react";
import { Appbar } from "@react-native-material/core";

const App = () => <Appbar title="Screen title"/>;

export default App;
```

The top App Bar provides content and actions related to the current screen. It's used for branding, screen titles,
navigation, and actions.

It can transform into a contextual action bar or be used as a navbar.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Appbar)
[`🎨 Material Design`](https://material.io/components/app-bars-top)

## Variant

### Top

```js with-preview
import React from "react";
import { Appbar, IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const App = () => (
  <Appbar
    title="Title"
    leading={props => (
      <IconButton
        color={props.color}
        icon={<Icon name="menu" size={24} color={props.color}/>}
      />
    )}
    trailing={props => [
      <IconButton
        key="magnify"
        color={props.color}
        icon={<Icon name="magnify" size={24} color={props.color}/>}
      />,
      <IconButton
        key="dots"
        color={props.color}
        icon={<Icon name="dots-vertical" size={24} color={props.color}/>}
      />
    ]}
  />
);

export default App;
```

### Bottom

```js with-preview
import React from "react";
import { View } from "react-native";
import { Appbar, IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const App = () => (
  <View style={{ flex: 1 }}>
    <Appbar
      variant="bottom"
      leading={props => (
        <IconButton
          color={props.color}
          icon={<Icon name="menu" size={24} color={props.color}/>}
        />
      )}
      trailing={props => [
        <IconButton
          key="magnify"
          color={props.color}
          icon={<Icon name="magnify" size={24} color={props.color}/>}
        />,
        <IconButton
          key="dots"
          color={props.color}
          icon={<Icon name="dots-vertical" size={24} color={props.color}/>}
        />
      ]}
      style={{ position: "absolute", start: 0, end: 0, bottom: 0 }}
    />
  </View>
);

export default App;
```

## Coloring

```js with-preview
import React from "react";
import { Appbar, IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const App = () => (
  <Appbar
    title="Title"
    color="pink"
    tintColor="red"
    leading={props => (
      <IconButton
        color={props.color}
        icon={<Icon name="menu" size={24} color={props.color}/>}
      />
    )}
    trailing={props => [
      <IconButton
        key="magnify"
        color={props.color}
        icon={<Icon name="magnify" size={24} color={props.color}/>}
      />,
      <IconButton
        key="dots"
        color={props.color}
        icon={<Icon name="dots-vertical" size={24} color={props.color}/>}
      />,
    ]}
  />
);

export default App;
```