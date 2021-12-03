# Floating action button (FAB)

A floating action button (FAB) represents the primary action of a screen.

```js with-preview
import React from "react";
import { VStack, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <FAB icon={props => <Icon name="plus" {...props} />}/>
    <FAB
      icon={props => <Icon name="plus" {...props} />}
      color="primary"
      loading
    />
    <FAB
      variant="extended"
      icon={props => <Icon name="navigation" {...props} />}
      label="navigate"
      color="primary"
    />
  </VStack>
);

export default App;
```

A floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all
screen content, typically as a circular shape with an icon in its center. FABs come in three types: regular, mini, and
extended.

Only use a FAB if it is the most suitable way to present a screen's primary action.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Fab)
[`🎨 Material Design`](https://material.io/components/buttons-floating-action-button)

## Import

```js
import { FAB } from "@react-native-material/core";
```

## Variants

### Regular

```js with-preview
import React from "react";
import { VStack, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack flex justify="center" align="center">
    <FAB icon={props => <Icon name="star" {...props} />} color="primary"/>
  </VStack>
);

export default App;
```

### Extended

```js with-preview
import React from "react";
import { VStack, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <FAB variant="extended" label="Button" color="primary"/>
    <FAB
      variant="extended"
      icon={props => <Icon name="star" {...props} />}
      label="Button"
      color="primary"
    />
  </VStack>
);

export default App;
```

## Sizing

```js with-preview
import React from "react";
import { VStack, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack flex justify="center" align="center" spacing={4}>
    <FAB icon={props => <Icon name="account" {...props} />}/>
    <FAB icon={props => <Icon name="account" {...props} />} size="mini"/>
  </VStack>
);

export default App;
```

```js with-preview
import React from "react";
import { VStack, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  return (
    <VStack flex justify="center" align="center" spacing={4}>
      <FAB
        variant="extended"
        icon={props => <Icon name="heart" {...props} />}
        label="Button"
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="heart" {...props} />}
        label="Button"
        size="mini"
      />
    </VStack>
  );
};

export default App;
```

## Coloring

```js with-preview
import React from "react";
import { VStack, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <VStack style={{ flex: 1, paddingVertical: 16 }} justify="center" align="center" spacing={4}>
    <FAB icon={props => <Icon name="lock" {...props} />}/>
    <FAB
      variant="extended"
      icon={props => <Icon name="lock" {...props} />}
      label="Button"
      tintColor="red"
    />
    <FAB icon={props => <Icon name="lock" {...props} />} color="onPrimary"/>
    <FAB icon={props => <Icon name="lock" {...props} />} color="#FDCAE4"/>
    <FAB
      icon={props => <Icon name="lock" {...props} />}
      color="#FDCAE4"
      tintColor="yellow"
    />
  </VStack>
);

export default App;
```

## Loading

```js with-preview
import React, { useState } from "react";
import { VStack, FAB, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <VStack flex justify="center" align="center" spacing={4}>
      <Switch value={loading} onValueChange={setLoading}/>
      <FAB
        icon={props => <Icon name="plus" {...props} />}
        color="primary"
        loading={loading}
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Button"
        color="primary"
        loading={loading}
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Button"
        color="primary"
        loading={loading}
        loadingIndicatorPosition="overlay"
      />
      <FAB
        icon={props => <Icon name="plus" {...props} />}
        size="mini"
        color="primary"
        loading={loading}
      />
    </VStack>
  );
};

export default App;
```

### Custom Loading Indicator

```js with-preview
import React, { useState } from "react";
import { VStack, FAB, Text, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <VStack flex justify="center" align="center" spacing={4}>
      <Switch value={loading} onValueChange={setLoading}/>
      <FAB
        icon={props => <Icon name="plus" {...props} />}
        color="error"
        loading={loading}
        loadingIndicator="⏳"
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Button"
        color="onError"
        loading={loading}
        loadingIndicator={props => (
          <Text
            style={{
              width: 24,
              height: 24,
              backgroundColor: props.color,
              color: "white",
              borderRadius: 12,
              textAlign: "center",
            }}
          >
            ...
          </Text>
        )}
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="plus" {...props} />}
        label="Button"
        color="onError"
        loading={loading}
        loadingIndicator="Loading..."
        loadingIndicatorPosition="overlay"
      />
      <FAB
        icon={props => <Icon name="plus" {...props} />}
        size="mini"
        color="onError"
        loading={loading}
        loadingIndicator="⏰"
      />
    </VStack>
  );
};

export default App;
```

## Visibility

```js with-preview
import React, { useState } from "react";
import { VStack, FAB, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <VStack flex justify="center" align="center" spacing={4}>
      <Switch value={visible} onValueChange={setVisible}/>
      <FAB icon={props => <Icon name="plus" {...props} />} visible={visible}/>
      <FAB
        size="mini"
        icon={props => <Icon name="plus" {...props} />}
        visible={visible}
      />
      <FAB
        variant="extended"
        icon={props => <Icon name="navigation" {...props} />}
        label="Navigate"
        color="primary"
        visible={visible}
      />
    </VStack>
  );
};

export default App;
```
