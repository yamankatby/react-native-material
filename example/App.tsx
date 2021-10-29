import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, View } from "react-native";
import {
  ActivityIndicator,
  Appbar,
  Avatar,
  Backdrop,
  BackdropSubheader,
  Badge,
  Banner,
  Button,
  Divider,
  FAB,
  IconButton,
  ListItem,
  Snackbar,
  Surface,
  Switch,
  Text,
  TextInput,
  ThemeProvider,
  TouchableSurface,
  useTheme,
} from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

function App() {
  const [revealed, setRevealed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const { palette } = useTheme();

  return (
    <View style={{ backgroundColor: palette.background }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{ margin: 24, width: 360 }}>
          <Appbar title="Page title" />

          <Appbar title="Page title" centerTitle color="secondary" style={{ marginTop: 24 }} />

          <Appbar
            title="Page title"
            leading={props => (
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="menu" size={24} color={props.color} />}
              />
            )}
            trailing={props => [
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="heart" size={24} color={props.color} />}
              />,
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="magnify" size={24} color={props.color} />}
              />,
              <View style={{ width: 48, height: 48, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator color="onPrimary" />
              </View>,
            ]}
            style={{ marginTop: 24 }}
          />

          <Appbar
            variant="prominent"
            title="Page title"
            leading={props => (
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="menu" size={24} color={props.color} />}
              />
            )}
            trailing={props => [
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="heart" size={24} color={props.color} />}
              />,
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="magnify" size={24} color={props.color} />}
              />,
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="dots-vertical" size={24} color={props.color} />}
              />,
            ]}
            style={{ marginTop: 24 }}
          />

          <Appbar
            variant="prominent"
            title="Page title"
            leading={props => (
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="menu" size={24} color={props.color} />}
              />
            )}
            trailing={props => [
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="heart" size={24} color={props.color} />}
              />,
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="magnify" size={24} color={props.color} />}
              />,
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="dots-vertical" size={24} color={props.color} />}
              />,
            ]}
            image={
              <Image
                source={{ uri: "https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png" }}
                style={{ position: "absolute", top: 0, start: 0, end: 0, bottom: 0 }}
              />
            }
            style={{ marginTop: 24 }}
          >
            <FAB
              icon={props => <Icon name="plus" {...props} />}
              onPress={() => undefined}
              style={{ position: "absolute", end: 16, bottom: -28 }}
            />
          </Appbar>

          <Appbar
            variant="prominent"
            title="Page title"
            leading={props => (
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="menu" size={24} color={props.color} />}
              />
            )}
            trailing={props => [
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="heart" size={24} color={props.color} />}
              />,
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="magnify" size={24} color={props.color} />}
              />,
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="dots-vertical" size={24} color={props.color} />}
              />,
            ]}
            style={{ marginTop: 24 + 28 }}
          >
            <FAB
              size="mini"
              icon={props => <Icon name="plus" {...props} />}
              onPress={() => undefined}
              style={{ position: "absolute", start: 16, bottom: -20 }}
            />
          </Appbar>

          <Appbar
            position="bottom"
            leading={props => (
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="menu" size={24} color={props.color} />}
              />
            )}
            trailing={props => [
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="magnify" size={24} color={props.color} />}
              />,
              <IconButton
                {...props}
                onPress={() => undefined}
                icon={<Icon name="dots-vertical" size={24} color={props.color} />}
              />,
            ]}
            style={{ marginTop: 24 + 28 }}
          >
            <FAB
              icon={props => <Icon name="plus" {...props} />}
              onPress={() => undefined}
              style={{ position: "absolute", top: -28, alignSelf: "center" }}
            />
          </Appbar>
        </View>
        <View style={{ margin: 24, width: 360 }}>
          <ListItem
            title="Lorem ipsum."
            secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis eaque illo natus veniam! Ullam, voluptate!"
            overline="Overline"
            meta="Meta"
          />
          <ListItem
            title="Lorem ipsum."
            secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis eaque illo natus veniam! Ullam, voluptate!"
            overline="Overline"
            meta="Meta"
            leading={<Icon name="phone" size={24} />}
          />
          <ListItem
            title="Lorem ipsum."
            secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis eaque illo natus veniam! Ullam, voluptate!"
            overline="Overline"
            meta="Meta"
            trailing={<Icon name="link" size={24} />}
          />
          <ListItem
            title="Lorem ipsum."
            secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing."
            leadingMode="avatar"
            leading={<Avatar label="Yaman KATBY" />}
            trailing={<IconButton icon={<Icon name="map" size={24} />} />}
          />
          <ListItem
            title="Lorem ipsum."
            secondaryText="Lorem ipsum dolor sit amet, consectetur adipisicing."
            leadingMode="image"
            leading={
              <Image
                source={{ uri: "https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png" }}
                style={{ position: "absolute", top: 0, start: 0, end: 0, bottom: 0 }}
              />
            }
          />
        </View>
        <View style={{ margin: 24, width: 360 }}>
          <Snackbar message="Lorem ipsum dolor sit." />
          <Snackbar
            style={{ marginTop: 24 }}
            message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum laboriosam magni quasi sit."
          />
          <Snackbar
            style={{ marginTop: 24 }}
            message="Lorem ipsum dolor sit."
            action={<Button variant="text" compact title="Button" />}
          />
          <Snackbar
            style={{ marginTop: 24 }}
            message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta illum laboriosam magni quasi sit."
            action={<Button variant="text" compact title="Button" />}
          />
        </View>
        <View style={{ margin: 24, width: 360 }}>
          <TextInput />
          <TextInput label="Label" style={{ marginTop: 24, width: 360 }} />
          <TextInput label="Label" color="error" style={{ marginTop: 24 }} />
          <TextInput label="Label" leading={<Icon name="link" size={24} />} style={{ marginTop: 24 }} />
          <TextInput
            label="Label"
            trailing={<Icon name="link" size={24} />}
            style={{ marginTop: 24 }}
            secureTextEntry
          />
          <TextInput
            label="Label"
            leading={<IconButton icon={<Icon name="link" size={24} />} />}
            style={{ marginTop: 24 }}
          />
          <TextInput
            label="Label"
            trailing={<IconButton icon={<Icon name="link" size={24} />} />}
            style={{ marginTop: 24 }}
          />
          <TextInput
            label="Label"
            assistiveText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore enim error modi officiis."
            style={{ marginTop: 24 }}
          />
          <TextInput
            label="Label"
            assistiveText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore enim error modi officiis."
            color="warning"
            style={{ marginTop: 24 }}
          />
        </View>
        <View style={{ margin: 24, width: 360 }}>
          <TextInput variant="outlined" />
          <TextInput variant="outlined" label="Label" style={{ marginTop: 24 }} />
          <TextInput variant="outlined" label="Label" color="error" style={{ marginTop: 24 }} />
          <TextInput
            variant="outlined"
            label="Label"
            leading={<Icon name="link" size={24} />}
            style={{ marginTop: 24 }}
          />
          <TextInput
            variant="outlined"
            label="Label"
            trailing={<Icon name="link" size={24} />}
            style={{ marginTop: 24 }}
          />
          <TextInput
            variant="outlined"
            label="Label"
            leading={<IconButton icon={<Icon name="link" size={24} />} />}
            style={{ marginTop: 24 }}
          />
          <TextInput
            variant="outlined"
            label="Label"
            trailing={<IconButton icon={<Icon name="link" size={24} />} />}
            style={{ marginTop: 24 }}
          />
          <TextInput
            variant="outlined"
            label="Label"
            assistiveText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore enim error modi officiis."
            style={{ marginTop: 24 }}
          />
          <TextInput
            variant="outlined"
            label="Label"
            assistiveText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore enim error modi officiis."
            color="warning"
            style={{ marginTop: 24 }}
          />
        </View>
        <View style={{ margin: 24, width: 360 }}>
          <Backdrop
            style={{ height: 200 }}
            revealed={revealed}
            header={
              <Appbar
                title="Page title"
                elevation={0}
                leading={props => (
                  <IconButton
                    color={props.color}
                    onPress={() => setRevealed(prev => !prev)}
                    icon={<Icon name="menu" size={24} color={props.color} />}
                  />
                )}
              />
            }
            backLayer={
              <View style={{ height: 94, padding: 16 }}>
                <Text variant="h4">Hi</Text>
              </View>
            }
          >
            <BackdropSubheader title="Subheader" />
          </Backdrop>

          <Banner
            style={{ marginTop: 24 }}
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, impedit, sint. Numquam, porro, voluptatem."
            buttons={[
              <Button title="Fix it" variant="text" compact />,
              <Button title="Dismiss" variant="text" compact />,
            ]}
          />

          <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 24 }}>
            <ActivityIndicator />
            <ActivityIndicator color="secondary" style={{ marginStart: 24 }} />
            <ActivityIndicator color="error" size="large" style={{ marginStart: 24 }} />
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 24 }}>
            <Badge label={4} />
            <Badge style={{ marginStart: 24 }} label={23} />
            <Badge style={{ marginStart: 24 }} label={100} color="primary" />
            <Badge style={{ marginStart: 24 }} label="error" color="error" />
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 24 }}>
            <Avatar label="Kent Dodds" />
            <Avatar style={{ marginStart: 24 }} label="UN" initials={false} />
            <Avatar style={{ marginStart: 24 }} label="Jed Watson" autoColor />
            <Avatar style={{ marginStart: 24 }} label="Tim Neutkens" autoColor />
            <Avatar style={{ marginStart: 24 }} icon={props => <Icon name="account" {...props} />} />
            <Avatar
              style={{ marginStart: 24 }}
              icon={props => <Icon name="account" {...props} />}
              label="Jed Watson"
              autoColor
            />
            <Avatar
              style={{ marginStart: 24 }}
              icon={props => <Icon name="calendar" {...props} />}
              label="Tim Neutkens"
              autoColor
            />
            <Avatar style={{ marginStart: 24 }} image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            <Avatar style={{ marginStart: 24 }} image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
            <Avatar style={{ marginStart: 24 }} image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
          </View>

          <Divider />

          <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 24 }}>
            <IconButton icon={<Icon name={"function"} size={24} />} />
            <IconButton icon={<Icon name={"link"} size={24} />} color="secondary" style={{ marginStart: 24 }} />
            <IconButton icon={<Icon name={"head"} size={24} />} color="error" style={{ marginStart: 24 }} />
            <IconButton icon={<Icon name={"key"} size={24} />} color="warning" style={{ marginStart: 24 }} />
            <IconButton icon={<Icon name={"timer"} size={24} />} color="info" style={{ marginStart: 24 }} />
            <IconButton icon={<Icon name={"script"} size={24} />} color="success" style={{ marginStart: 24 }} />
          </View>

          <View style={{ flexDirection: "row", marginTop: 24 }}>
            <Switch />
            <Switch value={true} style={{ marginStart: 24 }} />
          </View>
        </View>

        <View style={{ margin: 12, width: 1080, flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
          <Button title="Contained" onPress={() => undefined} style={{ margin: 12 }} />
          <Button variant="outlined" title="Outlined" onPress={() => undefined} style={{ margin: 12 }} />
          <Button variant="text" title="Text" onPress={() => undefined} style={{ margin: 12 }} />
          <Button variant="text" title="Button" color="secondary" onPress={() => undefined} style={{ margin: 12 }} />
          <Button title="Button" color="error" onPress={() => undefined} style={{ margin: 12 }} />
          <Button variant="outlined" title="Button" color="#d4ac2d" onPress={() => undefined} style={{ margin: 12 }} />
          <Button title="Button" color="pink" tintColor="red" onPress={() => undefined} style={{ margin: 12 }} />
          <Button
            variant="outlined"
            title="Delete"
            leading={props => <Icon name="delete" {...props} />}
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Button
            title="Send"
            trailing={props => <Icon name="send" {...props} />}
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Button title="Button" onPress={() => undefined} style={{ margin: 12 }} />
          <Button title="Button" uppercase={false} onPress={() => undefined} style={{ margin: 12 }} />
          <Button title="Button" onPress={() => undefined} style={{ margin: 12 }} />
          <Button title="Disable Elevation" disableElevation onPress={() => undefined} style={{ margin: 12 }} />
          <Switch value={isLoading} onValueChange={val => setIsLoading(val)} style={{ margin: 12 }} />
          <Button
            title="Button"
            leading={props => <Icon name="plus" {...props} />}
            loading={isLoading}
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Button
            title="Button"
            trailing={props => <Icon name="plus" {...props} />}
            loading={isLoading}
            loadingIndicatorPosition="trailing"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Button
            title="Button"
            loading={isLoading}
            loadingIndicatorPosition="overlay"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Button
            title="Button"
            leading={props => <Icon name="plus" {...props} />}
            loading={isLoading}
            loadingIndicator="⏰"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Button
            title="Custom Text"
            loading={isLoading}
            loadingIndicator="Loading..."
            loadingIndicatorPosition="overlay"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Button
            title="Button"
            loading={isLoading}
            loadingIndicatorPosition="overlay"
            loadingIndicator={props => (
              <Text
                style={{
                  backgroundColor: props.color,
                  color: "black",
                  borderRadius: 50,
                  width: 24,
                  height: 24,
                  textAlign: "center",
                }}
              >
                ...
              </Text>
            )}
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Button
            title="Button"
            trailing={props => <Icon name="plus" {...props} />}
            loading={isLoading}
            loadingIndicatorPosition="trailing"
            loadingIndicator="⏰"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
        </View>
        <View style={{ margin: 12, width: 1080, flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
          <FAB icon={props => <Icon name="plus" {...props} />} style={{ margin: 12 }} onPress={() => undefined} />
          <FAB
            icon={props => <Icon name="pencil" {...props} />}
            loading
            color="primary"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="navigation" {...props} />}
            variant="extended"
            label="Navigate"
            color="primary"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="star" {...props} />}
            color="primary"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB variant="extended" label="Button" color="primary" onPress={() => undefined} style={{ margin: 12 }} />
          <FAB
            icon={props => <Icon name="star" {...props} />}
            variant="extended"
            label="Button"
            color="primary"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB icon={props => <Icon name="account" {...props} />} onPress={() => undefined} style={{ margin: 12 }} />
          <FAB
            icon={props => <Icon name="account" {...props} />}
            size="mini"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            variant="extended"
            icon={props => <Icon name="heart" {...props} />}
            label="Button"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            variant="extended"
            icon={props => <Icon name="heart" {...props} />}
            label="Button"
            size="mini"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB icon={props => <Icon name="lock" {...props} />} onPress={() => undefined} style={{ margin: 12 }} />
          <FAB
            icon={props => <Icon name="lock" {...props} />}
            tintColor="red"
            onPress={() => undefined}
            variant="extended"
            label="Button"
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="lock" {...props} />}
            color="onPrimary"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="lock" {...props} />}
            color="#FDCAE4"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="lock" {...props} />}
            color="#FDCAE4"
            tintColor="yellow"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Switch
            tintColor={palette.secondary}
            value={isLoading}
            onValueChange={val => setIsLoading(val)}
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="plus" {...props} />}
            loading={isLoading}
            color="primary"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            variant="extended"
            icon={props => <Icon name="plus" {...props} />}
            label="Button"
            loading={isLoading}
            color="primary"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            variant="extended"
            icon={props => <Icon name="plus" {...props} />}
            label="Button"
            loading={isLoading}
            loadingIndicatorPosition="overlay"
            color="primary"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="plus" {...props} />}
            size="mini"
            loading={isLoading}
            color="primary"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Switch
            tintColor={palette.error}
            value={isLoading}
            onValueChange={val => setIsLoading(val)}
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="plus" {...props} />}
            loading={isLoading}
            color="error"
            loadingIndicator="⏳"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            variant="extended"
            icon={props => <Icon name="plus" {...props} />}
            label="Button"
            loading={isLoading}
            loadingIndicator={props => (
              <Text
                style={{
                  backgroundColor: props.color,
                  color: "white",
                  borderRadius: 50,
                  width: 24,
                  height: 24,
                  textAlign: "center",
                }}
              >
                ...
              </Text>
            )}
            color="onError"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            variant="extended"
            icon={props => <Icon name="plus" {...props} />}
            label="Button"
            loading={isLoading}
            loadingIndicatorPosition="overlay"
            loadingIndicator="Loading..."
            color="onError"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="plus" {...props} />}
            size="mini"
            loading={isLoading}
            loadingIndicator="⏰"
            color="onError"
            onPress={() => undefined}
            style={{ margin: 12 }}
          />
          <Switch value={isVisible} onValueChange={val => setIsVisible(val)} style={{ margin: 12 }} />
          <FAB
            icon={props => <Icon name="plus" {...props} />}
            onPress={() => undefined}
            visible={isVisible}
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="plus" {...props} />}
            onPress={() => undefined}
            size="mini"
            visible={isVisible}
            style={{ margin: 12 }}
          />
          <FAB
            icon={props => <Icon name="navigation" {...props} />}
            variant="extended"
            label="Navigate"
            color="primary"
            onPress={() => undefined}
            visible={isVisible}
            style={{ margin: 12 }}
          />
        </View>
        <View style={{ margin: 24, width: 1080 }}>
          <Text variant="h1" style={{ marginTop: 24, color: palette.onBackground }}>
            h1. Heading
          </Text>
          <Text variant="h2" style={{ marginTop: 24, color: palette.onBackground }}>
            h2. Heading
          </Text>
          <Text variant="h3" style={{ marginTop: 24, color: palette.onBackground }}>
            h3. Heading
          </Text>
          <Text variant="h4" style={{ marginTop: 24, color: palette.onBackground }}>
            h4. Heading
          </Text>
          <Text variant="h5" style={{ marginTop: 24, color: palette.onBackground }}>
            h5. Heading
          </Text>
          <Text variant="h6" style={{ marginTop: 24, color: palette.onBackground }}>
            h6. Heading
          </Text>
          <Text variant="subtitle1" style={{ marginTop: 24, color: palette.onBackground }}>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Text>
          <Text variant="subtitle2" style={{ marginTop: 24, color: palette.onBackground }}>
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          </Text>
          <Text variant="body1" style={{ marginTop: 24, color: palette.onBackground }}>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
          </Text>
          <Text variant="body2" style={{ marginTop: 24, color: palette.onBackground }}>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
            beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?
            Eum quasi quidem quibusdam.
          </Text>
          <Text variant="button" style={{ marginTop: 24, color: palette.onBackground }}>
            BUTTON TEXT
          </Text>
          <Text variant="caption" style={{ marginTop: 24, color: palette.onBackground }}>
            Caption text
          </Text>
          <Text variant="overline" style={{ marginTop: 24, color: palette.onBackground }}>
            Overline text
          </Text>
        </View>
        <View style={{ margin: 12, width: 1080, flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
          <Surface elevation={1} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={2} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={3} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={4} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={5} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={6} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={7} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={8} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={9} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={10} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={11} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={12} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={13} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={14} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={15} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={16} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={17} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={18} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={19} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={20} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={21} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={22} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={23} style={{ width: 80, height: 80, margin: 12 }} />
          <Surface elevation={24} style={{ width: 80, height: 80, margin: 12 }} />

          <TouchableSurface elevation={1} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={2} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={3} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={4} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={5} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={6} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={7} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={8} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={9} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={10} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={11} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={12} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={13} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={14} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={15} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={16} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={17} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={18} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={19} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={20} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={21} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={22} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={23} style={{ width: 80, height: 80, margin: 12 }} />
          <TouchableSurface elevation={24} style={{ width: 80, height: 80, margin: 12 }} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default function AppProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
