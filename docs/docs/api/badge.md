# Badge

API documentation for the React Native Badge component. Learn about the available props.

## Import
 
```js
import { Badge } from "@react-native-material/core";
// or
import Badge from "@react-native-material/core/Badge";
```

## Props

```ts
interface BadgeProps {
  label?: number | string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  showZero?: boolean;

  max?: number;

  visible?: boolean;

  color?: PaletteColor;

  tintColor?: PaletteColor;

  style?: Animated.AnimatedProps<ViewProps>["style"];

  labelStyle?: StyleProp<TextStyle>;
}

```
