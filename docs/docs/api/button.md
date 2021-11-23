# Button

API documentation for the React Native Button component. Learn about the available props.

## Import
 
```js
import { Button } from "@react-native-material/core";
// or
import Button from "@react-native-material/core/Button";
```

## Props

```ts
interface ButtonProps extends Omit<SurfaceProps, "hitSlop">, Omit<PressableProps, "style" | "children"> {
  title: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  leading?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  trailing?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  variant?: "contained" | "outlined" | "text";

  color?: PaletteColor;

  tintColor?: PaletteColor;

  uppercase?: boolean;

  compact?: boolean;

  disableElevation?: boolean;

  loading?: boolean;

  loadingIndicator?: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  loadingIndicatorPosition?: "leading" | "trailing" | "overlay";

  pressableContainerStyle?: StyleProp<ViewStyle>;

  contentContainerStyle?: PressableProps["style"];

  titleStyle?: StyleProp<TextStyle>;

  leadingContainerStyle?: StyleProp<ViewStyle>;

  trailingContainerStyle?: StyleProp<ViewStyle>;

  loadingOverlayContainerStyle?: StyleProp<ViewStyle>;
}

```
