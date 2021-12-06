# useTheme

`useTheme` is a custom hook used to get the theme object from context.

## Import

```js
import { useTheme } from "@react-native-material/core";
```

## Return value

The `useTheme` hook returns the theme object.

## Usage

```js
import React from "react";
import { View } from "react-native";
import { useTheme } from "@react-native-material/core";

function Example() {
  const theme = useTheme()

  return <View>{/* Do something with the theme */}</View>
}
```
