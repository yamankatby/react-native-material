---
slug: welcome
title: Welcome to React Native Material
authors: [yamankatby]
tags: [react-native, material-ui]
date: 2021-11-21
---

Start by adding the library to your project.

```bash npm2yarn
npm install @react-native-material/core
```

Then start using the power of Material Design in your React Native app.

```js with-preview name: Quick start; description: A simple example of the button component
import React from "react";
import { Button } from "@react-native-material/core";

export default function App() {
  return (
    <Button
      title="Click Me"
      style={{ alignSelf: "center", marginTop: 40 }}
    />
  );
}
```
