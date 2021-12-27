# Pressable

```js with-preview
import React from "react";
import { Pressable } from "@react-native-material/core";

const App = () => (
  <Pressable style={{ width: 80, height: 80, backgroundColor: "skyblue" }} />
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Pressable)

## Import

```js
import { Pressable } from "@react-native-material/core";
```

## Props

`pressEffect`

Type: "none" | "highlight" | "ripple" | "android-ripple";

Optional: Yes

---

`pressEffectColor`

Type: Color;

Optional: Yes

---

`onMouseEnter`

Type: (event: NativeSyntheticEvent<TargetedEvent\>) =\> void;

Optional: Yes

---

`onMouseLeave`

Type: (event: NativeSyntheticEvent<TargetedEvent\>) =\> void;

Optional: Yes

---

`style`

Type: any;

Optional: Yes

---

`...PressableProps`
