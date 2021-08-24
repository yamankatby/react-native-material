import { useTheme } from "./lab";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import ButtonExample from "./screens/ButtonExample";
import Home from "./screens/Home";
import SurfaceExample from "./screens/SurfaceExample";
import TypographyExample from "./screens/TypographyExample";

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
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
      <StatusBar
        style={theme.palette.primary.on === "white" ? "light" : "dark"}
      />
      <Stack.Navigator
        screenOptions={{
          headerTintColor: theme.palette.primary.on,
          headerStyle: {
            backgroundColor: theme.palette.primary.main,
          },
          headerTitleStyle: {
            fontFamily: theme.typographyStyles.h6.fontFamily,
          },
          headerBackTitleStyle: {
            fontFamily: theme.typographyStyles.h6.fontFamily,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Surface" component={SurfaceExample} />
        <Stack.Screen name="Typography" component={TypographyExample} />
        <Stack.Screen name="Button" component={ButtonExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
