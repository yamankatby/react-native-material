import React from "react";
import { SafeAreaView, View } from "react-native";
import { Chip } from '@react-native-material/core'

const Overview: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 16 }}>
        <Chip label="Input chip" style={{ marginStart: 16 }} />
        <Chip label="Color" style={{ marginStart: 8 }} />
      </View>
    </SafeAreaView>
  )
};

export default Overview;
