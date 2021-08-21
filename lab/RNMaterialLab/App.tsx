import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { ThemeProvider, Surface, createTheme, Button } from "./src";

const App = () => {
  const handlePress = () => {};

  const [xLoading, setXLoading] = useState(false);

  return (
    <SafeAreaView style={{ margin: 16, flex: 1 }}>
      <Button
        title="button"
        onPress={() => setXLoading(x => !x)}
        loading={xLoading}
        variant="text"
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />
      <Button
        title="button"
        color="secondary"
        onPress={() => setXLoading(x => !x)}
        loading={xLoading}
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />
      <Button
        title="button"
        onPress={() => setXLoading(x => !x)}
        loading={xLoading}
        color="lightgreen"
        leading={({ color }) => (
          <View style={{ width: 16, height: 16, backgroundColor: color }} />
        )}
        variant="outlined"
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />
      <Button
        title="button"
        onPress={() => setXLoading(x => !x)}
        loading={xLoading}
        color="error"
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />
      <Button
        title="Button"
        onPress={() => setXLoading(x => !x)}
        loading={xLoading}
        color="pink"
        uppercase={false}
        style={{ marginTop: 16, alignSelf: "flex-start" }}
        trailing={({ color }) => (
          <View style={{ width: 16, height: 16, backgroundColor: color }} />
        )}
      />
      <Button
        title="Button"
        color="purple"
        style={{ marginTop: 16 }}
        onPress={() => setXLoading(x => !x)}
        loading={xLoading}
      />
    </SafeAreaView>
  );
};

const AppProvider = () => {
  const theme = useColorScheme();
  return (
    <ThemeProvider
      theme={createTheme({
        mode: theme === "light" ? "light" : "dark",
        shapeScheme: { small: { family: "cut", cornerRadius: 4 } },
      })}>
      <App />
    </ThemeProvider>
  );
};

export default AppProvider;
