import React from "react";
import { FlatList, Platform } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import {
  AppBar,
  Button,
  defaultTheme,
  Icon,
  IconButton,
  ListItem,
  Provider,
  useTheme
} from "@react-native-material/core";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./examples/auth";

import ActivityIndicatorScreen from "./src/ActivityIndicator";
import AppBarScreen from "./src/AppBar";
import AvatarScreen from "./src/Avatar";
import BackdropScreen from "./src/Backdrop";
import BadgeScreen from "./src/Badge";
import BannerScreen from "./src/Banner";
import ButtonScreen from "./src/Button";
import ChipScreen from "./src/Chip";
import DialogScreen from "./src/Dialog";
import DividerScreen from "./src/Divider";
import FABScreen from "./src/FAB";
import FlexScreen from "./src/Flex";
import IconButtonScreen from "./src/IconButton";
import ListItemScreen from "./src/ListItem";
import PressableScreen from "./src/Pressable";
import SnackbarScreen from "./src/Snackbar";
import StackScreen from "./src/Stack";
import SurfaceScreen from "./src/Surface";
import SwitchScreen from "./src/Switch";
import TextScreen from "./src/Text";
import TextInputScreen from "./src/TextInput";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

const screens = [
  { name: "Activity Indicator", component: ActivityIndicatorScreen },
  { name: "App Bar", component: AppBarScreen, options: { headerShown: false } },
  { name: "Avatar", component: AvatarScreen },
  { name: "Backdrop", component: BackdropScreen, options: { headerShown: false } },
  { name: "Badge", component: BadgeScreen },
  { name: "Banner", component: BannerScreen },
  { name: "Button", component: ButtonScreen },
  { name: "Chip", component: ChipScreen },
  { name: "Dialog", component: DialogScreen },
  { name: "Divider", component: DividerScreen },
  { name: "FAB", component: FABScreen },
  { name: "Flex", component: FlexScreen },
  { name: "Icon Button", component: IconButtonScreen },
  { name: "List Item", component: ListItemScreen },
  { name: "Pressable", component: PressableScreen },
  { name: "Snackbar", component: SnackbarScreen },
  { name: "Stack", component: StackScreen },
  { name: "Surface", component: SurfaceScreen },
  { name: "Switch", component: SwitchScreen },
  { name: "Text", component: TextScreen },
  { name: "Text Input", component: TextInputScreen }
];

const MainScreen = ({ navigation }) => (
  <>
    <Button title="Auth Example" onPress={() => navigation.replace("AuthExample")} />
    <FlatList
      data={screens}
      renderItem={({ item }) => (
        <ListItem key={item.name} title={item.name} onPress={() => navigation.navigate(item.name)} />
      )}
      keyExtractor={item => item.name}
    />
  </>
);

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.mode === "dark" ? DarkTheme : DefaultTheme;

  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer
      theme={{ ...navigationTheme, colors: { ...navigationTheme.colors, background: theme.palette.background } }}
    >
      <Stack.Navigator
        initialRouteName={screens.find(screen => screen.main)?.name}
        screenOptions={{
          header: ({ route, back, navigation }) => (
            <AppBar
              title={route.name}
              leading={
                back &&
                (props => (
                  <IconButton
                    icon={props => <Icon name={Platform.OS === "ios" ? "chevron-left" : "arrow-left"} {...props} />}
                    onPress={navigation.goBack}
                    {...props}
                  />
                ))
              }
              style={{ paddingTop: insets.top, zIndex: 4 }}
            />
          )
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="AuthExample" component={AuthNavigator} options={{ headerShown: false }} />

        {screens.map(screen => (
          <Stack.Screen key={screen.name} name={screen.name} component={screen.component} options={screen.options} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const App = () => (
  <SafeAreaProvider>
    <Provider theme={{
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        success: {
          main: "#4CAF50",
          on: "#fff"
        },
        info: {
          main: "#2196F3",
          on: "#fff"
        },
        warning: {
          main: "#FFC107",
          on: "#fff"
        }
      }
    }} IconComponent={MaterialIcons}>
      <Navigator />
    </Provider>
  </SafeAreaProvider>
);

export default App;
