import React, { useState } from "react";
import { Appbar, Backdrop, FAB, IconButton } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

const Main = () => {
  const insets = useSafeAreaInsets()
  const [revealed, setRevealed] = useState(false)
  return (
    <Backdrop
      revealed={revealed}
      header={
        <Appbar
          title="Material UI"
          color="transparent"
          tintColor="onPrimary"
          leading={props =>
            <IconButton
              icon={<MaterialCommunityIcons name="menu" color={props.color} size={24} />}
              color={props.color}
              onPress={() => setRevealed(prev => !prev)}
            />
          }
          style={{ paddingTop: insets.top }}
        />
      }
      backLayer={
        <View>
          <FAB variant="extended" label="Add" />
        </View>
      }
    >

    </Backdrop>
  )
};

export default Main;
