import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { defaultTheme, ThemeProvider } from "@react-native-material/core";
import { Provider } from "react-native-paper";

const t = {
  h1: {
    ...defaultTheme.typography.h1,
    fontFamily: 'roboto-light',
  },
  h2: {
    ...defaultTheme.typography.h2,
    fontFamily: 'roboto-light',
  },
  h3: {
    ...defaultTheme.typography.h3,
    fontFamily: 'roboto',
  },
  h4: {
    ...defaultTheme.typography.h4,
    fontFamily: 'roboto',
  },
  h5: {
    ...defaultTheme.typography.h5,
    fontFamily: 'roboto',
  },
  h6: {
    ...defaultTheme.typography.h6,
    fontFamily: 'roboto-medium',
  },
  subtitle1: {
    ...defaultTheme.typography.subtitle1,
    fontFamily: 'roboto',
  },
  subtitle2: {
    ...defaultTheme.typography.subtitle2,
    fontFamily: 'roboto-medium',
  },
  body1: {
    ...defaultTheme.typography.body1,
    fontFamily: 'roboto',
  },
  body2: {
    ...defaultTheme.typography.body2,
    fontFamily: 'roboto',
  },
  button: {
    ...defaultTheme.typography.button,
    fontFamily: 'roboto-medium',
  },
  caption: {
    ...defaultTheme.typography.caption,
    fontFamily: 'roboto',
  },
  overline: {
    ...defaultTheme.typography.overline,
    fontFamily: 'roboto',
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
        <ThemeProvider>
          <Provider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </Provider>
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
