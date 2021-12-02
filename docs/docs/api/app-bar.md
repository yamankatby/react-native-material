# AppBar

API documentation for the React Native AppBar component. Learn about the available props.

## Import
 
```js
import { AppBar } from "@react-native-material/core";
// or
import AppBar from "@react-native-material/core/AppBar";
```

## Props

```ts
interface AppBarProps extends SurfaceProps {
  /**
   * Whether you want to place the AppBar at the top or the bottom of the screen.
   *
   * @default "top"
   */
  variant?: "top" | "bottom";

  /**
   * The primary text to display in the AppBar.
   */
  title?: string | React.ReactNode | ((props: { color: string }) => React.ReactNode | null) | null;

  /**
   * The secondary text to display in the AppBar.
   */
  subtitle?: string | React.ReactNode | ((props: { color: string }) => React.ReactNode | null) | null;

  /**
   * Whether the `title` and `subtitle` should be centered.
   *
   * @default false
   */
  centerTitle?: boolean;

  /**
   * The element displayed before the `title`.
   */
  leading?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The element displayed after the `title`.
   */
  trailing?: React.ReactNode | ((props: { color: string; size: number }) => React.ReactNode | null) | null;

  /**
   * The fill color of the AppBar's background.
   *
   * @default "primary"
   */
  color?: PaletteColor;

  /**
   * The color of the AppBar's content (title, subtitle, icons, etc.).
   */
  tintColor?: PaletteColor;

  /**
   * Whether the AppBar's background is transparent.
   *
   * @default false
   */
  transparent?: boolean;

  /**
   * If `true`, the `color` prop will be applied in dark mode.
   *
   * @default false
   */
  enableColorOnDark?: boolean;

  /**
   * The style of the content container view.
   */
  contentContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The style of the title and subtitle container view.
   */
  titleContentStyle?: StyleProp<ViewStyle>;

  /**
   * The style of the title text.
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * The style of the subtitle text.
   */
  subtitleStyle?: StyleProp<TextStyle>;

  /**
   * The style of the leading element container view.
   */
  leadingContainerStyle?: StyleProp<ViewStyle>;

  /**
   * The style of the trailing element container view.
   */
  trailingContainerStyle?: StyleProp<ViewStyle>;
}

```
