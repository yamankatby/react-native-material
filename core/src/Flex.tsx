import React from "react";
import { FlexStyle, View, ViewProps } from "react-native";

export interface FlexProps extends ViewProps {
  flex?: boolean | FlexStyle["flex"];

  direction?: FlexStyle["flexDirection"];

  justify?: FlexStyle["justifyContent"];

  align?: FlexStyle["alignItems"];

  self?: FlexStyle["alignSelf"];

  content?: FlexStyle["alignContent"];

  wrap?: FlexStyle["flexWrap"];

  basis?: FlexStyle["flexBasis"];

  grow?: FlexStyle["flexGrow"];

  shrink?: FlexStyle["flexShrink"];
}

const Flex: React.FC<FlexProps> = ({
  flex,
  direction,
  justify,
  align,
  self,
  content,
  wrap,
  basis,
  grow,
  shrink,
  style,
  ...props
}) => (
  <View
    style={[
      {
        flex: typeof flex === "boolean" ? (flex ? 1 : undefined) : flex,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        alignSelf: self,
        alignContent: content,
        flexWrap: wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
      },
      style,
    ]}
    {...props}
  />
);

export default Flex;
