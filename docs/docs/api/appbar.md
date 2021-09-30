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
  title?: string | React.ReactElement | null;

  variant?: "regular" | "prominent";

  position?: "top" | "bottom";

  color?: PaletteColor;

  tintColor?: PaletteColor;

  centerTitle?: boolean;

  image?: React.ReactElement | null;

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

  imageContainerStyle?: Animated.AnimatedProps<ViewProps>["style"];

  contentContainerStyle?: Animated.AnimatedProps<ViewProps>["style"];

  titleContainerStyle?: Animated.AnimatedProps<ViewProps>["style"];

  titleStyle?: Animated.AnimatedProps<TextProps>["style"];

  leadingContainerStyle?: StyleProp<ViewStyle>;

  trailingContainerStyle?: StyleProp<ViewStyle>;
}

```
