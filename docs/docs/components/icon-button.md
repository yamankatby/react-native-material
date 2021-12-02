# Icon Button

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20IconButton)

```js with-preview
import React from "react";
import { VStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
    <IconButton icon={props => <Icon name="eye" {...props}/>}/>
    <IconButton icon={props => <Icon name="dots-vertical" {...props}/>}/>
    <IconButton icon={props => <Icon name="magnify" {...props}/>}/>
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
  <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
    <IconButton icon={props => <Icon name="wifi" {...props}/>}/>
    <IconButton icon={props => <Icon name="account" {...props}/>} color="primary"/>
    <IconButton icon={props => <Icon name="magnify" {...props}/>} color="red"/>
  </VStack>
);

export default App;
```
