# Button

Buttons allow users to take actions, and make choices, with a single tap.

```js with-preview
import React from "react";
import { VStack, Button } from "@react-native-material/core";

const App = () => (
  <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
    <Button title="Contained"/>
    <Button variant="outlined" title="Outlined"/>
    <Button variant="text" title="Text"/>
  </VStack>
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
import { VStack, Button } from "@react-native-material/core";

const App = () => (
  <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
    <Button title="Contained" disabled/>
    <Button variant="outlined" title="Outlined" disabled/>
    <Button variant="text" title="Text" disabled/>
  </VStack>
);

export default App;
```

## Coloring

```js with-preview
import React from "react";
import { VStack, Button } from "@react-native-material/core";

const App = () => (
  <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
    <Button variant="text" title="Button" color="secondary"/>
    <Button title="Button" color="error"/>
    <Button variant="outlined" title="Button" color="#d4ac2d"/>
    <Button title="Button" color="pink" tintColor="red"/>
  </VStack>
);

export default App;
```

## Icon

```js with-preview
import React from "react";
import { VStack, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
    <Button variant="outlined" title="Delete" leading={props => <Icon name="delete" {...props} />}/>
    <Button title="Send" trailing={props => <Icon name="send" {...props} />}/>
  </VStack>
);

export default App;
```

## Uppercase

```js with-preview
import React from "react";
import { VStack, Button } from "@react-native-material/core";

const App = () => (
  <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
    <Button title="Button"/>
    <Button title="Button" uppercase={false}/>
  </VStack>
);

export default App;
```

## Disable Elevation

```js with-preview
import React from "react";
import { VStack, Button } from "@react-native-material/core";

const App = () => (
  <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
    <Button title="Button"/>
    <Button title="Disable Elevation" disableElevation/>
  </VStack>
);

export default App;
```

## Loading

```js with-preview
import React, { useState } from "react";
import { VStack, Button, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
      <Switch value={loading} onValueChange={setLoading}/>
      <Button title="Button" leading={props => <Icon name="plus" {...props} />} loading={loading}/>
      <Button
        title="Button"
        trailing={props => <Icon name="plus" {...props} />}
        loading={loading}
        loadingIndicatorPosition="trailing"
      />
      <Button title="Button" loading={loading} loadingIndicatorPosition="overlay"/>
    </VStack>
  );
};

export default App;
```

### Custom Loading Indicator

```js with-preview
import React, { useState } from "react";
import { VStack, Button, Text, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <VStack style={{ flex: 1 }} justify="center" align="center" spacing={4}>
      <Switch value={loading} onValueChange={setLoading}/>
      <Button
        title="Button"
        leading={props => <Icon name="plus" {...props} />}
        loading={loading}
        loadingIndicator="⏰"
      />
      <Button title="Custom Text" loading={loading} loadingIndicator="Loading..." loadingIndicatorPosition="overlay"/>
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
    </VStack>
  );
};

export default App;
```
