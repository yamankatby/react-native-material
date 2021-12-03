# Flex

Flex is a container view extends React Native's flex-box properties and comes with helpful style shorthand.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Flex } from "@react-native-material/core";

const App = () => (
  <Flex flex>
    <View style={{ height: 50, backgroundColor: "#faf089" }}/>
    <View style={{ height: 100, backgroundColor: "#ff6347" }}/>
    <View style={{ flex: 1, backgroundColor: "#fed7e2" }}/>
  </Flex>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Flex)

## Import

```js
import { Flex, Spacer } from "@react-native-material/core";
```

- `Flex`: Flex container.
- `Spacer`: Creates an adjustable, empty space that can be used to tune the spacing between child elements within `Flex`
  .

## Usage

Using the Flex component, here are some helpful shorthand props:

- `flex` is `flex` (if `true` is passed , it will be `1`)
- `flexDirection` is `direction`
- `justifyContent` is `justify`
- `alignItems` is `align`
- `alignSelf` is `self`
- `alignContent` is `content`
- `flexWrap` is `wrap`
- `flexBasis` is `basis`
- `flexGrow` is `grow`
- `flexShrink` is `shrink`

While you can pass the verbose props, using the shorthand can save you some time.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Flex } from "@react-native-material/core";

const App = () => (
  <Flex flex direction="row" justify="center" align="center">
    <View style={{ width: 80, height: 80, backgroundColor: "#faf089" }}/>
    <View style={{ width: 80, height: 80, backgroundColor: "#ff6347" }}/>
    <View style={{ width: 80, height: 80, backgroundColor: "#fed7e2" }}/>
  </Flex>
);

export default App;
```

### Using the Spacer

As an alternative to `Stack`, you can combine `Flex` and `Spacer` to create stackable and responsive layouts.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Flex, Spacer } from "@react-native-material/core";

const App = () => (
  <Flex flex>
    <View style={{ height: 50, backgroundColor: "#ff6347" }}/>
    <Spacer/>
    <View style={{ height: 50, backgroundColor: "#48bb78" }}/>
  </Flex>
);

export default App;
```
