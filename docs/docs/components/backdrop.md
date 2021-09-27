---
title: "Backdrop"
description: ""
---

# Backdrop

```js
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Backdrop, Appbar, IconButton } from "@react-native-material/core";

export default function App() {
  const [revealed, setRevealed] = useState(false);
  return (
    <Backdrop
      revealed={revealed}
      header={
        <Appbar
          title="Page title"
          leading={(props) => (
            <IconButton
              {...props}
              onPress={() => setRevealed((prev) => !prev)}
            />
          )}
        />
      }
      backLayer={
        <View
          style={{
            height: 180,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Hi</Text>
        </View>
      }
    ></Backdrop>
  );
}
```

## Subheader

```js
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Backdrop, BackdropSubheader, Appbar, IconButton } from "@react-native-material/core";

export default function App() {
  const [revealed, setRevealed] = useState(false);
  return (
    <Backdrop
      revealed={revealed}
      header={
        <Appbar
          title="Page title"
          leading={(props) => (
            <IconButton
              {...props}
              onPress={() => setRevealed((prev) => !prev)}
            />
          )}
        />
      }
      backLayer={
        <View
          style={{
            height: 180,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Hi</Text>
        </View>
      }
    >
      <BackdropSubheader title="Subheader"/>
    </Backdrop>
  );
}
```