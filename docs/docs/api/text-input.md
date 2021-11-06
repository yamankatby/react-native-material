# TextInput

API documentation for the React Native TextInput component. Learn about the available props.

## Import
 
```js
import { TextInput } from "@react-native-material/core";
// or
import TextInput from "@react-native-material/core/TextInput";
```

## Props

```ts
interface TextInputProps extends NativeTextInputProps {
  variant?: "flat" | "outlined";

  color?: PaletteColor;

  label?: string;

  assistiveText?: string;

  leading?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;

  trailing?: React.ReactElement | ((props: { color: string; size: number }) => React.ReactElement | null) | null;
}

```
