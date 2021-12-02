# Badge

A Badge represents dynamic information such as a number of pending requests in a Bottom Navigation or Tab Bar.

```js with-preview
import React from "react";
import { Badge, VStack } from "@react-native-material/core";

const App = () => (
  <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
    <Badge label={4} />
    <Badge label={23} />
    <Badge label={123} color="primary" />
    <Badge label="error" color="error" />
  </VStack>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Badge)
