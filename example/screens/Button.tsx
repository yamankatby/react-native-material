import React, { useState } from 'react'
import { ScrollView, Switch, Text, View } from "react-native";
import { Button } from '@react-native-material/core'
import { useRoute } from "@react-navigation/native";
import { Section } from "./FAB";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const ButtonExample = () => {
  const params = useRoute().params as any;

  const [isLoading, setIsLoading] = useState(true);

  const separator = <View style={{ width: 16, height: 16 }} />;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={params?.section && { flex: 1 }}>
      <Section name="overview" title="Overview">
        <Button title="Contained" onPress={() => undefined} />
        {separator}
        <Button variant="outlined" title="Outlined" onPress={() => undefined} />
        {separator}
        <Button variant="text" title="Text" onPress={() => undefined} />
      </Section>
      <Section name="color" title="Coloring">
        <Button variant="text" title="Button" color="secondary" onPress={() => undefined} />
        {separator}
        <Button title="Button" color="error" onPress={() => undefined} />
        {separator}
        <Button variant="outlined" title="Button" color="#d4ac2d" onPress={() => undefined} />
        {separator}
        <Button title="Button" color="pink" tintColor="red" onPress={() => undefined} />
      </Section>
      <Section name="icon" title="Icon">
        <Button
          variant="outlined"
          title="Delete"
          leading={props => <Icon name="delete" {...props} />}
          onPress={() => undefined}
        />
        {separator}
        <Button
          title="Send"
          trailing={props => <Icon name="send" {...props} />}
          onPress={() => undefined}
        />
      </Section>
      <Section name="uppercase" title="Uppercase">
        <Button title="Button" onPress={() => undefined} />
        {separator}
        <Button title="Button" uppercase={false} onPress={() => undefined} />
      </Section>
      <Section name="disable-elevation" title="Disable Elevation">
        <Button title="Button" onPress={() => undefined} />
        {separator}
        <Button title="Disable Elevation" disableElevation onPress={() => undefined} />
      </Section>
      <Section name="loading" title="Loading">
        <Switch value={isLoading} onValueChange={(val) => setIsLoading(val)} />
        {separator}
        <Button title="Button" leading={props => <Icon name="plus" {...props} />} loading={isLoading} onPress={() => undefined} />
        {separator}
        <Button title="Button" trailing={props => <Icon name="plus" {...props} />} loading={isLoading} loadingIndicatorPosition="trailing" onPress={() => undefined} />
        {separator}
        <Button title="Button" loading={isLoading} loadingIndicatorPosition="overlay" onPress={() => undefined} />
      </Section>
      <Section name="custom-loading-indicator" title="Custom Loading Indicator">
        <Switch value={isLoading} onValueChange={(val) => setIsLoading(val)} />
        {separator}
        <Button title="Button" leading={props => <Icon name="plus" {...props} />} loading={isLoading} loadingIndicator="⏰" onPress={() => undefined} />
        {separator}
        <Button title="Custom Text" loading={isLoading} loadingIndicator="Loading..." loadingIndicatorPosition="overlay" onPress={() => undefined} />
        {separator}
        <Button title="Button" loading={isLoading} loadingIndicatorPosition="overlay" loadingIndicator={(props) => (
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
        )} onPress={() => undefined} />
        {separator}
        <Button title="Button" trailing={props => <Icon name="plus" {...props} />} loading={isLoading} loadingIndicatorPosition="trailing" loadingIndicator="⏰" onPress={() => undefined} />
      </Section>
    </ScrollView>
  )
}

export default ButtonExample