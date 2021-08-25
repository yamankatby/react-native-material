import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect } from "react";
import { Text, useColorScheme, View } from "react-native";
import { darkTheme, defaultTheme, ThemeProvider, useStyles } from "./src";

const App = () => {
  const styles = useStyles(({ colorScheme }) => ({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colorScheme.background,
    },
    text: {
      color: colorScheme.onBackground,
    },
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const AppProvider = () => {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider theme={colorScheme === "light" ? defaultTheme : darkTheme}>
      <App />
    </ThemeProvider>
  );
};

export default AppProvider;
