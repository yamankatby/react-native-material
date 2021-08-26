import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ColorScheme from "../screens/ColorScheme";
import Home from "../screens/Home";
import ShapeScheme from "../screens/ShapeScheme";
import TypographyScheme from "../screens/TypographyScheme";

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorScheme" component={ColorScheme} />
        <Stack.Screen name="TypographyScheme" component={TypographyScheme} />
        <Stack.Screen name="ShapeScheme" component={ShapeScheme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
