# TouchableSurface

API documentation for the React Native TouchableSurface component. Learn about the available props.

## Import
 
```js
import { TouchableSurface } from "@react-native-material/core";
// or
import TouchableSurface from "@react-native-material/core/TouchableSurface";
```

## Props

```ts
interface TouchableSurfaceProps extends Omit<TouchableProps, "style"> {
  category?: ShapeCategory | undefined;

  absoluteSize?: boolean | undefined;

  style?: Animated.AnimatedProps<ViewProps>["style"] | undefined;

  containerStyle?: StyleProp<ViewStyle> | undefined;

  touchableStyle?: StyleProp<ViewStyle> | undefined;

  innerStyle?: StyleProp<ViewStyle> | undefined;
}

```
