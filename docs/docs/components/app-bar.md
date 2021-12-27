# App Bar

The App Bar displays information and actions relating to the current screen.

```js with-preview
import React from "react";
import { AppBar } from "@react-native-material/core";

const App = () => <AppBar title="Screen title" />;

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
            icon={<Avatar label="Yaman KATBY" size={28} />}
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
<AppBar color="primary" enableColorOnDark />
```

### Center the Title and the Subtitle

```js with-preview
import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <AppBar
    title="Title"
    subtitle="Lorem ipsum"
    centerTitle={true}
    leading={props => (
      <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    )}
    trailing={props => (
      <IconButton
        icon={props => <Icon name="dots-vertical" {...props} />}
        {...props}
      />
    )}
  />
);

export default App;
```

## Props

`variant`

Whether you want to place the AppBar at the top or the bottom of the screen.

Type: "top" | "bottom";

Default: "top"

Optional: Yes

---

`title`

The primary text to display in the AppBar.

Type: string | React.ReactNode | ((props: { color: string }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`subtitle`

The secondary text to display in the AppBar.

Type: string | React.ReactNode | ((props: { color: string }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`centerTitle`

Whether the `title` and `subtitle` should be centered.

Type: boolean;

Default: false

Optional: Yes

---

`leading`

The element displayed before the `title`.

Type: React.ReactNode | ((props: { color: string; size: number }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`trailing`

The element displayed after the `title`.

Type: React.ReactNode | ((props: { color: string; size: number }) =\> React.ReactNode | null) | null;

Optional: Yes

---

`color`

The fill color of the AppBar's background.

Type: Color;

Default: "primary"

Optional: Yes

---

`tintColor`

The color of the AppBar's content (title, subtitle, icons, etc.).

Type: Color;

Optional: Yes

---

`transparent`

Whether the AppBar's background is transparent.

Type: boolean;

Default: false

Optional: Yes

---

`enableColorOnDark`

If `true`, the `color` prop will be applied in dark mode.

Type: boolean;

Default: false

Optional: Yes

---

`contentContainerStyle`

The style of the content container view.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`titleContentStyle`

The style of the title and subtitle container view.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`titleStyle`

The style of the title text.

Type: StyleProp<TextStyle\>;

Optional: Yes

---

`subtitleStyle`

The style of the subtitle text.

Type: StyleProp<TextStyle\>;

Optional: Yes

---

`leadingContainerStyle`

The style of the leading element container view.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`trailingContainerStyle`

The style of the trailing element container view.

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`...SurfaceProps`
