import React from "react"
import { SafeAreaView } from "react-native";
import { Button, Icon } from "@react-native-material/core";

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

export default ButtonScreen;
