# Banner

A banner displays a prominent message and related optional actions.

```js with-preview
import React from "react";
import { HStack, Banner, Button } from "@react-native-material/core";

const App = () => (
  <Banner
    text="There was a problem processing a transaction on your credit card."
    buttons={
      <HStack spacing={2}>
        <Button key="fix-it" variant="text" title="Fix it" compact />
        <Button key="learn-more" variant="text" title="Learn More" compact />
      </HStack>
    }
  />
);

export default App;
```

A banner displays an important, succinct message, and provides actions for users to address (or dismiss the banner). It
requires a user action to be dismissed.

Banners should be displayed at the top of the screen, below a top app bar. They’re persistent and nonmodal, allowing the
user to either ignore them or interact with them at any time. Only one banner should be shown at a time.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Banner)
[`🎨 Material Design`](https://material.io/components/banners)

## Import

```js
import { Banner } from "@react-native-material/core";
```

## Usage

```js with-preview
import React from "react";
import { HStack, Banner, Button, Avatar } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const App = () => (
  <Banner
    illustration={props => (
      <Avatar
        color="primary"
        icon={props => <Icon name="wifi-off" {...props} />}
        {...props}
      />
    )}
    text="There was a problem processing a transaction on your credit card."
    buttons={
      <HStack spacing={2}>
        <Button key="fix-it" variant="text" title="Fix it" compact />
        <Button key="learn-more" variant="text" title="Learn More" compact />
      </HStack>
    }
  />
);

export default App;
```

## Props

`text`

Type: string | React.ReactElement | null;

Optional: No

---

`illustration`

Type: React.ReactElement | ((props: { size: number }) =\> React.ReactElement | null) | null;

Optional: Yes

---

`buttons`

Type: React.ReactElement | React.ReactElement[] | null;

Optional: No

---

`style`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`contentContainerStyle`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`illustrationContainerStyle`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`textContainerStyle`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---

`textStyle`

Type: StyleProp<TextStyle\>;

Optional: Yes

---

`actionsContainerStyle`

Type: StyleProp<ViewStyle\>;

Optional: Yes

---
