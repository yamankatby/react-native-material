import React, { useEffect, useMemo } from "react";
import { Platform, ScrollView } from "react-native";
import { AppBar, Icon, IconButton, ListItem, Provider, useTheme } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { DarkTheme, DefaultTheme, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AppBarScreen from "./AppBar";
import AvatarScreen from "./Avatar";
import BackdropScreen from "./Backdrop";
import BadgeScreen from "./Badge";
import BannerScreen from "./Banner";
import ButtonScreen from "./Button";
import ChipScreen from "./Chip";
import DialogScreen from "./Dialog";
import DividerScreen from "./Divider";
import FABScreen from "./FAB";
import IconButtonScreen from "./IconButton";
import ListItemScreen from "./ListItem";
import PressableScreen from "./Pressable";
import SnackbarScreen from "./Snackbar";
import SurfaceScreen from "./Surface";
import TextScreen from "./Text";
import TextInputScreen from "./TextInput";

const screens = [
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
  { name: "Text", component: TextScreen },
  { name: "Text Input", component: TextInputScreen },
];

const Main = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { palette } = useTheme();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: palette.background.main, paddingBottom: insets.bottom }}>
      {screens.map(({ name }) => (
        <ListItem key={name} title={name} onPress={() => navigation.navigate(name as any)} />
      ))}
    </ScrollView>
  );
};

const Stack = createNativeStackNavigator();

const Header: React.FC<NativeStackHeaderProps> = ({ route, back, navigation }) => {
  const insets = useSafeAreaInsets();
  return (
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
      style={{ paddingTop: insets.top }}
    />
  );
};

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
    };
  }, [colorScheme, palette]);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ header: Header }}>
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
      <StatusBar style="light" />
      <Navigator />
    </Provider>
  </SafeAreaProvider>
);
