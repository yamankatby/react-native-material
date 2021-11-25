# Pressable

API documentation for the React Native Pressable component. Learn about the available props.

## Import
 
```js
import { Pressable } from "@react-native-material/core";
// or
import Pressable from "@react-native-material/core/Pressable";
```

## Props

```ts
interface PressableProps extends RNPressableProps {
  pressEffect?: "none" | "highlight" | "ripple" | "android-ripple";

  pressEffectColor?: PaletteColor;

  onMouseEnter?: (event: NativeSyntheticEvent<TargetedEvent>) => void;

  onMouseLeave?: (event: NativeSyntheticEvent<TargetedEvent>) => void;

  style?: any;
}

```
