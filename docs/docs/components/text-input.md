# Text Input

Text inputs let users enter and edit text.

```js with-preview
import React from "react";
import { View } from "react-native";
import { TextInput, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <View style={{ flex: 1, padding: 16 }}>
    <TextInput
      label="Label"
      leading={props => <Icon name="account" {...props} />}
    />
    <TextInput
      label="Label"
      variant="outlined"
      trailing={props => (
        <IconButton icon={<Icon name="eye" {...props} />} color={props.color} />
      )}
      style={{ marginTop: 8 }}
    />
    <TextInput label="Label" variant="standard" style={{ marginTop: 8 }} />
  </View>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20TextInput)
[`🎨 Material Design`](https://material.io/components/text-fields)

## Usage

Text inputs allow users to enter text into a UI. They typically appear in forms and dialogs.

## Variants

Text inputs come in three variants:

- Filled text inputs
- Outlined text inputs
- Standard text inputs

### Filled

```js with-preview
import React from "react";
import { TextInput } from "@react-native-material/core";

const App = () => <TextInput label="Label" style={{ margin: 16 }}/>;

export default App;
```

### Outlined

```js with-preview
import React from "react";
import { TextInput } from "@react-native-material/core";

const App = () => (
  <TextInput variant="outlined" label="Label" style={{ margin: 16 }}/>
);

export default App;
```

### Standard

```js with-preview
import React from "react";
import { TextInput } from "@react-native-material/core";

const App = () => (
  <TextInput variant="standard" label="Label" style={{ margin: 16 }}/>
);

export default App;
```
