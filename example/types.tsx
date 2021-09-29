import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Surface from "./screens/Surface";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
    }
  }
}

export type RootStackParamList = {
  AppBar: undefined;
  Avatar: undefined;
  Button: undefined;
  Divider: undefined;
  FAB: undefined;
  Surface: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
  Screen>;

