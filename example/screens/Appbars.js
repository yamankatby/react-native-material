import React, { useState } from "react";
import { Platform, View } from "react-native";
import { AppBar, Button, HStack, IconButton, ListItem, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import chroma from "chroma-js";
import { useNavigation } from "@react-navigation/native";

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const Appbars = () => {
  const insets = useSafeAreaInsets();
  const { palette } = useTheme();
  const navigation = useNavigation();

  const [title, setTitle] = useState(true);
  const [subtitle, setSubtitle] = useState(false);
  const [variant, setVariant] = useState("top");
  const [color, setColor] = useState("primary");
  const [tintColor, setTintColor] = useState(undefined);
  const [enableColorOnDark, setEnableColorOnDark] = useState(false);
  const [transparent, setTransparent] = useState(false);
  const [preferCenter, setPreferCenter] = useState(Platform.OS === "ios");

  const [menu, setMenu] = useState(false);
  const [arrow, setArrow] = useState(true);
  const [heart, setHeart] = useState(false);
  const [magnify, setMagnify] = useState(true);
  const [dots, setDots] = useState(true);

  return (
    <View style={{ flex: 1, paddingTop: variant === "bottom" ? insets.top : 0 }}>
      <AppBar
        title={title && "App bars"}
        subtitle={subtitle && "Lorem ipsum dolor sit amet."}
        variant={variant}
        color={color}
        tintColor={tintColor}
        enableColorOnDark={enableColorOnDark}
        transparent={transparent}
        centerTitle={preferCenter}
        leading={props => (
          <HStack>
            {menu && <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />}
            {arrow && (
              <IconButton
                icon={props => <Icon name={Platform.OS === "ios" ? "chevron-left" : "arrow-left"} {...props} />}
                {...props}
                onPress={() => navigation.goBack()}
              />
            )}
          </HStack>
        )}
        trailing={props => (
          <HStack>
            {heart && <IconButton icon={props => <Icon name="heart" {...props} />} {...props} />}
            {magnify && <IconButton icon={props => <Icon name="magnify" {...props} />} {...props} />}
            {dots && (
              <IconButton
                icon={props => <Icon name={Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical"} {...props} />}
                {...props}
              />
            )}
          </HStack>
        )}
        style={[
          { zIndex: 4 },
          variant === "top" ? { paddingTop: insets.top } : {
            position: 'absolute',
            bottom: 0,
            start: 0,
            end: 0,
            paddingBottom: insets.bottom
          }
        ]}
      />
      <ListItem
        title="Title"
        onPress={() => setTitle(prevState => !prevState)}
        trailing={props => title && <Icon name="check" {...props} />}
      />
      <ListItem
        title="Subtitle"
        onPress={() => setSubtitle(prevState => !prevState)}
        trailing={props => subtitle && <Icon name="check" {...props} />}
      />
      <ListItem
        title="Variant"
        meta={variant}
        onPress={() => setVariant(prevState => (prevState === "top" ? "bottom" : "top"))}
      />
      <ListItem
        title="Color"
        trailing={props => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              width: 144,
              height: 48,
              marginEnd: 144 - 48
            }}
          >
            <IconButton
              icon={
                <View
                  style={{
                    width: props.size,
                    height: props.size,
                    borderRadius: props.size / 2,
                    backgroundColor: palette.primary
                  }}
                />
              }
              color={palette.primary}
              onPress={() => setColor("primary")}
            />
            <IconButton
              icon={
                <View
                  style={{
                    width: props.size,
                    height: props.size,
                    borderRadius: props.size / 2,
                    backgroundColor: palette.secondary
                  }}
                />
              }
              color={palette.secondary}
              onPress={() => setColor("secondary")}
            />
            <Button
              title="random"
              variant="text"
              color="onSurface"
              compact
              onPress={() =>
                setColor(
                  [
                    palette.success,
                    palette.info,
                    palette.warning,
                    palette.error,
                    "#26a69a",
                    "#ff5722",
                    "#FFFFFF",
                    "#000000"
                  ][random(0, 7)]
                )
              }
            />
          </View>
        )}
      />
      <ListItem
        title="Tint Color"
        trailing={props => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              width: 144,
              height: 48,
              marginEnd: 144 - 48
            }}
          >
            <IconButton
              icon={
                <View
                  style={{
                    width: props.size,
                    height: props.size,
                    borderRadius: props.size / 2,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: chroma(palette.onSurface).alpha(0.3).hex()
                  }}
                />
              }
              onPress={() => setTintColor("#FFFFFF")}
              {...props}
            />
            <IconButton
              icon={
                <View
                  style={{
                    width: props.size,
                    height: props.size,
                    borderRadius: props.size / 2,
                    backgroundColor: "black",
                    borderWidth: 1,
                    borderColor: chroma(palette.onSurface).alpha(0.3).hex()
                  }}
                />
              }
              onPress={() => setTintColor("black")}
              {...props}
            />
            <Button title="auto" variant="text" color="onSurface" compact onPress={() => setTintColor(undefined)} />
          </View>
        )}
      />
      <ListItem
        title="Enable Color On Dark"
        onPress={() => setEnableColorOnDark(prevState => !prevState)}
        trailing={props => enableColorOnDark && <Icon name="check" {...props} />}
      />
      <ListItem
        title="Transparent"
        onPress={() => {
          setTintColor(transparent ? undefined : "onBackground");
          setTransparent(prevState => !prevState);
        }}
        trailing={props => transparent && <Icon name="check" {...props} />}
      />
      <ListItem
        title="Prefer Center"
        onPress={() => setPreferCenter(prevState => !prevState)}
        trailing={props => preferCenter && <Icon name="check" {...props} />}
      />
      <ListItem
        title="Leading"
        trailing={props => (
          <View
            style={{ flexDirection: "row", justifyContent: "flex-end", width: 144, height: 48, marginEnd: 144 - 48 }}
          >
            <IconButton
              icon={props => <Icon name="menu" {...props} />}
              {...props}
              onPress={() => {
                setMenu(prevState => !prevState);
              }}
            />
            <IconButton
              icon={<Icon name={Platform.OS === "ios" ? "chevron-left" : "arrow-left"} {...props} />}
              {...props}
              onPress={() => {
                setArrow(prevState => !prevState);
              }}
            />
          </View>
        )}
      />
      <ListItem
        title="Trailing"
        trailing={props => (
          <View
            style={{ flexDirection: "row", justifyContent: "flex-end", width: 144, height: 48, marginEnd: 144 - 48 }}
          >
            <IconButton
              icon={<Icon name="heart" {...props} />}
              {...props}
              onPress={() => setHeart(prevState => !prevState)}
            />
            <IconButton
              icon={<Icon name="magnify" {...props} />}
              {...props}
              onPress={() => setMagnify(prevState => !prevState)}
            />
            <IconButton
              icon={
                <Icon
                  name={Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical"}
                  {...props}
                  onPress={() => setDots(prevState => !prevState)}
                />
              }
              {...props}
            />
          </View>
        )}
      />
    </View>
  );
};

export default Appbars;
