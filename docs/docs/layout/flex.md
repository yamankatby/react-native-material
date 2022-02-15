---
sidebar_position: 2
---

# Flex

Flex is a container view extends React Native's flex-box properties and comes with helpful style shorthands.

[`💬 Feedback`](https://github.com/yamankatby/react-native-flex-layout/labels/flex)
[`🌱 Source`](https://github.com/yamankatby/react-native-flex-layout/blob/main/src/Flex.tsx)

## Import

```js
import { Flex, Spacer } from 'react-native-flex-layout';
```

- **Flex:** A `Box` with shorthands for `flex` properties.
- **Spacer:** Creates an adjustable, empty space that can be used to tune the spacing between child elements
  within `Flex`.

## Usage

### Using the Flex

Here are some helpful shorthand props:

- `fill` is `flex` (If `true` is passed, the `flex` style property will be set to `1`).
- `direction` is `flexDirection`.
- `justify` is `justifyContent`.
- `items` is `alignItems`.
- `self` is `alignSelf`.
- `content` is `alignContent`.
- `wrap` is `flexWrap`.
- `basis` is `flexBasis`.
- `grow` is `flexGrow`.
- `shrink` is `flexShrink`.

While you can pass the verbose props, using the shorthand can save you some time.

```jsx with-preview
import React from "react";
import { Flex, Box, Text } from "@react-native-material/core";

const App = () => (
  <Flex fill>
    <Box h={12} style={{ backgroundColor: 'lightgreen' }}>
      <Text>Box 1</Text>
    </Box>
    <Box h={12} style={{ backgroundColor: 'lightblue' }}>
      <Text>Box 2</Text>
    </Box>
    <Flex fill style={{ backgroundColor: 'tomato' }}>
      <Text>Box 3</Text>
    </Flex>
  </Flex>
);

export default App;
```

### Using the Spacer

As an alternative to `Stack`, you can combine `Flex` and `Spacer` to create stackable and responsive layouts.

```jsx with-preview
import React from "react";
import { Flex, Box, Spacer } from "@react-native-material/core";

const App = () => (
  <Flex fill>
    <Box h={12} style={{ backgroundColor: 'lightgreen' }}/>
    <Spacer />
    <Box h={12} style={{ backgroundColor: 'lightblue' }} />
  </Flex>
);

export default App;
```

## Props

| Prop        | Type                                                         | Description                                                         |
|-------------|--------------------------------------------------------------|---------------------------------------------------------------------|
| `fill`      | `boolean` / `number`                                         | Shorthand for the `flex` style property.                            |
| `inline`    | `boolean`                                                    | Shorthand for `{ flexDirection: "row" }`.                           |
| `center`    | `boolean`                                                    | Shorthand for `{ justifyContent: "center", alignItems: "center" }`. |
| `direction` | `row` / `column`                                             | Shorthand for the `flexDirection` style property.                   |
| `justify`   | `start` / `end`                                              | Shorthand for the `justifyContent` style property.                  |
| `items`     | `start` / `end`                                              | Shorthand for the `alignItems` style property.                      |
| `self`      | `auto` / `start` / `end` / `center` / `stretch` / `baseline` | Shorthand for the `alignSelf` style property.                       |
| `content`   | `start` / `end`                                              | Shorthand for the `alignContent` style property.                    |
| `wrap`      | `boolean` / `wrap` / `nowrap` / `wrap-reverse`               | Shorthand for the `flexWrap` style property.                        |
| `basis`     | `auto` / `content` / `number`                                | Shorthand for the `flexBasis` style property.                       |
| `grow`      | `number`                                                     | Shorthand for the `flexGrow` style property.                        |
| `shrink`    | `number`                                                     | Shorthand for the `flexShrink` style property.                      |

[`...BoxProps`](/docs/layout/box#props)
