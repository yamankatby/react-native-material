# Flex

API documentation for the React Native Flex component. Learn about the available props.

## Import
 
```js
import { Flex } from "@react-native-material/core";
// or
import Flex from "@react-native-material/core/Flex";
```

## Props

```ts
interface FlexProps extends ViewProps {
  /**
   * Define how your items are going to “fill” over the available space along your main axis.
   */
  flex?: boolean | FlexStyle["flex"];

  /**
   * Shorthand for `flexDirection` style property.
   * @type FlexStyle["flexDirection"]
   *
   * @default "column"
   */
  direction?: FlexStyle["flexDirection"];

  /**
   * Shorthand for `justifyContent` style property.
   * @type FlexStyle["justifyContent"]
   *
   * @default "flex-start"
   */
  justify?: FlexStyle["justifyContent"];

  /**
   * Shorthand for `alignItems` style property.
   * @type FlexStyle["alignItems"]
   *
   * @default "stretch"
   */
  align?: FlexStyle["alignItems"];

  /**
   * Shorthand for `alignSelf` style property.
   * @type FlexStyle["alignSelf"]
   */
  self?: FlexStyle["alignSelf"];

  /**
   * Shorthand for `alignContent` style property.
   * @type FlexStyle["alignContent"]
   *
   * @default "flex-start"
   */
  content?: FlexStyle["alignContent"];

  /**
   * Shorthand for `flexWrap` style property.
   * @type FlexStyle["flexWrap"]
   */
  wrap?: FlexStyle["flexWrap"];

  /**
   * Shorthand for `flexBasis` style property.
   * @type FlexStyle["flexBasis"]
   */
  basis?: FlexStyle["flexBasis"];

  /**
   * Shorthand for `flexGrow` style property.
   * @type FlexStyle["flexGrow"]
   */
  grow?: FlexStyle["flexGrow"];

  /**
   * Shorthand for `flexShrink` style property.
   * @type FlexStyle["flexShrink"]
   *
   * @default 0
   */
  shrink?: FlexStyle["flexShrink"];
}

```
