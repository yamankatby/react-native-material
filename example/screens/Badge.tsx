import React from 'react'
import { useRoute } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import { Section } from "./FAB";
import { Badge } from "@react-native-material/core";

const BadgeExample = () => {
  const params = useRoute().params as any;
  const separator = <View style={{ width: 16, height: 16 }} />;
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={params?.section && { flex: 1 }}
    >
      <Section name="overview" title="Overview">
        <Badge label={4} />
        {separator}
        <Badge label={23} />
        {separator}
        <Badge label={100} color="primary" />
        {separator}
        <Badge label="error" color="error" />
      </Section>
    </ScrollView>
  )
}

export default BadgeExample