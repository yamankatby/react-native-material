import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";
import Surface from "../screens/Surface";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      AppBar: '/components/app-bar',
      Avatar: '/components/avatar',
      Button: '/components/button',
      Divider: '/components/divider',
      FAB: "/components/fab",
      Surface: "/components/surface",
      NotFound: "*",
    },
  },
};

export default linking;
