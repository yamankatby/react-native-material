# Avatar

Avatars are found throughout material design with uses in everything from tables to dialog menus.

```js with-preview
import React from "react";
import { VStack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <Avatar label="Kent Dodds" autoColor />
    <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
    <Avatar icon={(props) => <Icon name="account" {...props} />} />
  </VStack>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Avatar)

## Import

```js
import { Avatar } from "@react-native-material/core";
```

## Letter avatars

```js with-preview
import React from "react";
import { VStack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <Avatar label="Kent Dodds" />
    <Avatar label="UN" initials={false} />
    <Avatar label="Jed Watson" autoColor />
    <Avatar label="Tim Neutkens" autoColor />
  </VStack>
);

export default App;
```

## Image avatars

```js with-preview
import React from "react";
import { Image } from "react-native";
import { VStack, Avatar } from "@react-native-material/core";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
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
    />
  </VStack>
);

export default App;
```

## Icon avatars

```js with-preview
import React from "react";
import { VStack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <Avatar icon={(props) => <Icon name="account" {...props} />} />
    <Avatar
      icon={(props) => <Icon name="account" {...props} />}
      label="Jed Watson"
      autoColor
    />
    <Avatar
      icon={(props) => <Icon name="calendar" {...props} />}
      label="Tim Neutkens"
      autoColor
    />
  </VStack>
);

export default App;
```

## Sizes

```js with-preview
import React from "react";
import { VStack, Avatar } from "@react-native-material/core";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <Avatar label="Jed Watson" size={32} />
    <Avatar label="Jed Watson" />
    <Avatar label="Jed Watson" size={72} />
  </VStack>
);

export default App;
```

## Coloring

```js with-preview
import React from "react";
import { VStack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <Avatar label="Kent Dodds" />
    <Avatar
      icon={(props) => <Icon name="account" {...props} />}
      color="primary"
    />
    <Avatar
      icon={(props) => <Icon name="account" {...props} />}
      color="primary"
      tintColor="error"
    />
    <Avatar
      icon={(props) => <Icon name="account" {...props} />}
      color="orange"
      tintColor="white"
    />
  </VStack>
);

export default App;
```

## Fallbacks

```js with-preview
import React from "react";
import { VStack, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <Avatar label="Jed Watson" />
    <Avatar
      label="Jed Watson"
      icon={(props) => <Icon name="account" {...props} />}
    />
    <Avatar
      label="Jed Watson"
      icon={(props) => <Icon name="account" {...props} />}
      image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
    />
  </VStack>
);

export default App;
```

## Props

`label`

Type: string | React.ReactElement | ((props: { color: string }) =\> React.ReactElement | null) | null;

Optional: Yes

---

`image`

Type: ImageSourcePropType | React.ReactElement | ((props: { size: number }) =\> React.ReactElement | null) | null;

Optional: Yes

---

`icon`

Type: React.ReactElement | ((props: { color: string; size: number }) =\> React.ReactElement | null) | null;

Optional: Yes

---

`size`

Type: number;

Optional: Yes

---

`color`

Type: PaletteColor;

Optional: Yes

---

`tintColor`

Type: PaletteColor;

Optional: Yes

---

`initials`

Type: boolean;

Optional: Yes

---

`uppercase`

Type: boolean;

Optional: Yes

---

`autoColor`

Type: boolean;

Optional: Yes

---

`style`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`contentContainerStyle`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`imageContainerStyle`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`labelStyle`

Type: StyleProp<TextStyle\>;

Optional: Yes

---

`imageStyle`

Type: StyleProp<ImageStyle\>;

Optional: Yes

---
