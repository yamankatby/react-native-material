# Backdrop

API documentation for the React Native Backdrop component. Learn about the available props.

## Import
 
```js
import { Backdrop } from "@react-native-material/core";
// or
import Backdrop from "@react-native-material/core/Backdrop";
```

## Props

```ts
interface BackdropProps {
  revealed?: boolean;

  header?: React.ReactElement | null;

  headerHeight?: number;

  backLayer?: React.ReactElement | null;

  backLayerHeight?: number;

  subheader?: React.ReactElement | null;

  subheaderHeight?: number;

  style?: StyleProp<ViewStyle>;

  headerContainerStyle?: StyleProp<ViewStyle>;

  backLayerContainerStyle?: StyleProp<ViewStyle>;

  frontLayerContainerStyle?: Animated.AnimatedProps<ViewProps>["style"];

  subheaderContainerStyle?: StyleProp<ViewStyle>;
}

```
