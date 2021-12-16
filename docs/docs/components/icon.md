# Icon

```js with-preview
import React from "react";
import { IconsProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <>
    <Icon name="home" size={24} color="red" />
  </>
);

export default () => (
  <IconsProvider render={props => <MaterialCommunityIcons {...props} />}>
    <App />
  </IconsProvider>
);
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Icon)

## Import

```js
import { Icon } from "@react-native-material/core";
```

## Props

`name`

Type: string;

Optional: No

---

`size`

Type: number;

Optional: Yes

---

`color`

Type: PaletteColor;

Optional: Yes

---
