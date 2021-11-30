import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

export interface StackProps extends ViewProps {
  /**
   * The direction of the stack.
   * - `column` - Vertical stack.
   * - `row` - Horizontal stack.
   * - `row-reverse` - Horizontal stack with reverse order of children.
   * - `column-reverse` - Vertical stack with reverse order of children.
   *
   * @default "column"
   */
  direction?: ViewStyle["flexDirection"];

  /**
   * The alignment of the stack items along the stack's main axis.
   *
   * @default "flex-start"
   */
  justify?: ViewStyle["justifyContent"];

  /**
   * The alignment of the stack items along the stack's cross axis.
   *
   * @default "stretch"
   */
  align?: ViewStyle["alignItems"];

  /**
   * Whether the stack items forced in a single line or can be flowed into multiple lines.
   *
   * @default "nowrap"
   */
  wrap?: ViewStyle["flexWrap"];

  /**
   * The spacing between the stack items.
   *
   * @default 0
   */
  spacing?: number;

  /**
   * A React.Node to render between each stack item.
   *
   * @default 0
   */
  divider?: React.ReactNode;
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter(child => React.isValidElement(child)) as React.ReactElement[];
}

const Stack: React.FC<StackProps> = ({
  direction = "column",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  spacing = 0,
  divider,
  style,
  children,
  ...rest
}) => {
  const validChildren = getValidChildren(children);

  const clones = validChildren.map((child, index) => {
    const key = typeof child.key !== "undefined" ? child.key : index;
    const isLast = index + 1 === validChildren.length;

    const dividerElement = divider && !isLast ? divider : null;

    const spacingElement =
      spacing && !isLast ? <View style={{ [direction === "column" ? "height" : "width"]: spacing * 4 }} /> : null;

    return (
      <React.Fragment key={key}>
        {child}
        {dividerElement && (
          <>
            {spacingElement}
            {dividerElement}
          </>
        )}
        {spacingElement}
      </React.Fragment>
    );
  });

  return (
    <View
      style={[
        {
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
          flexWrap: wrap,
        },
        style,
      ]}
      {...rest}
    >
      {clones}
    </View>
  );
};

export type HStackProps = Omit<StackProps, "direction">;

export const HStack: React.FC<HStackProps> = ({ ...rest }) => {
  return <Stack direction="row" {...rest} />;
};

export type VStackProps = Omit<StackProps, "direction">;

export const VStack: React.FC<VStackProps> = ({ ...rest }) => {
  return <Stack direction="column" {...rest} />;
};

export default Stack;
