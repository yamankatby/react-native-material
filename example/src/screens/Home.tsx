import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Color Scheme"
        onPress={() => navigation.navigate("ColorScheme")}
      />
    </View>
  );
};

export default Home;
