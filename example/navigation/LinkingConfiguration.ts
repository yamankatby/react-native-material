import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Overview: '/',
      AppBar: '/components/app-bar',
      Avatar: '/components/avatar',
      Backdrop: '/components/backdrop',
      Badge: '/components/badge',
      Banner: '/components/banner',
      Button: '/components/button',
      Divider: '/components/divider',
      FAB: "/components/fab",
      Surface: "/components/surface",
      Typography: '/components/typography',
      NotFound: "*",
    },
  },
};

export default linking;
