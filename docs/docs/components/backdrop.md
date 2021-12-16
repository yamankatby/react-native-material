# Backdrop

A backdrop appears behind all other surfaces in an app, displaying contextual and actionable content.

```js with-preview
import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Backdrop,
  BackdropSubheader,
  AppBar,
  IconButton,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => {
  const [revealed, setRevealed] = useState(false);
  return (
    <Backdrop
      revealed={revealed}
      header={
        <AppBar
          title="Screen title"
          transparent
          leading={props => (
            <IconButton
              icon={props => (
                <Icon name={revealed ? "close" : "menu"} {...props} />
              )}
              onPress={() => setRevealed(prevState => !prevState)}
              {...props}
            />
          )}
        />
      }
      backLayer={<View style={{ height: 120 }} />}
    >
      <BackdropSubheader title="Subheader" />
    </Backdrop>
  );
};

export default App;
```

A backdrop is composed of two surfaces: a back layer and a front layer. The back layer displays actions and context, and
these control and inform the front layer's content.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Backdrop)
[`🎨 Material Design`](https://material.io/components/backdrop)

## Import

```js
import { Backdrop, BackdropSubheader } from "@react-native-material/core";
```

## Props

`revealed`

Type: boolean;

Optional: Yes

---

`header`

Type: React.ReactElement | null;

Optional: Yes

---

`headerHeight`

Type: number;

Optional: Yes

---

`backLayer`

Type: React.ReactElement | null;

Optional: Yes

---

`backLayerHeight`

Type: number;

Optional: Yes

---

`subheader`

Type: React.ReactElement | null;

Optional: Yes

---

`subheaderHeight`

Type: number;

Optional: Yes

---

`style`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`headerContainerStyle`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`backLayerContainerStyle`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`frontLayerContainerStyle`

Type: Animated.AnimatedProps<ViewProps\>["style"];

Optional: Yes

---

`subheaderContainerStyle`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---
