---
sidebar_position: 6
---

# Spacer

Creates an adjustable, empty space that can be used to tune the spacing between child elements within `Flex`.

[`💬 Feedback`](https://github.com/yamankatby/react-native-flex-layout/labels/spacer)
[`🌱 Source`](https://github.com/yamankatby/react-native-flex-layout/blob/main/src/Spacer.tsx)

## Import

```js
import { Spacer } from 'react-native-flex-layout';
```

## Usage

<div className="eg">
  <div>01</div>
  <div className="ml-auto">02</div>
</div>

```jsx
<Flex inline>
  <Box w={56} h={56} />
  <Spacer />
  <Box w={56} h={56} />
</Flex>
```

Usage with `Stack`

```jsx
<HStack>
  <Box w={56} h={56} />
  <Spacer />
  <Box w={56} h={56} />
</HStack>
```
