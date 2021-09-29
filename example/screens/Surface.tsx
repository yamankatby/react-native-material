import React from 'react'
import { ScrollView, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Section } from "./FAB";
import { Surface, Typography, Elevation } from "@react-native-material/core";

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
        <Surface style={{ width: 60, height: 60, elevation: 0, alignItems: 'center', justifyContent: 'center' }} >
          <Typography>0</Typography>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 1, alignItems: 'center', justifyContent: 'center' }} >
          <Typography>1</Typography>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 2, alignItems: 'center', justifyContent: 'center' }} >
          <Typography>2</Typography>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 3, alignItems: 'center', justifyContent: 'center' }} >
          <Typography>3</Typography>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 4, alignItems: 'center', justifyContent: 'center' }} >
          <Typography>4</Typography>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 6, alignItems: 'center', justifyContent: 'center' }} >
          <Typography>6</Typography>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 8, alignItems: 'center', justifyContent: 'center' }} >
          <Typography>8</Typography>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 12, alignItems: 'center', justifyContent: 'center' }} >
          <Typography>12</Typography>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 16, alignItems: 'center', justifyContent: 'center' }} >
          <Typography>16</Typography>
        </Surface>
        {separator}
        <Surface style={{ width: 60, height: 60, elevation: 24, alignItems: 'center', justifyContent: 'center' }} >
          <Typography>24</Typography>
        </Surface>
      </Section>
    </ScrollView>
  )
}

export default SurfaceExample