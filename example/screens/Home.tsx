import { Surface } from "@react-native-material/lab";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Image, ScrollView, View } from "react-native";
import { setTheme } from "../config/reducer";
import { useAppDispatch } from "../config/store";

const themes = [
  { name: "basil", source: require("../assets/themes/basil.png") },
  { name: "crane", source: require("../assets/themes/crane.png") },
  { name: "fortnightly", source: require("../assets/themes/fortnightly.png") },
  { name: "owl", source: require("../assets/themes/owl.png") },
  { name: "reply", source: require("../assets/themes/reply.png") },
  { name: "shrine", source: require("../assets/themes/shrine.png") },
];

const Home = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 16 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ width: 16 }} />
        {themes.map((theme, index) => (
          <React.Fragment key={index}>
            <Surface onPress={() => dispatch(setTheme(theme.name))}>
              <Image source={theme.source} style={{ width: 140, height: 70 }} />
            </Surface>
            <View style={{ width: 16 }} />
          </React.Fragment>
        ))}
      </ScrollView>

      <Button title="Surface" onPress={() => navigation.navigate("Surface")} />
      <Button
        title="Typography"
        onPress={() => navigation.navigate("Typography")}
      />
    </View>
  );
};

export default Home;
