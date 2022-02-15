---
sidebar_position: 4
---

# Wrap

Wrap is a layout component that adds a defined space between its children. It wraps its children automatically if there
isn't enough space to fit anymore in the same row.

Think of it as a smarter `flex-wrap` with `spacing` support. It works really well with things like dialog buttons, tags,
and chips.

[`💬 Feedback`](https://github.com/yamankatby/react-native-flex-layout/labels/wrap)
[`🌱 Source`](https://github.com/yamankatby/react-native-flex-layout/blob/main/src/Wrap.tsx)

## Import

```js
import { Wrap } from 'react-native-flex-layout';
```

## Usage

In the example below, you see that the last `Box` wrapped to the next line.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Wrap, Box, Divider } from "@react-native-material/core";

const App = () => (
  <Wrap m={4}>
    <Box w={24} h={12} style={{ backgroundColor: "#faf089" }} />
    <Box w={24} h={12} style={{ backgroundColor: "#ff6347" }} />
    <Box w={24} h={12} style={{ backgroundColor: "#fed7e2" }} />
  </Wrap>
);

export default App;
```

### Change the spacing

Pass the `spacing` prop to apply consistent spacing between each child, even if it wraps.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Wrap, Box, Divider } from "@react-native-material/core";

const App = () => (
  <Wrap m={4} spacing={2}>
    <Box w={24} h={12} style={{ backgroundColor: "#faf089" }} />
    <Box w={24} h={12} style={{ backgroundColor: "#ff6347" }} />
    <Box w={24} h={12} style={{ backgroundColor: "#fed7e2" }} />
  </Wrap>
);

export default App;
```

### Change the alignment

Pass the `align` prop to change the alignment of the child along the cross axis.

Pass the `justify` prop to change the alignment of the child along the main axis.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Wrap, Box, Divider } from "@react-native-material/core";

const App = () => (
  <Wrap m={4} items="center" spacing={2}>
    <Box w={24} h={6} style={{ backgroundColor: "#faf089" }} />
    <Box w={24} h={12} style={{ backgroundColor: "#ff6347" }} />
    <Box w={24} h={10} style={{ backgroundColor: "#fed7e2" }} />
    <Box w={24} h={8} style={{ backgroundColor: "lightblue" }} />
  </Wrap>
);

export default App;
```

## Props

| Prop                 | Type                                                                | Description                                                                                        |
|----------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `spacing`            | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | The spacing between children (even if it wraps).                                                   |
| `shouldWrapChildren` | `boolean`                                                           | If `true`, the children will be wrapped in a `Box` and the `Box` will take the spacing properties. |

[`...FlexProps`](/docs/layout/flex#props) , [`...SelectorProps`](/docs/layout/selector#props)
