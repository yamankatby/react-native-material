import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Appbar, IconButton, ThemeProvider, useTheme } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Main from "./screens/Main";
import Appbars from "./screens/Appbars";
import Avatars from "./screens/Avatars";

const Stack = createNativeStackNavigator();

const App = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.palette.background
        }
      }}
    >
      <Stack.Navigator
        screenOptions={{
          header: props => (
            <Appbar
              title={props.route.name}
              leading={iconProps =>
                props.back && (
                  <IconButton
                    icon={<Icon name="arrow-left" color={iconProps.color} size={iconProps.size / 2} />}
                    onPress={() => props.navigation.goBack()}
                    {...iconProps}
                  />
                )
              }
              style={{ paddingTop: insets.top, marginBottom: 8 }}
            />
          )
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Appbars" component={Appbars} options={{ headerShown: false }} />
        <Stack.Screen name="Avatars" component={Avatars} />
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
