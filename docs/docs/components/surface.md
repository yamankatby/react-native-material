---
title: "Surface"
description: ""
---

# Surface

```js
import React from "react";
import { View } from "react-native";
import { Surface } from "@react-native-material/core";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Surface style={{ width: 80, height: 80, elevation: 2 }}/>
      <Surface style={{ width: 80, height: 80, elevation: 4, marginTop: 24 }}/>
      <Surface style={{ width: 80, height: 80, elevation: 6, marginTop: 24 }}/>
    </View>
  );
}
```

## Category

```js
import React from "react";
import { View } from "react-native";
import { Surface } from "@react-native-material/core";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Surface category="small" style={{ width: 80, height: 80, elevation: 2 }}/>
      <Surface category="medium" style={{ width: 80, height: 80, elevation: 2, marginTop: 24 }}/>
      <Surface category="large" style={{ width: 80, height: 80, elevation: 2, marginTop: 24 }}/>
    </View>
  );
}
```

### Override Category Border Radius 

```js
import React from "react";
import { View } from "react-native";
import { Surface } from "@react-native-material/core";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Surface category="small" style={{ width: 80, height: 80, elevation: 2, borderRadius: 10 }}/>
      <Surface category="medium" style={{ width: 80, height: 80, elevation: 2, borderRadius: 24, marginTop: 24 }}/>
      <Surface category="large" style={{ width: 80, height: 80, elevation: 2, borderRadius: 32, marginTop: 24 }}/>
    </View>
  );
}
```

## Touchable Surface

```js
import React from "react";
import { View } from "react-native";
import { TouchableSurface } from "@react-native-material/core";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableSurface style={{ elevation: 2 }} innerStyle={{ width: 80, height: 80 }} onPress={() => undefined} />
      <TouchableSurface style={{ elevation: 4, marginTop: 24 }} innerStyle={{ width: 80, height: 80 }} onPress={() => undefined} />
      <TouchableSurface style={{ elevation: 6, marginTop: 24 }} innerStyle={{ width: 80, height: 80 }} onPress={() => undefined} />
    </View>
  );
}
```