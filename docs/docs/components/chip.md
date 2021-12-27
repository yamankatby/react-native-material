# Chip

A chip is a small block of information, typically used to represent a category.

```js with-preview
import React from "react";
import { Stack, Chip } from "@react-native-material/core";

const App = () => (
  <Stack fill center spacing={4}>
    <Chip label="Filled" />
    <Chip variant="outlined" label="Outlined" />
  </Stack>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Chip)
[`🎨 Material Design`](https://material.io/components/chips)

## Import

```js
import { Chip } from "@react-native-material/core";
```

## Usage

Chips allow users to enter information, make selections, filter content, or trigger actions. While buttons are expected
to appear consistently and with familiar calls to action, chips should appear dynamically as a group of multiple
interactive elements.

```js with-preview
import React from "react";
import { Stack, Chip } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <Stack fill center spacing={4}>
    <Chip
      label="Filled"
      color="primary"
      leading={props => <Icon name="face" {...props} />}
    />
    <Chip
      variant="outlined"
      label="Outlined"
      color="primary"
      leading={props => <Icon name="face" {...props} />}
    />
  </Stack>
);

export default App;
```

## Props

`label`

The text to display in the chip.

Type: string | React.ReactNode | ((props: { color: string }) =\> React.ReactNode | null) | null;

Optional: No

---

`leading`

The element placed before the `label`.

Type: React.ReactNode | ((props: { color: string; size: number }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`trailing`

The element placed after the `label`.

Type: React.ReactNode | ((props: { color: string; size: number }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`variant`

The variant of the chip. - `filled`: A filled chip. - `outlined`: A solid background with a border.

Type: "filled" | "outlined";

Default: "filled"

Optional: Yes

---

`color`

The color of the chip.

Type: Color;

Optional: Yes

---

`contentContainerStyle`

The style of the chip's container.

Type: PressableProps["style"];

Optional: Yes

---

`labelStyle`

The style of the chip's label.

Type: StyleProp<TextStyle\>;

Optional: Yes

---

`leadingContainerStyle`

The style of the chip's leading element.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`trailingContainerStyle`

The style of the chip's trailing element.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`...ViewProps`, `...PressableProps`, `...PressableProps`
