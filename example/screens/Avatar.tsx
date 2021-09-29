import React from 'react'
import { Image, ScrollView, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Section } from "./FAB";
import { Avatar } from "@react-native-material/core";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const AvatarExample = () => {
  const params = useRoute().params as any;

  const separator = <View style={{ width: 16, height: 16 }} />;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={params?.section && { flex: 1 }}>
      <Section name="overview" title="Overview">
        <Avatar label="Kent Dodds" autoColor />
        {separator}
        <Avatar image={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }} />
        {separator}
        <Avatar icon={props => <Icon name="account" {...props} />} />
      </Section>

      <Section name="letters" title="Letter avatars">
        <Avatar label="Kent Dodds" />
        {separator}
        <Avatar label="UN" initials={false} />
        {separator}
        <Avatar label="Jed Watson" autoColor />
        {separator}
        <Avatar label="Tim Neutkens" autoColor />
      </Section>

      <Section name="images" title="Images avatars">
        <Avatar image={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }} />
        {separator}
        <Avatar image={<Image source={{ uri: 'https://mui.com/static/images/avatar/2.jpg' }} style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 28,
        }} />} />
      </Section>

      <Section name="icons" title="Icons avatars">
        <Avatar icon={props => <Icon name="account" {...props} />} />
        {separator}
        <Avatar icon={props => <Icon name="account" {...props} />} label="Jed Watson" autoColor />
        {separator}
        <Avatar icon={props => <Icon name="calendar" {...props} />} label="Tim Neutkens" autoColor />
      </Section>

      <Section name="size" title="Sizes">
        <Avatar label="Jed Watson" size={32} />
        {separator}
        <Avatar label="Jed Watson" />
        {separator}
        <Avatar label="Jed Watson" size={72} />
      </Section>

      <Section name="color" title="Coloring">
        <Avatar label="Kent Dodds" />
        {separator}
        <Avatar icon={props => <Icon name="account" {...props} />} color="primary"/>
        {separator}
        <Avatar icon={props => <Icon name="account" {...props} />} color="primary"  tintColor="error"  />
        {separator}
        <Avatar icon={props => <Icon name="account" {...props} />} color="orange" tintColor="white" />
      </Section>

      <Section name="fallbacks" title="Fallbacks">
        <Avatar label="Jed Watson" />
        {separator}
        <Avatar label="Jed Watson" icon={props => <Icon name="account" {...props} />} />
        {separator}
        <Avatar label="Jed Watson" icon={props => <Icon name="account" {...props} />}
                image={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }} />
      </Section>
    </ScrollView>
  )
}

export default AvatarExample