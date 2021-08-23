import { Surface } from "@react-native-material/lab";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, Image, Button } from "react-native";

const themes = [
  require("../assets/themes/basil.png"),
  require("../assets/themes/crane.png"),
  require("../assets/themes/fortnightly.png"),
  require("../assets/themes/owl.png"),
  require("../assets/themes/rally.png"),
  require("../assets/themes/reply.png"),
  require("../assets/themes/shrine.png"),
];

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 16 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ width: 16 }} />
        {themes.map((theme, index) => (
          <React.Fragment key={index}>
            <Surface>
              <Image source={theme} style={{ width: 140, height: 70 }} />
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
