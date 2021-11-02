import React, { useState } from 'react'
import { ScrollView, View } from "react-native";
import { Badge, IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const Badges = () => {
  const [count, setCount] = useState(4)
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconButton icon={<Icon name="plus" size={24} />} onPress={() => setCount(prevState => prevState + 1)} />
        <Badge label={count} max={9} />
        <IconButton icon={<Icon name="minus" size={24} />} onPress={() => setCount(prevState => prevState - 1)} />
      </View>
    </ScrollView>
  )
}

export default Badges