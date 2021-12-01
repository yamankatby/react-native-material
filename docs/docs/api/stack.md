# Stack

API documentation for the React Native Stack component. Learn about the available props.

## Import
 
```js
import { Stack } from "@react-native-material/core";
// or
import Stack from "@react-native-material/core/Stack";
```

## Props

```ts
interface StackProps extends ViewProps {
  /**
   * The direction of the stack.
   * - `column` - Vertical stack.
   * - `row` - Horizontal stack.
   * - `row-reverse` - Horizontal stack with reverse order of children.
   * - `column-reverse` - Vertical stack with reverse order of children.
   *
   * @default "column"
   */
  direction?: ViewStyle["flexDirection"];

  /**
   * The alignment of the stack items along the stack's main axis.
   *
   * @default "flex-start"
   */
  justify?: ViewStyle["justifyContent"];

  /**
   * The alignment of the stack items along the stack's cross axis.
   *
   * @default "stretch"
   */
  align?: ViewStyle["alignItems"];

  /**
   * Whether the stack items forced in a single line or can be flowed into multiple lines.
   *
   * @default "nowrap"
   */
  wrap?: ViewStyle["flexWrap"];

  /**
   * The spacing between the stack items.
   *
   * @default 0
   */
  spacing?: number;

  /**
   * A React.Node to render between each stack item.
   *
   * @default 0
   */
  divider?: React.ReactNode;
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter(child => React.isValidElement(child)) as React.ReactElement[];
}

```
