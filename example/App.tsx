import {
  Montserrat_600SemiBold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { ThemeProvider, useTheme } from "@react-native-material/lab";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useColorScheme } from "react-native";
import Home from "./screens/Home";
import SurfaceExample from "./screens/SurfaceExample";
import basilTheme from "./screens/themes/basil";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const theme = useTheme();
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        dark: theme.mode === "dark",
        colors: {
          ...DefaultTheme.colors,
          background: theme.palette.background.main,
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.palette.primary.main },
          headerTintColor: theme.palette.primary.on,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SurfaceExample" component={SurfaceExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={basilTheme}>
      <Navigator />
    </ThemeProvider>
  );
};

const FontsProvider = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return <App />;
};

export default App;
