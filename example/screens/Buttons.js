import React from "react";
import { View } from "react-native";
import { Button } from "@react-native-material/core";

const Buttons = () => {
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Primary"
        style={{ alignSelf: "flex-start", marginStart: 12, marginTop: 12 }}
        onPress={() => null}
      />
      <Button
        title="Secondary"
        color="secondary"
        style={{ alignSelf: "flex-start", marginStart: 12, marginTop: 12 }}
        onPress={() => null}
      />
      <Button
        title="Disabled"
        disabled
        style={{ alignSelf: "flex-start", marginStart: 12, marginTop: 12 }}
        onPress={() => null}
      />
      <Button
        title="Outlined"
        color="primary"
        variant="outlined"
        style={{ alignSelf: "flex-start", marginStart: 12, marginTop: 12 }}
        onPress={() => null}
      />
      <Button
        title="Outlined Disabled"
        color="primary"
        variant="outlined"
        disabled
        style={{ alignSelf: "flex-start", marginStart: 12, marginTop: 12 }}
        onPress={() => null}
      />
      <Button
        title="Contained"
        color="primary"
        variant="contained"
        style={{ alignSelf: "flex-start", marginStart: 12, marginTop: 12 }}
        onPress={() => null}
      />
      <Button
        title="Contained Disabled"
        color="primary"
        variant="contained"
        disabled
        style={{ alignSelf: "flex-start", marginStart: 12, marginTop: 12 }}
        onPress={() => null}
      />
    </View>
  );
};

export default Buttons;
