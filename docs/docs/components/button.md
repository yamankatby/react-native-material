# Button

Buttons allow users to take actions, and make choices, with a single tap.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Button } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Button title="Contained" onPress={() => undefined}/>
    <Button variant="outlined" title="Outlined" style={{ marginTop: 16 }} onPress={() => undefined}/>
    <Button variant="text" title="Text" style={{ marginTop: 16 }} onPress={() => undefined}/>
  </View>
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

## Disabled

```js with-preview
import React from "react";
import { View } from "react-native";
import { Button } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Button title="Contained" disabled onPress={() => undefined}/>
    <Button variant="outlined" title="Outlined" disabled style={{ marginTop: 16 }} onPress={() => undefined}/>
    <Button variant="text" title="Text" disabled style={{ marginTop: 16 }} onPress={() => undefined}/>
  </View>
);

export default App;
```

## Coloring

```js with-preview
import React from "react";
import { View } from "react-native";
import { Button } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Button variant="text" title="Button" color="secondary" onPress={() => undefined}/>
    <Button title="Button" color="error" style={{ marginTop: 16 }} onPress={() => undefined}/>
    <Button variant="outlined" title="Button" color="#d4ac2d" style={{ marginTop: 16 }} onPress={() => undefined}/>
    <Button title="Button" color="pink" tintColor="red" style={{ marginTop: 16 }} onPress={() => undefined}/>
  </View>
);

export default App;
```

## Icon

```js with-preview
import React from "react";
import { View } from "react-native";
import { Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Button
      variant="outlined"
      title="Delete"
      leading={props => <Icon name="delete" {...props} />}
      onPress={() => undefined}
    />
    <Button
      title="Send"
      trailing={props => <Icon name="send" {...props} />}
      style={{ marginTop: 16 }}
      onPress={() => undefined}
    />
  </View>
);

export default App;
```

## Uppercase

```js with-preview
import React from "react";
import { View } from "react-native";
import { Button } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Button title="Button" onPress={() => undefined}/>
    <Button title="Button" uppercase={false} style={{ marginTop: 16 }} onPress={() => undefined}/>
  </View>
);

export default App;
```

## Disable Elevation

```js with-preview
import React from "react";
import { View } from "react-native";
import { Button } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Button title="Button" onPress={() => undefined}/>
    <Button title="Disable Elevation" disableElevation style={{ marginTop: 16 }} onPress={() => undefined}/>
  </View>
);

export default App;
```

## Loading

```js with-preview
import React, { useState } from "react";
import { View } from "react-native";
import { Button, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Switch value={loading} onValueChange={setLoading}/>
      <Button
        title="Button"
        leading={props => <Icon name="plus" {...props} />}
        loading={loading}
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <Button
        title="Button"
        trailing={props => <Icon name="plus" {...props} />}
        loading={loading}
        loadingIndicatorPosition="trailing"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <Button
        title="Button"
        loading={loading}
        loadingIndicatorPosition="overlay"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
    </View>
  );
};

export default App;
```

### Custom Loading Indicator

```js with-preview
import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Switch value={loading} onValueChange={setLoading}/>
      <Button
        title="Button"
        leading={props => <Icon name="plus" {...props} />}
        loading={loading}
        loadingIndicator="⏰"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <Button
        title="Custom Text"
        loading={loading}
        loadingIndicator="Loading..."
        loadingIndicatorPosition="overlay"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
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
              textAlign: "center"
            }}
          >
            ...
          </Text>
        )}
        loadingIndicatorPosition="overlay"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
      <Button
        title="Button"
        trailing={props => <Icon name="plus" {...props} />}
        loading={loading}
        loadingIndicator="⏰"
        loadingIndicatorPosition="trailing"
        style={{ marginTop: 16 }}
        onPress={() => undefined}
      />
    </View>
  );
};

export default App;
```
