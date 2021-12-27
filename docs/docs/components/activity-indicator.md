# Activity Indicator

Activity Indicators provide a visual cue that an action is either processing, awaiting a course of change or a result.

```js with-preview
import React from "react";
import { Stack, ActivityIndicator } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <Stack fill center spacing={4}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="error" />
    <ActivityIndicator size="large" color="#00ff00" />
  </Stack>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20ActivityIndicator)

## Import

```js
import { ActivityIndicator } from "@react-native-material/core";
```

## Usage

Here are some examples of where you might use `ActivityIndicator`.

```js with-preview
import React from "react";
import {
  AppBar,
  Stack,
  ActivityIndicator,
  Button,
  FAB,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <>
    <AppBar
      title="Title"
      leading={props => (
        <IconButton
          icon={props => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
      trailing={props => (
        <Stack center style={{ width: 48, height: 48 }}>
          <ActivityIndicator size="small" color="on-primary" />
        </Stack>
      )}
    />
    <Stack fill center>
      <Button title="Button" loading disabled />
    </Stack>
    <FAB
      loading
      style={{ position: "absolute", end: 16, bottom: 16 }}
      disabled
    />
  </>
);

export default App;
```

## Props

`color`

The color of the spinner.

Type: Color;

Default: "primary"

Optional: Yes

---

`...ActivityIndicatorProps`
