import React, { useState } from "react";
import { Avatar, Chip, HStack, Icon } from "@react-native-material/core";

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

export default ChipScreen;
