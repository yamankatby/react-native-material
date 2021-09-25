# App Bar

The app bar displays information and actions relating to the current screen.

The top app bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

It can transform into a contextual action bar.

## Import

```js
import { Appbar } from "@react-native-material/core";
// or
import Appbar from "@react-native-material/core/Appbar";
```

## Props

| Name | Type | Default | Description |
|---|---|---|---|
| title | string \| React.ReactElement |  |  |
| variant | "regular" \| "prominent" | "regular" |  |
| position | "top" \| "bottom" | "top" |  |
| color | PaletteColor | "primary" |  |
| tintColor | PaletteColor |  |  |
| centerTitle | boolean | Platform.OS === "ios" |  |
| image | React.ReactElement |  |  |
| leading | React.ReactElement<br>\| React.ReactElement[]<br>\| ((props: { color: string; size: number }) => React.ReactElement \| React.ReactElement[] \| null) |  |  |
| trailing | React.ReactElement<br>\| React.ReactElement[]<br>\| ((props: { color: string; size: number }) => React.ReactElement \| React.ReactElement[] \| null) |  |  |