import React from "react";
import Flex, { FlexProps } from "./Flex";
import { View } from "react-native";

export interface StackProps extends FlexProps {
  /**
   * The spacing between the stack items.
   */
  spacing?: number;

  /**
   * A React.Node to render between each stack item.
   */
  divider?: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({ spacing, divider, children, ...rest }) => {
  const validChildren = getValidChildren(children);

  const clones =
    spacing === undefined && divider === undefined
      ? children
      : validChildren.map((child, index) => {
        const key = typeof child.key !== "undefined" ? child.key : index;
        const isLast = index === validChildren.length - 1;

        const horizontal = rest.direction === "row" || rest.direction === "row-reverse";
        const spacingValue = spacing ? spacing * 4 : undefined;

        return (
          <React.Fragment key={key}>
            {child}
            {!isLast && (
              <View
                style={[
                  { [horizontal ? "marginStart" : "marginTop"]: spacingValue },
                  !!divider && { [horizontal ? "marginEnd" : "marginBottom"]: spacingValue },
                ]}
              >
                {divider}
              </View>
            )}
          </React.Fragment>
        );
      });

  return <Flex {...rest}>{clones}</Flex>;
};

const getValidChildren = (children: React.ReactNode) =>
  React.Children.toArray(children).filter(child => React.isValidElement(child)) as React.ReactElement[];

export type HStackProps = Omit<StackProps, "direction">;

export const HStack: React.FC<HStackProps> = ({ ...rest }) => {
  return <Stack direction="row" {...rest} />;
};

export type VStackProps = Omit<StackProps, "direction">;

export const VStack: React.FC<VStackProps> = ({ ...rest }) => {
  return <Stack direction="column" {...rest} />;
};

export default Stack;
