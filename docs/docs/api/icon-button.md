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
  /**
   * The element to render as the icon.
   */
  icon?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The color of the icon and the press effect.
   *
   * @default "onBackground"
   */
  color?: PaletteColor;

  /**
   * The style of the icon's container view.
   */
  contentContainerStyle?: PressableProps["style"];
}

```
