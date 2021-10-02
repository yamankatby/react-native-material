import React, { useState } from 'react'
import { Image, View } from "react-native";
import {
  Appbar,
  Avatar,
  Backdrop,
  BackdropSubheader,
  Banner,
  Button,
  FAB,
  IconButton,
  Surface,
  Typography,
} from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const Overview = () => {
  const [revealed, setRevealed] = useState(false)
  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: '#F5F5F5', overflow: 'hidden' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Appbar
          title="Page title"
          leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )}
          trailing={(props) => [
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="heart" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="magnify" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="dots-vertical" size={24} color={props.color} />}
            />,
          ]}
          style={{ width: 360 }}
        />
        <FAB style={{ marginStart: 24 }} icon={(props) => <Icon name="plus" {...props} />} onPress={() => undefined} />
        <FAB icon={(props) => <Icon name="pencil" {...props} />} loading color="primary" onPress={() => undefined}
             style={{ marginStart: 24 }} />
        <FAB
          style={{ marginStart: 24 }}
          icon={(props) => <Icon name="navigation" {...props} />}
          variant="extended"
          label="Navigate"
          color="primary"
          onPress={() => undefined}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
        <Button title="Contained" onPress={() => undefined} />
        <Button variant="outlined" loading title="Outlined" style={{ marginStart: 24 }} onPress={() => undefined} />
        <Button variant="text" title="Text" style={{ marginStart: 24 }} onPress={() => undefined} />
        <Button
          variant="outlined"
          title="Delete"
          leading={props => <Icon name="delete" {...props} />}
          onPress={() => undefined}
          style={{ marginStart: 24 }}
        />
        <Button
          title="Send"
          trailing={props => <Icon name="send" {...props} />}
          onPress={() => undefined}
          style={{ marginStart: 24 }}
        />
        <Button variant="text" compact title="compact" style={{ marginStart: 24 }} onPress={() => undefined} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 24 }}>
        <Avatar label="Tim Neutkens" autoColor />
        <Avatar label="Jed Watson" autoColor style={{ marginStart: 24 }} />
        <Avatar image={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }}
                style={{ marginStart: 24, backgroundColor: 'transparent' }} />
        <Avatar icon={props => <Icon name="account" {...props} />} style={{ marginStart: 24 }} />
        <Banner
          style={{ width: 360, marginStart: 24 }}
          text="There was a problem processing a transaction on your credit card."
          buttons={[
            <Button variant="text" compact title="Fix it" onPress={() => undefined} />,
            <Button variant="text" compact title="Learn More" onPress={() => undefined} />,
          ]}
          illustration={props => <Avatar {...props} color="primary"
                                         icon={props => <Icon name="wifi-off" {...props} />} />}
        />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 24 }}>
        <View style={{ width: 360 }}>
          <Backdrop
            style={{ flex: 1, minHeight: 200 }}
            revealed={revealed}
            header={<Appbar style={{ elevation: 0 }} leading={(props) => (
              <IconButton
                color={props.color}
                onPress={() => setRevealed(p => !p)}
                icon={<Icon name="menu" size={24} color={props.color} />}
              />
            )} title="Page title" />}
            backLayer={
              <View style={{ height: 94, padding: 16 }}>
                <Typography variant="h4" color="onPrimary">Hi</Typography>
              </View>
            }
          >
            <BackdropSubheader title="Subheader" />
          </Backdrop>
        </View>
        <Surface style={{ width: 100, height: 100, elevation: 2, backgroundColor: 'white', marginStart: 24 }} />
        <Surface style={{ width: 100, height: 100, elevation: 4, backgroundColor: 'white', marginStart: 24 }} />
        <Surface style={{ width: 100, height: 100, elevation: 6, backgroundColor: 'white', marginStart: 24 }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 24 }}>
        <View>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography style={{ marginTop: 12 }} variant="h3">h3. Heading</Typography>
          <Typography variant="subtitle1" style={{ maxWidth: 360, marginTop: 12 }}>subtitle1. Lorem ipsum dolor sit
            amet, consectetur
            adipisicing elit.</Typography>
        </View>
        <Appbar
          variant="prominent"
          title="Page title"
          leading={(props) => (
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="menu" size={24} color={props.color} />}
            />
          )}
          trailing={(props) => [
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="heart" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="magnify" size={24} color={props.color} />}
            />,
            <IconButton
              color={props.color}
              onPress={() => undefined}
              icon={<Icon name="dots-vertical" size={24} color={props.color} />}
            />,
          ]}
          style={{ width: 360, marginStart: 24 }}
          image={<Image
            source={{ uri: 'https://i.pinimg.com/originals/42/f2/14/42f214e4d180133b810b1d2b252cf389.png' }}
            style={{ position: 'absolute', top: 0, start: 0, end: 0, bottom: 0 }} />}
        />
      </View>
    </View>
  )
}

export default Overview