# Surface

Material surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state,
and express brand.

```js with-preview
import React from "react";
import { Surface, Stack } from "@react-native-material/core";

const App = () => (
  <Stack fill center spacing={4}>
    <Surface
      elevation={2}
      category="medium"
      style={{ width: 70, height: 70 }}
    />
    <Surface
      elevation={4}
      category="medium"
      style={{ width: 70, height: 70 }}
    />
    <Surface
      elevation={6}
      category="medium"
      style={{ width: 70, height: 70 }}
    />
  </Stack>
);

export default App;
```

Material surfaces have a rectangular shape by default, with 4dp rounded corners. Their shape can be customized by
adjusting their:

- Corner angles and curves
- Edge angles and curves

The size of shape changes can be subtle or more significant.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Surface)

## Import

```js
import { Surface } from "@react-native-material/core";
```

## Elevation

```js with-preview
import React from "react";
import { Surface, Text, Stack } from "@react-native-material/core";

const App = () => (
  <Stack style={{ margin: 16 }} items="center" spacing={4}>
    <Surface
      elevation={0}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <Text>0</Text>
    </Surface>
    <Surface
      elevation={1}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <Text>1</Text>
    </Surface>
    <Surface
      elevation={2}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <Text>2</Text>
    </Surface>
    <Surface
      elevation={3}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <Text>3</Text>
    </Surface>
    <Surface
      elevation={4}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <Text>4</Text>
    </Surface>
    <Surface
      elevation={6}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <Text>6</Text>
    </Surface>
    <Surface
      elevation={8}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <Text>8</Text>
    </Surface>
    <Surface
      elevation={12}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <Text>12</Text>
    </Surface>
    <Surface
      elevation={16}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <Text>16</Text>
    </Surface>
    <Surface
      elevation={24}
      category="medium"
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
      }}
    >
      <Text>24</Text>
    </Surface>
  </Stack>
);

export default App;
```

## Props

`category`

Type: ShapeCategory;

Optional: Yes

---

`elevation`

Type: Elevation;

Optional: Yes

---

`style`

Type: Animated.WithAnimatedValue<StyleProp<ViewStyle\>\>;

Optional: Yes

---

`...ViewProps`
