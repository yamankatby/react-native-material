import React, { useEffect, useRef, useState } from 'react'
import { Animated, Platform, Pressable, View } from "react-native";
import { Button, IconButton, useTheme } from "@react-native-material/core";
import TextField from "@react-native-material/core/lib/TextInput";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import createAnimatedComponent = Animated.createAnimatedComponent;

const paper = {
  width: 100, height: 100, backgroundColor: 'white', marginStart: 60,
}

const P = createAnimatedComponent(Pressable)

const Overview = () => {
  const [revealed, setRevealed] = useState(false)
  const theme = useTheme()

  const a = useRef(new Animated.Value(0)).current

  const [xxx, setXXX] = useState(false)

  useEffect(() => {
    if (Platform.OS === 'web') {
      const style = document.createElement('style')
      style.textContent = `textarea, select, input, button { outline: none!important; }`
      document.head.append(style)
    }
  }, [])

  useEffect(() => {
    Animated.timing(a, {
      toValue: xxx ? 1 : 0,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }, [xxx])

  return (
    <View style={{
      flex: 1,
      paddingTop: 56,
      paddingHorizontal: 16,
      backgroundColor: theme.palette.background,
      overflow: 'hidden',
    }}>

      <TextField variant="flat"
                 assistiveText="Lorem ipsum dolor sit amet." />
      <View style={{ height: 18 }} />
      <TextField variant="flat" label="Multiline Placeholder"
                 trailing={<IconButton style={{ width: 40, height: 40 }}
                                      icon={<MaterialCommunityIcons name="eye" size={24} />} />}
                 assistiveText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, doloribus." color="red" />
      <View style={{ height: 18 }} />
      <TextField variant="flat" label="Info" color="info" />
      <View style={{ height: 18 }} />
      <TextField variant="flat" label="Warning" color="warning" />
      <View style={{ height: 18 }} />
      <TextField variant="flat" label="Error" color="error" />
      <View style={{ height: 18 }} />
      <TextField variant="outlined" />
      <View style={{ height: 18 }} />
      <TextField variant="outlined" label="Multiline Placeholder"
                 color={"red"}
                 leading={<IconButton style={{ width: 40, height: 40 }}
                                      icon={<MaterialCommunityIcons name="account" size={24} />} />}
                 assistiveText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, doloribus." />
      <View style={{ height: 18 }} />
      <TextField variant="outlined" label="Info" color="info"
                 assistiveText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, doloribus." />
      <View style={{ height: 18 }} />
      <TextField variant="outlined" label="Warning" color="warning" />
      <View style={{ height: 18 }} />
      <TextField variant="outlined" label="Error" color="error" />
      <View style={{ height: 18 }} />
      <Button title={"Google"} />
      {/*<TextInput*/}
      {/*  style={{ borderWidth: 1, borderColor: 'gray', backgroundColor: 'yellow' }}*/}
      {/*  multiline*/}
      {/*/>*/}
      {/*<Ripple style={{ backgroundColor: 'red', width: 120, height: 120, borderRadius: 60 }}>*/}
      {/*  <Ripple style={{ width: 60, height: 60, background: 'blue' }}>*/}
      {/*    <Text>HI</Text>*/}
      {/*  </Ripple>*/}
      {/*</Ripple>*/}
      {/*<View style={{ flexDirection: 'row', alignItems: 'center' }}>*/}
      {/*  <Appbar*/}
      {/*    title="Page title"*/}
      {/*    leading={(props) => (*/}
      {/*      <IconButton*/}
      {/*        color={props.color}*/}
      {/*        onPress={() => undefined}*/}
      {/*        icon={<Icon name="menu" size={24} color={props.color} />}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*    trailing={(props) => [*/}
      {/*      <IconButton*/}
      {/*        key={1}*/}
      {/*        color={props.color}*/}
      {/*        onPress={() => undefined}*/}
      {/*        icon={<Icon name="heart" size={24} color={props.color} />}*/}
      {/*      />,*/}
      {/*      <IconButton*/}
      {/*        key={2}*/}
      {/*        color={props.color}*/}
      {/*        onPress={() => undefined}*/}
      {/*        icon={<Icon name="magnify" size={24} color={props.color} />}*/}
      {/*      />,*/}
      {/*      <IconButton*/}
      {/*        key={3}*/}
      {/*        color={props.color}*/}
      {/*        onPress={() => undefined}*/}
      {/*        icon={<Icon name="dots-vertical" size={24} color={props.color} />}*/}
      {/*      />,*/}
      {/*    ]}*/}
      {/*    style={{ width: 360 }}*/}
      {/*  />*/}
      {/*  <FAB style={{ marginStart: 24 }} icon={(props) => <Icon name="plus" {...props} />}*/}
      {/*       onPress={() => undefined} />*/}
      {/*  <FAB icon={(props) => <Icon name="pencil" {...props} />} loading color="primary" onPress={() => undefined}*/}
      {/*       style={{ marginStart: 24 }} />*/}
      {/*  <FAB*/}
      {/*    style={{ marginStart: 24 }}*/}
      {/*    icon={(props) => <Icon name="navigation" {...props} />}*/}
      {/*    variant="extended"*/}
      {/*    label="Navigate"*/}
      {/*    color="primary"*/}
      {/*    onPress={() => undefined}*/}
      {/*  />*/}
      {/*</View>*/}

      {/*<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>*/}
      {/*  <Button title="Contained" onPress={() => undefined} />*/}
      {/*  <Button variant="outlined" loading title="Outlined" style={{ marginStart: 24 }} onPress={() => undefined} />*/}
      {/*  <Button variant="text" title="Text" style={{ marginStart: 24 }} onPress={() => undefined} />*/}
      {/*  <Button*/}
      {/*    variant="outlined"*/}
      {/*    title="Delete"*/}
      {/*    leading={props => <Icon name="delete" {...props} />}*/}
      {/*    onPress={() => undefined}*/}
      {/*    style={{ marginStart: 24 }}*/}
      {/*  />*/}
      {/*  <Button*/}
      {/*    title="Send"*/}
      {/*    trailing={props => <Icon name="send" {...props} />}*/}
      {/*    onPress={() => undefined}*/}
      {/*    style={{ marginStart: 24 }}*/}
      {/*  />*/}
      {/*  <Button variant="text" compact title="compact" style={{ marginStart: 24 }} onPress={() => undefined} />*/}
      {/*</View>*/}
      {/*<View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 24 }}>*/}
      {/*  <Avatar label="Tim Neutkens" autoColor />*/}
      {/*  <Avatar label="Jed Watson" autoColor style={{ marginStart: 24 }} />*/}
      {/*  <Avatar image={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }}*/}
      {/*          style={{ marginStart: 24, backgroundColor: 'transparent' }} />*/}
      {/*  <Avatar icon={props => <Icon name="account" {...props} />} style={{ marginStart: 24 }} />*/}
      {/*  <Banner*/}
      {/*    style={{ width: 360, marginStart: 24 }}*/}
      {/*    text="There was a problem processing a transaction on your credit card."*/}
      {/*    buttons={[*/}
      {/*      <Button variant="text" compact title="Fix it" onPress={() => undefined} />,*/}
      {/*      <Button variant="text" compact title="Learn More" onPress={() => undefined} />,*/}
      {/*    ]}*/}
      {/*    illustration={props => <Avatar {...props} color="primary"*/}
      {/*                                   icon={props => <Icon name="wifi-off" {...props} />} />}*/}
      {/*  />*/}
      {/*</View>*/}
      {/*<View style={{ flexDirection: 'row', marginTop: 24 }}>*/}
      {/*  <View style={{ width: 360 }}>*/}
      {/*    <Backdrop*/}
      {/*      style={{ flex: 1, minHeight: 200 }}*/}
      {/*      revealed={revealed}*/}
      {/*      header={<Appbar style={{ elevation: 0 }} leading={(props) => (*/}
      {/*        <IconButton*/}
      {/*          color={props.color}*/}
      {/*          onPress={() => setRevealed(p => !p)}*/}
      {/*          icon={<Icon name="menu" size={24} color={props.color} />}*/}
      {/*        />*/}
      {/*      )} title="Page title" />}*/}
      {/*      backLayer={*/}
      {/*        <View style={{ height: 94, padding: 16 }}>*/}
      {/*          <Text variant="h4" color="onPrimary">Hi</Text>*/}
      {/*        </View>*/}
      {/*      }*/}
      {/*    >*/}
      {/*      <BackdropSubheader title="Subheader" />*/}
      {/*    </Backdrop>*/}
      {/*  </View>*/}
      {/*  <Surface style={paper} elevation={0} />*/}
      {/*  <Surface style={paper} elevation={1} />*/}
      {/*  <Surface style={paper} elevation={2} />*/}
      {/*  <Surface style={paper} elevation={3} />*/}
      {/*  <Surface style={paper} elevation={4} />*/}
      {/*  <Surface style={paper} elevation={6} />*/}
      {/*  <Surface style={paper} elevation={8} />*/}
      {/*  <Surface style={paper} elevation={12} />*/}
      {/*  <Surface style={paper} elevation={16} />*/}
      {/*  <Surface style={paper} elevation={24} />*/}
      {/*</View>*/}
      {/*<View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 24 }}>*/}
      {/*  <View style={{ maxWidth: 500 }}>*/}
      {/*    <Text variant="h1">h1. Heading</Text>*/}
      {/*    <Text variant="h2" style={{ marginTop: 12 }}>h2. Heading</Text>*/}
      {/*    <Text variant="h3" style={{ marginTop: 12 }}>h3. Heading</Text>*/}
      {/*    <Text variant="h4" style={{ marginTop: 12 }}>h4. Heading</Text>*/}
      {/*    <Text variant="h5" style={{ marginTop: 12 }}>h5. Heading</Text>*/}
      {/*    <Text variant="h6" style={{ marginTop: 12 }}>h6. Heading</Text>*/}
      {/*    <Text variant="subtitle1" style={{ marginTop: 12 }}>*/}
      {/*      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur*/}
      {/*    </Text>*/}
      {/*    <Text variant="subtitle2" style={{ marginTop: 12 }}>*/}
      {/*      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur*/}
      {/*    </Text>*/}
      {/*    <Text variant="body1" style={{ marginTop: 12 }}>*/}
      {/*      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam*/}
      {/*      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?*/}
      {/*      Eum quasi quidem quibusdam.*/}
      {/*    </Text>*/}
      {/*    <Text variant="body2" style={{ marginTop: 12 }}>*/}
      {/*      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam*/}
      {/*      beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti?*/}
      {/*      Eum quasi quidem quibusdam.*/}
      {/*    </Text>*/}
      {/*    <Text variant="button" style={{ marginTop: 12 }}>Button text</Text>*/}
      {/*    <Text variant="caption" style={{ marginTop: 12 }}>caption text</Text>*/}
      {/*    <Text variant="overline" style={{ marginTop: 12 }}>overline text</Text>*/}
      {/*  </View>*/}
      {/*  <Appbar*/}
      {/*    variant="prominent"*/}
      {/*    title="Page title"*/}
      {/*    leading={(props) => (*/}
      {/*      <IconButton*/}
      {/*        color={props.color}*/}
      {/*        onPress={() => undefined}*/}
      {/*        icon={<Icon name="menu" size={24} color={props.color} />}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*    trailing={(props) => [*/}
      {/*      <IconButton*/}
      {/*        key={1}*/}
      {/*        color={props.color}*/}
      {/*        onPress={() => undefined}*/}
      {/*        icon={<Icon name="heart" size={24} color={props.color} />}*/}
      {/*      />,*/}
      {/*      <IconButton*/}
      {/*        key={2}*/}
      {/*        color={props.color}*/}
      {/*        onPress={() => undefined}*/}
      {/*        icon={<Icon name="magnify" size={24} color={props.color} />}*/}
      {/*      />,*/}
      {/*      <IconButton*/}
      {/*        key={3}*/}
      {/*        color={props.color}*/}
      {/*        onPress={() => undefined}*/}
      {/*        icon={<Icon name="dots-vertical" size={24} color={props.color} />}*/}
      {/*      />,*/}
      {/*    ]}*/}
      {/*    style={{ width: 360, marginStart: 24 }}*/}
      {/*    image={<Image*/}
      {/*      source={{ uri: 'https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png' }}*/}
      {/*      style={{ position: 'absolute', top: 0, start: 0, end: 0, bottom: 0 }} />}*/}
      {/*  />*/}
      {/*</View>*/}
    </View>
  )
}

export default Overview