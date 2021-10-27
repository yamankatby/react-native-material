import React from "react";
import { View } from "react-native";
import { Button, Dialog, Snackbar } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Overview: React.FC = () => {
  const ins = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <Snackbar
        style={{ bottom: ins.bottom + 16 + 48 + 16, start: 16, end: 16, position: "absolute", maxWidth: 360 }}
        message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur laborum mollitia non quas, soluta ut? Dolorem non praesentium quidem, quo sequi sit ullam vitae! Dicta nulla officiis reprehenderit sint veritatis?"
        action={<Button title={"dismiss"} variant="text" color="#BB86FC" compact />}
      />
      <Snackbar
        style={{ bottom: ins.bottom + 16, start: 16, end: 16, position: "absolute", maxWidth: 360 }}
        message="Marked as favorite"
        action={<Button title={"go Online"} variant="text" color="#BB86FC" compact />}
      />

      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.4)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Dialog
          style={{ marginHorizontal: 16 }}
          title="Subtitle 1"
          message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur laborum mollitia non quas"
          actions={[
            <Button variant="text" title="Button" compact />,
            <Button variant="text" title="Button" compact />,
          ]}
        />
      </View>
    </View>
  );
};

export default Overview;
