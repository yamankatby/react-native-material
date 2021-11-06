# Avatar

API documentation for the React Native Avatar component. Learn about the available props.

## Import
 
```js
import { Avatar } from "@react-native-material/core";
// or
import Avatar from "@react-native-material/core/Avatar";
```

## Props

```ts
interface AvatarProps {
  label?: string | React.ReactElement | ((props: { color: string }) => React.ReactElement | null) | null;

  image?: ImageSourcePropType | React.ReactElement | ((props: { size: number }) => React.ReactElement | null) | null;

  icon?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  size?: number;

  color?: PaletteColor;

  tintColor?: PaletteColor;

  initials?: boolean;

  uppercase?: boolean;

  autoColor?: boolean;

  style?: StyleProp<ViewStyle>;

  contentContainerStyle?: StyleProp<ViewStyle>;

  imageContainerStyle?: StyleProp<ViewStyle>;

  labelStyle?: StyleProp<TextStyle>;

  imageStyle?: StyleProp<ImageStyle>;
}

```
