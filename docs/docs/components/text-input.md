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
    <TextInput label="Label" variant="standard"/>
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
