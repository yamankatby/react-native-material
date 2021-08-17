import React from "react";
import { Platform, SafeAreaView, Text, useColorScheme, View } from "react-native";
import { createTheme, ThemeProvider, useStyleSheet } from "@react-native-material/lab/lib/foundation";
import Shape from "./src/shape/Shape";

const DemoApp = () => {
  const styles = useStyleSheet(({ colors, typographyStyles, elevations }) => ({
    container: {
      flex: 1,
      backgroundColor: colors.background.main
    },
    appBar: {
      height: Platform.OS === "ios" ? 62 + 28 : 62,
      backgroundColor: colors.primary.main
    },
    appBarTitle: {
      ...typographyStyles.h6,
      color: colors.primary.on
    },
    contentContainer: {
      flex: 1,
      padding: 16
    },
    title: {
      ...typographyStyles.h1,
      color: colors.background.on
    }
  }));

  return (
    <View style={styles.container}>
      <Shape style={styles.appBar} elevation={4} size={0}>
        <Text style={styles.appBarTitle}>Home</Text>
      </Shape>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Hi</Text>
          <Text style={styles.title}>Hi</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const App = () => {
  const mode = useColorScheme();
  return (
    <ThemeProvider theme={createTheme({ mode: mode ?? "light" })}>
      <DemoApp />
    </ThemeProvider>
  );
};

export default App;
