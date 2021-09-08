import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { Backdrop } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BackdropExample: React.FC = () => {
  const insets = useSafeAreaInsets();

  const [expanded, setExpanded] = useState(false)
  const [x, setX] = useState(false)

  const header = (
    <View style={{ height: insets.top + 56, paddingTop: insets.top }}>
      <Button title={'toggle'} onPress={() => setExpanded(p => !p)} />
    </View>
  )

  const backLayer = (
    <View style={{ height: x ? 800 : 500 }}>
      <Text>Ji</Text>
      <Button title={'d'} onPress={() => setX(p => !p)} />
    </View>
  )

  return (
    <Backdrop
      header={header}
      headerHeight={insets.top + 56}
      backLayer={backLayer}
      revealed={expanded}
      subheader={<Backdrop.Subheader title={"Components"} />}
    >
      <Text>Hi</Text>
    </Backdrop>
  )
}

export default BackdropExample