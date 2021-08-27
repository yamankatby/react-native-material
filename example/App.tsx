import React from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { darkTheme, defaultTheme, ThemeProvider } from "./core";
import Navigator from "./src/config/Navigator";
import { store, useAppSelector } from "./src/config/store";
import { basil } from "./src/config/themes/basil";
import { crane } from "./src/config/themes/crane";
import { fortnightly } from "./src/config/themes/fortnightly";
import { owl } from "./src/config/themes/owl";
import { reply } from "./src/config/themes/reply";
import { shrine } from "./src/config/themes/shrine";
import {
  Lekton_700Bold,
  useFonts as useLektonFonts,
} from "@expo-google-fonts/lekton";
import {
  LibreFranklin_300Light,
  LibreFranklin_400Regular,
  LibreFranklin_500Medium,
  LibreFranklin_700Bold,
  useFonts as useLibreFranklinFonts,
} from "@expo-google-fonts/libre-franklin";
import {
  Merriweather_300Light,
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold_Italic,
  Merriweather_900Black_Italic,
  useFonts as useMerriweatherFonts,
} from "@expo-google-fonts/merriweather";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts as useMontserratFonts,
} from "@expo-google-fonts/montserrat";
import {
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  useFonts as useRalewayFonts,
} from "@expo-google-fonts/raleway";
import {
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
  useFonts as useRubikFonts,
} from "@expo-google-fonts/rubik";
import {
  useFonts as useWorkSansFonts,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
} from "@expo-google-fonts/work-sans";

const App = () => {
  const colorScheme = useColorScheme();
  const theme = useAppSelector((state) => state.theme);

  // Basil
  const [montserratLoaded] = useMontserratFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const [lektonLoaded] = useLektonFonts({
    Lekton_700Bold,
  });

  // Crane
  const [ralewayLoaded] = useRalewayFonts({
    Raleway_300Light,
    Raleway_400Regular,
    Merriweather_400Regular_Italic,
    Raleway_600SemiBold,
    Raleway_500Medium,
  });

  // Fortnightly

  const [merriweatherLoaded] = useMerriweatherFonts({
    Merriweather_900Black_Italic,
    Merriweather_700Bold_Italic,
    Merriweather_400Regular,
    Merriweather_300Light,
  });

  const [libreFranklinLoaded] = useLibreFranklinFonts({
    LibreFranklin_300Light,
    LibreFranklin_400Regular,
    LibreFranklin_500Medium,
    LibreFranklin_700Bold,
  });

  // Owl

  const [rubikLoaded] = useRubikFonts({
    Rubik_700Bold,
    Rubik_500Medium,
    Rubik_300Light,
    Rubik_400Regular,
  });

  // Reply

  const [workSansLoaded] = useWorkSansFonts({
    WorkSans_600SemiBold,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_700Bold,
    WorkSans_300Light,
  });

  if (
    !montserratLoaded ||
    !lektonLoaded ||
    !ralewayLoaded ||
    !merriweatherLoaded ||
    !libreFranklinLoaded ||
    !rubikLoaded ||
    !workSansLoaded
  )
    return null;

  return (
    <ThemeProvider
      theme={
        {
          basil,
          crane,
          fortnightly,
          owl,
          reply,
          shrine,
          default: colorScheme === "light" ? defaultTheme : darkTheme,
        }[theme]
      }
    >
      <Navigator />
    </ThemeProvider>
  );
};

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppProvider;
