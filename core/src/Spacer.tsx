import React from "react";
import { View, ViewProps } from "react-native";

export type SpacerProps = ViewProps;

const Spacer: React.FC<SpacerProps> = ({ style, ...rest }) => (
  <View style={[{ flex: 1, alignSelf: "stretch" }, style]} {...rest} />
);

export default Spacer;
