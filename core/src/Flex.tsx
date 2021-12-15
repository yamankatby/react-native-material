import React from "react";
import { FlexStyle, View, ViewProps } from "react-native";

export interface FlexProps extends ViewProps {
  fill?: boolean | number;

  inline?: boolean;

  center?: boolean;

  direction?: FlexStyle["flexDirection"];

  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";

  items?: "start" | "end" | "center" | "stretch" | "baseline";

  self?: "auto" | "start" | "end" | "center" | "stretch" | "baseline";

  content?: "start" | "end" | "center" | "stretch" | "between" | "around";

  wrap?: boolean | FlexStyle["flexWrap"];

  basis?: FlexStyle["flexBasis"];

  grow?: FlexStyle["flexGrow"];

  shrink?: FlexStyle["flexShrink"];
}

const Flex: React.FC<FlexProps> = ({
  fill,
  inline,
  center,
  direction,
  justify,
  items,
  self,
  content,
  wrap,
  basis,
  grow,
  shrink,
  style,
  ...rest
}) => (
  <View
    style={[
      {
        flex: typeof fill === "boolean" ? (fill ? 1 : undefined) : fill,
        flexDirection: direction,
        justifyContent: justifyContent(justify),
        alignItems: alignItems(items),
        alignSelf: alignSelf(self),
        alignContent: alignContent(content),
        flexWrap: typeof wrap === "boolean" ? (wrap ? "wrap" : undefined) : wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
      },
      inline && { flexDirection: "row" },
      center && { justifyContent: "center", alignItems: "center" },
      style,
    ]}
    {...rest}
  />
);

export const Spacer: React.FC<ViewProps> = ({ style, ...rest }) => (
  <View style={[{ flex: 1, alignSelf: "stretch" }, style]} {...rest} />
);

export default Flex;

const justifyContent = (justify: FlexProps["justify"]): FlexStyle["justifyContent"] => {
  switch (justify) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    case "evenly":
      return "space-evenly";
    default:
      return justify;
  }
};

const alignItems = (items: FlexProps["items"]): FlexStyle["alignItems"] => {
  switch (items) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    case "stretch":
      return "stretch";
    case "baseline":
      return "baseline";
    default:
      return items;
  }
};

const alignSelf = (self: FlexProps["self"]): FlexStyle["alignSelf"] => {
  switch (self) {
    case "auto":
      return "auto";
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    case "stretch":
      return "stretch";
    case "baseline":
      return "baseline";
    default:
      return self;
  }
};

const alignContent = (content: FlexProps["content"]): FlexStyle["alignContent"] => {
  switch (content) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    case "stretch":
      return "stretch";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    default:
      return content;
  }
};
