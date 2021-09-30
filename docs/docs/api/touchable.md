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
type TouchableVariant = "highlight" | "native-feedback" | "opacity" | "without-feedback";

export interface TouchableProps
  extends Partial<Record<PlatformOSType, TouchableVariant>>,
    TouchableHighlightProps,
    TouchableNativeFeedbackProps,
    TouchableOpacityProps,
    TouchableWithoutFeedbackProps {
  overlayColor?: string | undefined;
}

```
