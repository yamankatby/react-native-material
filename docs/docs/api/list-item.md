# ListItem

API documentation for the React Native ListItem component. Learn about the available props.

## Import
 
```js
import { ListItem } from "@react-native-material/core";
// or
import ListItem from "@react-native-material/core/ListItem";
```

## Props

```ts
interface ListItemProps extends SurfaceProps {
  title?: string;

  secondaryText?: string;

  overline?: string;

  meta?: string;

  leadingMode?: "icon" | "avatar" | "image";

  leading?: React.ReactElement;

  trailing?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;
}

```
