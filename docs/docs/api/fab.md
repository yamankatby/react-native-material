# FAB

API documentation for the React Native FAB component. Learn about the available props.

## Import
 
```js
import { FAB } from "@react-native-material/core";
// or
import FAB from "@react-native-material/core/FAB";
```

## Props

```ts
interface FABProps extends TouchableSurfaceProps {
  icon?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  label?: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  variant?: "standard" | "extended";

  size?: "default" | "mini";

  color?: PaletteColor;

  tintColor?: PaletteColor;

  loading?: boolean;

  loadingIndicator?: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  loadingIndicatorPosition?: "icon" | "overlay";

  visible?: boolean;

  contentContainerStyle?: StyleProp<ViewStyle>;

  iconContainerStyle?: StyleProp<ViewStyle>;

  labelContainerStyle?: StyleProp<ViewStyle>;

  labelStyle?: StyleProp<TextStyle>;

  loadingOverlayContainerStyle?: StyleProp<ViewStyle>;
}

```
