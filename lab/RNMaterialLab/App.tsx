import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { ThemeProvider, Surface, createTheme } from "./src";

const App = () => {
  const handlePress = () => {};
  return (
    <SafeAreaView style={{ margin: 16, flex: 1 }}>
      <Surface
        surfaceSize={{ width: 120, height: 120 }}
        backgroundColor="lightblue"
        borderWidth={2}
        family="cut"
        borderColor="red"
        onPress={handlePress}>
        <Text>Hi</Text>
      </Surface>
      <Surface
        family="cut"
        surfaceSize={{ width: 240, height: 240 }}
        backgroundColor="green"
        borderColor={"red"}
        borderWidth={12}
        cornerRadius={28}
        onPress={handlePress}>
        <Text>Hi</Text>
      </Surface>
      <Surface family="cut" backgroundColor="orange" onPress={handlePress}>
        <Text>Hi</Text>
      </Surface>
      <Surface family="cut" backgroundColor="lightgreen" onPress={handlePress}>
        <Text>Hi</Text>
      </Surface>
      <Surface
        family="cut"
        surfaceSize={{ width: 240, height: 100 }}
        backgroundColor="green"
        borderColor={"red"}
        borderWidth={24}
        cornerRadius={0}
        onPress={handlePress}>
        <Text>Hi</Text>
      </Surface>
    </SafeAreaView>
  );
};

const AppProvider = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

export default AppProvider;
