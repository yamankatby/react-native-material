# Flex

Flex is a container view extends React Native's flex-box properties and comes with helpful style shorthand.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Flex } from "@react-native-material/core";

const App = () => (
  <Flex fill>
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

- `flex` is `fill` (if `true` is passed , it will be `1`)
- `flexDirection` is `direction`
- `justifyContent` is `justify`
- `alignItems` is `items`
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
  <Flex fill direction="row" justify="center" items="center">
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
  <Flex fill>
    <View style={{ height: 50, backgroundColor: "#ff6347" }} />
    <Spacer />
    <View style={{ height: 50, backgroundColor: "#48bb78" }} />
  </Flex>
);

export default App;
```

## Props

`fill`

Determines how much the `<View />` will fill on the available space along the main axis.
Shorthand for `flex` (If `true` is passed, `flex` will be set to `1`).

Type: boolean | number;

Optional: Yes

---

`inline`

Shorthand for `{ flexDirection: "row }"`.

Type: boolean;

Optional: Yes

---

`center`

Shorthand for `{ justifyContent: "center", alignItems: "center" }`.

Type: boolean;

Optional: Yes

---

`direction`

Controls the direction in which the children of the `<View />` are laid out.
Shorthand for `flexDirection`.

Type: FlexStyle["flexDirection"];

Optional: Yes

---

`justify`

Describes how to align children within the main axis of the `<View />`.
Shorthand for `justifyContent`.

Type: "start" | "end" | "center" | "between" | "around" | "evenly";

Optional: Yes

---

`items`

Describes how to align children within the cross axis of the `<View />`.
Shorthand for `alignItems`.

Type: "start" | "end" | "center" | "stretch" | "baseline";

Optional: Yes

---

`self`

Shorthand for `alignSelf`.

Type: "auto" | "start" | "end" | "center" | "stretch" | "baseline";

Optional: Yes

---

`content`

Defines the distribution of lines along the cross-axis. This only has effect when items are wrapped to multiple lines using `flexWrap`.
Shorthand for `alignContent`.

Type: "start" | "end" | "center" | "stretch" | "between" | "around";

Optional: Yes

---

`wrap`

Controls what happens when children overflow the size of the `<View />` along the main axis.
Shorthand for `flexWrap` (If `true` is passed, `flexWrap` will be set to `"wrap"`).

Type: boolean | FlexStyle["flexWrap"];

Optional: Yes

---

`basis`

Shorthand for `flexBasis`.

Type: FlexStyle["flexBasis"];

Optional: Yes

---

`grow`

Shorthand for `flexGrow`.

Type: FlexStyle["flexGrow"];

Optional: Yes

---

`shrink`

Shorthand for `flexShrink`.

Type: FlexStyle["flexShrink"];

Optional: Yes

---

`...ViewProps`
