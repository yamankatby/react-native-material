# List Item

Lists are continuous, vertical indexes of text or images.

```js with-preview
import React from "react";
import { ListItem } from "@react-native-material/core";

const App = () => (
  <>
    <ListItem title="List Item" />
    <ListItem title="List Item" />
    <ListItem title="List Item" />
  </>
);

export default App;
```

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20ListItem)
[`🎨 Material Design`](https://material.io/components/lists)

## Import

```js
import { ListItem } from "@react-native-material/core";
```

## Usage

Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions,
which are represented by icons and text.

## Basic List

```js with-preview
import React from "react";
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <>
    <ListItem
      title="Inbox"
      leading={<Icon name="inbox" size={24} />}
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
    <ListItem
      title="Drafts"
      leading={<Icon name="email-open" size={24} />}
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
    <ListItem
      title="Trash"
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
    <ListItem
      title="Spam"
      trailing={props => <Icon name="chevron-right" {...props} />}
    />
  </>
);

export default App;
```

## Secondary Text

```js with-preview
import React from "react";
import { ListItem } from "@react-native-material/core";

const App = () => (
  <>
    <ListItem
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    />
    <ListItem
      title="Summer BBQ"
      secondaryText="Wish I could come, but I'm out of town this…"
    />
    <ListItem
      title="Oui Oui"
      secondaryText="Do you have Paris recommendations? Have you ever…"
    />
  </>
);

export default App;
```

## Avatar

```js with-preview
import React from "react";
import { ListItem, Avatar } from "@react-native-material/core";

const App = () => (
  <>
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
      }
      title="Brunch this weekend?"
      secondaryText="I'll be in your neighborhood doing errands this…"
    />
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
      }
      title="Summer BBQ"
      secondaryText="Wish I could come, but I'm out of town this…"
    />
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
      }
      title="Oui Oui"
      secondaryText="Do you have Paris recommendations? Have you ever…"
    />
  </>
);

export default App;
```

## Props

`title`

Type: string;

Optional: Yes

---

`secondaryText`

Type: string;

Optional: Yes

---

`overline`

Type: string;

Optional: Yes

---

`meta`

Type: string;

Optional: Yes

---

`leadingMode`

Type: "icon" | "avatar" | "image";

Optional: Yes

---

`leading`

Type: React.ReactElement;

Optional: Yes

---

`trailing`

Type: React.ReactElement | ((props: { color: string; size: number }) =\> React.ReactElement | null) | null;

Optional: Yes

---

`...SurfaceProps`, `...PressableProps`
