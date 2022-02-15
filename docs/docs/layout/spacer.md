---
sidebar_position: 6
---

# Spacer

Creates an adjustable, empty space that can be used to tune the spacing between child elements within `Flex`.

[`💬 Feedback`](https://github.com/yamankatby/react-native-flex-layout/labels/spacer)
[`🌱 Source`](https://github.com/yamankatby/react-native-flex-layout/blob/main/src/Spacer.tsx)

## Import

```js
import { Spacer } from 'react-native-flex-layout';
```

## Usage

```jsx with-preview
import React from "react";
import { Flex, Box, Spacer } from "@react-native-material/core";

const App = () => (
  <Flex fill>
    <Box h={12} style={{ backgroundColor: 'lightgreen' }}/>
    <Spacer />
    <Box h={12} style={{ backgroundColor: 'lightblue' }} />
  </Flex>
);

export default App;
```

Usage with `Stack`

```jsx with-preview
import React from "react";
import { HStack, Box, Spacer } from "@react-native-material/core";

const App = () => (
  <HStack fill>
    <Box w={12} h={12} style={{ backgroundColor: 'lightgreen' }}/>
    <Spacer />
    <Box w={12} h={12} style={{ backgroundColor: 'lightblue' }} />
  </HStack>
);

export default App;
```
