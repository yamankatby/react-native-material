# Touchable

API documentation for the React Native Touchable component. Learn about the available props.

## Import
 
```js
import { Touchable } from "@react-native-material/core";
// or
import Touchable from "@react-native-material/core/Touchable";
```

## Props

```ts
interface TouchableProps extends PressableProps {
  underlayColor?: string;

  ripple?: boolean;

  rippleOpacity?: number;

  rippleSize?: number;

  rippleContainerBorderRadius?: number;

  rippleCentered?: boolean;

  rippleDuration?: number;

  style?: any;

  rippleContainerStyle?: StyleProp<ViewStyle>;
}

interface RippleProps {
  key: string;

  style: any;
}

```
