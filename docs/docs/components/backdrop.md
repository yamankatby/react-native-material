# Backdrop

A backdrop appears behind all other surfaces in an app, displaying contextual and actionable content.

```js with-preview
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Backdrop, BackdropSubheader, Appbar, IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const App = () => {
  const [revealed, setRevealed] = useState(false);
  return (
    <Backdrop
      revealed={revealed}
      header={
        <Appbar
          title="Screen title"
          transparent
          leading={props => (
            <IconButton
              color={props.color}
              icon={<Icon name={revealed ? "close" : "menu"} size={24} color={props.color}/>}
              onPress={() => setRevealed(prevState => !prevState)}
            />
          )}
        />
      }
      backLayer={<View style={{ height: 120 }}/>}
    >
      <BackdropSubheader title="Subheader"/>
    </Backdrop>
  );
};

export default App;
```

A backdrop is composed of two surfaces: a back layer and a front layer. The back layer displays actions and context, and
these control and inform the front layer's content.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Backdrop)
[`🎨 Material Design`](https://material.io/components/backdrop)