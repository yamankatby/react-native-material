import React, { useMemo } from "react";
import { Avatar, Icon, Stack, useSpacing } from "@react-native-material/core";

const AvatarScreen: React.FC = () => {
  const spacing = useSpacing();
  const style = useMemo(() => ({ margin: spacing(2) }), [spacing]);
  return (
    <Stack inline wrap spacing={4} style={{ margin: spacing(2) }}>
      <Avatar label="Remy Sharp" size={38} style={style} />
      <Avatar label="Travis Howard" style={style} />
      <Avatar label="Cindy Baker" size={72} style={style} />
      <Avatar label="Remy Sharp" size={38} autoColor style={style} />
      <Avatar label="Travis Howard" autoColor style={style} />
      <Avatar label="Cindy Baker" size={72} autoColor style={style} />
      <Avatar
        label="Remy Sharp"
        image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
        size={38}
        style={style}
      />
      <Avatar label="Travis Howard" image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} style={style} />
      <Avatar
        label="Cindy Baker"
        image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }}
        size={72}
        style={style}
      />
      <Avatar icon={props => <Icon name="file" {...props} />} size={38} style={style} />
      <Avatar icon={props => <Icon name="folder" {...props} />} style={style} />
      <Avatar icon={props => <Icon name="music" {...props} />} size={72} style={style} />
    </Stack>
  );
};

export default AvatarScreen;
