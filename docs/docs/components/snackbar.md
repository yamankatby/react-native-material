# Snackbar

Snackbars provide brief messages about app processes at the bottom of the screen.

```js with-preview
import React from 'react'
import { View } from 'react-native'
import { Snackbar } from '@react-native-material/core'

const App = () => (
  <View style={{ flex: 1 }}>
    <Snackbar
      message="Can't send the photo."
      style={{ position: 'absolute', start: 16, end: 16, bottom: 16 }}
    />
  </View>
)

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Snackbar)
[`🎨 Material Design`](https://material.io/components/snackbars)

## Import

```js
import { Snackbar } from "@react-native-material/core";
```

## Usage

Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the
bottom of the screen. They shouldn’t interrupt the user experience, and they don’t require user input to disappear.

### Frequency

Only one snackbar may be displayed at a time.

## Actions

```js with-preview
import React from "react";
import { View } from "react-native";
import { Snackbar, Button } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1 }}>
    <Snackbar
      message="Note archived."
      action={
        <Button
          variant="text"
          title="Dismiss"
          color="#BB86FC"
          compact
        />
      }
      style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
    />
  </View>
);

export default App;
```

## Two-line message

```js with-preview
import React from "react";
import { View } from "react-native";
import { Snackbar, Button } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1 }}>
    <Snackbar
      message="This is a two-line message with an action button."
      action={
        <Button
          variant="text"
          title="Dismiss"
          color="#BB86FC"
          compact
        />
      }
      style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
    />
  </View>
);

export default App;
```
