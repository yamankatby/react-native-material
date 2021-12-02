# App Bar

The App Bar displays information and actions relating to the current screen.

```js with-preview
import React from "react";
import { AppBar } from "@react-native-material/core";

const App = () => <AppBar title="Screen title"/>;

export default App;
```

The top App Bar provides content and actions related to the current screen. It's used for branding, screen titles,
navigation, and actions.

It can transform into a contextual action bar or be used as a navbar.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20AppBar)
[`🎨 Material Design`](https://material.io/components/app-bars-top)

## Import

```js
import { AppBar } from "@react-native-material/core";
```

## Usage

### Basic App Bar

```js with-preview
import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <AppBar
    title="Title"
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <HStack>
        <IconButton
          icon={props => <Icon name="magnify" {...props} />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
);

export default App;
```

App Bar with `Button` and `Avatar` components

```js with-preview
import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Avatar,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <AppBar
      title="Title"
      leading={props => (
        <IconButton
          icon={props => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
      trailing={props =>
        loggedIn ? (
          <IconButton
            icon={<Avatar label="Yaman KATBY" size={28}/>}
            onPress={() => setLoggedIn(!loggedIn)}
            {...props}
          />
        ) : (
          <Button
            variant="text"
            title="Login"
            compact
            style={{ marginEnd: 4 }}
            onPress={() => setLoggedIn(!loggedIn)}
            {...props}
          />
        )
      }
    />
  );
};

export default App;
```

### Bottom App Bar

```js with-preview
import React from "react";
import { AppBar, IconButton, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <AppBar
    variant="bottom"
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <IconButton
        icon={props => <Icon name="magnify" {...props} />}
        {...props}
      />
    )}
    style={{ position: "absolute", start: 0, end: 0, bottom: 0 }}
  >
    <FAB
      icon={props => <Icon name="plus" {...props} />}
      style={{ position: "absolute", top: -28, alignSelf: "center" }}
    />
  </AppBar>
);

export default App;
```

### Color and Tint Color

```js with-preview
import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <AppBar
    title="Title"
    color="pink"
    tintColor="red"
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <HStack>
        <IconButton
          icon={props => <Icon name="magnify" {...props} />}
          {...props}
        />
        <IconButton
          icon={props => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      </HStack>
    )}
  />
);

export default App;
```

### Enable Color On Dark

Following the [Material Design guidelines](https://material.io/design/color/dark-theme.html), the `color` prop has no
effect on the appearance of the app bar in dark mode. You can override this behavior by setting the `enableColorOnDark`
prop to `true`.

```js
<AppBar color="primary" enableColorOnDark/>
```
