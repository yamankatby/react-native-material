import React, { useMemo } from "react";
import { Avatar, Chip, Icon, Stack, useSpacing } from "@react-native-material/core";

const ChipScreen: React.FC = () => {
  const spacing = useSpacing();
  const style = useMemo(() => ({ margin: spacing(2) }), [spacing]);
  return (
    <Stack inline wrap spacing={4} style={{ margin: spacing(2) }}>
      <Chip label="Label" style={style} />
      <Chip label="Chip" style={style} />
      <Chip label="Long Text" style={style} />
      <Chip label="Long Text" color="primary" leading={props => <Avatar label={"y k"} {...props} />} style={style} />
      <Chip label="Long Text" color="lightgreen" style={style} />
      <Chip variant="outlined" label="Label" style={style} />
      <Chip variant="outlined" label="Chip" style={style} />
      <Chip variant="outlined" label="Long Text" style={style} />
      <Chip variant="outlined" label="Long Text" color="primary" style={style} />
      <Chip variant="outlined" label="Long Text" color="darkgreen" style={style} />
      <Chip label="Chip" leading={props => <Avatar label={"y k"} {...props} />} style={style} />
      <Chip label="Label" leading={props => <Icon name="face" {...props} />} style={style} />
      <Chip label="Chip" leading={props => <Icon name="face" {...props} />} style={style} />
      <Chip label="Long Text" leading={props => <Icon name="face" {...props} />} style={style} />
      <Chip label="Long Text" color="primary" leading={props => <Icon name="face" {...props} />} trailing={props => <Icon name="close-circle" {...props} />} style={style} />
      <Chip label="Long Text" color="lightgreen" leading={props => <Icon name="face" {...props} />} trailing={props => <Icon name="close-circle" {...props} />} style={style} />
      <Chip variant="outlined" label="Label" leading={props => <Icon name="face" {...props} />} trailing={props => <Icon name="close-circle" {...props} />} style={style} />
      <Chip variant="outlined" label="Chip" leading={props => <Icon name="face" {...props} />} trailing={props => <Icon name="close-circle" {...props} />} style={style} />
      <Chip variant="outlined" label="Long Text" leading={props => <Icon name="face" {...props} />} trailing={props => <Icon name="close-circle" {...props} />} style={style} />
      <Chip variant="outlined" label="Long Text" color="primary" leading={props => <Icon name="face" {...props} />} disabled style={style} />
      <Chip variant="outlined" label="Long Text" color="darkgreen" leading={props => <Icon name="face" {...props} />} style={style} />
    </Stack>
  );
};

export default ChipScreen;
