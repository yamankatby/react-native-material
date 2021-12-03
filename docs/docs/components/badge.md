# Badge

Badges are used to highlight an item's status for quick recognition.

```js with-preview
import React from "react";
import { Badge, VStack } from "@react-native-material/core";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <Badge label={4}/>
    <Badge label={23}/>
    <Badge label={123} color="primary"/>
    <Badge label="error" color="error"/>
  </VStack>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Badge)

## Import

```js
import { Badge } from "@react-native-material/core";
```
