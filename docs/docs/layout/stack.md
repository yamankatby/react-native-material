---
sidebar_position: 3
---

# Stack

Stack is a layout component that makes it easy to stack elements together and apply a space between them.

[`💬 Feedback`](https://github.com/yamankatby/react-native-flex-layout/labels/stack)
[`🌱 Source`](https://github.com/yamankatby/react-native-flex-layout/blob/main/src/Stack.tsx)

## Import

```js
import { Stack, HStack, VStack } from 'react-native-flex-layout';
```

- **Stack:** Used to add spacing and/or dividers between items in the horizontal or vertical direction.
- **HStack:** Shorthand for `<Stack direction="row" />`.
- **VStack:** Shorthand for `<Stack direction="column" />`.

## Usage

To stack elements in horizontal or vertical direction only, use the `HStack` or `VStack` components. You can also use
the `Stack` component as well and pass the `direction` prop.

```js with-preview
import React from "react";
import { View } from "react-native";
import { HStack } from "@react-native-material/core";

const App = () => (
  <HStack m={4} spacing={6}>
    <View style={{ width: 40, height: 40, backgroundColor: "#faf089" }} />
    <View style={{ width: 40, height: 40, backgroundColor: "#ff6347" }} />
    <View style={{ width: 40, height: 40, backgroundColor: "#fed7e2" }} />
  </HStack>
);

export default App;
```

### Adding dividers

In some scenarios, you may want to add dividers between stacked elements. Pass the divider prop and set its value
to `true` or any custom React element.

```js with-preview
import React from "react";
import { View } from "react-native";
import { VStack, Box, Divider } from "@react-native-material/core";

const App = () => (
  <VStack m={4} spacing={2} divider={true}>
    <Box h={12} style={{ backgroundColor: "#faf089" }} />
    <Box h={12} style={{ backgroundColor: "#ff6347" }} />
    <Box h={12} style={{ backgroundColor: "#fed7e2" }} />
  </VStack>
);

export default App;
```

### Stack items horizontally

Pass the `direction` and set it to `row`. Optionally, you can use `align` and `justify` to adjust the alignment and
distribution of the items.

### Notes on Stack vs Flex

Stack's primary use case is to lay items out and control the spacing between each item. If you have a more complicated
use case, such as changing the margin on the last child, you can combine `Stack` and `Flex` and
use `justify-content: space-between` for more control of the layout.

## Props

| Prop                 | Type                                                                | Description                                                                                        |
|----------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| `spacing`            | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | The spacing between items in the stack.                                                            |
| `divider`            | `React.ReactElement`                                                | If `true`, each stack item will show a divider.                                                    |
| `dividerStyle`       | `StyleProp<ViewStyle>`                                              | A style object to apply to each divider.                                                           |
| `shouldWrapChildren` | `boolean`                                                           | If `true`, the children will be wrapped in a `Box` and the `Box` will take the spacing properties. |

[`...FlexProps`](/docs/layout/flex#props) , [`...SelectorProps`](/docs/layout/selector#props)

