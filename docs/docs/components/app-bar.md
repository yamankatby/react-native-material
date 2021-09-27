---
title: "App bar"
description: "The app bar displays information and actions relating to the current screen."
---

# App bar

The top App Bar provides content and actions related to the current screen. It's used for branding, screen titles,
navigation, and actions.

It can transform into a contextual action bar or be used as a navbar.

## Basic App Bar

```js
import React from "react";
import { Appbar } from "@react-native-material/core";

export default function App() {
  return <Appbar title="Page title"/>;
}
```

## Prominent

```js
import React from "react";
import { Appbar } from "@react-native-material/core";

export default function App() {
  return <Appbar title="Page title" variant="prominent"/>;
}
```

## Image

```js
import React from "react";
import {Image} from 'react-native'
import { Appbar } from "@react-native-material/core";

export default function App() {
  return <Appbar title="Page title" variant="prominent" image={<Image source={{uri: 'https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png'}}  style={{ position: "absolute", top: 0, bottom: 0, start: 0, end: 0 }} />}/>;
}
```

## Bottom App Bar

```js
import React from "react";
import { View } from "react-native";
import { Appbar } from "@react-native-material/core";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Appbar
        title="Page title"
        position="bottom"
        style={{ position: "absolute", bottom: 0, start: 0, end: 0 }}
      />
    </View>
  );
}
```