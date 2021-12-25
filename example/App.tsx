import { useEffect, useMemo } from "react";
import { FlatList, Platform, View } from "react-native";
import { ListItem, Provider, useTheme } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DarkTheme, DefaultTheme, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import IconButtonScreen from "./src/IconButton";
import ListItemScreen from "./src/ListItem";
import PressableScreen from "./src/Pressable";
import SnackbarScreen from "./src/Snackbar";
import SurfaceScreen from "./src/Surface";
import SwitchScreen from "./src/Switch";
import TextScreen from "./src/Text";
import TextInputScreen from "./src/TextInput";

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
  { name: "Icon Button", component: IconButtonScreen },
  { name: "List Item", component: ListItemScreen },
  { name: "Pressable", component: PressableScreen },
  { name: "Snackbar", component: SnackbarScreen },
  { name: "Surface", component: SurfaceScreen },
  { name: "Switch", component: SwitchScreen },
  { name: "Text", component: TextScreen },
  { name: "Text Input", component: TextInputScreen },
];

const Main = () => {
  const navigation = useNavigation();
  const { palette } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: palette.background.main }}>
      <FlatList
        data={screens}
        renderItem={({ item }) => <ListItem title={item.name} onPress={() => navigation.navigate(item.name)} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const { colorScheme, palette } = useTheme();

  useEffect(() => {
    if (Platform.OS !== "web") return;
    document.body.style.backgroundColor = palette.background.main;
  }, [colorScheme]);

  const theme = useMemo(() => {
    const defaultTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
    return {
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        primary: palette.primary.main,
        background: palette.background.main,
        card: palette.background.main,
      },
    }
  }, [colorScheme, palette])

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        {screens.map(props => (
          <Stack.Screen key={props.name} name={props.name} component={props.component} options={props.options} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <SafeAreaProvider>
    <Provider IconComponent={MaterialCommunityIcons as any}>
      <Navigator />
    </Provider>
  </SafeAreaProvider>
);
