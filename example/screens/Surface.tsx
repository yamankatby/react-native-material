import React from 'react'
import { ScrollView, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Section } from "./FAB";
import { Surface, Text } from "@react-native-material/core";

const SurfaceExample = () => {
  const params = useRoute().params as any;
  const separator = <View style={{ width: 16, height: 16 }} />;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={params?.section && { flex: 1 }}>
      <Section name="overview" title="Overview">
        <Surface style={{ width: 120, height: 120, elevation: 2 }} />
        {separator}
        <Surface style={{ width: 120, height: 120, elevation: 4 }} />
        {separator}
        <Surface style={{ width: 120, height: 120, elevation: 6 }} />
      </Section>

      <Section name="elevation" title="Elevation">
        <Surface style={{ width: 60, height: 60, elevation: 0, alignItems: 'center', justifyContent: 'center' }}>
          <Text>0</Text>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>1</Text>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Text>2</Text>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 3, alignItems: 'center', justifyContent: 'center' }}>
          <Text>3</Text>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 4, alignItems: 'center', justifyContent: 'center' }}>
          <Text>4</Text>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 6, alignItems: 'center', justifyContent: 'center' }}>
          <Text>6</Text>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 8, alignItems: 'center', justifyContent: 'center' }}>
          <Text>8</Text>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 12, alignItems: 'center', justifyContent: 'center' }}>
          <Text>12</Text>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 16, alignItems: 'center', justifyContent: 'center' }}>
          <Text>16</Text>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 24, alignItems: 'center', justifyContent: 'center' }}>
          <Text>24</Text>
        </Surface>
      </Section>
    </ScrollView>
  )
}

export default SurfaceExample