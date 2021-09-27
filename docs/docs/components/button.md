---
title: "Button"
description: "Buttons allow users to take actions, and make choices, with a single tap."
---

# Button

Buttons allow users to take actions, and make choices, with a single tap.

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Modal windows
- Forms
- Cards
- Toolbars

## Basic Button

The Button comes with three variants: text (default), contained, and outlined.

```js
import React from "react";
import { View } from "react-native";
import { Button } from "@react-native-material/core";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Text" variant="text" onPress={() => undefined}/>
      <Button title="Contained" style={{ marginTop: 16 }} onPress={() => undefined}/>
      <Button title="Outlined" variant="outlined" style={{ marginTop: 16 }} onPress={() => undefined}/>
    </View>
  );
}
```