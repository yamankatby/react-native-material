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

## Community

The community is your first stop for questions and advice about the framework. Welcome to the community!

### GitHub

We use GitHub issues exclusively as a bugs and feature requests tracker. If you think you have found a bug, or have a
new feature idea, please start by making sure it hasn't already
been [reported or fixed](https://github.com/yamankatby/react-native-material/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aclosed)
. You can search through existing issues and pull requests to see if someone has reported one similar to yours.

[Open an issue](https://github.com/yamankatby/react-native-material/issues/new/choose)

### Stack Overflow

For crowdsources technical questions from expert **@react-native-material** devs in our community. Also frequented by
the **@react-native-material** core team.

[Post a question](https://stackoverflow.com/questions/tagged/react-native-material)

## Contributing

Please see our [CONTRIBUTING.md](https://github.com/yamankatby/react-native-material/blob/main/CONTRIBUTING.md)

### Where to start

Please take a look at [Kanban](https://github.com/yamankatby/react-native-material/projects/1) where we have a roadmap
for React Native Material community. Also, we have a list
of [good first issues](https://github.com/yamankatby/react-native-material/labels/good%20first%20issue) that contain
bugs that have a relatively limited scope. This is a great place to get started, gain experience, and get familiar with
our contribution process.

## License

This library is licensed under the MIT License - see
the [LICENSE](https://github.com/yamankatby/react-native-material/blob/main/LICENSE) file for details.