# BackdropSubheader

API documentation for the React Native BackdropSubheader component. Learn about the available props.

## Import
 
```js
import { BackdropSubheader } from "@react-native-material/core";
// or
import BackdropSubheader from "@react-native-material/core/BackdropSubheader";
```

## Props

```ts
interface BackdropSubheaderProps {
  title?: string | React.ReactElement;

  leading?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  trailing?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  divider?: boolean | React.ReactElement;

  color?: PaletteColor;

  style?: StyleProp<ViewStyle>;

  contentContainerStyle?: StyleProp<ViewStyle>;

  titleContainerStyle?: StyleProp<ViewStyle>;

  leadingContainerStyle?: StyleProp<ViewStyle>;

  trailingContainerStyle?: StyleProp<ViewStyle>;
}

```
