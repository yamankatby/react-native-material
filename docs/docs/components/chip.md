# Chip

A chip is a small block of information, typically used to represent a category.

```js with-preview
import React from "react";
import { VStack, Chip } from "@react-native-material/core";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <Chip label="Filled"/>
    <Chip variant="outlined" label="Outlined"/>
  </VStack>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Chip)
[`🎨 Material Design`](https://material.io/components/chips)

## Import

```js
import { Chip } from "@react-native-material/core";
```

## Usage

Chips allow users to enter information, make selections, filter content, or trigger actions. While buttons are expected
to appear consistently and with familiar calls to action, chips should appear dynamically as a group of multiple
interactive elements.

```js with-preview 
import React from "react";
import { VStack, Chip } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <Chip
      label="Filled"
      color="primary"
      leading={props => <Icon name="face" {...props} />}
    />
    <Chip
      variant="outlined"
      label="Outlined"
      color="primary"
      leading={props => <Icon name="face" {...props} />}
    />
  </VStack>
);

export default App;
```
