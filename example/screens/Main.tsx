import React, { useState } from "react";
import { Appbar, Backdrop, Button, FAB, IconButton } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

const Main = () => {
  const insets = useSafeAreaInsets()
  const [revealed, setRevealed] = useState(false)
  return (
    <Backdrop
      revealed={revealed}
      header={
        <Appbar
          title="Material UI"
          color="transparent"
          tintColor="onPrimary"
          leading={props =>
            <IconButton
              icon={<MaterialCommunityIcons name="menu" color={props.color} size={24} />}
              color={props.color}
              onPress={() => setRevealed(prev => !prev)}
            />
          }
          style={{ paddingTop: insets.top }}
        />
      }
      backLayer={
        <View>
          <FAB variant="extended" label="Add" />
        </View>
      }
      frontLayerContainerStyle={{ padding: 16 }}
    >
      <Button
        title={'Button'}
        style={{ alignSelf: 'flex-start', marginTop: 12 }}
        loading
        color="error"
        onPress={() => undefined}
        loadingIndicatorPosition='overlay'
        // leading={props => <MaterialCommunityIcons name={'plus'} {...props} />}
        // trailing={props => <MaterialCommunityIcons name={'plus'} {...props} />}
      />
      <Button
        title={'Button'}
        variant="outlined"
        trailing={props => <MaterialCommunityIcons name={'plus'} {...props} />}
        loading
        color="error"
        loadingIndicatorPosition='overlay'
        onPress={() => undefined}
        style={{ alignSelf: 'flex-start', marginTop: 12 }}
      />
      <Button
        title={'Button'}
        variant="text"
        color="error"
        loading
        onPress={() => undefined}
        loadingIndicator="Loading..."
        loadingIndicatorPosition='overlay'
        style={{ alignSelf: 'flex-start', marginTop: 12 }}
        trailing={props => <MaterialCommunityIcons name={'plus'} {...props} />}
      />
    </Backdrop>
  )
};

export default Main;
