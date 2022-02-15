---
sidebar_position: 1
---

# Box

The `Box` component serves as a wrapper component for most of the styling properties.

[`💬 Feedback`](https://github.com/yamankatby/react-native-flex-layout/labels/box)
[`🌱 Source`](https://github.com/yamankatby/react-native-flex-layout/blob/main/src/Box.tsx)

## Import

```js
import { Box } from "@react-native-material/core";
```

## Usage

```js with-preview
import React from "react";
import { Box } from "@react-native-material/core";

const App = () => (
  <Box w={64} h={64} p={16} style={{ backgroundColor: "blue" }} />
);

export default App;
```

## Props

| Prop   | Type                         | Description                                           |
|--------|------------------------------|-------------------------------------------------------|
| `h`    | [`Spacing`](/guides/spacing) | Shorthand for the `height` style property.            |
| `minH` | [`Spacing`](/guides/spacing) | Shorthand for the `minHeight` style property.         |
| `maxH` | [`Spacing`](/guides/spacing) | Shorthand for the `maxHeight` style property.         |
| `w`    | [`Spacing`](/guides/spacing) | Shorthand for the `width` style property.             |
| `minW` | [`Spacing`](/guides/spacing) | Shorthand for the `minWidth` style property.          |
| `maxW` | [`Spacing`](/guides/spacing) | Shorthand for the `maxWidth` style property.          |
| `m`    | [`Spacing`](/guides/spacing) | Shorthand for the `margin` style property.            |
| `mt`   | [`Spacing`](/guides/spacing) | Shorthand for the `marginTop` style property.         |
| `mr`   | [`Spacing`](/guides/spacing) | Shorthand for the `marginRight` style property.       |
| `mb`   | [`Spacing`](/guides/spacing) | Shorthand for the `marginBottom` style property.      |
| `ml`   | [`Spacing`](/guides/spacing) | Shorthand for the `marginLeft` style property.        |
| `ms`   | [`Spacing`](/guides/spacing) | Shorthand for the `marginStart` style property.       |
| `me`   | [`Spacing`](/guides/spacing) | Shorthand for the `marginEnd` style property.         |
| `mh`   | [`Spacing`](/guides/spacing) | Shorthand for the `marginHorizontal` style property.  |
| `mv`   | [`Spacing`](/guides/spacing) | Shorthand for the `marginVertical` style property.    |
| `p`    | [`Spacing`](/guides/spacing) | Shorthand for the `padding` style property.           |
| `pt`   | [`Spacing`](/guides/spacing) | Shorthand for the `paddingTop` style property.        |
| `pr`   | [`Spacing`](/guides/spacing) | Shorthand for the `paddingRight` style property.      |
| `pb`   | [`Spacing`](/guides/spacing) | Shorthand for the `paddingBottom` style property.     |
| `pl`   | [`Spacing`](/guides/spacing) | Shorthand for the `paddingLeft` style property.       |
| `ps`   | [`Spacing`](/guides/spacing) | Shorthand for the `paddingStart` style property.      |
| `pe`   | [`Spacing`](/guides/spacing) | Shorthand for the `paddingEnd` style property.        |
| `ph`   | [`Spacing`](/guides/spacing) | Shorthand for the `paddingHorizontal` style property. |
| `pv`   | [`Spacing`](/guides/spacing) | Shorthand for the `paddingVertical` style property.   |

[`...ViewProps`](https://reactnative.dev/docs/view#props)
