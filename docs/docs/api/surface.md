# Surface

API documentation for the React Native Surface component. Learn about the available props.

## Import
 
```js
import { Surface } from "@react-native-material/core";
// or
import Surface from "@react-native-material/core/Surface";
```

## Props

```ts
interface SurfaceProps extends Omit<TouchableProps, "hitSlop"> {
  category?: ShapeCategory;

  elevation?: Elevation;

  hitSlop?: ViewProps["hitSlop"];
}

```
