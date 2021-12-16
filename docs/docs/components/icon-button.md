# Icon Button

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20IconButton)

```js with-preview
import React from "react";
import { VStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack fill center spacing={4}>
    <IconButton icon={props => <Icon name="eye" {...props} />} />
    <IconButton icon={props => <Icon name="dots-vertical" {...props} />} />
    <IconButton icon={props => <Icon name="magnify" {...props} />} />
  </VStack>
);

export default App;
```

## Import

```js
import { IconButton } from "@react-native-material/core";
```

## Usage

```js with-preview
import React from "react";
import { VStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack fill center spacing={4}>
    <IconButton icon={props => <Icon name="wifi" {...props} />} />
    <IconButton
      icon={props => <Icon name="account" {...props} />}
      color="primary"
    />
    <IconButton
      icon={props => <Icon name="magnify" {...props} />}
      color="red"
    />
  </VStack>
);

export default App;
```

## Props

`icon`

The element to render as the icon.

Type: React.ReactNode | ((props: { color: string; size: number }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`color`

The color of the icon and the press effect.

Type: PaletteColor;

Default: "onBackground"

Optional: Yes

---

`contentContainerStyle`

The style of the icon's container view.

Type: PressableProps["style"];

Optional: Yes

---

`...ViewProps`, `...PressableProps`, `...PressableProps`
