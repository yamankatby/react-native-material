# Chip

API documentation for the React Native Chip component. Learn about the available props.

## Import
 
```js
import { Chip } from "@react-native-material/core";
// or
import Chip from "@react-native-material/core/Chip";
```

## Props

```ts
interface ChipProps extends Omit<ViewProps, "hitSlop">, Omit<PressableProps, "style" | "children"> {
  /**
   * The text to display in the chip.
   */
  label: string | React.ReactNode | ((props: { color: string }) => React.ReactNode | null) | null;

  /**
   * The element placed before the `label`.
   */
  leading?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The element placed after the `label`.
   */
  trailing?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The variant of the chip.
   * - `filled`: A filled chip.
   * - `outlined`: A solid background with a border.
   *
   * @default "filled"
   */
  variant?: "filled" | "outlined";

  /**
   * The color of the chip.
   */
  color?: PaletteColor;

  /**
   * The style of the chip's container.
   */
  contentContainerStyle?: PressableProps["style"];

  /**
   * The style of the chip's label.
   */
  labelStyle?: StyleProp<TextStyle>;

  /**
   * The style of the chip's leading element.
   */
  leadingContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The style of the chip's trailing element.
   */
  trailingContainerStyle?: StyleProp<ViewStyle>;
}

```
