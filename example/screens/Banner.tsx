import React from 'react'
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Section } from "./FAB";

const BannerExample = () => {
  const params = useRoute().params as any;
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={params?.section && { flex: 1 }}
    >
      <Section name="overview" title="Overview">

      </Section>
    </ScrollView>
  )
}

export default BannerExample