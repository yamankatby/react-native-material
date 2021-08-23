import { Button } from "@react-native-material/lab";
import React from "react";
import { ScrollView } from "react-native";

const ButtonExample: React.FC = () => {
  const handlePress = () => {};
  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Button title="Button" onPress={handlePress} />
      <Button
        title="Button"
        color="secondary"
        onPress={handlePress}
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />

      <Button
        title="Button"
        loading
        onPress={handlePress}
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />
      <Button
        title="Button"
        loading
        color="secondary"
        onPress={handlePress}
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />

      <Button
        title="Button"
        variant="outlined"
        loading
        onPress={handlePress}
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />
      <Button
        title="Button"
        variant="outlined"
        loading
        color="secondary"
        onPress={handlePress}
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />

      <Button
        title="Button"
        variant="text"
        loading
        onPress={handlePress}
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />
      <Button
        title="Button"
        variant="text"
        loading
        color="secondary"
        onPress={handlePress}
        style={{ marginTop: 16, alignSelf: "flex-start" }}
      />
    </ScrollView>
  );
};

export default ButtonExample;
