# Button

Buttons allow users to take actions, and make choices, with a single tap.

```js with-preview
import React from "react";
import { Stack, Button } from "@react-native-material/core";

const App = () => (
  <Stack fill center spacing={4}>
    <Button title="Contained" />
    <Button variant="outlined" title="Outlined" />
    <Button variant="text" title="Text" />
  </Stack>
);

export default App;
```

Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

- Modal windows
- Forms
- Cards
- Toolbars

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Button)
[`🎨 Material Design`](https://material.io/components/buttons)

## Import

```js
import { Button } from "@react-native-material/core";
```

## Disabled

```js with-preview
import React from "react";
import { Stack, Button } from "@react-native-material/core";

const App = () => (
  <Stack fill center spacing={4}>
    <Button title="Contained" disabled />
    <Button variant="outlined" title="Outlined" disabled />
    <Button variant="text" title="Text" disabled />
  </Stack>
);

export default App;
```

## Coloring

```js with-preview
import React from "react";
import { Stack, Button } from "@react-native-material/core";

const App = () => (
  <Stack fill center spacing={4}>
    <Button variant="text" title="Button" color="secondary" />
    <Button title="Button" color="error" />
    <Button variant="outlined" title="Button" color="#d4ac2d" />
    <Button title="Button" color="pink" tintColor="red" />
  </Stack>
);

export default App;
```

## Icon

```js with-preview
import React from "react";
import { Stack, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <Stack fill center spacing={4}>
    <Button
      variant="outlined"
      title="Delete"
      leading={props => <Icon name="delete" {...props} />}
    />
    <Button title="Send" trailing={props => <Icon name="send" {...props} />} />
  </Stack>
);

export default App;
```

## Uppercase

```js with-preview
import React from "react";
import { Stack, Button } from "@react-native-material/core";

const App = () => (
  <Stack fill center spacing={4}>
    <Button title="Button" />
    <Button title="Button" uppercase={false} />
  </Stack>
);

export default App;
```

## Disable Elevation

```js with-preview
import React from "react";
import { Stack, Button } from "@react-native-material/core";

const App = () => (
  <Stack fill center spacing={4}>
    <Button title="Button" />
    <Button title="Disable Elevation" disableElevation />
  </Stack>
);

export default App;
```

## Loading

```js with-preview
import React, { useState } from "react";
import { Stack, Button, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Stack fill center spacing={4}>
      <Switch value={loading} onValueChange={setLoading} />
      <Button
        title="Button"
        leading={props => <Icon name="plus" {...props} />}
        loading={loading}
      />
      <Button
        title="Button"
        trailing={props => <Icon name="plus" {...props} />}
        loading={loading}
        loadingIndicatorPosition="trailing"
      />
      <Button
        title="Button"
        loading={loading}
        loadingIndicatorPosition="overlay"
      />
    </Stack>
  );
};

export default App;
```

### Custom Loading Indicator

```js with-preview
import React, { useState } from "react";
import { Stack, Button, Text, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Stack fill center spacing={4}>
      <Switch value={loading} onValueChange={setLoading} />
      <Button
        title="Button"
        leading={props => <Icon name="plus" {...props} />}
        loading={loading}
        loadingIndicator="⏰"
      />
      <Button
        title="Custom Text"
        loading={loading}
        loadingIndicator="Loading..."
        loadingIndicatorPosition="overlay"
      />
      <Button
        title="Button"
        loading={loading}
        loadingIndicator={props => (
          <Text
            style={{
              backgroundColor: props.color,
              color: "black",
              borderRadius: 50,
              width: 24,
              height: 24,
              textAlign: "center",
            }}
          >
            ...
          </Text>
        )}
        loadingIndicatorPosition="overlay"
      />
      <Button
        title="Button"
        trailing={props => <Icon name="plus" {...props} />}
        loading={loading}
        loadingIndicator="⏰"
        loadingIndicatorPosition="trailing"
      />
    </Stack>
  );
};

export default App;
```

## Props

`title`

The text content of the button.

Type: string | React.ReactNode | ((props: { color: string }) =\> React.ReactNode | null) | null;

Optional: No

---

`leading`

The element placed before the `title`.

Type: React.ReactNode | ((props: { color: string; size: number }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`trailing`

The element placed after the `title`.

Type: React.ReactNode | ((props: { color: string; size: number }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`variant`

The style of the button. - `text`: Text buttons are typically used for less important actions (low emphasis). - `outlined`: Outlined buttons are used for more emphasis than text buttons due to the stroke (medium emphasis). - `contained`: Contained buttons have more emphasis, as they use a color fill and shadow (high emphasis).

Type: "text" | "outlined" | "contained";

Default: "contained"

Optional: Yes

---

`color`

The main color of the button.
for `contained` buttons, this is the background color.
for `outlined` and `text` buttons, this is the color of the content (text, icons, etc.).

Type: Color;

Default: "primary"

Optional: Yes

---

`tintColor`

The color of the `contained` buttons content (text, icons, etc.). No effect on `outlined` and `text` buttons.

Type: Color;

Optional: Yes

---

`compact`

Smaller horizontal padding, useful for `text` buttons in a row.

Type: boolean;

Default: false

Optional: Yes

---

`disableElevation`

If `true`, no shadow is used. No effect on `outlined` and `text` buttons.

Type: boolean;

Default: false

Optional: Yes

---

`uppercase`

If `false`, the button title is not rendered in upper case. No effect if you pass a React.Node as the `title` prop.

Type: boolean;

Default: true

Optional: Yes

---

`loading`

Whether to show a loading indicator.

Type: boolean;

Default: false

Optional: Yes

---

`loadingIndicatorPosition`

The place where the loading indicator should appear. - `leading`: The indicator will replace the `leading` element. - `trailing`: The indicator will replace the `trailing` element. - `overlay`: The indicator will be added as an overlay over the button.

Type: "leading" | "trailing" | "overlay";

Default: "leading"

Optional: Yes

---

`loadingIndicator`

A React.Node to replace the default loading indicator. Also, you can pass a string to show a text (e.g. "Loading...").

Type: string | React.ReactNode | ((props: { color: string }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`pressableContainerStyle`

The style of the button's pressable component container.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`contentContainerStyle`

The style of the button's container.

Type: PressableProps["style"];

Optional: Yes

---

`titleStyle`

The style of the button's text. No effect if you pass a React.Node as the `title` prop.

Type: StyleProp<TextStyle\>;

Optional: Yes

---

`leadingContainerStyle`

The style of the button's leading element container.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`trailingContainerStyle`

The style of the button's trailing element container.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`loadingOverlayContainerStyle`

The style of the button's loading indicator overlay view. No effect if `loadingIndicatorPosition` is not `overlay`.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`...SurfaceProps`, `...PressableProps`, `...PressableProps`
