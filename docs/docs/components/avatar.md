# Avatar

Avatars are found throughout material design with uses in everything from tables to dialog menus.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Avatar label="Kent Dodds" autoColor/>
    <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} style={{ marginTop: 16 }}/>
    <Avatar icon={props => <Icon name="account" {...props} />} style={{ marginTop: 16 }}/>
  </View>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Avatar)

## Letter avatars

```js with-preview
import React from "react";
import { View } from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Avatar label="Kent Dodds"/>
      <Avatar label="UN" initials={false} style={{ marginTop: 16 }}/>
      <Avatar label="Jed Watson" autoColor style={{ marginTop: 16 }}/>
      <Avatar label="Tim Neutkens" autoColor style={{ marginTop: 16 }}/>
    </View>
  );
}
```

## Image avatars

```js with-preview
import React from "react";
import { View, Image } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}/>
      <Avatar
        image={
          <Image
            source={{ uri: "https://mui.com/static/images/avatar/2.jpg" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 28,
            }}
          />
        }
        style={{ marginTop: 16 }}
      />
    </View>
  );
}

```

## Icon avatars

```js with-preview
import React from "react";
import { View } from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Avatar icon={props => <Icon name="account" {...props} />}/>
      <Avatar
        icon={props => <Icon name="account" {...props} />}
        label="Jed Watson"
        autoColor
        style={{ marginTop: 16 }}
      />
      <Avatar
        icon={props => <Icon name="calendar" {...props} />}
        label="Tim Neutkens"
        autoColor
        style={{ marginTop: 16 }}
      />
    </View>
  );
}
```

## Sizes

```js with-preview
import React from "react";
import { View } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Avatar label="Jed Watson" size={32}/>
      <Avatar label="Jed Watson" style={{ marginTop: 16 }}/>
      <Avatar label="Jed Watson" size={72} style={{ marginTop: 16 }}/>
    </View>
  );
}
```

## Coloring

```js with-preview
import React from "react";
import { View } from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Avatar label="Kent Dodds"/>
      <Avatar icon={props => <Icon name="account" {...props} />} color="primary" style={{ marginTop: 16 }}/>
      <Avatar
        icon={props => <Icon name="account" {...props} />}
        color="primary"
        tintColor="error"
        style={{ marginTop: 16 }}
      />
      <Avatar
        icon={props => <Icon name="account" {...props} />}
        color="orange"
        tintColor="white"
        style={{ marginTop: 16 }}
      />
    </View>
  );
}
```

## Fallbacks

```js with-preview
import React from "react";
import { View } from "react-native";
import { Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Avatar label="Jed Watson"/>
      <Avatar label="Jed Watson" icon={props => <Icon name="account" {...props} />} style={{ marginTop: 16 }}/>
      <Avatar
        label="Jed Watson"
        icon={props => <Icon name="account" {...props} />}
        image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
        style={{ marginTop: 16 }}
      />
    </View>
  );
}
```
