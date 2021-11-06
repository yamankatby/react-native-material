# Text Input

Text inputs let users enter and edit text.

```js with-preview
import React from "react";
import { View } from "react-native";
import { TextInput } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1, padding: 16 }}>
    <TextInput label="Label"/>
    <TextInput label="Label" variant="outlined" style={{ marginTop: 8 }}/>
  </View>
);

export default App;
```

## Usage

Text inputs allow users to enter text into a UI. They typically appear in forms and dialogs.

## Variants

Text inputs come in two variants:

- Filled text inputs
- Outlined text inputs

Both types of text input use a container to provide a clear affordance for interaction, making the fields discoverable
in layouts.

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