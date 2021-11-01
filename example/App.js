import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Appbar, ThemeProvider } from "@react-native-material/core";
import Main from "./screens/Main";

const Stack = createNativeStackNavigator();

const App = () => {
  const insets = useSafeAreaInsets();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: props => <Appbar title={props.route.name} style={{ paddingTop: insets.top }} /> }}
      >
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppProvider = () => (
  <SafeAreaProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default AppProvider;
