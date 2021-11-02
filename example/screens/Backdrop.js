import React, { useState } from "react";
import { Platform, View } from "react-native";
import { Appbar, Backdrop as BackdropComponent, BackdropSubheader, IconButton } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const Backdrop = () => {
  const insets = useSafeAreaInsets();
  const [revealed, setRevealed] = useState(false);
  return (
    <BackdropComponent
      revealed={revealed}
      header={
        <Appbar
          title={revealed ? "Menu" : "Backdrop"}
          centerTitle={false}
          transparent
          leading={props => (
            <IconButton
              icon={<Icon name={revealed ? "close" : "menu"} color={props.color} size={props.size / 2} />}
              onPress={() => setRevealed(prevState => !prevState)}
              {...props}
            />
          )}
          trailing={props => [
            <IconButton
              key="heart"
              icon={<Icon name="heart" color={props.color} size={props.size / 2} />}
              {...props}
            />,
            <IconButton
              key="magnify"
              icon={<Icon name="magnify" color={props.color} size={props.size / 2} />}
              {...props}
            />,
            <IconButton
              key="dots"
              icon={
                <Icon
                  name={Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical"}
                  color={props.color}
                  size={props.size / 2}
                />
              }
              {...props}
            />
          ]}
          color="primary"
          style={{ paddingTop: insets.top }}
        />
      }
      backLayer={<View style={{ height: 180 }}></View>}
    >
      <BackdropSubheader title="Subheader" />
    </BackdropComponent>
  );
};

export default Backdrop;
