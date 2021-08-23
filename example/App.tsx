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
import { ThemeProvider } from "@react-native-material/lab";
import React from "react";
import Navigator from "./Navigator";
import theme from "./themes/fortnightly";

const App = () => (
  <ThemeProvider theme={theme}>
    <Navigator />
  </ThemeProvider>
);

const FontLoader = () => {
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

  if (
    !montserratLoaded ||
    !lektonLoaded ||
    !ralewayLoaded ||
    !merriweatherLoaded ||
    !libreFranklinLoaded
  )
    return null;

  return <App />;
};

export default FontLoader;
