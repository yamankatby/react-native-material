# Material UI components for React Native [![Twitter Follow](https://img.shields.io/twitter/follow/rn_material?style=social)](https://twitter.com/intent/user?screen_name=rn_material)

> React Native Material is a set of pre-built, cross-platform, highly customizable UI components that follow Material Design principles.

[![Latest Stable Version](https://img.shields.io/npm/v/@react-native-material/core.svg)](https://www.npmjs.com/package/@react-native-material/core)
[![NPM Downloads](https://img.shields.io/npm/dm/@react-native-material/core.svg)](https://www.npmjs.com/package/@react-native-material/core)
[![GitHub issues](https://img.shields.io/github/issues-raw/yamankatby/react-native-material.svg)](https://github.com/yamankatby/react-native-material/issues)
[![Used Languages](https://img.shields.io/github/languages/top/yamankatby/react-native-material.svg)](https://github.com/yamankatby/react-native-material)

![App bar](https://raw.githubusercontent.com/yamankatby/react-native-material/main/hero.png)

Loved the project? Please share it with your friends and give it a ⭐️

## ☘️️ Try it out

Take a look at our example apps:

- [💨 Expo Snack](https://snack.expo.dev/@yamankatby/react-native-material-explorer)
- [🤖 Android](https://play.google.com/store/apps/details?id=com.swazer.material)
- [🌍 Web](https://example.react-native-material.com/)

### Run the Explorer App on your device

Download Expo Go app on your device and scan this QR code to get started.

- [🤖 Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [🍎 App Store](https://apps.apple.com/tr/app/expo-go/id982107779)

> Expo Go for iOS does not include a QR code scanner [learn more](https://blog.expo.dev/upcoming-limitations-to-ios-expo-client-8076d01aee1a). So you have to scan the code using the regular camera app.

![Expo Go QR code](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/qr.png)

### Run the Example app locally

Run the [example app](https://github.com/yamankatby/react-native-material/tree/main/example) with Expo to see it in
action. The source code is located under the `/example` folder.

## ⬇️ Installation

```shell
npm install @react-native-material/core
```

Or (If you're using yarn):

```shell
yarn add @react-native-material/core
```

## 🚀 Quick Start

Here's a quick example to get you started, it's **literally all you need**:

```js
import React from "react";
import { Button } from "@react-native-material/core";

export default function App() {
  return <Button title="Button" onPress={() => alert("hi!")}/>;
}
```

## 🔌 Component API

### `<Appbar />`

[Try it out](https://www.react-native-material.com/docs/components/app-bar)

The App bars displays information and actions relating to the current screen.

![App bar](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/app-bar.png)

![Prominent App bar](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/prominent-app-bar.png)

![Bottom App bar](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/bottom-app-bar.png)

### `<Avatar />`

[Try it out](https://www.react-native-material.com/docs/components/avatar)

Avatars are found throughout material design with uses in everything from tables to dialog menus.

![Avatar](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/avatar.png)

### `<Backdrop />`

[Try it out](https://www.react-native-material.com/docs/components/backdrop)

A backdrop appears behind all other surfaces in an app, displaying contextual and actionable content.

![Backdrop](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/backdrop.png)

### `<Badge />`

[Try it out](https://www.react-native-material.com/docs/components/badge)

A Badge represents dynamic information such as a number of pending requests in a Bottom Navigation or Tab Bar.

![Badge](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/badge.png)

### `<Banner />`

[Try it out](https://www.react-native-material.com/docs/components/banner)

A banner displays a prominent message and related optional actions.

![Banner](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/banner.png)

### `<Button />`

[Try it out](https://www.react-native-material.com/docs/components/button)

Buttons allow users to take actions, and make choices, with a single tap.

![Button](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/button.png)

### `<Divider />`

[Try it out](https://www.react-native-material.com/docs/components/divider)

A divider is a thin line that groups content in lists and layouts.

### `<FAB />`

[Try it out](https://www.react-native-material.com/docs/components/floating-action-button)

A floating action button (FAB) represents the primary action of a screen.

![Floating Action Button](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/fab.png)

### `<Surface />`

[Try it out](https://www.react-native-material.com/docs/components/surface)

Material surfaces can be displayed in different shapes. Shapes direct attention, identify components, communicate state,
and express brand.

![Surface](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/surface.png)

### `<Typography />`

[Try it out](https://www.react-native-material.com/docs/components/typography)

Use typography to present your design and content as clearly and efficiently as possible.

![Typography](https://raw.githubusercontent.com/yamankatby/react-native-material/main/images/typography.png)

## 👍 Community

The community is your first stop for questions and advice about the framework. Welcome to the community!

### StackOverflow

For crowdsourced answers from expert **React Native Material** developers in our community. StackOverflow is also
frequented, from time to time, by the maintainers of **React Native Material**.

[Post a question](https://stackoverflow.com/questions/tagged/react-native-material)

### GitHub

**React Native Material** uses GitHub issues as a bug and feature request tracker. If you think you have found a bug, or
have a new feature idea, please start by making sure it hasn't already
been [reported or fixed](https://github.com/yamankatby/react-native-material/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aclosed)
. You can search through existing issues and pull requests to see if someone has reported one similar to yours.

[Open an issue](https://github.com/yamankatby/react-native-material/issues/new/choose)

## 🤝 Contributing

Please take a look at [Kanban](https://github.com/yamankatby/react-native-material/projects/1) where we have a roadmap
for **React Native Material** community. Also, we have a list
of [good first issues](https://github.com/yamankatby/react-native-material/labels/good%20first%20issue) that contain
bugs that have a relatively limited scope. This is a great place to get started, gain experience, and get familiar with
our contribution process.

## 📝 License

This library is licensed under the MIT License - see
the [LICENSE](https://github.com/yamankatby/react-native-material/blob/main/LICENSE) file for details.
