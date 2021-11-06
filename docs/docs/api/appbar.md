# Appbar

API documentation for the React Native Appbar component. Learn about the available props.

## Import
 
```js
import { Appbar } from "@react-native-material/core";
// or
import Appbar from "@react-native-material/core/Appbar";
```

## Props

```ts
interface AppbarProps extends SurfaceProps {
  title?: string | React.ReactElement;

  subtitle?: string | React.ReactElement;

  variant?: "top" | "bottom";

  color?: PaletteColor;

  tintColor?: PaletteColor;

  enableColorOnDark?: boolean;

  transparent?: boolean;

  centerTitle?: boolean;

  leading?:
    | React.ReactElement
    | React.ReactElement[]
    | ((props: { color: string; size: number }) => React.ReactElement | React.ReactElement[] | null)
    | null;

  trailing?:
    | React.ReactElement
    | React.ReactElement[]
    | ((props: { color: string; size: number }) => React.ReactElement | React.ReactElement[] | null)
    | null;

  contentContainerStyle?: StyleProp<ViewStyle>;

  titleContainerStyle?: StyleProp<ViewStyle>;

  titleStyle?: StyleProp<TextStyle>;

  subtitleStyle?: StyleProp<TextStyle>;

  toolbarContainerStyle?: StyleProp<ViewStyle>;

  leadingContainerStyle?: StyleProp<ViewStyle>;

  trailingContainerStyle?: StyleProp<ViewStyle>;
}

```
