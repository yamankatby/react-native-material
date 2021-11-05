# Badge

A Badge represents dynamic information such as a number of pending requests in a Bottom Navigation or Tab Bar.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Badge } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Badge label={4} />
    <Badge label={23} style={{ marginTop: 16 }} />
    <Badge label={123} color="primary" style={{ marginTop: 16 }} />
    <Badge label="error" color="error" style={{ marginTop: 16 }} />
  </View>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Badge)