import React, { useMemo } from "react";
import { View } from "react-native";
import Flex, { FlexProps } from "./Flex";
import Divider from "./Divider";

export interface StackProps extends FlexProps {
  /**
   * The spacing to leave between items.
   *
   * @default 0
   */
  spacing?: number;

  /**
   * Whether to show dividers between items. By default will use the `<Divider />` component. You can also pass a custom component.
   *
   * @default false
   */
  divider?: boolean | React.ReactNode;
}

const Stack: React.FC<StackProps> = ({ spacing = 0, divider = false, children, ...rest }) => {
  const dividerElement = typeof divider === "boolean" ? divider ? <Divider /> : null : divider;

  const separatorStyle = useMemo(() => {
    if (!spacing) return undefined;

    const dir = rest.inline ? "row" : rest.direction ?? "column";
    const spacingValue = spacing * 4;

    if (!!dividerElement) {
      return dir === "row" || dir === "row-reverse"
        ? { marginHorizontal: spacingValue }
        : { marginVertical: spacingValue };
    }

    return dir === "row" || dir === "row-reverse"
      ? { marginStart: spacingValue }
      : { marginTop: spacingValue };
  }, [dividerElement, spacing, rest.direction, rest.inline]);

  const validElements = React.Children.toArray(children).filter(child =>
    React.isValidElement(child),
  ) as React.ReactElement[];

  const items = validElements.map((child, index) => {
    const key = typeof child.key !== "undefined" ? child.key : index;
    const isLast = index === validElements.length - 1;

    return (
      <React.Fragment key={key}>
        {child}
        {!isLast && <View style={separatorStyle}>{dividerElement}</View>}
      </React.Fragment>
    );
  });

  if (!spacing && !divider) {
    return <Flex {...rest}>{children}</Flex>;
  }

  return <Flex {...rest}>{items}</Flex>;
};

export interface VStackProps extends Omit<StackProps, "inline" | "direction"> {
  /**
   * If `true`, the stack will use `flexDirection: "column-reverse"` instead of `flexDirection: "column"`.
   *
   * @default false
   */
  reversed?: boolean;
}

export const VStack: React.FC<VStackProps> = ({ reversed = false, ...rest }) => (
  <Stack {...rest} direction={reversed ? "column-reverse" : "column"} />
);

export interface HStackProps extends Omit<StackProps, "inline" | "direction"> {
  /**
   * If `true`, the stack will use `flexDirection: "row-reverse"` instead of `flexDirection: "row"`.
   *
   * @default false
   */
  reversed?: boolean;
}

export const HStack: React.FC<HStackProps> = ({ reversed = false, ...rest }) => (
  <Stack {...rest} direction={reversed ? "row-reverse" : "row"} />
);

export default Stack;
