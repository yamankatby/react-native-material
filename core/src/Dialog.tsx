import React from "react";
import Surface, { SurfaceProps } from "./Surface";
import Text from "./Text";
import { View } from "react-native";

export interface DialogProps extends SurfaceProps {
  title?: string;

  message?: string;

  actions?: React.ReactElement[];

  fullScreen?: boolean;
}

const Dialog: React.FC<DialogProps> = ({ title, message, actions, style, children, ...rest }) => {
  return (
    <Surface elevation={24} style={[style, { padding: 16 }]} {...rest}>
      {title && <Text variant="h6">{title}</Text>}
      <View>
        {message && <Text variant="subtitle1">{message}</Text>}
        {children}
      </View>
      {actions && <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          marginStart: 'auto',
          marginEnd: -8,
          marginBottom: -8,
        }}>{actions.map(x => x)}</View>}
    </Surface>
  );
};

export default Dialog;
