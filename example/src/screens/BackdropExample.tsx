import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { Backdrop } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BackdropExample: React.FC = () => {
  const insets = useSafeAreaInsets();

  const [expanded, setExpanded] = useState(false)

  return (
    <Backdrop
      header={
        <View style={{ height: insets.top + 56, paddingTop: insets.top }}>
          <Button title={'toggle'} onPress={() => setExpanded(p => !p)} />
        </View>
      }
      headerHeight={insets.top + 56}
      backLayer={
        <View>
          <Text>Ji</Text>
        </View>
      }
      expanded={expanded}
      subheader={<Text>Hi subheader</Text>}
    >
      <Text>Hi</Text>
    </Backdrop>
  )
}

export default BackdropExample