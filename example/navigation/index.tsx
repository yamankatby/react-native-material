import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ColorSchemeName } from "react-native";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import FAB from "../screens/FAB";
import { useTheme } from "@react-native-material/core";
import Button from "../screens/Button";
import Avatar from "../screens/Avatar";
import AppBar from "../screens/AppBar";
import Divider from "../screens/Divider";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const theme = useTheme();
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={{
        dark: theme.mode === 'dark',
        colors: {
          primary: theme.colorScheme.primary,
          background: theme.colorScheme.background,
          card: theme.colorScheme.background,
          text: theme.colorScheme.onBackground,
          border: 'rgba(0,0,0,0.12)',
          notification: 'red',
        },
      }}>
      <Stack.Navigator>
        <Stack.Screen name="AppBar" component={AppBar} />
        <Stack.Screen name="Avatar" component={Avatar} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="FAB" component={FAB} />
        <Stack.Screen name="Divider" component={Divider} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
