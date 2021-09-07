---
title: "Installation"
desciption: "Get started with React Native Material."
---

# Installation

Open a Terminal in your project's folder and run:

```sh
npm install @react-native-material/core
```

or

```sh
yarn add @react-native-material/core
```

Please note that `react`, `react-native` and `react-native-svg` are peer dependencies.

## Installing dependencies into an Expo managed project

In your project directory, run:

```sh
expo install react-native-svg
```

This will install a version of react-native-svg that is compatible.

Now you can continue to [Hello World](/getting-started/hello-world) to start writing some code.

## Installing dependencies into a bare React Native project

In your project directory, run:

```sh
npm install react-native-svg
```

or

```sh
yarn add react-native-svg
```

> Note: You might get warnings related to peer dependencies after installation. They are usually caused by incorrect version ranges specified in some packages. You can safely ignore most warnings as long as your app builds.

From React Native 0.60 and
higher, [linking is automatic](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md). So you **
don't need** to run `react-native link`.

If you're on a Mac and developing for iOS, you need to install the pods (via [Cocoapods](https://cocoapods.org/)) to
complete the linking.

```sh
npx pod-install ios
```

Continue to [Hello World](/getting-started/hello-world) to start writing some code.
