# Flex

Flex is a container view extends React Native's flex-box properties and comes with helpful style shorthand.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Flex } from "@react-native-material/core";

const App = () => (
  <Flex flex>
    <View style={{ height: 50, backgroundColor: "#faf089" }} />
    <View style={{ height: 100, backgroundColor: "#ff6347" }} />
    <View style={{ flex: 1, backgroundColor: "#fed7e2" }} />
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
    <View style={{ width: 80, height: 80, backgroundColor: "#faf089" }} />
    <View style={{ width: 80, height: 80, backgroundColor: "#ff6347" }} />
    <View style={{ width: 80, height: 80, backgroundColor: "#fed7e2" }} />
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
    <View style={{ height: 50, backgroundColor: "#ff6347" }} />
    <Spacer />
    <View style={{ height: 50, backgroundColor: "#48bb78" }} />
  </Flex>
);

export default App;
```

## Props

`flex`

Define how your items are going to “fill” over the available space along your main axis.

Type: boolean | FlexStyle["flex"];

Optional: Yes

---

`direction`

Shorthand for `flexDirection` style property.
@type FlexStyle["flexDirection"]

Type: FlexStyle["flexDirection"];

Default: "column"

Optional: Yes

---

`justify`

Shorthand for `justifyContent` style property.
@type FlexStyle["justifyContent"]

Type: FlexStyle["justifyContent"];

Default: "flex-start"

Optional: Yes

---

`align`

Shorthand for `alignItems` style property.
@type FlexStyle["alignItems"]

Type: FlexStyle["alignItems"];

Default: "stretch"

Optional: Yes

---

`self`

Shorthand for `alignSelf` style property.
@type FlexStyle["alignSelf"]

Type: FlexStyle["alignSelf"];

Optional: Yes

---

`content`

Shorthand for `alignContent` style property.
@type FlexStyle["alignContent"]

Type: FlexStyle["alignContent"];

Default: "flex-start"

Optional: Yes

---

`wrap`

Shorthand for `flexWrap` style property.
@type FlexStyle["flexWrap"]

Type: FlexStyle["flexWrap"];

Optional: Yes

---

`basis`

Shorthand for `flexBasis` style property.
@type FlexStyle["flexBasis"]

Type: FlexStyle["flexBasis"];

Optional: Yes

---

`grow`

Shorthand for `flexGrow` style property.
@type FlexStyle["flexGrow"]

Type: FlexStyle["flexGrow"];

Optional: Yes

---

`shrink`

Shorthand for `flexShrink` style property.
@type FlexStyle["flexShrink"]

Type: FlexStyle["flexShrink"];

Default: 0

Optional: Yes

---

`...ViewProps`
