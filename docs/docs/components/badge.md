# Badge

Badges are used to highlight an item's status for quick recognition.

```js with-preview
import React from "react";
import { Badge, Stack } from "@react-native-material/core";

const App = () => (
  <Stack fill center spacing={4}>
    <Badge label={4} />
    <Badge label={23} />
    <Badge label={123} color="primary" />
    <Badge label="error" color="error" />
  </Stack>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Badge)

## Import

```js
import { Badge } from "@react-native-material/core";
```

## Props

`label`

Type: number | string | React.ReactElement | ((props: { color: string }) =\> React.ReactElement | null) | null;

Optional: Yes

---

`showZero`

Type: boolean;

Optional: Yes

---

`max`

Type: number;

Optional: Yes

---

`visible`

Type: boolean;

Optional: Yes

---

`color`

Type: Color;

Optional: Yes

---

`tintColor`

Type: Color;

Optional: Yes

---

`style`

Type: Animated.AnimatedProps<ViewProps\>["style"];

Optional: Yes

---

`labelStyle`

Type: StyleProp<TextStyle\>;

Optional: Yes

---
