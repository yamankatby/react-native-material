---
sidebar_position: 1
---

# Getting started

Get started with **React Native Material** with no time.

## Installation

Open a Terminal in your project's folder and run:

```bash npm2yarn
npm install @react-native-material/core
```

## Quick Start

Here's a quick example to get you started, **it's literally all you need**:

```js
import React from "react";
import { Button } from "@react-native-material/core";

export default function App() {
  return <Button title="Click Me" onPress={() => alert("🎉🎉🎉")}/>;
}
```

Yes, this really is all you need to get started, as you can see in this live and interactive demo:

```js with-preview name: Quick start; description: A simple example of the button component
import React from "react";
import { Button } from "@react-native-material/core";

export default function App() {
  return (
    <Button
      title="Click Me"
      style={{ alignSelf: "center", marginTop: 40 }}
      onPress={() => alert("🎉🎉🎉")}
    />
  );
}
```

## Community help

The community is your first stop for questions and advice about the framework. Welcome to the community!

### StackOverflow

For crowdsourced answers from expert **react-native-material** developers in our community. StackOverflow is also
frequented, from time to time, by the maintainers of **react-native-material**.

[Post a question](https://stackoverflow.com/questions/tagged/react-native-material)

### GitHub

**react-native-material** uses GitHub issues as a bug and feature request tracker. If you think you have found a bug, or
have a new feature idea, please start by making sure it hasn't already
been [reported or fixed](https://github.com/yamankatby/react-native-material/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aclosed)
. You can search through existing issues and pull requests to see if someone has reported one similar to yours.

[Open an issue](https://github.com/yamankatby/react-native-material/issues/new/choose)

## Contributing

Please take a look at [Kanban](https://github.com/yamankatby/react-native-material/projects/1) where we have a roadmap
for **react-native-material** community. Also, we have a list
of [good first issues](https://github.com/yamankatby/react-native-material/labels/good%20first%20issue) that contain
bugs that have a relatively limited scope. This is a great place to get started, gain experience, and get familiar with
our contribution process.

## License

This library is licensed under the MIT License - see
the [LICENSE](https://github.com/yamankatby/react-native-material/blob/main/LICENSE) file for details.