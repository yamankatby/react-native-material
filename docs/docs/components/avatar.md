---
title: "Avatar"
description: "Avatars are found throughout material design with uses in everything from tables to dialog menus."
---

# Avatar

Avatars are found throughout material design with uses in everything from tables to dialog menus.

## Image avatars

```js
import React from "react";
import { View } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function App() {
  return (
    <View>
      <Avatar
        label="Remy Sharp"
        image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
      />
      <Avatar
        label="Travis Howard"
        image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }}
      />
      <Avatar
        label="Cindy Baker"
        image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }}
      />
    </View>
  );
}
```

## Letter avatars

```js
import React from "react";
import { View } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function App() {
  return (
    <View>
      <Avatar label="Remy Sharp"/>
      <Avatar label="Travis Howard" color="primary"/>
      <Avatar label="Cindy Baker" color="#342315"/>
    </View>
  );
}
```

You can use different background colors for the avatar. The following demo generates the color based on the name of the
person.

```js
import React from "react";
import { View } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function App() {
  return (
    <View>
      <Avatar label="Remy Sharp" autoColor/>
      <Avatar label="Travis Howard" autoColor/>
      <Avatar label="Cindy Baker" autoColor/>
    </View>
  );
}
```

## Sizes

You can change the size of the avatar with the size prop.

```js
import React from "react";
import { View } from "react-native";
import { Avatar } from "@react-native-material/core";

export default function App() {
  return (
    <View>
      <Avatar
        label="Remy Sharp"
        image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
        size={24}
      />
      <Avatar
        label="Remy Sharp"
        image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
      />
      <Avatar
        label="Remy Sharp"
        image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
        size={72}
      />
    </View>
  );
}
```

## Fallbacks

If there is an error loading the avatar image, the component falls back to an alternative in the following order:

- The icon if provided
- The initials of label if provided