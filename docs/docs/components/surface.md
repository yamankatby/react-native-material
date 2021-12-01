# Surface

Material surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state,
and express brand.

```js with-preview
import React from "react";
import { View } from "react-native";
import { Surface } from "@react-native-material/core";

const App = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Surface
      elevation={2}
      category="medium"
      style={{ width: 70, height: 70 }}
    />
    <Surface
      elevation={4}
      category="medium"
      style={{ width: 70, height: 70, marginTop: 16 }}
    />
    <Surface
      elevation={6}
      category="medium"
      style={{ width: 70, height: 70, marginTop: 16 }}
    />
  </View>
);

export default App;
```

Material surfaces have a rectangular shape by default, with 4dp rounded corners. Their shape can be customized by
adjusting their:

- Corner angles and curves
- Edge angles and curves

The size of shape changes can be subtle or more significant.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Surface)

## Elevation

```js with-preview
import React from "react";
import { ScrollView } from "react-native";
import { Surface, Text } from "@react-native-material/core";

const App = () => (
  <ScrollView
    style={{ flex: 1 }}
    contentContainerStyle={{ alignItems: "center", paddingVertical: 16 }}
  >
    <Surface
      elevation={0}
      category="medium"
      style={{
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>0</Text>
    </Surface>
    <Surface
      elevation={1}
      category="medium"
      style={{
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      }}
    >
      <Text>1</Text>
    </Surface>
    <Surface
      elevation={2}
      category="medium"
      style={{
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      }}
    >
      <Text>2</Text>
    </Surface>
    <Surface
      elevation={3}
      category="medium"
      style={{
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      }}
    >
      <Text>3</Text>
    </Surface>
    <Surface
      elevation={4}
      category="medium"
      style={{
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      }}
    >
      <Text>4</Text>
    </Surface>
    <Surface
      elevation={6}
      category="medium"
      style={{
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      }}
    >
      <Text>6</Text>
    </Surface>
    <Surface
      elevation={8}
      category="medium"
      style={{
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      }}
    >
      <Text>8</Text>
    </Surface>
    <Surface
      elevation={12}
      category="medium"
      style={{
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      }}
    >
      <Text>12</Text>
    </Surface>
    <Surface
      elevation={16}
      category="medium"
      style={{
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      }}
    >
      <Text>16</Text>
    </Surface>
    <Surface
      elevation={24}
      category="medium"
      style={{
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
      }}
    >
      <Text>24</Text>
    </Surface>
  </ScrollView>
);

export default App;
```
