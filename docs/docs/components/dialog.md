# Dialog

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

A dialog is a type of modal window that appears in front of app content to provide critical information or ask for a
decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a
required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly.

[`💬 Feedback`](https://github.com/yamankatby/react-native-material/labels/component%3A%20Dialog)
[`🎨 Material Design`](https://material.io/components/dialogs)

## Import

```js
import { Dialog, DialogHeader, DialogContent, DialogActions } from "@react-native-material/core";
```

## Usage

Simple Alert Dialog

```js with-preview
import React, { useState } from "react";
import {
  ThemeProvider,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from "@react-native-material/core";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        title="Open Alert Dialog"
        style={{ margin: 16 }}
        onPress={() => setVisible(true)}
      />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Dialog Header" />
        <DialogContent>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            eligendi inventore, laboriosam laudantium minima minus nesciunt
            pariatur sequi.
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

const AppProvider = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppProvider;
```

Form Dialog

```js with-preview
import React, { useState } from "react";
import {
  ThemeProvider,
  VStack,
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
  TextInput
} from "@react-native-material/core";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        title="Open Form Dialog"
        style={{ margin: 16 }}
        onPress={() => setVisible(true)}
      />
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Dialog Header"/>
        <DialogContent>
          <VStack spacing={2}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text>
            <TextInput label="Email" variant="standard"/>
          </VStack>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

const AppProvider = () => (
  <ThemeProvider>
    <App/>
  </ThemeProvider>
);

export default AppProvider;
```
