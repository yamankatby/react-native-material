---
title: "Hello world!"
desciption: "Get started with React Native Material."
---

# Hello world!

Wrap your root component in `ThemeProvider` from **@react-native-material/core**. If you have a bare React Native project, it's a good idea to add it in the component which is passed to `AppRegistry.registerComponent`. This will usually be in the `index.js` file. If you have an Expo project, you can do this inside the exported component in the `App.js` file.

Example:

```js
import React from "react";
import { Text } from "react-native";
import { ThemeProvider, useTheme } from "@react-native-material/core";

const App = () => {
  const theme = useTheme();
  return <Text style={theme.typographyScheme.h2}>Hi, App screen!</Text>;
};

const AppProvider = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppProvider;
```

The `ThemeProvider` component provides the theme to all the components in the framework. It also acts as a portal to components that need to be rendered at the top level.

If you have another provider (such as Redux), wrap it outside ThemeProvider so that the context is available to components rendered inside a Modal from the library:

```js
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@react-native-material/core";

const AppProvider = () => (
  <Provider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);

export default AppProvider;
```

## Customization

You can provide a custom theme to customize the colors, fonts, etc. with the `ThemeProvider` component. Check the [default theme](https://github.com/yamankatby/react-native-material/blob/main/example/core/base/theme-scheme/theme-scheme.ts) to see what customization options are supported.

```js
import React from "react";
import { ThemeProvider, defaultTheme } from "@react-native-material/core";

const theme = {
  ...defaultTheme,
  colorScheme: {
    ...defaultTheme.colorScheme,
    primary: "#5D1049",
  },
};

const AppProvider = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppProvider;
```

Read more about theming in the [Theming](/theming/theming-overview) scetion.
