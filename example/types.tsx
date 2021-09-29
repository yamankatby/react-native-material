import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
    }
  }
}

export type RootStackParamList = {
  AppBar: undefined;
  Avatar: undefined;
  Backdrop: undefined;
  Badge: undefined;
  Banner: undefined;
  Button: undefined;
  Divider: undefined;
  FAB: undefined;
  Surface: undefined;
  Typography: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
  Screen>;

