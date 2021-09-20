import React, { useState } from "react";
import { Button, View } from "react-native";
import { Appbar, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import chroma from "chroma-js";

const Main = () => {
  const insets = useSafeAreaInsets();
  const { colorScheme } = useTheme();

  const [x, setX] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: colorScheme.background }}>
      <Appbar
        // title="Material UI"
        // centerTitle={false}
        variant={x ? 'prominent' : "regular"}
        // image={
        //   <Image source={{ uri: 'https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png' }}
        //          style={StyleSheet.absoluteFillObject} />
        // }
        // leading={({ color }) => (
        //   <IconButton
        //     color={color}
        //     icon={<MaterialCommunityIcons name={"menu"} size={24} color={color} />}
        //     onPress={() => undefined}
        //   />
        // )}
        // // trailing={({ color }) => [
        // //   <IconButton
        // //     key={0}
        // //     color={color}
        // //     icon={<MaterialCommunityIcons name={"magnify"} size={24} color={color} />}
        // //     onPress={() => undefined}
        // //   />,
        // //   <IconButton
        // //     key={1}
        // //     color={color}
        // //     icon={<MaterialCommunityIcons name={Platform.select({ ios: 'dots-horizontal', default: 'dots-vertical' })}
        // //                                   size={24} color={color} />}
        // //     onPress={() => undefined}
        // //   />,
        // // ]}
        style={{ paddingTop: insets.top }}
      />
      <StatusBar style={chroma.contrast(colorScheme.primary, "white") > 4.5 ? "light" : "dark"} translucent />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title={'toggle'} onPress={() => setX(p => !p)} />
      </View>
    </View>
  );
};

export default Main;
