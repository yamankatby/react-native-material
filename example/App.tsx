import {
  Lekton_700Bold,
  useFonts as useLektonFonts,
} from "@expo-google-fonts/lekton";
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
  Raleway_600SemiBold,
  Raleway_500Medium,
  useFonts as useRalewayFonts,
} from "@expo-google-fonts/raleway";
import { ThemeProvider } from "@react-native-material/lab";
import React from "react";
import Navigator from "./Navigator";
import basil from "./themes/crane";

const App = () => (
  <ThemeProvider theme={basil}>
    <Navigator />
  </ThemeProvider>
);

const FontLoader = () => {
  const [montserratLoaded] = useMontserratFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const [lektonLoaded] = useLektonFonts({
    Lekton_700Bold,
  });

  const [ralewayLoaded] = useRalewayFonts({
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_500Medium,
  });

  if (!montserratLoaded || !lektonLoaded || !ralewayLoaded) return null;

  return <App />;
};

export default FontLoader;
