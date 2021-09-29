import React from 'react'
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Section } from "./FAB";
import { Divider } from "@react-native-material/core";

const DividerExample = () => {
  const params = useRoute().params as any;
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={params?.section && { flex: 1 }}
    >
      <Section name="overview" title="Overview">
        <Divider style={{ flex: 1 }} />
      </Section>

      <Section name="color" title="Coloring">
        <Divider style={{ flex: 1 }} color="pink" />
      </Section>

      <Section name="insets" title="Insets">
        <Divider style={{ flex: 1 }} leadingInset={16} trailingInset={16} />
      </Section>
    </ScrollView>
  )
}

export default DividerExample;