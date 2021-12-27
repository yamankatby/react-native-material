import React, { useState } from "react"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppBar, Backdrop, BackdropSubheader, HStack, Icon, IconButton } from "@react-native-material/core";
import { Platform, View } from "react-native";

const BackdropScreen = () => {
  const insets = useSafeAreaInsets();
  const [revealed, setRevealed] = useState(false);

  return (
    <Backdrop
      revealed={revealed}
      header={
        <AppBar
          title={revealed ? "Menu" : "Backdrop"}
          tintColor="on-primary"
          leading={props => (
            <IconButton
              icon={props => <Icon name={revealed ? "close" : "menu"} {...props} />}
              onPress={() => setRevealed(!revealed)}
              {...props}
            />
          )}
          trailing={props => (
            <HStack>
              <IconButton icon={props => <Icon name="heart" {...props} />} {...props} />
              <IconButton icon={props => <Icon name="magnify" {...props} />} {...props} />
              <IconButton
                icon={props => <Icon name={Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical"} {...props} />}
                {...props}
              />
            </HStack>
          )}
          transparent
          style={{ paddingTop: insets.top }}
        />
      }
      backLayer={<View style={{ height: 180 }} />}
    >
      <BackdropSubheader title="Subheader" />
    </Backdrop>
  );
}

export default BackdropScreen;
