---
sidebar_position: 4
---

# Wrap

Wrap is a layout component that adds a defined space between its children. It wraps its children automatically if there
isn't enough space to fit anymore in the same row.

Think of it as a smarter `flex-wrap` with `spacing` support. It works really well with things like dialog buttons, tags,
and chips.

[`💬 Feedback`](https://github.com/yamankatby/react-native-flex-layout/labels/wrap)
[`🌱 Source`](https://github.com/yamankatby/react-native-flex-layout/blob/main/src/Wrap.tsx)

## Import

```js
import { Wrap } from 'react-native-flex-layout';
```

## Usage

In the example below, you see that the last `Box` wrapped to the next line.

<div className="eg">
  <div className="w-2/5">01</div>
  <div className="w-2/5">02</div>
  <div className="w-2/5">03</div>
</div>

```jsx
<Wrap>
  <Box w={56} h={56} />
  <Box w={56} h={56} />
  <Box w={56} h={56} />
</Wrap>
```

### Change the spacing

Pass the `spacing` prop to apply consistent spacing between each child, even if it wraps.

```jsx
<Wrap spacing={16}>
  <Box w={56} h={56} />
  <Box w={56} h={56} />
  <Box w={56} h={56} />
</Wrap>
```

### Change the alignment

Pass the `align` prop to change the alignment of the child along the cross axis.

Pass the `justify` prop to change the alignment of the child along the main axis.

```jsx
<Wrap items="center" spacing={16}>
  <Box w={56} h={56} />
  <Box w={56} h={56} />
  <Box w={56} h={56} />
</Wrap>
```

## Props

| Prop                 | Type                         | Description                                                                                        |
|----------------------|------------------------------|----------------------------------------------------------------------------------------------------|
| `spacing`            | [`Spacing`](/guides/spacing) | The spacing between children (even if it wraps).                                                   |
| `shouldWrapChildren` | `boolean`                    | If `true`, the children will be wrapped in a `Box` and the `Box` will take the spacing properties. |

[`...FlexProps`](/components/flex#props) , [`...SelectorProps`](/components/selector#props)
