# Switch

Switches toggle the state of a single item on or off.

```js with-preview
import React, { useState } from "react";
import { Stack, Switch } from "@react-native-material/core";

const App = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Stack fill center spacing={4}>
      <Switch value={checked} onValueChange={() => setChecked(!checked)} />
      <Switch disabled />
    </Stack>
  );
};

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Switch)

## Import

```js
import { Switch } from "@react-native-material/core";
```

## Usage

Switches are the preferred way to adjust settings on mobile.

Use switches to:

- Toggle a single item on or off, on mobile and tablet
- Immediately activate or deactivate something

```js with-preview
import React, { useState } from "react";
import { ListItem, Switch } from "@react-native-material/core";

const App = () => {
  const [checked, setChecked] = useState(true);
  const [enabled, setEnabled] = useState(true);
  return (
    <>
      <ListItem
        title="List Item"
        trailing={
          <Switch value={checked} onValueChange={() => setChecked(!checked)} />
        }
        onPress={() => setChecked(!checked)}
      />
      <ListItem
        title="List Item"
        trailing={
          <Switch value={enabled} onValueChange={() => setEnabled(!enabled)} />
        }
        onPress={() => setEnabled(!enabled)}
      />
      <ListItem title="List Item" trailing={<Switch disabled />} disabled />
    </>
  );
};

export default App;
```

## Props

`tintColor`

Type: PaletteColor;

Optional: Yes

---

`...SwitchProps`
