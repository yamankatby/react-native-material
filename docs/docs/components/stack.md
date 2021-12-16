# Stack

Stack is a layout component that makes it easy to stack elements together and apply a space between them.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Stack)

## Import

```js
import { Stack, HStack, VStack } from "@react-native-material/core";
```

- **Stack**: Used to add spacing between elements in the horizontal or vertical direction. It supports responsive
  values.
- **HStack**: Used to add spacing between elements in horizontal direction, and centers them.
- **VStack**: Used to add spacing between elements in vertical direction only, and centers them.

## Usage

To stack elements in horizontal or vertical direction only, use the `HStack` or `VStack` components. You can also use
the `Stack` component as well and pass the `direction` prop.

```js with-preview
import React from "react";
import { View } from "react-native";
import { HStack } from "@react-native-material/core";

const App = () => (
  <HStack spacing={6} style={{ margin: 16 }}>
    <View style={{ width: 40, height: 40, backgroundColor: "#faf089" }} />
    <View style={{ width: 40, height: 40, backgroundColor: "#ff6347" }} />
    <View style={{ width: 40, height: 40, backgroundColor: "#fed7e2" }} />
  </HStack>
);

export default App;
```

### Adding dividers

In some scenarios, you may want to add dividers between stacked elements. Pass the `divider` prop and set its value to
the `Divider` or any custom React element.

```js with-preview
import React from "react";
import { View } from "react-native";
import { VStack, Divider } from "@react-native-material/core";

const App = () => (
  <VStack divider={<Divider />} spacing={2} style={{ margin: 16 }}>
    <View style={{ height: 40, backgroundColor: "#faf089" }} />
    <View style={{ height: 40, backgroundColor: "#ff6347" }} />
    <View style={{ height: 40, backgroundColor: "#fed7e2" }} />
  </VStack>
);

export default App;
```

## Props

`spacing`

The spacing to leave between items.

Type: number;

Default: 0

Optional: Yes

---

`divider`

Whether to show dividers between items. By default will use the `<Divider />` component. You can also pass a custom component.

Type: boolean | React.ReactNode;

Default: false

Optional: Yes

---

`...FlexProps`
