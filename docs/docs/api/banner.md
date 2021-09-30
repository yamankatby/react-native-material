# Banner

API documentation for the React Native Banner component. Learn about the available props.

## Import
 
```js
import { Banner } from "@react-native-material/core";
// or
import Banner from "@react-native-material/core/Banner";
```

## Props

```ts
interface BannerProps {
  text: string | React.ReactElement | null;

  illustration?: React.ReactElement | ((props: { size: number }) => React.ReactElement | null) | null;

  buttons: React.ReactElement | React.ReactElement[] | null;

  style?: StyleProp<ViewStyle>;

  contentContainerStyle?: StyleProp<ViewStyle>;

  illustrationContainerStyle?: StyleProp<ViewStyle>;

  textContainerStyle?: StyleProp<ViewStyle>;

  textStyle?: StyleProp<TextStyle>;

  actionsContainerStyle?: StyleProp<ViewStyle>;
}

```
