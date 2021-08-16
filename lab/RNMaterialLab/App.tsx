import React from "react";
import { SafeAreaView, Text, useColorScheme, View } from "react-native";
import { defaultDarkTheme, defaultTheme, ThemeProvider, useStyleSheet, useTheme } from "./src/styles";

const InnerApp = () => {
  const styles = useStyleSheet(({ palette }) => ({
    container: {
      flex: 1,
      backgroundColor: palette.background
    },
    appBar: {
      height: 34 + 58,
      backgroundColor: palette.primary
    },
    appBarContentContainer: {
      flex: 1,
      marginTop: 34,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 16
    },
    appBarTitle: {
      flex: 1,
      color: palette.onPrimary,
      textAlign: "center"
    },
    appBarAction: {
      width: 24,
      height: 24,
      backgroundColor: palette.onPrimary
    },
    fab: {
      width: 56,
      height: 56,
      position: "absolute",
      bottom: 0,
      right: 16,
      borderRadius: 28,
      backgroundColor: palette.secondary,
      justifyContent: "center",
      alignItems: "center"
    }
  }));

  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarContentContainer}>
          <View style={{ flex: 1 }}>
            <View style={styles.appBarAction} />
          </View>
          <Text style={styles.appBarTitle}>Home</Text>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
            <View style={styles.appBarAction} />
            <View style={[styles.appBarAction, { marginStart: 16 }]} />
          </View>
        </View>
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: theme.palette.onBackground }}>Hi, App screen!</Text>
          <View style={styles.fab}>
            <Text style={{ color: theme.palette.onSecondary }}>Add</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default function App() {
  const isDark = useColorScheme() === "dark"
  return (
    <ThemeProvider theme={isDark? defaultDarkTheme: defaultTheme}>
      <InnerApp />
    </ThemeProvider>
  );
}
