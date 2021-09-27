---
title: "Installation"
description: "Get started with React Native Material."
---

## Installation

Open a Terminal in your project's folder and run:

```sh
npm install @react-native-material/core
# or
yarn add @react-native-material/core
```

## Usage

```js
import * as React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvder } from "@react-native-material/core";
import { name as appName } from "./app.json";
import App from "./src/App";

export default function Main() {
  return (
    <ThemeProvder>
      <App/>
    </ThemeProvder>
  );
}

AppRegistry.registerComponent(appName, () => Main);
```

## Support

The community is your first stop for questions and advice about the framework. Welcome to the community!

### GitHub

We use GitHub issues exclusively as a bugs and feature requests tracker. If you think you have found a bug, or have a
new feature idea, please start by making sure it hasn't already
been [reported or fixed](https://github.com/yamankatby/react-native-material/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aclosed)
. You can search through existing issues and pull requests to see if someone has reported one similar to yours.

[Open an issue](https://github.com/yamankatby/react-native-material/issues/new/choose)

### Stack Overflow

For crowdsources technical questions from expert **react-native-material** devs in our community. Also frequented by
the **@react-native-material** core team.

[Post a question](https://stackoverflow.com/questions/tagged/react-native-material)

## Contributing
