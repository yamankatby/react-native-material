import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ColorScheme from "../screens/ColorScheme";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ColorScheme"
          options={{ headerShown: false }}
          component={ColorScheme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
