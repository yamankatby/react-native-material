import React, { useMemo } from "react";
import { Button, Icon, Stack, useSpacing } from "@react-native-material/core";

const ButtonScreen: React.FC = () => {
  const spacing = useSpacing();
  const style = useMemo(() => ({ margin: spacing(2) }), [spacing]);
  return (
    <Stack inline wrap spacing={4} style={{ margin: spacing(2) }}>
      <Button title="Text" variant="text" style={style} />
      <Button title="Contained" style={style} />
      <Button title="Outlined" variant="outlined" style={style} />
      <Button title="Text" variant="text" disabled style={style} />
      <Button title="Contained" disabled style={style} />
      <Button title="Outlined" variant="outlined" disabled style={style} />
      <Button title="Disable Elevation" disableElevation style={style} />
      <Button title="Secondary" color="secondary" style={style} />
      <Button title="Error" variant="outlined" color="error" style={style} />
      <Button title="Delete" variant="outlined" leading={props => <Icon name="delete" {...props} />} style={style} />
      <Button title="Send" trailing={props => <Icon name="send" {...props} />} style={style} />
      <Button title="Button" loading style={style} />
      <Button title="Button" loading loadingIndicatorPosition="trailing" style={style} />
      <Button title="Button" loading loadingIndicatorPosition="overlay" style={style} />
      <Button title="Button" variant="outlined" loading style={style} />
      <Button title="Button" variant="outlined" loading loadingIndicatorPosition="trailing" style={style} />
      <Button title="Button" variant="outlined" loading loadingIndicatorPosition="overlay" style={style} />
      <Button title="Button" variant="text" loading style={style} />
      <Button title="Button" variant="text" loading loadingIndicatorPosition="trailing" style={style} />
      <Button title="Button" variant="text" loading loadingIndicatorPosition="overlay" style={style} />
    </Stack>
  );
};

export default ButtonScreen;
