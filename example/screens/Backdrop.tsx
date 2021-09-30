import React, { useState } from 'react'
import { useRoute } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import { Section } from "./FAB";
import { Appbar, Backdrop, useTheme, BackdropSubheader, IconButton, Typography } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const BackdropExample = () => {
  const params = useRoute().params as any;
  const [revealed, setRevealed] = useState(false)
  const theme = useTheme()
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={params?.section && { flex: 1 }}
    >
      <Section name="overview" title="Overview">
        <Backdrop
          style={{ maxWidth: 360, minHeight: 200, ...theme.elevationScheme[24] }}
          revealed={revealed}
          header={<Appbar style={{ elevation: 0 }} leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => setRevealed(p => !p)}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )} title="Page title" />}
          backLayer={
            <View style={{ height: 94 }}>
              <Typography variant="h4" color="onPrimary">Hi</Typography>
            </View>
          }
        >
          <BackdropSubheader title="Subheader" />
        </Backdrop>
      </Section>
    </ScrollView>
  )
}

export default BackdropExample