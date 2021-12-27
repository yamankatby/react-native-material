import React, { useState } from "react";
import { AppBar, Color, HStack, Icon, IconButton, ListItem, Switch, useTheme } from "@react-native-material/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform, View } from "react-native";

const AppBarScreen = ({ navigation }: any) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [variant, setVariant] = useState<"top" | "bottom">("top");
  const [titleShown, setTitleShown] = useState(true);
  const [subtitleShown, setSubtitleShown] = useState(false);
  const [menuIconShown, setMenuIconShown] = useState(false);
  const [backIconShown, setBackIconShown] = useState(true);
  const [heartIconShown, setHeartIconShown] = useState(true);
  const [searchIconShown, setSearchIconShown] = useState(true);
  const [dotsIconShown, setDotsIconShown] = useState(true);
  const [centerTitle, setCenterTitle] = useState(false);
  const [color, setColor] = useState("primary");
  const [tintColor, setTintColor] = useState<Color | undefined>(undefined);
  const [transparent, setTransparent] = useState(false);
  const [enableColorOnDark, setEnableColorOnDark] = useState(false);

  return (
    <View style={{ flex: 1, paddingTop: variant === "bottom" ? insets.top : 0 }}>
      <AppBar
        variant={variant}
        title={titleShown ? "App Bar" : undefined}
        subtitle={subtitleShown ? "Lorem ipsum dolor." : undefined}
        leading={props =>
          (menuIconShown || backIconShown) && (
            <HStack>
              {menuIconShown && <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />}
              {backIconShown && (
                <IconButton
                  icon={props => <Icon name={Platform.OS === "ios" ? "chevron-left" : "arrow-left"} {...props} />}
                  onPress={navigation.goBack}
                  {...props}
                />
              )}
            </HStack>
          )
        }
        trailing={props => (
          <HStack>
            {heartIconShown && <IconButton icon={props => <Icon name="heart" {...props} />} {...props} />}
            {searchIconShown && <IconButton icon={props => <Icon name="magnify" {...props} />} {...props} />}
            {dotsIconShown && (
              <IconButton
                icon={props => <Icon name={Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical"} {...props} />}
                {...props}
              />
            )}
          </HStack>
        )}
        centerTitle={centerTitle}
        color={color}
        tintColor={tintColor}
        transparent={transparent}
        enableColorOnDark={enableColorOnDark}
        style={
          variant === "top"
            ? { paddingTop: insets.top, zIndex: 4 }
            : {
              position: "absolute",
              bottom: 0,
              start: 0,
              end: 0,
              paddingBottom: insets.bottom,
              zIndex: 8,
            }
        }
      />

      <ListItem
        title="Change variant"
        meta={variant === "top" ? "Top" : "Bottom"}
        onPress={() => {
          setVariant(variant === "top" ? "bottom" : "top");
        }}
      />
      <ListItem
        title="Show title"
        trailing={<Switch value={titleShown} onValueChange={() => setTitleShown(!titleShown)} />}
        onPress={() => {
          setTitleShown(!titleShown);
        }}
      />
      <ListItem
        title="Show subtitle"
        trailing={<Switch value={subtitleShown} onValueChange={() => setSubtitleShown(!subtitleShown)} />}
        onPress={() => {
          setSubtitleShown(!subtitleShown);
        }}
      />
      <ListItem
        title="Leading icon"
        trailing={props => (
          <HStack style={{ marginEnd: 40 }}>
            <IconButton
              icon={props => <Icon name="menu" {...props} />}
              onPress={() => {
                setMenuIconShown(true);
                setBackIconShown(false);
              }}
              {...props}
            />
            <IconButton
              icon={props => <Icon name={Platform.OS === "ios" ? "chevron-left" : "arrow-left"} {...props} />}
              onPress={() => {
                setMenuIconShown(false);
                setBackIconShown(true);
              }}
              {...props}
            />
          </HStack>
        )}
      />
      <ListItem
        title="Trailing icon"
        trailing={props => (
          <HStack style={{ marginEnd: 88 }}>
            <IconButton
              icon={props => <Icon name="heart" {...props} />}
              onPress={() => {
                setHeartIconShown(!heartIconShown);
              }}
              {...props}
            />
            <IconButton
              icon={props => <Icon name="magnify" {...props} />}
              onPress={() => {
                setSearchIconShown(!searchIconShown);
              }}
              {...props}
            />
            <IconButton
              icon={props => <Icon name={Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical"} {...props} />}
              onPress={() => {
                setDotsIconShown(!dotsIconShown);
              }}
              {...props}
            />
          </HStack>
        )}
      />
      <ListItem
        title="Center title"
        trailing={<Switch value={centerTitle} onValueChange={() => setCenterTitle(!centerTitle)} />}
        onPress={() => {
          setCenterTitle(!centerTitle);
        }}
      />
      <ListItem
        title="Color"
        trailing={props => (
          <HStack style={{ marginEnd: 88 }}>
            <IconButton
              icon={props => <Icon name="circle" {...props} color={theme.palette.primary.main} />}
              onPress={() => {
                setColor("primary");
              }}
            />
            <IconButton
              icon={props => <Icon name="circle" {...props} color={theme.palette.secondary.main} />}
              onPress={() => {
                setColor("secondary");
              }}
            />
            <IconButton
              icon={props => (
                <Icon
                  name="swap-horizontal"
                  {...props}
                  color={color === "primary" || color === "secondary" ? props.color : color}
                />
              )}
              onPress={() => {
                const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
                setColor([theme.palette.error.main, "#26a69a", "#ff5722", "#FFFFFF", "#000000"][random(0, 7)]);
              }}
              {...props}
            />
          </HStack>
        )}
      />
      <ListItem
        title="Tint color"
        trailing={props => (
          <HStack style={{ marginEnd: 88 }}>
            <IconButton
              icon={props => <Icon name="circle" {...props} color="lightgray" />}
              onPress={() => {
                setTintColor("white");
              }}
              {...props}
            />
            <IconButton
              icon={props => <Icon name="circle" {...props} color="darkgray" />}
              onPress={() => {
                setTintColor("black");
              }}
              {...props}
            />
            <IconButton
              icon={props => <Icon name="auto-fix" {...props} />}
              onPress={() => {
                setTintColor(undefined);
              }}
              {...props}
            />
          </HStack>
        )}
      />
      <ListItem
        title="Transparent"
        trailing={<Switch value={transparent} onValueChange={() => setTransparent(!transparent)} />}
        onPress={() => {
          setTransparent(!transparent);
        }}
      />
      <ListItem
        title="Enable color on dark"
        trailing={<Switch value={enableColorOnDark} onValueChange={() => setEnableColorOnDark(!enableColorOnDark)} />}
        onPress={() => {
          setEnableColorOnDark(!enableColorOnDark);
        }}
      />
    </View>
  );
};

export default AppBarScreen;
