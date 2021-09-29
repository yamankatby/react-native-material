import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      AppBar: '/components/app-bar',
      Avatar: '/components/avatar',
      Button: '/components/button',
      FAB: "/components/fab",
      NotFound: "*",
    },
  },
};

export default linking;
