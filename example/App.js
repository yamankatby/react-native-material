import React, { useState } from "react";
import { FlatList, Image, Platform, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import {
  AppBar,
  Avatar,
  Backdrop,
  BackdropSubheader,
  Badge,
  Banner,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogHeader,
  FAB,
  HStack,
  IconButton,
  ListItem,
  Pressable,
  Snackbar,
  Surface,
  Switch,
  Text,
  TextInput,
  ThemeProvider,
  useTheme,
  VStack
} from "@react-native-material/core";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import chroma from "chroma-js";

const ActivityIndicatorScreen = () => {
  return null;
};

const AppBarScreen = ({ navigation }) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const [variant, setVariant] = useState("top");
  const [titleShown, setTitleShown] = useState(true);
  const [subtitleShown, setSubtitleShown] = useState(false);
  const [menuIconShown, setMenuIconShown] = useState(false);
  const [backIconShown, setBackIconShown] = useState(true);
  const [heartIconShown, setHeartIconShown] = useState(true);
  const [searchIconShown, setSearchIconShown] = useState(true);
  const [dotsIconShown, setDotsIconShown] = useState(true);
  const [centerTitle, setCenterTitle] = useState(false);
  const [color, setColor] = useState("primary");
  const [tintColor, setTintColor] = useState(undefined);
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
              zIndex: 8
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
              icon={props => <Icon name="circle" {...props} color={theme.palette.primary} />}
              onPress={() => {
                setColor("primary");
              }}
            />
            <IconButton
              icon={props => <Icon name="circle" {...props} color={theme.palette.secondary} />}
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
                const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                setColor(
                  [
                    theme.palette.success,
                    theme.palette.info,
                    theme.palette.warning,
                    theme.palette.error,
                    "#26a69a",
                    "#ff5722",
                    "#FFFFFF",
                    "#000000"
                  ][random(0, 7)]
                );
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

const AvatarScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 16 }}>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Avatar label="Remy Sharp" size={38} />
      <Avatar label="Travis Howard" style={{ marginStart: 16 }} />
      <Avatar label="Cindy Baker" size={72} style={{ marginStart: 16 }} />
    </View>

    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
      <Avatar label="Remy Sharp" size={38} autoColor />
      <Avatar label="Travis Howard" autoColor style={{ marginStart: 16 }} />
      <Avatar label="Cindy Baker" size={72} autoColor style={{ marginStart: 16 }} />
    </View>

    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
      <Avatar label="Remy Sharp" image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size={38} />
      <Avatar
        label="Travis Howard"
        image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }}
        style={{ marginStart: 16 }}
      />
      <Avatar
        label="Cindy Baker"
        image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }}
        size={72}
        style={{ marginStart: 16 }}
      />
    </View>

    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
      <Avatar icon={props => <Icon name="file" {...props} />} size={38} />
      <Avatar icon={props => <Icon name="folder" {...props} />} style={{ marginStart: 16 }} />
      <Avatar icon={props => <Icon name="music" {...props} />} size={72} style={{ marginStart: 16 }} />
    </View>
  </ScrollView>
);

const BackdropScreen = () => {
  const insets = useSafeAreaInsets();
  const [revealed, setRevealed] = useState(false);

  return (
    <Backdrop
      revealed={revealed}
      header={
        <AppBar
          title={revealed ? "Menu" : "Backdrop"}
          tintColor="onPrimary"
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
};

const BadgeScreen = () => {
  const { palette } = useTheme();
  const [count, setCount] = useState(4);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          icon={<Icon name="plus" color={palette.onBackground} size={24} />}
          onPress={() => setCount(prevState => prevState + 1)}
          color={palette.onBackground}
        />
        <Badge label={count} max={9} />
        <IconButton
          icon={<Icon name="minus" color={palette.onBackground} size={24} />}
          onPress={() => setCount(prevState => prevState - 1)}
          color={palette.onBackground}
        />
      </View>
    </ScrollView>
  );
};

const BannerScreen = () => {
  const { palette } = useTheme();
  const [illustration, setIllustration] = useState(true);
  return (
    <View>
      <Banner
        text="There was a problem processing a transaction on your credit card."
        illustration={
          illustration &&
          (props => (
            <Avatar
              icon={<Icon name="credit-card-off-outline" size={24} color={palette.onPrimary} />}
              color="primary"
              {...props}
            />
          ))
        }
        buttons={[
          <Button variant="text" title="Fix it" compact onPress={() => undefined} />,
          <Button variant="text" title="Learn more" compact onPress={() => undefined} />
        ]}
      />
      <ListItem
        title="Illustration"
        trailing={illustration && (props => <Icon name="check" {...props} />)}
        onPress={() => setIllustration(prevState => !prevState)}
      />
    </View>
  );
};

const ButtonScreen = () => (
  <SafeAreaView style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", margin: 8 }}>
    <Button title="Text" variant="text" style={{ margin: 8 }} />
    <Button title="Contained" style={{ margin: 8 }} />
    <Button title="Outlined" variant="outlined" style={{ margin: 8 }} />
    <Button title="Text" variant="text" disabled style={{ margin: 8 }} />
    <Button title="Contained" disabled style={{ margin: 8 }} />
    <Button title="Outlined" variant="outlined" disabled style={{ margin: 8 }} />
    <Button title="Disable elevation" disableElevation style={{ margin: 8 }} />
    <Button title="Secondary" color="secondary" style={{ margin: 8 }} />
    <Button title="Success" color="success" style={{ margin: 8 }} />
    <Button title="Error" variant="outlined" color="error" style={{ margin: 8 }} />
    <Button
      title="Delete"
      variant="outlined"
      leading={props => <Icon name="delete" selectable={false} {...props} />}
      style={{ margin: 8 }}
    />
    <Button title="Send" trailing={props => <Icon name="send" selectable={false} {...props} />} style={{ margin: 8 }} />
    <Button title="Button" loading style={{ margin: 8 }} />
    <Button title="Button" loading loadingIndicatorPosition="trailing" style={{ margin: 8 }} />
    <Button title="Button" loading loadingIndicatorPosition="overlay" style={{ margin: 8 }} />
    <Button title="Button" variant="outlined" loading style={{ margin: 8 }} />
    <Button title="Button" variant="outlined" loading loadingIndicatorPosition="trailing" style={{ margin: 8 }} />
    <Button title="Button" variant="outlined" loading loadingIndicatorPosition="overlay" style={{ margin: 8 }} />
    <Button title="Button" variant="text" loading style={{ margin: 8 }} />
    <Button title="Button" variant="text" loading loadingIndicatorPosition="trailing" style={{ margin: 8 }} />
    <Button title="Button" variant="text" loading loadingIndicatorPosition="overlay" style={{ margin: 8 }} />
  </SafeAreaView>
);

const ChipScreen = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <HStack style={{ margin: 8 }} wrap="wrap">
      <Chip label="Label" style={{ margin: 8 }} />
      <Chip label="Chip" style={{ margin: 8 }} />
      <Chip label="Long Text" style={{ margin: 8 }} />
      <Chip
        label="Long Text"
        color="primary"
        leading={props => <Avatar label={"y k"} {...props} />}
        style={{ margin: 8 }}
      />
      <Chip label="Long Text" color="lightgreen" style={{ margin: 8 }} />
      <Chip variant="outlined" label="Label" style={{ margin: 8 }} />
      <Chip variant="outlined" label="Chip" style={{ margin: 8 }} />
      <Chip variant="outlined" label="Long Text" style={{ margin: 8 }} />
      <Chip variant="outlined" label="Long Text" color="primary" style={{ margin: 8 }} />
      <Chip variant="outlined" label="Long Text" color="darkgreen" style={{ margin: 8 }} />
      <Chip label="Chip" leading={props => <Avatar label={"y k"} {...props} />} style={{ margin: 8 }} />
      <Chip label="Label" leading={props => <Icon name="face" {...props} />} style={{ margin: 8 }} />
      <Chip label="Chip" leading={props => <Icon name="face" {...props} />} style={{ margin: 8 }} />
      <Chip label="Long Text" leading={props => <Icon name="face" {...props} />} style={{ margin: 8 }} />
      <Chip
        label="Long Text"
        color="primary"
        loading
        leading={props => <Icon name="face" {...props} />}
        trailing={props => <Icon name="close-circle" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        label="Long Text"
        color="lightgreen"
        leading={props => <Icon name="face" {...props} />}
        trailing={props => <Icon name="close-circle" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        variant="outlined"
        label="Label"
        leading={props => <Icon name="face" {...props} />}
        trailing={props => <Icon name="close-circle" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        variant="outlined"
        label="Chip"
        leading={props => <Icon name="face" {...props} />}
        trailing={props => <Icon name="close-circle" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        variant="outlined"
        label="Long Text"
        leading={props => <Icon name="face" {...props} />}
        trailing={props => <Icon name="close-circle" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        variant="outlined"
        label="Long Text"
        color="primary"
        leading={props => <Icon name="face" {...props} />}
        disabled
        style={{ margin: 8 }}
      />
      <Chip
        variant="outlined"
        label="Long Text"
        color="darkgreen"
        leading={props => <Icon name="face" {...props} />}
        style={{ margin: 8 }}
      />
      <Chip
        label="Label"
        variant={toggle ? "filled" : "outlined"}
        color={"primary"}
        onPress={() => setToggle(!toggle)}
        style={{ margin: 8 }}
      />
    </HStack>
  );
};

const DialogScreen = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <VStack style={{margin: 16}} align="flex-start" spacing={2}>
        <Button title="Open Simple Dialog" onPress={() => setVisible(true)} />
      </VStack>
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Dialog Header" />
        <DialogContent>
          <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus excepturi exercitationem id illo in
            incidunt necessitatibus officiis rem?</Text>
        </DialogContent>
        <DialogActions>
          <Button title="Cancel" compact variant="text" onPress={() => setVisible(false)} />
          <Button title="Ok" compact variant="text" onPress={() => setVisible(false)} />
        </DialogActions>
      </Dialog>
    </>
  )
}

const DividerScreen = () => (
  <View>
    <ListItem title="alpha" />
    <ListItem title="beta" />
    <ListItem title="omega" />
  </View>
);

const FABScreen = () => (
  <SafeAreaView style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", margin: 8 }}>
    <FAB icon={props => <Icon name="plus" selectable={false} {...props} />} style={{ margin: 8 }} />
    <FAB icon={props => <Icon name="plus" selectable={false} {...props} />} size="mini" style={{ margin: 8 }} />
    <FAB
      variant="extended"
      icon={props => <Icon name="plus" selectable={false} {...props} />}
      label="Create"
      style={{ margin: 8 }}
    />
    <FAB variant="extended" label="Create" style={{ margin: 8 }} />
    <FAB
      variant="extended"
      icon={props => <Icon name="plus" selectable={false} {...props} />}
      label="Create"
      size="mini"
      style={{ margin: 8 }}
    />
    <FAB icon={props => <Icon name="plus" selectable={false} {...props} />} loading style={{ margin: 8 }} />
    <FAB
      variant="extended"
      icon={props => <Icon name="plus" selectable={false} {...props} />}
      label="Create"
      loading
      style={{ margin: 8 }}
    />
  </SafeAreaView>
);

const FlexScreen = () => {
  return null;
};

const IconButtonScreen = () => {
  const { palette } = useTheme();
  const [counter, setCounter] = useState(2);
  const [is, setIs] = useState(true);
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <IconButton
        icon={<Icon name={"network-strength-" + ((counter % 4) + 1)} size={24} color={palette.onBackground} />}
        color={palette.onBackground}
        onPress={() => setCounter(prevState => prevState + 1)}
      />
      <IconButton
        icon={<Icon name={is ? "eye" : "eye-off"} size={24} color={palette.error} />}
        color={palette.error}
        onPress={() => setIs(!is)}
      />
    </View>
  );
};

const ListItemScreen = () => {
  const { palette } = useTheme();
  return (
    <ScrollView>
      <ListItem title="Single-line item" />
      <ListItem title="Tow-line item" secondaryText="Lorem ipsum dolor sit amet." />
      <ListItem
        title="Three-line item"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id minus nobis rerum."
      />
      <ListItem title="Tow-line item" secondaryText="Lorem ipsum dolor sit amet." meta="15 mins" overline="Overline" />
      <ListItem
        title="Tow-line item"
        secondaryText="Lorem ipsum dolor sit amet."
        leading={<Icon name="image" size={24} color={chroma.scale([palette.surface, palette.onSurface])(0.87).hex()} />}
      />
      <ListItem
        title="Tow-line item"
        secondaryText="Lorem ipsum dolor sit amet."
        trailing={props => <IconButton icon={<Icon name="drag-horizontal-variant" {...props} />} {...props} />}
      />
      <ListItem
        title="Three-line item"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id minus nobis rerum."
        leadingMode="avatar"
        leading={
          <Avatar
            label="Remy Sharp"
            image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            style={{ backgroundColor: "transparent" }}
          />
        }
      />
      <ListItem
        title="Three-line item"
        secondaryText="Lorem ipsum dolor sit amet."
        leadingMode="image"
        leading={
          <Image
            source={{
              uri: "https://material.io/archive/guidelines/assets/0Bx4BSt6jniD7OVJnOXR3Nlh1YzA/style-imagery-bestpractices-focus3.png"
            }}
            style={{ width: 100, height: 56 }}
          />
        }
      />
      <ListItem
        title="Three-line item"
        secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id minus nobis rerum."
        onPress={() => undefined}
      />
    </ScrollView>
  );
};

const PressableScreen = () => (
  <SafeAreaView>
    <View style={{ flexDirection: "row", margin: 16 }}>
      <View style={{ flex: 1, height: 80, borderRadius: 4, backgroundColor: "lightgray", overflow: "hidden" }}>
        <Pressable style={StyleSheet.absoluteFill} />
      </View>
      <View
        style={{
          flex: 1,
          height: 80,
          marginStart: 16,
          borderRadius: 4,
          backgroundColor: "lightgray",
          overflow: "hidden"
        }}
      >
        <Pressable style={StyleSheet.absoluteFill} />
      </View>
    </View>
  </SafeAreaView>
);

const SnackbarScreen = () => {
  const { mode } = useTheme();
  const insets = useSafeAreaInsets();
  const [longText, setLongText] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ListItem
        title="Long text"
        trailing={longText && (props => <Icon name="check" {...props} />)}
        onPress={() => setLongText(prevState => !prevState)}
      />
      <Snackbar
        message={
          longText
            ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cum debitis, dolor eius esse illum ipsam iste possimus ratione soluta ut veniam?"
            : "Lorem ipsum dolor sit."
        }
        action={
          <Button
            variant="text"
            title="Fix it"
            color={mode === "dark" ? "#6200EE" : "#BB86FC"}
            compact
            onPress={() => undefined}
          />
        }
        style={{ position: "absolute", start: 16, end: 16, bottom: insets.bottom + 16 }}
      />
    </View>
  );
};

const StackScreen = () => {
  return null;
};

const SurfaceScreen = () => {
  const { palette } = useTheme();
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1, paddingEnd: 16 }}>
      {[
        [0, 1],
        [2, 3],
        [4, 6],
        [8, 12],
        [16, 24]
      ].map((data, index) => (
        <View key={index} style={{ flexDirection: "row", marginTop: 16 }}>
          {data.map(elevation => (
            <Surface
              key={elevation}
              category="medium"
              elevation={elevation}
              style={{ flex: 1, marginStart: 16, justifyContent: "center", alignItems: "center", height: 80 }}
              onPress={() => undefined}
            >
              <Text style={{ color: palette.onSurface }}>{elevation}</Text>
            </Surface>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const SwitchScreen = () => {
  return null;
};

const TextScreen = () => {
  const { palette } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: insets.bottom + 16 }}>
      <Text variant="h1" style={{ color: palette.onBackground, marginTop: 16 }}>
        h1. Heading
      </Text>
      <Text variant="h2" style={{ color: palette.onBackground, marginTop: 16 }}>
        h2. Heading
      </Text>
      <Text variant="h3" style={{ color: palette.onBackground, marginTop: 16 }}>
        h3. Heading
      </Text>
      <Text variant="h4" style={{ color: palette.onBackground, marginTop: 16 }}>
        h4. Heading
      </Text>
      <Text variant="h5" style={{ color: palette.onBackground, marginTop: 16 }}>
        h5. Heading
      </Text>
      <Text variant="h6" style={{ color: palette.onBackground, marginTop: 16 }}>
        h6. Heading
      </Text>
      <Text variant="subtitle1" style={{ color: palette.onBackground, marginTop: 16 }}>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Text>
      <Text variant="subtitle2" style={{ color: palette.onBackground, marginTop: 16 }}>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Text>
      <Text variant="body1" style={{ color: palette.onBackground, marginTop: 16 }}>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Text>
      <Text variant="body2" style={{ color: palette.onBackground, marginTop: 16 }}>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Text>
      <Text variant="button" style={{ color: palette.onBackground, marginTop: 16 }}>
        BUTTON TEXT
      </Text>
      <Text variant="caption" style={{ color: palette.onBackground, marginTop: 16 }}>
        caption text
      </Text>
      <Text variant="overline" style={{ color: palette.onBackground, marginTop: 16 }}>
        overline text
      </Text>
    </ScrollView>
  );
};

const TextInputScreen = () => {
  const insets = useSafeAreaInsets();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: insets.bottom + 16 }}
    >
      {["filled", "outlined", "standard"].map(variant => (
        <React.Fragment key={variant}>
          <TextInput variant={variant} style={{ marginTop: 16 }} />
          <TextInput variant={variant} label="Label" style={{ marginTop: 16 }} />
          <TextInput
            variant={variant}
            label="Password"
            trailing={props => (
              <IconButton
                icon={<Icon name={secureTextEntry ? "eye" : "eye-off"} {...props} />}
                onPress={() => setSecureTextEntry(prevState => !prevState)}
                color={props.color}
              />
            )}
            style={{ marginTop: 16 }}
            secureTextEntry={secureTextEntry}
          />
          <TextInput
            variant={variant}
            label="Assistive text"
            helperText="Some important text"
            style={{ marginTop: 16 }}
          />
          <TextInput variant={variant} label="Number" style={{ marginTop: 16 }} />
          <TextInput
            variant={variant}
            label="Success"
            color="success"
            helperText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum expedita placeat ut?"
            leading={props => <Icon name="check-circle" {...props} />}
            trailing={props => <Icon name="check-circle" {...props} />}
            style={{ marginTop: 16 }}
            placeholder="Placeholder"
          />
          <TextInput
            variant={variant}
            label="Info"
            color="info"
            helperText="Lorem ipsum."
            leading={props => <Icon name="information" {...props} />}
            style={{ marginTop: 16 }}
          />
          <TextInput
            variant={variant}
            label="Warning"
            color="warning"
            helperText="Lorem ipsum dolor sit amet, consectetur."
            leading={props => <Icon name="alert-circle" {...props} />}
            style={{ marginTop: 16 }}
          />
          <TextInput
            variant={variant}
            label="Error"
            color="error"
            leading={props => <Icon name="alert-decagram" {...props} />}
            helperText="There is an error!"
            style={{ marginTop: 16 }}
          />
          <TextInput variant={variant} label="Multiline" multiline style={{ marginTop: 16 }} />
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

const screens = [
  { name: "Activity Indicator", component: ActivityIndicatorScreen },
  { name: "App Bar", component: AppBarScreen, options: { headerShown: false } },
  { name: "Avatar", component: AvatarScreen },
  { name: "Backdrop", component: BackdropScreen, options: { headerShown: false } },
  { name: "Badge", component: BadgeScreen },
  { name: "Banner", component: BannerScreen },
  { name: "Button", component: ButtonScreen },
  { name: "Chip", component: ChipScreen },
  { name: "Dialog", component: DialogScreen },
  { name: "Divider", component: DividerScreen },
  { name: "FAB", component: FABScreen },
  { name: "Flex", component: FlexScreen },
  { name: "Icon Button", component: IconButtonScreen },
  { name: "List Item", component: ListItemScreen },
  { name: "Pressable", component: PressableScreen },
  { name: "Snackbar", component: SnackbarScreen },
  { name: "Stack", component: StackScreen },
  { name: "Surface", component: SurfaceScreen },
  { name: "Switch", component: SwitchScreen },
  { name: "Text", component: TextScreen },
  { name: "Text Input", component: TextInputScreen }
];

const MainScreen = ({ navigation }) => (
  <FlatList
    data={screens}
    renderItem={({ item }) => (
      <ListItem key={item.name} title={item.name} onPress={() => navigation.navigate(item.name)} />
    )}
    keyExtractor={item => item.name}
  />
);

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const theme = useTheme();
  const navigationTheme = theme.mode === "dark" ? DarkTheme : DefaultTheme;

  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer
      theme={{ ...navigationTheme, colors: { ...navigationTheme.colors, background: theme.palette.background } }}
    >
      <Stack.Navigator
        screenOptions={{
          header: ({ route, back, navigation }) => (
            <AppBar
              title={route.name}
              leading={
                back &&
                (props => (
                  <IconButton
                    icon={props => <Icon name={Platform.OS === "ios" ? "chevron-left" : "arrow-left"} {...props} />}
                    onPress={navigation.goBack}
                    {...props}
                  />
                ))
              }
              style={{ paddingTop: insets.top, zIndex: 4 }}
            />
          )
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        {screens.map(screen => (
          <Stack.Screen key={screen.name} name={screen.name} component={screen.component} options={screen.options} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
