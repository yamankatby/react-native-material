import React from 'react'
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Section } from "./FAB";
import { Avatar, Banner, Button } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const BannerExample = () => {
  const params = useRoute().params as any;
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={params?.section && { flex: 1 }}
    >
      <Section name="overview" title="Overview">
        <Banner
          style={{ maxWidth: 360 }}
          text="There was a problem processing a transaction on your credit card."
          buttons={[
            <Button variant="text" compact title="Fix it" onPress={() => undefined} />,
            <Button variant="text" compact title="Learn More" onPress={() => undefined} />,
          ]}
          illustration={props => <Avatar {...props} color="primary"
                                         icon={props => <Icon name="wifi-off" {...props} />} />}
        />
      </Section>
    </ScrollView>
  )
}

export default BannerExample