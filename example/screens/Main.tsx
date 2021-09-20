import React, { useState } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Appbar, IconButton, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import chroma from "chroma-js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Main = () => {
  const insets = useSafeAreaInsets();
  const { colorScheme } = useTheme();

  const [x, setX] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: colorScheme.background }}>
      <Appbar
        title="Material UI"
        variant={x ? 'prominent' : 'regular'}
        // centerTitle={false}
        tintColor={'onBackground'}
        leading={
          <IconButton
            color={'onBackground'}
            icon={<MaterialCommunityIcons name={"menu"} size={24} color={colorScheme.onBackground} />}
            onPress={() => setX(p => !p)}
          />
        }
        trailing={[
          // <IconButton
          //   key={0}
          //   color={'onPrimary'}
          //   icon={<MaterialCommunityIcons name={"heart"} size={24} color={colorScheme.onPrimary} />}
          //   onPress={() => setX(p => !p)}
          // />,
          <IconButton
            key={1}
            color={'onBackground'}
            icon={<MaterialCommunityIcons name={"magnify"} size={24} color={colorScheme.onBackground} />}
            onPress={() => undefined}
          />,
          <IconButton
            key={2}
            color={'onBackground'}
            icon={
              <MaterialCommunityIcons
                name={Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical"}
                size={24}
                color={colorScheme.onBackground}
              />
            }
            onPress={() => undefined}
          />,
        ]}
        style={{ paddingTop: insets.top, elevation: 0, backgroundColor: chroma('white').alpha(0.9).hex(), position: 'absolute', top: 0, start: 0, end: 0, zIndex: 99, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: 'lightgray' }}
      />
      <StatusBar style={chroma.contrast(colorScheme.primary, "white") > 4.5 ? "light" : "dark"} translucent />
      <ScrollView contentContainerStyle={{  padding: 16, paddingTop: insets.top + 56 + 16 }} scrollEventThrottle={16} onScroll={(e) => {
        // setX(e.nativeEvent.contentOffset.y < 50)
      }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto commodi consectetur
          consequatur, cum deserunt dolor dolore dolorem ea eaque eum, excepturi fugiat id impedit in ipsam ipsum iste
          iure laboriosam minima minus molestias nam natus necessitatibus nobis nulla numquam porro quae ratione rem
          repellendus sed sunt tempora ullam veritatis voluptate voluptatibus. Animi aperiam architecto asperiores
          assumenda at corporis culpa delectus, dolorem doloremque dolores eaque earum eos et illo in inventore maxime
          minima mollitia necessitatibus obcaecati officiis omnis possimus provident quaerat, qui reiciendis repudiandae
          sapiente sed sit soluta ut veniam veritatis vitae. Adipisci, aliquid blanditiis cumque delectus dolore
          dolorum, ea exercitationem id in incidunt iste libero quos recusandae saepe sequi temporibus vitae voluptas
          voluptatem? Adipisci atque autem commodi consectetur corporis culpa delectus, dignissimos dolor dolorem
          expedita explicabo fugit hic illo iure nam, necessitatibus nobis nostrum omnis placeat porro quam quidem quod
          reiciendis tempora voluptatum? Nostrum, voluptatem, voluptatibus! Alias aliquam assumenda eius ipsa. Alias
          deserunt dicta doloribus non numquam officiis suscipit, ut. Atque consequatur distinctio dolorum eos eveniet
          exercitationem, facere hic itaque iusto magni minus nobis non odit quaerat quibusdam, quos sapiente sed vel
          velit vero. Facilis maxime quibusdam velit! Aut consectetur excepturi impedit, ipsa itaque laborum porro rem
          repellat repudiandae sint! Accusamus architecto assumenda deserunt ducimus eaque est eveniet excepturi
          expedita explicabo facere fuga incidunt minus natus nemo nobis obcaecati omnis pariatur perferendis placeat
          quas quia quis, quod reiciendis rem sit totam velit voluptates! Aliquid dolores dolorum ducimus laboriosam
          mollitia praesentium quo reprehenderit? A assumenda autem blanditiis cupiditate facere fuga ipsa itaque iure
          laboriosam nam, officiis quae quidem repellendus totam ut. Debitis distinctio impedit necessitatibus quae
          quisquam reprehenderit sapiente! Laborum molestias odio officiis pariatur quis repellendus velit? Accusantium
          nemo non omnis quos recusandae? Ab accusantium aliquam animi at aut commodi dignissimos ducimus eos est eum
          excepturi facere in modi, molestiae molestias necessitatibus, pariatur possimus ratione, sed temporibus. A
          accusantium alias asperiores delectus dignissimos dolorem eaque error eveniet id impedit iste labore minus
          nobis numquam omnis, quaerat quasi reiciendis reprehenderit sunt ullam velit voluptates.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Main;
