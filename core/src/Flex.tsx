import React, { useMemo } from "react";
import { FlexStyle, View, ViewProps } from "react-native";

export interface FlexProps extends ViewProps {
  /**
   * Determines how much the `<View />` will fill on the available space along the main axis.
   * Shorthand for `flex` (If `true` is passed, `flex` will be set to `1`).
   */
  fill?: boolean | number;

  /**
   * Shorthand for `{ flexDirection: "row }"`.
   */
  inline?: boolean;

  /**
   * Shorthand for `{ justifyContent: "center", alignItems: "center" }`.
   */
  center?: boolean;

  /**
   * Controls the direction in which the children of the `<View />` are laid out.
   * Shorthand for `flexDirection`.
   */
  direction?: FlexStyle["flexDirection"];

  /**
   * Describes how to align children within the main axis of the `<View />`.
   * Shorthand for `justifyContent`.
   */
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";

  /**
   * Describes how to align children within the cross axis of the `<View />`.
   * Shorthand for `alignItems`.
   */
  items?: "start" | "end" | "center" | "stretch" | "baseline";

  /**
   * Shorthand for `alignSelf`.
   */
  self?: "auto" | "start" | "end" | "center" | "stretch" | "baseline";

  /**
   * Defines the distribution of lines along the cross-axis. This only has effect when items are wrapped to multiple lines using `flexWrap`.
   * Shorthand for `alignContent`.
   */
  content?: "start" | "end" | "center" | "stretch" | "between" | "around";

  /**
   * Controls what happens when children overflow the size of the `<View />` along the main axis.
   * Shorthand for `flexWrap` (If `true` is passed, `flexWrap` will be set to `"wrap"`).
   */
  wrap?: boolean | FlexStyle["flexWrap"];

  /**
   * Shorthand for `flexBasis`.
   */
  basis?: FlexStyle["flexBasis"];

  /**
   * Shorthand for `flexGrow`.
   */
  grow?: FlexStyle["flexGrow"];

  /**
   * Shorthand for `flexShrink`.
   */
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
}) => {
  const justifyContent = useMemo(() => {
    switch (justify) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      case "between":
        return "space-between";
      case "around":
        return "space-around";
      case "evenly":
        return "space-evenly";
      default:
        return justify;
    }
  }, [justify]);

  const alignItems = useMemo(() => {
    switch (items) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      default:
        return items;
    }
  }, [items]);

  const alignSelf = useMemo(() => {
    switch (self) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      default:
        return self;
    }
  }, [self]);

  const alignContent = useMemo(() => {
    switch (content) {
      case "start":
        return "flex-start";
      case "end":
        return "flex-end";
      case "between":
        return "space-between";
      case "around":
        return "space-around";
      default:
        return content;
    }
  }, [content]);

  return (
    <View
      style={[
        {
          flex: typeof fill === "boolean" ? (fill ? 1 : undefined) : fill,
          flexDirection: direction,
          justifyContent,
          alignItems,
          alignSelf,
          alignContent,
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
};

export default Flex;
