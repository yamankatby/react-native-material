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
import Surface from "../screens/Surface";
import Backdrop from "../screens/Backdrop";
import Banner from "../screens/Banner";
import Badge from "../screens/Badge";
import Typography from "../screens/Typography";
import Overview from "../screens/Overview";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const theme = useTheme();
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={{
        dark: theme.mode === 'dark',
        colors: {
          primary: theme.palette.primary,
          background: theme.palette.background,
          card: theme.palette.background,
          text: theme.palette.onBackground,
          border: 'rgba(0,0,0,0.12)',
          notification: 'red',
        },
      }}>
      <Stack.Navigator>
        <Stack.Screen name="Overview" component={Overview} options={{ headerShown: false }} />
        <Stack.Screen name="AppBar" component={AppBar} />
        <Stack.Screen name="Avatar" component={Avatar} />
        <Stack.Screen name="Backdrop" component={Backdrop} />
        <Stack.Screen name="Banner" component={Banner} />
        <Stack.Screen name="Badge" component={Badge} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="FAB" component={FAB} />
        <Stack.Screen name="Divider" component={Divider} />
        <Stack.Screen name="Surface" component={Surface} />
        <Stack.Screen name="Typography" component={Typography} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
