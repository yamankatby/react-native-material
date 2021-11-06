# List

Lists are continuous, vertical indexes of text or images.

```js with-preview
import React from "react";
import { View } from "react-native";
import { ListItem } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1 }}>
    <ListItem title="List Item" onPress={() => undefined}/>
    <ListItem title="List Item" onPress={() => undefined}/>
    <ListItem title="List Item" onPress={() => undefined}/>
  </View>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20ListItem)
[`🎨 Material Design`](https://material.io/components/lists)

## Usage

Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions,
which are represented by icons and text.

## Basic List

```js with-preview
import React from "react";
import { View } from "react-native";
import { ListItem } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const App = () => (
  <View style={{ flex: 1 }}>
    <ListItem
      title="Inbox"
      leading={<Icon name="inbox" size={24}/>}
      trailing={props => <Icon name="chevron-right" {...props} />}
      onPress={() => undefined}
    />
    <ListItem
      title="Drafts"
      leading={<Icon name="email-open" size={24}/>}
      trailing={props => <Icon name="chevron-right" {...props} />}
      onPress={() => undefined}
    />
    <ListItem
      title="Trash"
      trailing={props => <Icon name="chevron-right" {...props} />}
      onPress={() => undefined}
    />
    <ListItem
      title="Spam"
      trailing={props => <Icon name="chevron-right" {...props} />}
      onPress={() => undefined}
    />
  </View>
);

export default App;
```

## Secondary Text

```js with-preview
import React from "react";
import { View } from "react-native";
import { ListItem } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1 }}>
    <ListItem
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
      onPress={() => undefined}
    />
    <ListItem
      title="Summer BBQ"
      secondaryText="Wish I could come, but I'm out of town this…"
      onPress={() => undefined}
    />
    <ListItem
      title="Oui Oui"
      secondaryText="Do you have Paris recommendations? Have you ever…"
      onPress={() => undefined}
    />
  </View>
);

export default App;
```

## Avatar

```js with-preview
import React from "react";
import { View } from "react-native";
import { ListItem, Avatar } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1 }}>
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
      onPress={() => undefined}
    />
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
      }
      title="Summer BBQ"
      secondaryText="Wish I could come, but I'm out of town this…"
      onPress={() => undefined}
    />
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
      }
      title="Oui Oui"
      secondaryText="Do you have Paris recommendations? Have you ever…"
      onPress={() => undefined}
    />
  </View>
);

export default App;
```