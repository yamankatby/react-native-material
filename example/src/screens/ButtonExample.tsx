import React from "react";
import { View } from "react-native";
import { Button } from "@react-native-material/core";

const ButtonExample = () => {
  return (
    <View style={{ flex: 1, margin: 16 }}>
      <Button
        title="Button"
        leading={<View style={{ width: 18, height: 18, backgroundColor: "white" }} />}
        trailing={<View style={{ width: 18, height: 18, backgroundColor: "white" }} />}
      />
      <Button title="Button" style={{ marginTop: 12, alignSelf: "flex-start" }} />
      <Button title="Button" style={{ marginTop: 12, alignSelf: "flex-start" }} />

      <Button title="Button" variant="outlined" loading style={{ marginTop: 12, alignSelf: "flex-start" }} />
      <Button title="Button" variant="outlined" style={{ marginTop: 12, alignSelf: "flex-start" }} />

      <Button title="Button" variant="text" style={{ marginTop: 12, alignSelf: "flex-start" }} />
      <Button title="Button" variant="text" style={{ marginTop: 12, alignSelf: "flex-start" }} />

      <Button
        title="Button"
        variant="contained"
        color="secondary"
        tintColor="onSecondary"
        loading
        style={{ marginTop: 12, alignSelf: "flex-start" }}
      />
      <Button
        title="Button"
        variant="outlined"
        color="secondary"
        tintColor="onSecondary"
        style={{ marginTop: 12, alignSelf: "flex-start" }}
      />
      <Button
        title="Button"
        variant="text"
        color="secondary"
        loading
        tintColor="onSecondary"
        style={{ marginTop: 12, alignSelf: "flex-start" }}
      />

      <IconButton
        icon={<View style={{ width: 24, height: 24, marginTop: 12, backgroundColor: "white" }} />} />
      <IconButton
        icon={<View style={{ width: 24, height: 24, marginTop: 12, backgroundColor: "white" }} />} />
      <IconButton
        icon={<View style={{ width: 24, height: 24, marginTop: 12, backgroundColor: "white" }} />} />
    </View>
  );
};

export default ButtonExample;
