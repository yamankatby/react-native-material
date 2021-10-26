import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { darkTheme, defaultTheme, ThemeProvider } from "@react-native-material/core";

const t = {
  h1: {
    fontFamily: 'roboto-light',
    fontSize: 96,
    letterSpacing: -1.5,
  },
  h2: {
    fontFamily: 'roboto-light',
    fontSize: 60,
    letterSpacing: -0.5,
  },
  h3: {
    fontFamily: 'roboto',
    fontSize: 48,
  },
  h4: {
    fontFamily: 'roboto',
    fontSize: 34,
    letterSpacing: 0.25,
  },
  h5: {
    fontFamily: 'roboto',
    fontSize: 24,
  },
  h6: {
    fontFamily: 'roboto-medium',
    fontSize: 20,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontFamily: 'roboto',
    fontSize: 16,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontFamily: 'roboto-medium',
    fontSize: 14,
    letterSpacing: 0.1,
  },
  body1: {
    fontFamily: 'roboto',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  body2: {
    fontFamily: 'roboto',
    fontSize: 14,
    letterSpacing: 0.25,
  },
  button: {
    fontFamily: 'roboto-medium',
    fontSize: 14,
    letterSpacing: 1.25,
    textTransform: "uppercase",
  },
  caption: {
    fontFamily: 'roboto',
    fontSize: 10,
    letterSpacing: 0.4,
  },
  overline: {
    fontFamily: 'roboto',
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ThemeProvider theme={colorScheme === 'dark' ? { ...darkTheme, typography: t } : {
          ...defaultTheme,
          typography: t,
        }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
