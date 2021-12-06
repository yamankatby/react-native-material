# useBoolean

`useBoolean` is a custom hook used to manage a boolean value with `on`, `off`
and `toggle` functions.

## Import

```js
import { useBoolean } from '@chakra-ui/react'
```

## Return value

The `useBoolean` hook returns a stateful boolean value and an object with the following function to update it:

| Name     | Type         | Description                                     |
| -------- | ------------ | ----------------------------------------------- |
| `on`     | `() => void` | A function to set the boolean value to `true`.  |
| `off`    | `() => void` | A function to set the boolean value to `false`. |
| `toggle` | `() => void` | A function to negate the boolean state.         |

## Usage

### Usage of toggle method

```js with-preview
import React from "react";
import { VStack, Button, Text, useBoolean } from "@react-native-material/core";

const App = () => {
  const [flag, setFlag] = useBoolean();

  return (
    <VStack style={{ margin: 16 }} align="flex-start" spacing={2}>
      <Text>Boolean state: {flag.toString()}</Text>
      <Button title="Toggle" onPress={setFlag.toggle}/>
    </VStack>
  );
};

export default App;
```

### Usage of on and off methods

```js with-preview
import React from "react";
import { View } from "react-native";
import { Text, useBoolean } from "@react-native-material/core";

const App = () => {
  const [flag, setFlag] = useBoolean();

  return (
    <View style={{ margin: 16 }} onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
      <Text>Boolean state: {flag.toString()}</Text>
    </View>
  );
};

export default App;
```

## Parameters

The hook `useBoolean` accepts the initial boolean value, by default is `false`.
