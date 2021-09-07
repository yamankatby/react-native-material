import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, Text } from "react-native";
import { useTheme } from "../../core";
import Button from "../screens/Button";
import ColorScheme from "../screens/ColorScheme";
import Home from "../screens/Home";
import ShapeScheme from "../screens/ShapeScheme";
import TypographyScheme from "../screens/TypographyScheme";

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer
      linking={{
        prefixes: [],
        config: {
          initialRouteName: "Home",
          screens: {
            Home: { path: "/", exact: true },
            ColorScheme: { path: "/color-scheme", exact: true },
            TypographyScheme: { path: "/typography-scheme", exact: true },
            ShapeScheme: { path: "/shape-scheme", exact: true },
            Button: { path: "/button", exact: true },
            NotFound: "*",
          },
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: Platform.OS !== "web",
          headerShadowVisible: true,
          headerStyle: {
            backgroundColor: theme.colorScheme.primary,
          },
          headerTitleStyle: {
            fontFamily: theme.typographyScheme.h6.fontFamily,
            fontSize: theme.typographyScheme.h6.fontSize,
          },
          headerBackTitle: "",
          headerTintColor: theme.colorScheme.onPrimary,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="ColorScheme"
          component={ColorScheme}
          options={{ title: "Color Scheme" }}
        />
        <Stack.Screen
          name="TypographyScheme"
          component={TypographyScheme}
          options={{ title: "Typography Scheme" }}
        />
        <Stack.Screen
          name="ShapeScheme"
          component={ShapeScheme}
          options={{ title: "Shape Scheme" }}
        />
        <Stack.Screen
          name="Button"
          component={Button}
          options={{ title: "Button" }}
        />
        <Stack.Screen
          name="NotFound"
          component={() => <Text>404</Text>}
          options={{ title: "404" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
