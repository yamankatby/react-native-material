import React from "react";
import { Platform } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Appbar, IconButton, ThemeProvider, useTheme,defaultTheme  } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Main from "./screens/Main";
import Appbars from "./screens/Appbars";
import Avatars from "./screens/Avatars";
import Backdrop from "./screens/Backdrop";
import Badges from "./screens/Badges";
import Banners from "./screens/Banners";
import Buttons from "./screens/Buttons";
import Dividers from "./screens/Dividers";
import FAB from "./screens/FAB";
import IconButtons from "./screens/IconButtons";
import Lists from "./screens/Lists";
import { PressableScreen } from "./screens/Screens";
import Snackbars from "./screens/Snackbars";
import Surfaces from "./screens/Surfaces";
import Switches from "./screens/Switches";
import TextInputs from "./screens/TextInputs";
import Texts from "./screens/Texts";
import Touchable from "./screens/Touchable";

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
              leading={
                props.back &&
                (iconProps => (
                  <IconButton
                    icon={
                      <Icon
                        name={Platform.OS === "ios" ? "chevron-left" : "arrow-left"}
                        color={iconProps.color}
                        size={iconProps.size / 2}
                      />
                    }
                    onPress={() => props.navigation.goBack()}
                    {...iconProps}
                  />
                ))
              }
              style={{ paddingTop: insets.top, zIndex: 4 }}
            />
          )
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="App bars" component={Appbars} options={{ headerShown: false }} />
        <Stack.Screen name="Avatars" component={Avatars} />
        <Stack.Screen name="Backdrop" component={Backdrop} options={{ headerShown: false }} />
        <Stack.Screen name="Badges" component={Badges} />
        <Stack.Screen name="Banners" component={Banners} />
        <Stack.Screen name="Buttons" component={Buttons} />
        <Stack.Screen name="Dividers" component={Dividers} />
        <Stack.Screen name="FAB" component={FAB} />
        <Stack.Screen name="Icon buttons" component={IconButtons} />
        <Stack.Screen name="Lists" component={Lists} />
        <Stack.Screen name="Pressable" component={PressableScreen} />
        <Stack.Screen name="Snackbars" component={Snackbars} />
        <Stack.Screen name="Surfaces" component={Surfaces} />
        <Stack.Screen name="Switches" component={Switches} />
        <Stack.Screen name="Text inputs" component={TextInputs} />
        <Stack.Screen name="Texts" component={Texts} />
        <Stack.Screen name="Touchable" component={Touchable} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppProvider = () => (
  <SafeAreaProvider>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </SafeAreaProvider>
);

export default AppProvider;
