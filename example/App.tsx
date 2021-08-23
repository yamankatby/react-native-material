import {
  Surface,
  Typography,
  ThemeProvider,
  createTheme,
} from "@react-native-material/lab";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Button } from "react-native";
import SurfaceExample from "./screens/SurfaceExample";

const Stack = createNativeStackNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Surface Example"
        onPress={() => navigation.navigate("SurfaceExample")}
      />
    </View>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SurfaceExample" component={SurfaceExample} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
