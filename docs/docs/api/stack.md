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
interface StackProps extends FlexProps {
  /**
   * The spacing between the stack items.
   */
  spacing?: number;

  /**
   * A React.Node to render between each stack item.
   */
  divider?: React.ReactNode;
}

```
