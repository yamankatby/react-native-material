# Text Input

Text inputs allow users to enter text into a UI. They typically appear in forms and dialogs.

Text inputs come in three variants:

- Filled text inputs
- Outlined text inputs
- Standard text inputs

```js with-preview
import React from "react";
import { VStack, TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack spacing={2} style={{ margin: 16 }}>
    <TextInput
      label="Label"
      leading={props => <Icon name="account" {...props} />}
    />
    <TextInput
      label="Label"
      variant="outlined"
      trailing={props => (
        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
      )}
    />
    <TextInput label="Label" variant="standard" />
  </VStack>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20TextInput)
[`🎨 Material Design`](https://material.io/components/text-fields)

## Import

```js
import { TextInput } from "@react-native-material/core";
```

## Usage

Here's a basic usage example of the Input component:

### Filled

```js with-preview
import React from "react";
import { TextInput } from "@react-native-material/core";

const App = () => <TextInput label="Label" style={{ margin: 16 }} />;

export default App;
```

### Outlined

```js with-preview
import React from "react";
import { TextInput } from "@react-native-material/core";

const App = () => (
  <TextInput variant="outlined" label="Label" style={{ margin: 16 }} />
);

export default App;
```

### Standard

```js with-preview
import React from "react";
import { TextInput } from "@react-native-material/core";

const App = () => (
  <TextInput variant="standard" label="Label" style={{ margin: 16 }} />
);

export default App;
```

## Props

`variant`

The variant to use.

Type: "filled" | "outlined" | "standard";

Default: "filled"

Optional: Yes

---

`label`

The label to display.

Type: string;

Optional: Yes

---

`leading`

The element placed before the text input.

Type: React.ReactNode | ((props: { color: string; size: number }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`trailing`

The element placed after the text input.

Type: React.ReactNode | ((props: { color: string; size: number }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`color`

The color of the text input's content (e.g. label, icons, selection).

Type: PaletteColor;

Default: "primary"

Optional: Yes

---

`helperText`

The helper text to display.

Type: string;

Optional: Yes

---

`onMouseEnter`

Callback function to call when user moves pointer over the input.

Type: (event: NativeSyntheticEvent<TargetedEvent\>) =\> void;

Optional: Yes

---

`onMouseLeave`

Callback function to call when user moves pointer away from the input.

Type: (event: NativeSyntheticEvent<TargetedEvent\>) =\> void;

Optional: Yes

---

`style`

The style of the container view.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`inputContainerStyle`

The style of the text input container view.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`inputStyle`

The style of the text input.

Type: RNTextInputProps["style"];

Optional: Yes

---

`leadingContainerStyle`

The style of the text input's leading element container.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`trailingContainerStyle`

The style of the text input's trailing element container.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`...TextInputProps`, `...TextInputProps`
