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
  <Box w={32} h={32} m={4} style={{ backgroundColor: "tomato" }} />
);

export default App;
```

## Props

| Prop   | Type                                                                | Description                                           |
|--------|---------------------------------------------------------------------|-------------------------------------------------------|
| `h`    | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `height` style property.            |
| `minH` | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `minHeight` style property.         |
| `maxH` | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `maxHeight` style property.         |
| `w`    | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `width` style property.             |
| `minW` | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `minWidth` style property.          |
| `maxW` | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `maxWidth` style property.          |
| `m`    | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `margin` style property.            |
| `mt`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `marginTop` style property.         |
| `mr`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `marginRight` style property.       |
| `mb`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `marginBottom` style property.      |
| `ml`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `marginLeft` style property.        |
| `ms`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `marginStart` style property.       |
| `me`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `marginEnd` style property.         |
| `mh`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `marginHorizontal` style property.  |
| `mv`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `marginVertical` style property.    |
| `p`    | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `padding` style property.           |
| `pt`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `paddingTop` style property.        |
| `pr`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `paddingRight` style property.      |
| `pb`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `paddingBottom` style property.     |
| `pl`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `paddingLeft` style property.       |
| `ps`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `paddingStart` style property.      |
| `pe`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `paddingEnd` style property.        |
| `ph`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `paddingHorizontal` style property. |
| `pv`   | [`Spacing`](https://react-native-flex-layout.js.org/guides/spacing) | Shorthand for the `paddingVertical` style property.   |

[`...ViewProps`](https://reactnative.dev/docs/view#props)
