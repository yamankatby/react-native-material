# Divider

A divider is a thin line that groups content in lists and layouts.

```js with-preview
import React from "react";
import { Divider } from "@react-native-material/core";

const App = () => <Divider style={{ marginTop: 60 }} leadingInset={16} />;

export default App;
```

Dividers separate content into clear groups.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Divider)
[`🎨 Material Design`](https://material.io/components/dividers)

## Import

```js
import { Divider } from "@react-native-material/core";
```

## Coloring

```js with-preview
import React from "react";
import { Divider } from "@react-native-material/core";

const App = () => (
  <Divider style={{ marginTop: 60 }} leadingInset={16} color="pink" />
);

export default App;
```

## Insets

```js with-preview
import React from "react";
import { Divider } from "@react-native-material/core";

const App = () => (
  <Divider style={{ marginTop: 60 }} leadingInset={32} trailingInset={32} />
);

export default App;
```

## Props

`color`

Type: string | undefined;

Optional: Yes

---

`inset`

Type: number | undefined;

Optional: Yes

---

`leadingInset`

Type: number | undefined;

Optional: Yes

---

`trailingInset`

Type: number | undefined;

Optional: Yes

---

`style`

Type: StyleProp<ViewStyle\> | undefined;

Optional: Yes

---
