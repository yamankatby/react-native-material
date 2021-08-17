import React from "react";
import { SafeAreaView, View } from "react-native";
import { ThemeProvider } from "./src/styles";
import Shape from "./src/shape/Shape";

const InnerApp = () => {
  return (
    <SafeAreaView style={{ flex: 1, margin: 16 }}>
      <Shape family={"cut"} elevation={"12"} style={{ width: 168, height: 168 }} backgroundColor={"primary"}>

      </Shape>
      <View style={{ height: 32 }} />
      <Shape family={"cut"} elevation={"12"} backgroundColor={"secondary"} size={[12, 0, 15, 0]} style={{
        width: 168,
        height: 168
      }}>

      </Shape>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <InnerApp />
    </ThemeProvider>
  );
};

export default App;
