import React from 'react'
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Section } from "./FAB";
import { Typography } from "@react-native-material/core";

const TypographyExample = () => {
  const params = useRoute().params as any;
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={params?.section && { flex: 1 }}
    >
      <Section name="overview" title="Overview">
        <Typography variant="h2" color="primary">h2. Heading</Typography>
      </Section>
      <Section name="variant" title="Typography Variant">
        <Typography variant="h3" color="primary">h3. Heading</Typography>
      </Section>
      <Section name="color" title="Coloring">
        <Typography color="error">Hi, text!</Typography>
      </Section>
    </ScrollView>
  )
}

export default TypographyExample