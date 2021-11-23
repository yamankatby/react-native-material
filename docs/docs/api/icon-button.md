# IconButton

API documentation for the React Native IconButton component. Learn about the available props.

## Import
 
```js
import { IconButton } from "@react-native-material/core";
// or
import IconButton from "@react-native-material/core/IconButton";
```

## Props

```ts
interface IconButtonProps extends Omit<ViewProps, "hitSlop">, Omit<PressableProps, "style" | "children"> {
  icon?: React.ReactElement;

  color?: PaletteColor;

  contentContainerStyle?: PressableProps["style"];
}

```
